/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect}  from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {API_BASE_URL} from './config';
//import logo from './logo.svg';
import './facts.css';

function Myfacts() {
  const [cards, setItemsInfo] = useState([]);
useEffect(()=>{
  fetch(`${API_BASE_URL}/users`)
  .then( response => response.json())
  .then(json => setItemsInfo(json))
}, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
<Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
{
    cards.map((card) => (
      <div key={card.id} className="boxstyle">
        
        <h4>{card.name}</h4>
        <h6>Your skin works hard. Not only is it the largest organ in the body, but it defends against disease and infection, regulates your temperature and aids in vitamin production.</h6>
      </div>
    ))
  }

</Carousel>
  );
}

export default Myfacts;
