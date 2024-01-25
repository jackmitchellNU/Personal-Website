import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container className="my-jumbotron my-5">
      <Row className="align-items-center">
        <Col>
          <h1>Welcome to My Personal Website</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
          </p>
          <Button variant="primary">Learn more</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
