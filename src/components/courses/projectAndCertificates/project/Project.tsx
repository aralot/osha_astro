import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
} from 'react';

import { Wrapper, Iframe, Placeholder } from './styles';

import placeholder from './placeholder.webp';

const IFRAME_SRC =
  'https://www.youtube.com/embed/yc3HqFUtp4I?loop=1&playlist=yc3HqFUtp4I&mute=1&autoplay=1&enablejsapi=1';

const Project: FunctionComponent = ({}) => {
  const iframeRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current || !iframeRef.current) return;

    let player = null;

    window.onYouTubeIframeAPIReady = () => {
      player = new YT.Player('player');
    };

    const observer = new IntersectionObserver(
      entry => {
        const isIntersecting = entry[0].isIntersecting;

        // player is initialized - toogle "play" / "pause"
        if (player) {
          player[isIntersecting ? 'playVideo' : 'pauseVideo']();
          return;
        }

        if (isIntersecting) {
          // already loading iframe
          if (iframeRef.current.src) return;

          // load iframe
          iframeRef.current.onload = event => {
            event.target.style.opacity = 1;
          };
          iframeRef.current.src = IFRAME_SRC;
        }
      },
      {
        root: null,
        threshold: 0.75,
      },
    );
    observer.observe(wrapperRef.current);
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <Placeholder src={placeholder} loading="lazy" />
      <Iframe id="player" ref={iframeRef} />
    </Wrapper>
  );
};

export default Project;
