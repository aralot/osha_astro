import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Wrapper, Iframe, Placeholder } from './styles';

import placeholder from './placeholder.webp';

const IFRAME_SRC =
  'https://www.youtube.com/embed/yc3HqFUtp4I?loop=1&playlist=yc3HqFUtp4I&mute=1&autoplay=1';

const Project: FunctionComponent = ({}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const wrapperRef = useRef(null);
  const placeholderRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current || !placeholderRef.current) return;
    const observer = new IntersectionObserver(
      entry => {
        const isIntersecting = entry[0].isIntersecting;
        setIsIntersecting(isIntersecting);
        if (!isIntersecting) {
          placeholderRef.current.style.transition = 'unset';
          placeholderRef.current.style.opacity = 1;
        }
      },
      { root: null },
    );
    observer.observe(wrapperRef.current);
  }, [wrapperRef.current]);

  const onIframeLoad = useCallback(() => {
    if (!placeholderRef.current) return;

    placeholderRef.current.style.transition = 'opacity 2.4s ease';
    placeholderRef.current.style.opacity = 0;
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <Placeholder src={placeholder} loading="lazy" ref={placeholderRef} />
      {isIntersecting && (
        <Iframe id="player" src={IFRAME_SRC} onLoad={onIframeLoad} />
      )}
    </Wrapper>
  );
};

export default Project;
