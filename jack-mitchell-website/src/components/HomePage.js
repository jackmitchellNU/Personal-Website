import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../Homepage.css';
import rowing_img from '../Rowing_Sunrise.jpg';

const HomePage = () => {
  return (
    <Container fluid className="my-jumbotron my-5 p-5 text-white" style={{ backgroundImage: `url(${rowing_img})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '15px' }}>
      <Row className="align-items-center" style={{ minHeight: '80vh' }}>
        <Col className="text-center">
          <h1 className="display-4 fw-bold">Welcome to My Personal Website</h1>
          <p className="lead">
            Nice to meet you!
          </p>
          <Button variant="light" className="mt-3" as="a" href="/about">Learn More</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
