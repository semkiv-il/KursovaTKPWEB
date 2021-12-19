import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import slide1 from './img/slide1.jpg'
import slide2 from './img/slide2.png'
import slide3 from './img/slide3.jpg'
import home from './img/home.jpg'
import './style.css';
const HomeComponent = () => {
    return (

<>


<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="slide"
      src={slide1}
      alt="First slide"
    />
    <Carousel.Caption>
      
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="slide"
      src={slide2}
      alt="Second slide"
    />
    <Carousel.Caption>
    
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="slide"
      src={slide3}
      alt="Third slide"
    />
    
    <Carousel.Caption>
      
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<div className="content">
<div className="home">
<p className="hometext">
<h1>Майстерня Електрон</h1><br/>
Ремонтуємо електроніку<br/>
У нашій майстерні працюють кваліфіковані майстри,<br/>
які добре знають свою справу, і зможуть зремонтувати будь-яку поломку.
</p>
<br/>
<br/>
</div>
  <img
      className="home"
      src={home}
    />
</div>
</>

    );
};
export default HomeComponent;


