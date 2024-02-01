import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import car_img from '../Bonneville.jpg';
import pfp_img from '../headshot.jpg';
import ski_img from '../ski.jpg';
import yosemite_img from '../Header.jpg';
import rowing_img from '../rowing.JPG';
import './About.css';

const About = () => {
  return (
    <Container className="mt-5 p-0">
      <div className="header-image-container">
        <Image src={yosemite_img} alt="Header" fluid />
        <div className="overlay-content">
          <Image src={pfp_img} alt="Profile" roundedCircle className="profile-image" />
        </div>
      </div>
      <Row className="my-4">
        <Col md={{ span: 8, offset: 4 }}>
          <p>Hello, my name is Jack Mitchell. I am a second-year student at Northeastern University studying Computer Science with a concentration in software. During my time at the Khoury College of Computer Sciences, 
            I have been studying a variety of languages, most prominently Java. I have also been a part of the Northeastern Electric Racing Software development team where I, along with a team of over 100 engineers, do web development on the NER website. 
            I am currently focusing on sharpening my C++ skills and am looking to explore any area of software development in the professional world.</p>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-3">
          <Image src={car_img} thumbnail fluid className="custom-image" />
        </Col>
        <Col md={4} className="mb-3">
          <Image src={ski_img} thumbnail fluid className="custom-image" />
        </Col>
        <Col md={4} className="mb-3">
          <Image src={rowing_img} thumbnail fluid className="custom-image" />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
