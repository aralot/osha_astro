import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
} from 'react';

import { Wrapper, Video, Placeholder } from './styles';

import placeholder from './placeholder.webp';

const loadVideo = () => {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
};

const Project: FunctionComponent = ({}) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    let player = null;
    let playerIframe = null;
    let isIntersecting = false;
    let isVideoLoading = false;
    let isPlayerReady = false;

    window.onYouTubeIframeAPIReady = () => {
      player = new YT.Player('player', {
        enablejsapi: 1,
        events: {
          onReady: event => {
            isPlayerReady = true;

            if (isIntersecting) player.playVideo();
          },
        },
        loop: 1,
        origin: window.location.origin,
        playlist: 'yc3HqFUtp4I',
        videoId: 'yc3HqFUtp4I',
      });

      playerIframe = document.getElementById('player');
      playerIframe.style.opacity = 0;
    };

    const observer = new IntersectionObserver(
      entry => {
        isIntersecting = entry[0].isIntersecting;

        console.log(isIntersecting, 'isIntersecting');

        if (isIntersecting && !isVideoLoading) {
          loadVideo();
          isVideoLoading = true;
          return;
        }

        if (!isPlayerReady) return;

        if (isIntersecting) {
          player.playVideo();
          playerIframe.style.transition = 'opacity 2.4s ease';
          playerIframe.style.opacity = 1;
        } else {
          player.stopVideo();
          playerIframe.style.transition = 'unset';
          playerIframe.style.opacity = 0;
        }
      },
      { root: null },
    );
    observer.observe(wrapperRef.current);
  }, [wrapperRef.current]);

  return (
    <Wrapper ref={wrapperRef}>
      <Placeholder src={placeholder} loading="lazy" />
      <Video id="player" />
    </Wrapper>
  );
};

export default Project;
