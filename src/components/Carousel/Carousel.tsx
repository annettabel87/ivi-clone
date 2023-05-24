import React, { FC, ReactNode, Children, useEffect, useRef, useState, TouchEvent } from 'react';
import styles from './Carousel.module.scss';
import { CarouselItem } from './CarouselItem';
import { CarouselArrow } from './CarouselArrow';
import { useWindowSize } from '@/hooks/useWindowSize ';
import { checkIsMobile } from '@/helpers/checkIsMobile';

interface ICarouselProps {
  children: ReactNode[];
  staticItemWidth?: number;
  widthByContent?: boolean;
  itemRightPadding?: number; // Воспринимать как margin-right или gap, расстояние между item, сделал по аналогии с Иви
  arrowSize?: 'small' | 'big';
  isMultiple?: boolean;
  isInfinite?: boolean;
  autoPlay?: boolean;
  initialViewingItems?: number;
  showArrows?: 'default' | 'always' | 'onHover';
  isVisible?: boolean;
  withShadow?: boolean;
}

interface ITouchCoords {
  x: number | null;
  y: number | null;
}

export const Carousel: FC<ICarouselProps> = ({
  children,
  staticItemWidth,
  widthByContent = false,
  itemRightPadding = 24,
  arrowSize = 'big',
  isMultiple = true,
  isInfinite = false, // настроен только для карусели с одним слайдом во всю ширину контейнера (на главной странице)
  autoPlay = false,
  initialViewingItems = 1,
  showArrows = 'default',
  isVisible = true,
  withShadow = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const MAX_CONTAINER_WIDTH = 1216;
  const CLONES_COUNT = 2; // Используется только при isInfinite = true
  const TRANSITION_DURATION = 400;
  const AUTOPLAY_DELAY = 10000;
  const RESIZE_COEFFICIENT = 0.87;
  const STATIC_OFFSET = 320;
  const isAdaptiveItemWidth = staticItemWidth || widthByContent ? false : true;
  const totalItemsCount = Children.count(children);

  const windowSize = useWindowSize();
  const [renderingItems, setRenderingItems] = useState(children);
  const [listWidth, setListWidth] = useState<number>(listRef?.current?.scrollWidth || 0);
  const [containerWidth, setContainerWidth] = useState<number>(
    containerRef?.current?.offsetWidth || 0
  );
  const [startingItemWidth, setStartingItemWidth] = useState<number>(0);
  const [itemWidth, setItemWidth] = useState<number>(staticItemWidth ? staticItemWidth : 0);
  const [rightPadding, setRightPadding] = useState<number>(itemRightPadding);
  const [viewingItemsCount, setViewingItemsCount] = useState<number>(
    initialViewingItems ? initialViewingItems : 1
  );
  const [currentFirstItemNumber, setCurrentFirstItemNumber] = useState<number>(
    isInfinite ? CLONES_COUNT + 1 : 1
  );
  const [offset, setOffset] = useState<number>(0);
  const [transitionDuration, setTransitionDuration] = useState<number>(TRANSITION_DURATION);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [isRightArrowHidden, setIsRightArrowHidden] = useState<boolean>(false);
  const [isLeftArrowHidden, setIsLeftArrowHidden] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [carouselContainerStyle, setCarouselContainerStyle] = useState({});

  const originTouchCoords: ITouchCoords = { x: null, y: null };
  const currentTouchCoords: ITouchCoords = { x: null, y: null };
  let xDiff = 0;
  let yDiff = 0;
  let touchStartTimeStamp = 0;
  let touchDirection: 'right' | 'left' | 'top' | 'down' | null = null;

  useEffect(() => {
    const isMobile = checkIsMobile();
    const containerWidth = containerRef?.current?.offsetWidth;

    if (isInfinite) {
      setCurrentFirstItemNumber(CLONES_COUNT + 1);
      setRenderingItems([
        ...Children.toArray(children).slice(totalItemsCount - CLONES_COUNT, totalItemsCount),
        ...children,
        Children.toArray(children).slice(0, CLONES_COUNT),
      ]);
    }

    if (showArrows === 'onHover') {
      setIsRightArrowHidden(true);
      setIsLeftArrowHidden(true);
    }

    if (containerWidth && isAdaptiveItemWidth) {
      if (isMultiple) {
        const startingItemWidth = Math.trunc(
          (MAX_CONTAINER_WIDTH + rightPadding) / initialViewingItems
        );

        setStartingItemWidth(startingItemWidth);
        setItemWidth(startingItemWidth);
        setViewingItemsCount(Math.trunc((containerWidth + rightPadding) / startingItemWidth));
      }

      if (!isMultiple) {
        setItemWidth(containerWidth);
        setViewingItemsCount(1);
      }
    }

    if (containerWidth && staticItemWidth) {
      setContainerWidth(containerWidth);
    }

    if (containerWidth) {
      setIsMobile(isMobile);
      resizeHandler();
    }
  }, [isVisible]);

  useEffect(() => {
    if (isMobile) {
      setRightPadding(16);
      setArrows();
    }
  }, [isMobile]);

  useEffect(() => {
    const clientWidth = document.documentElement.clientWidth;
    const thresholdClientWidth = 1293;

    if (staticItemWidth) {
      const defaultStaticItemCarouselContainerWidth = 650;

      if (clientWidth && clientWidth > thresholdClientWidth) {
        setCarouselContainerStyle({ width: defaultStaticItemCarouselContainerWidth + 'px' });
        setContainerWidth(defaultStaticItemCarouselContainerWidth);
      }

      if (clientWidth && clientWidth < thresholdClientWidth) {
        const newContainerWidth =
          defaultStaticItemCarouselContainerWidth - (thresholdClientWidth - clientWidth);

        if (newContainerWidth) {
          setCarouselContainerStyle({ width: newContainerWidth + 'px' });
          setContainerWidth(newContainerWidth);
        }
      }
    }

    if (!staticItemWidth) {
      if (clientWidth && clientWidth > thresholdClientWidth) {
        setCarouselContainerStyle({});
        setContainerWidth(MAX_CONTAINER_WIDTH);
      }

      if (clientWidth && clientWidth < thresholdClientWidth) {
        const newContainerWidth = clientWidth - 64;
        setCarouselContainerStyle({ width: newContainerWidth + 'px' });
        setContainerWidth(
          newContainerWidth <= MAX_CONTAINER_WIDTH ? newContainerWidth : MAX_CONTAINER_WIDTH
        );
      }
    }
  }, [windowSize]);

  useEffect(() => {
    if (isAdaptiveItemWidth && containerWidth) {
      if (isMobile) {
        const newItemWidth = (containerWidth + rightPadding) / viewingItemsCount;
        if (isMultiple) {
          if (viewingItemsCount === 1) {
            setItemWidth(startingItemWidth);
          }

          if (viewingItemsCount !== 1) {
            setItemWidth(newItemWidth);
          }
        }

        if (!isMultiple) {
          setItemWidth(newItemWidth);
        }
      }

      if (!isMobile) {
        setItemWidth((containerWidth + rightPadding) / viewingItemsCount);
      }
    }
  }, [viewingItemsCount, rightPadding, containerWidth]);

  useEffect(() => {
    if (!autoPlay) return;
    const timerId = setTimeout(handleRightArrowClick, AUTOPLAY_DELAY);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentFirstItemNumber]);

  useEffect(() => {
    if (!isInfinite) {
      if (containerWidth && isMultiple) {
        if (isAdaptiveItemWidth) {
          if (itemWidth < startingItemWidth * RESIZE_COEFFICIENT) {
            setViewingItemsCount((prev) => {
              const newCount = prev - 1;
              return newCount >= 1 ? newCount : 1;
            });
          }

          if (containerWidth / (startingItemWidth * RESIZE_COEFFICIENT) > viewingItemsCount + 1) {
            setViewingItemsCount((prev) => prev + 1);
          }

          setOffset(-(currentFirstItemNumber * itemWidth - itemWidth));
        }

        if (staticItemWidth) {
          setOffset(-(currentFirstItemNumber * itemWidth - itemWidth));
        }
      }

      if (!isMultiple) {
        setOffset(-((currentFirstItemNumber - 1) * itemWidth));
      }
    }

    if (isInfinite && isAdaptiveItemWidth) {
      setOffset(-((currentFirstItemNumber - 1) * itemWidth));

      if (currentFirstItemNumber <= CLONES_COUNT) {
        changeCloneToPrimary('startToEnd');
        return;
      }

      if (currentFirstItemNumber > totalItemsCount + CLONES_COUNT) {
        changeCloneToPrimary('endToStart');
        return;
      }
    }
  }, [itemWidth, currentFirstItemNumber, containerWidth]);

  useEffect(() => {
    if (isAdaptiveItemWidth || staticItemWidth) {
      setIsEnd(totalItemsCount === currentFirstItemNumber + viewingItemsCount - 1);
    }
    if (!isMobile) {
      setArrows();
    }
  }, [offset]);

  useEffect(() => {
    if (isAdaptiveItemWidth) return;

    if (containerWidth && isEnd) {
      if (staticItemWidth) {
        setOffset(-(totalItemsCount * staticItemWidth - containerWidth - rightPadding));
      }
    }
  }, [isEnd]);

  useEffect(() => {
    resizeHandler();
  }, [isMobile, windowSize, itemWidth]);

  useEffect(() => {
    if (transitionDuration === 0) {
      const timerId = setTimeout(() => {
        setTransitionDuration(TRANSITION_DURATION);
      }, TRANSITION_DURATION);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [transitionDuration]);

  const changeCloneToPrimary = (direction: 'endToStart' | 'startToEnd') => {
    setTimeout(() => {
      setTransitionDuration(0);

      if (direction === 'startToEnd') {
        setCurrentFirstItemNumber(totalItemsCount + CLONES_COUNT);
      }

      if (direction === 'endToStart') {
        setCurrentFirstItemNumber(CLONES_COUNT + 1);
      }
    }, TRANSITION_DURATION);
  };

  const setArrows = () => {
    if (!isMobile) {
      if (showArrows === 'default' || (showArrows === 'onHover' && isHovering)) {
        if (!widthByContent) {
          setIsRightArrowHidden(totalItemsCount === currentFirstItemNumber + viewingItemsCount - 1);
        }

        if (widthByContent) {
          if (listWidth && containerWidth) {
            setIsRightArrowHidden(Math.abs(offset) >= listWidth - containerWidth - rightPadding);
          }
        }
        setIsLeftArrowHidden(offset === 0);
      }

      if (showArrows === 'onHover' && !isHovering) {
        setIsRightArrowHidden(true);
        setIsLeftArrowHidden(true);
      }
    }

    if (isMobile) {
      setIsRightArrowHidden(true);
      setIsLeftArrowHidden(true);
    }
  };

  const resizeHandler = () => {
    let newListWidth;

    if (widthByContent) {
      newListWidth = listRef?.current?.scrollWidth;
    }

    if (!widthByContent) {
      newListWidth = totalItemsCount * itemWidth;
    }

    if (newListWidth) {
      setListWidth(newListWidth - rightPadding);
    }
  };

  const handleRightArrowClick = () => {
    if (isMultiple) {
      if (!widthByContent) {
        setCurrentFirstItemNumber((prev) => {
          const newFirstItemNumber = prev + viewingItemsCount - 1;
          return Math.min(newFirstItemNumber, totalItemsCount - viewingItemsCount + 1);
        });
      }

      if (widthByContent) {
        if (listWidth && containerWidth) {
          setOffset((prev) => {
            const newOffset = Math.abs(prev) + STATIC_OFFSET;
            const lastOffset = listWidth - containerWidth;
            return -(newOffset < lastOffset ? newOffset : lastOffset);
          });
        }

        if (widthByContent) {
          resizeHandler();
        }
      }
    }

    if (!isMultiple) {
      setCurrentFirstItemNumber((prev) => prev + 1);
    }
  };

  const handleLeftArrowClick = () => {
    if (isMultiple) {
      if (!widthByContent) {
        setCurrentFirstItemNumber((prev) => {
          const newFirstItemNumber = prev - viewingItemsCount + 1;
          return Math.max(newFirstItemNumber, 1);
        });
      }

      if (widthByContent) {
        setOffset((prev) => {
          const newOffset = Math.abs(prev) - STATIC_OFFSET;
          return -(newOffset >= 0 ? newOffset : 0);
        });
      }
      if (widthByContent) {
        resizeHandler();
      }
    }

    if (!isMultiple) {
      setCurrentFirstItemNumber((prev) => prev - 1);
    }
  };

  const handleMouseEnter = () => {
    if (showArrows === 'onHover') {
      setIsHovering(true);
      setIsRightArrowHidden(totalItemsCount === currentFirstItemNumber + viewingItemsCount - 1);
      setIsLeftArrowHidden(offset === 0);
    }
  };

  const handleMouseLeave = () => {
    if (showArrows === 'onHover') {
      setIsHovering(false);
      setIsRightArrowHidden(true);
      setIsLeftArrowHidden(true);
    }
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    touchStartTimeStamp = event.timeStamp;
    originTouchCoords.x = touch.clientX;
    originTouchCoords.y = touch.clientY;
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (originTouchCoords.x === null || originTouchCoords.y === null) return;

    if (listRef && listRef.current) {
      const touch = event.touches[0];

      currentTouchCoords.x = touch.clientX;
      currentTouchCoords.y = touch.clientY;

      xDiff = currentTouchCoords.x - originTouchCoords.x;
      yDiff = currentTouchCoords.y - originTouchCoords.y;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) touchDirection = 'right';
        if (xDiff < 0) touchDirection = 'left';
      }

      if (Math.abs(xDiff) < Math.abs(yDiff)) {
        if (yDiff > 0) touchDirection = 'down';
        if (yDiff < 0) touchDirection = 'top';
      }

      if (touchDirection === 'right' || touchDirection === 'left') {
        let newOffset = offset + xDiff;

        if (Math.abs(newOffset) > listWidth - containerWidth) {
          newOffset = -(listWidth - containerWidth);
        }

        if (newOffset > 0) {
          newOffset = 0;
        }

        listRef.current.style.transform = `translateX(${newOffset}px)`;
        listRef.current.style.transition = `all ease ${0}ms`;
      }
    }
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (listRef && listRef.current) {
      if (touchDirection === 'right' || touchDirection === 'left') {
        if (isMultiple) {
          const touchingDuration = event.timeStamp - touchStartTimeStamp;
          const thresholdDuration = 250;
          const offsetCoefficient = 1 / (touchingDuration / (thresholdDuration * 2));
          let calculatedOffset = xDiff;

          if (touchingDuration < thresholdDuration) {
            calculatedOffset = xDiff * offsetCoefficient;
          }

          let newOffset = offset + calculatedOffset;

          if (newOffset > 0) {
            newOffset = 0;
          }

          if (newOffset < 0 && viewingItemsCount > 1) {
            newOffset = Math.round(newOffset / itemWidth) * itemWidth;
          }

          if (Math.abs(newOffset) > listWidth - containerWidth) {
            newOffset = -(listWidth - containerWidth);
          }

          listRef.current.style.transition = `all ease ${TRANSITION_DURATION}ms`;
          listRef.current.style.transform = `translateX(${newOffset}px)`;

          setTransitionDuration(TRANSITION_DURATION);
          setOffset(newOffset);
        }

        if (!isMultiple) {
          listRef.current.style.transition = `all ease ${TRANSITION_DURATION}ms`;

          if (touchDirection === 'right') handleLeftArrowClick();
          if (touchDirection === 'left') handleRightArrowClick();
        }

        if (widthByContent) {
          resizeHandler();
        }
      }
    }
  };
  return (
    <div className={styles.carousel} style={isInfinite || isMobile ? { overflow: 'hidden' } : {}}>
      <div
        className={styles.carouselContainer}
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={carouselContainerStyle}
      >
        <div
          className={styles.carouselViewPort}
          style={isMultiple && !isMobile ? { overflow: 'hidden' } : {}}
        >
          <div
            className={styles.carouselList}
            ref={listRef}
            style={{
              transform: `translateX(${offset}px)`,
              transition: `all ease ${transitionDuration}ms`,
            }}
          >
            {Children.map(renderingItems, (child, index) => (
              <CarouselItem
                width={staticItemWidth ? staticItemWidth : itemWidth}
                widthByContent={widthByContent}
                paddingRight={rightPadding}
                isActive={isInfinite ? index - currentFirstItemNumber + 1 === 0 : true}
              >
                {React.Children.only(child)}
              </CarouselItem>
            ))}
          </div>
        </div>
        <CarouselArrow
          arrowSize={arrowSize}
          direction={'left'}
          handleClick={handleLeftArrowClick}
          isHidden={isLeftArrowHidden}
        />
        <CarouselArrow
          arrowSize={arrowSize}
          direction={'right'}
          handleClick={handleRightArrowClick}
          isHidden={isRightArrowHidden}
        />
        {withShadow && (
          <>
            {isEnd && <div className={styles.leftShadow}></div>}
            {!isEnd && <div className={styles.rightShadow}></div>}
          </>
        )}
      </div>
    </div>
  );
};
