import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: '/img/cuts/severe bleed 1.png',
    altText: 'wash eye under running water for up to 15 minutes ',
    caption: 'wash eye under running water for up to 15 minutes  '
  },
  {
    src: '/img/cuts/severe bleed 2.png',
    altText: 'apply cold compress ',
    caption: 'apply cold compress '
  },
  {
    src: '/img/cuts/severe bleed 3.png',
    altText: 'seek medical assistance ',
    caption: 'seek medical assistance '
  },
  {
    src: '/img/cuts/severe bleed 4.png',
    altText: 'seek medical assistance ',
    caption: 'seek medical assistance '
  },
  {
    src: '/img/cuts/severe bleed 5.png',
    altText: 'seek medical assistance ',
    caption: 'seek medical assistance '
  },
  {
    src: '/img/cuts/severe bleed 6.png',
    altText: 'seek medical assistance ',
    caption: 'seek medical assistance '
  },
  {
    src: '/img/cuts/severe bleed 7.png',
    altText: 'seek medical assistance ',
    caption: 'seek medical assistance '
  }

];

const Kneeprocedure = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} /><br></br>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Kneeprocedure;