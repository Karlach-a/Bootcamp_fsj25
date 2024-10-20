import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/images/carousel/c1.jpg'
import img2 from '../assets/images/carousel/c2.jpg'
import img3 from '../assets/images/carousel/c3.jpg'
import img4 from '../assets/images/carousel/c4.jpg'
import img5 from '../assets/images/carousel/c5.jpg'
import img6 from '../assets/images/carousel/c6.jpg'



const Inicio =()=>(
<>
   <div>
    <h1> Bienvenido a Kodigo Music</h1>
    
   </div>
   <div>
   <Carousel>
      <Carousel.Item>
         <img style={{height:'90vh'}} className="d-block w-100" src={img1} alt="First Slide"/>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'90vh'}} className="d-block w-100" src={img2} alt="second Slide"/>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'90vh'}}  className="d-block w-100" src={img3} alt="t Slide"/>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'90vh'}} className="d-block w-100" src={img4} alt="F Slide"/>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'90vh'}}  className="d-block w-100" src={img5} alt="F Slide"/>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'90vh'}} className="d-block w-100" src={img6} alt="F Slide"/>
      </Carousel.Item>
      
    </Carousel>
   </div>
</>

    
);
export default Inicio;