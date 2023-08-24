import React, { FunctionComponent, useCallback, useRef } from 'react';

import { Wrapper, Iframe, Placeholder } from './styles';

import placeholder from './placeholder.webp';

const IFRAME_SRC =
  'https://www.youtube.com/embed/yc3HqFUtp4I?&amp;loop=1&amp;playlist=yc3HqFUtp4I&amp;mute=1&amp;autoplay=1';

const Project: FunctionComponent = ({}) => {
  const iframeRef = useRef(null);

  const onLoad = useCallback(() => {
    if (iframeRef.current) {
      iframeRef.current.onload = event => {
        event.target.style.opacity = 1;
      };
      iframeRef.current.src = IFRAME_SRC;
    }
  }, [iframeRef]);

  return (
    <Wrapper>
      <Placeholder src={placeholder} loading="lazy" onLoad={onLoad} />
      <Iframe ref={iframeRef} />
    </Wrapper>
  );
};

export default Project;
