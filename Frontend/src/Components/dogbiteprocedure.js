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
    src: '/img/bites/dog bite 1.png',
    altText: 'examine the bite ',
    caption: 'examine the bite  '
  },
  {
    src: '/img/bites/dog bite 2.png',
    altText: 'wash wound thoroughly with soap and water ',
    caption: 'wash wound thoroughly with soap and water '
  },
  {
    src: '/img/bites/dog bite 3.png',
    altText: 'apply pressure to stop bleeding incase the wound is bleeding ',
    caption: 'apply pressure to stop bleeding incase the wound is bleeding '
  },
  {
    src: '/img/bites/dog bite 4.png',
    altText: 'apply antibiotic ointment ',
    caption: 'apply antibiotic ointment '
  },
  {
    src: '/img/bites/dog bite 5.png',
    altText: 'bandage bite with clean cloth ',
    caption: 'bandage bite with clean cloth '
  },
  {
    src: '/img/bites/dog bite 6.png',
    altText: 'update tetanus vaccine',
    caption: 'update tetanus vaccine'
  },
  {
    src: '/img/bites/dog bite 7.png',
    altText: 'find out dog’s vaccine status ',
    caption: 'find out dog’s vaccine status '
  },
  {
    src: '/img/bites/dog bite 8.png',
    altText: 'monitor wound for swelling, pus, fever or worsening pain incase of these seek medical assistance  ',
    caption: 'monitor wound for swelling, pus, fever or worsening pain incase of these seek medical assistance  '
  }
];

const DogProcedure = (props) => {
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

export default DogProcedure;