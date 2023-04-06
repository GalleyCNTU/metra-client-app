import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

import classes from '../Advertisement.module.scss';

import useEmblaCarousel from 'embla-carousel-react';

export const Slider = ({ items, model, make }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({});
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      if (emblaThumbsApi.clickAllowed()) emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on('select', onSelect);
    emblaMainApi.on('reInit', onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <section className={classes.sandboxCarousel}>
      <div className={classes.embla}>
        <div className={classes.emblaViewport} ref={emblaMainRef}>
          <div className={classes.emblaContainer}>
            {[...items].map((item, index) => (
              <div className={classes.emblaSlide} key={index}>
                <div className={classes.slider_img}>
                  <Image
                    src={item.url}
                    alt={`${make} ${model}`}
                    layout="fill"
                    className={classes.slider_img_png}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.emblaThumbs}>
          <div className={classes.emblaThumbsViewport} ref={emblaThumbsRef}>
            <div className={classes.emblaThumbsContainer}>
              {[...items].map((item, index) => (
                <div
                  key={index}
                  className={classes.emblaThumbsSlide.concat(
                    index === selectedIndex
                      ? ` ${classes.emblaThumbsSlideSelected}`
                      : ''
                  )}
                >
                  <div
                    onClick={() => onThumbClick(index)}
                    className={classes.emblaThumbsSlideButton}
                    type="button"
                  >
                    <div className={classes.slider_img_nav}>
                      <Image
                        className={classes.emblaThumbsSlideImg}
                        src={item.url}
                        alt={item.id}
                        layout="fill"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
