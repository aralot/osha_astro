import React, { FunctionComponent, useRef } from 'react';
import { useTheme } from 'styled-components';

import { Icon } from '../icon';
import { Icons } from '../icons';
import { Colors } from '../colors';

import { BasePopupMobile } from './BasePopup.mobile';
import { ButtonClose, Content, Header, Title } from './styles.mobile';
import { IPopupProps } from './types';

export const PopupMobile: FunctionComponent<IPopupProps> = ({
  bgColor,
  children,
  headerImage,
  isFullHeight,
  isRtl,
  isTitleClamped = true,
  isVisible,
  onClose,
  title,
  zIndex,
}) => {
  const theme = useTheme();
  const scrollableContainerRef = useRef<HTMLDivElement | null>(null);
  const isClosable = Boolean(onClose);
  const hasTitle = Boolean(title);
  const hasHeaderImage = Boolean(headerImage);
  return (
    <BasePopupMobile
      isVisible={isVisible}
      onClose={onClose}
      bgColor={bgColor}
      isRtl={isRtl}
      zIndex={zIndex}
      isFullHeight={isFullHeight}
    >
      {handleClose => (
        <>
          {(isClosable || hasTitle) && (
            <Header
              $isClosable={Boolean(onClose)}
              $hasHeaderImage={hasHeaderImage}
            >
              {hasHeaderImage && headerImage}

              <Title $isTitleClamped={isTitleClamped}>
                {hasTitle && title}
              </Title>
              {isClosable && (
                <ButtonClose onClick={handleClose}>
                  <Icon
                    content={Icons.large.close}
                    color={Colors.black_pearl}
                  />
                </ButtonClose>
              )}
            </Header>
          )}
          <Content>{children}</Content>
        </>
      )}
    </BasePopupMobile>
  );
};
