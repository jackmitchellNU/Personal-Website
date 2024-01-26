import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container className="my-jumbotron my-5">
      <Row className="align-items-center">
        <Col>
          <h1>Welcome to My Personal Website</h1>
          <p>
            Nice to meet you!
          </p>
          <Button variant="primary">Learn more</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
