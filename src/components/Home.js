import React, { useState } from 'react';
import {Form,Button,Navbar,Nav,Container,Carousel} from 'react-bootstrap';
import Login from './Login';
import Footer from './Footer';
import Footer2 from './Footer2';
export default function Home()
{
return(
  <>
<div style={{position:"relative"}} >

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="a1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="job2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="job3.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>



 <Carousel.Item>
    <img
      className="d-block w-100"
      src="job4.webp"
      alt="fourth slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src="a3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item> */}
</Carousel>

{/* <div style={{position:"absolute", top:"5vh",left:"40vw",height:"20vh",width:"25vw"}}>
<Login></Login>
</div> */}

</div>
<div>
  <Footer2 />
  <Footer></Footer>
</div>
</>

);

}