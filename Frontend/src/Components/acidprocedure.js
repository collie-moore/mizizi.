import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

//Acid burn procedure normal carousel
const items = [
  {
    src: '/img/burns/CHEM BURN 1.png',
    altText: 'remove casualty from area of exposure ',
    caption: 'remove casualty from area of exposure  '
  },
  {
    src: '/img/burns/CHEM burn 2.png',
    altText: 'remove all clothing or jewellery around wound ',
    caption: 'remove all clothing or jewellery around wound '
  },
  {
    src: '/img/burns/CHEM burn 3.png',
    altText: 'wash wound using only running water ',
    caption: 'wash wound using only running water '
  },
  {
    src: '/img/burns/CHEM burn 4.png',
    altText: 'apply a clean sterile dressing ',
    caption: 'apply a clean sterile dressing '
  },
  {
    src: '/img/burns/CHEM burn 5.png',
    altText: 'use painkiller ',
    caption: 'use painkiller '
  },
  {
    src: '/img/burns/CHEM burn 6.png',
    altText: 'seek medical assistance ',
    caption: 'seek medical assistance '
  }
];

const AcidProc = (props) => {
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

  //Contents of the slides
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

export default AcidProc;