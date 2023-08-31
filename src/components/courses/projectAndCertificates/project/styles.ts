import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  padding-bottom: 100%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 24px;
`;

export const Placeholder = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  object-fit: cover;
  border-radius: 24px;
  z-index: 1;
`;

export const Iframe = styled.iframe`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 24px;
  overflow: hidden;
`;
