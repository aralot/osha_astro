import styled from 'styled-components';

import { Tokens } from '../../ui-kit';

import confetti1 from './confetti1.svg';
import confetti2 from './confetti2.svg';

export const Container = styled.div`
  position: relative;
  padding: 114px 25px 103px;

  &:before {
    content: '';
    left: 0;
    top: calc(50% - 225px);
    width: 150px;
    height: 250px;
    position: absolute;

    background: url('${confetti1}') no-repeat bottom left;
    background-size: contain;
    pointer-events: none;
    z-index: 3;
  }

  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: calc(50% - 25px);
    width: 170px;
    height: 250px;

    background: url('${confetti2}') no-repeat top right;
    background-size: contain;
    pointer-events: none;
    z-index: 3;
  }

  @media (min-width: 1200px) {
    padding: 140px 60px 120px;

    &:before {
      left: 0;
      top: unset;
      bottom: 60px;
      width: 200px;
      height: 100%;
    }

    &:after {
      right: 0;
      top: 80px;
      width: 260px;
      height: 100%;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 54px;

  @media (min-width: 1200px) {
    grid-template-rows: unset;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
  }
`;

export const BadgeProject = styled.div`
  position: absolute;
  top: 60px;
  left: calc(50% - 130px);
  width: 260px;
  padding: 12px 20px;

  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: -0.02em;
  color: ${Tokens.day.text.primary};

  background: #ffffff;
  border: 1px solid rgba(15, 28, 44, 0.2);
  border-radius: 12px;

  transform: rotate(-5.49deg);

  span {
    color: ${Tokens.day.interactive.primary};
  }

  @media (min-width: 1200px) {
    width: unset;
    top: 90px;
    left: 0;
    padding: 16px;
    font-size: 22px;
    line-height: 29px;
    border-radius: 16px;
  }
`;

export const BadgeCertificate = styled.div`
  position: absolute;

  bottom: 60px;
  left: calc(50% - 130px);
  width: 260px;
  padding: 12px 20px;

  font-weight: 700;
  font-size: 18px;
  line-height: 23px;

  letter-spacing: -0.02em;
  color: ${Tokens.day.interactive.primary};

  background: #ffffff;
  border: 1px solid rgba(15, 28, 44, 0.2);
  border-radius: 16px;

  span {
    color: ${Tokens.day.text.primary};
  }

  transform: rotate(6.03deg);
  z-index: 2;

  @media (min-width: 1200px) {
    width: unset;
    bottom: 80px;
    left: unset;
    right: 0;
    padding: 16px;
    font-size: 22px;
    line-height: 29px;
  }
`;

export const Project = styled.div`
  position: relative;
  padding-bottom: 100%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 24px;
`;

export const ProjectIframe = styled.iframe`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 24px;
  overflow: hidden;
`;
