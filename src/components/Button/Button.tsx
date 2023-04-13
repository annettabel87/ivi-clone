import React, { FC, useState } from 'react';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import styles from './Button.module.scss';

interface IButtonProps {
  border: string;
  bgColor: string;
  children?: React.ReactNode;
  height: string;
  onClick?: () => void;
  radius: string;
  width: string;
  as: 'button' | 'link';
  href?: Url;
  target?: '_blank' | '_self' | '_parent' | '_top';
  hoverBg?: string;
  hoverFontColor?: string;
}

const Button: FC<IButtonProps> = ({
  border,
  bgColor,
  children,
  height,
  onClick,
  radius,
  width,
  as: Component = 'button',
  href,
  target = '_blank',
  hoverBg = bgColor,
  hoverFontColor,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      {Component === 'button' ? (
        <button
          type="button"
          onClick={onClick}
          style={{
            backgroundColor: isHovering ? hoverBg : bgColor,
            border,
            borderRadius: radius,
            height: height ? height : '40px',
            width: width ? width : '196px',
            color: isHovering ? hoverFontColor : '#fff',
          }}
          className={styles.button__btn}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </button>
      ) : (
        <Link
          style={{
            backgroundColor: isHovering ? hoverBg : bgColor,
            border,
            borderRadius: radius,
            height: height ? height : '40px',
            width: width ? width : '196px',
            color: isHovering ? hoverFontColor : '#fff',
          }}
          target={target}
          href={href ? href : '#'}
          className={styles.button__link}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </Link>
      )}
    </>
  );
};

export default Button;
