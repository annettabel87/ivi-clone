import React, { FC, ReactNode, Children, useEffect, useRef, useState } from 'react';
import styles from './Carousel.module.scss';
import { CarouselItem } from './CarouselItem';
import { CarouselArrow } from './CarouselArrow';

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

  const CLONES_COUNT = 2; // Используется только при isInfinite = true
  const TRANSITION_DURATION = 400;
  const isAdaptiveItemWidth = staticItemWidth || widthByContent ? false : true;
  const totalItemsCount = Children.count(children);

  const [renderingItems, setRenderingItems] = useState(children);
  const [listWidth, setListWidth] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(
    containerRef?.current?.offsetWidth || 0
  );
  const [startingItemWidth, setStartingItemWidth] = useState<number>(0);
  const [itemWidth, setItemWidth] = useState<number>(staticItemWidth ? staticItemWidth : 0);
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

  useEffect(() => {
    if (!isMultiple) {
      setViewingItemsCount(1);
    }

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

    const containerWidth = containerRef?.current?.offsetWidth;

    if (containerWidth && isAdaptiveItemWidth) {
      if (isMultiple) {
        setItemWidth(Math.trunc((containerWidth + itemRightPadding) / initialViewingItems));
        setStartingItemWidth(Math.trunc((containerWidth + itemRightPadding) / initialViewingItems));
      }
      if (!isMultiple) {
        setItemWidth(containerWidth);
      }
    }

    resizeHandler();

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [isVisible]);

  useEffect(() => {
    if (!autoPlay) return;
    const timerId = setTimeout(handleRightArrowClick, 10000);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentFirstItemNumber]);

  useEffect(() => {
    if (!isInfinite) {
      if (containerWidth && isMultiple) {
        if (isAdaptiveItemWidth) {
          if (itemWidth < startingItemWidth * 0.977) {
            setViewingItemsCount((prev) => prev - 1);
          }

          if (containerWidth / (startingItemWidth * 0.977) > viewingItemsCount + 1) {
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
  }, [itemWidth, currentFirstItemNumber]);

  useEffect(() => {
    if (isAdaptiveItemWidth || staticItemWidth) {
      setIsEnd(totalItemsCount === currentFirstItemNumber + viewingItemsCount - 1);
    }

    if (showArrows === 'default' || (showArrows === 'onHover' && isHovering)) {
      if (!widthByContent) {
        setIsRightArrowHidden(totalItemsCount === currentFirstItemNumber + viewingItemsCount - 1);
      }

      if (widthByContent) {
        if (listWidth && containerWidth) {
          setIsRightArrowHidden(Math.abs(offset) >= listWidth - containerWidth - itemRightPadding);
        }
      }

      setIsLeftArrowHidden(offset === 0);
    }
  }, [offset]);

  useEffect(() => {
    if (isAdaptiveItemWidth) return;

    if (containerWidth && isEnd) {
      if (staticItemWidth) {
        setOffset(-(totalItemsCount * staticItemWidth - containerWidth - itemRightPadding));
      }
    }
  }, [isEnd]);

  useEffect(() => {
    if (isAdaptiveItemWidth && containerWidth) {
      setItemWidth((containerWidth + itemRightPadding) / viewingItemsCount);
    }
  }, [viewingItemsCount, containerWidth]);

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

  const resizeHandler = () => {
    const listWidth = listRef?.current?.scrollWidth;
    const containerWidth = containerRef?.current?.offsetWidth;

    if (containerWidth) {
      setContainerWidth(containerWidth);
    }

    if (listWidth && widthByContent) {
      setListWidth(listWidth);
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
        if (listWidth && containerWidth)
          setOffset((prev) => {
            const newOffset = Math.abs(prev) + 320;
            const lastOffset = listWidth - containerWidth - itemRightPadding;
            return -(newOffset < lastOffset ? newOffset : lastOffset);
          });
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
          const newOffset = Math.abs(prev) - 320;
          return -(newOffset >= 0 ? newOffset : 0);
        });
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
  return (
    <div className={styles.carousel} style={isInfinite ? { overflow: 'hidden' } : {}}>
      <div
        className={styles.carouselContainer}
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.carouselViewPort} style={!isInfinite ? { overflow: 'hidden' } : {}}>
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
                paddingRight={itemRightPadding}
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
