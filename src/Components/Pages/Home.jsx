import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  
  return (
    <div>
     <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media-cdn.tripadvisor.com/media/photo-c/1280x250/0e/0d/85/51/20161225-093912-largejpg.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://photos.smugmug.com/Jalsa-Salana-Annual-Convention/India/Jalsa-Salana-Qadian-India-2022/1st-Day-1st-Session/i-vTSkfV6/0/Dg8K3WJRzsq5QkDs7Cq8Cdns788Dtv7XdkzRZSpZd/XL/011%20Khuddam%20carrying%20Liwa-e-Ahmadiyyat%20towards%20Jalsa%20Gah%2C%20%20Jalsa%20Salana%20Qadian%202022-XL.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.alhakam.org/wp-content/uploads/2018/05/rsz_aqsa_mosque_2.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Home;