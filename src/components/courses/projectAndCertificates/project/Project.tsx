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

    window.onYouTubeIframeAPIReady = () => {
      player = new YT.Player('player', {
        autoplay: 1,
        controls: 0,
        events: {
          onReady: event => {
            playerIframe = document.getElementById('player');
            playerIframe.style.opacity = 0;

            if (isIntersecting) event.target.playVideo();
          },
        },
        loop: 1,
        origin: window.location.origin,
        rel: 0,
        videoId: 'yc3HqFUtp4I',
      });
    };

    const observer = new IntersectionObserver(
      entry => {
        isIntersecting = entry[0].isIntersecting;

        if (isIntersecting && !isVideoLoading) {
          loadVideo();
          isVideoLoading = true;
          return;
        }

        if (!playerIframe) return;

        clearTimeout(showVideoTimeout);

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
