import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../Homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import rowing_img from '../Rowing_Sunrise.jpg';


const HomePage = () => {
 return (
   <Container fluid className="my-jumbotron my-5 p-5 text-white" style={{ backgroundImage: {rowing_img}, backgroundSize: 'cover', backgroundPosition: 'center' }}>
     <Row className="align-items-center" style={{ minHeight: '80vh' }}>
       <Col className="text-center">
         <h1 className="display-4 fw-bold">Welcome to My Personal Website</h1>
         <p className="lead">
         <FontAwesomeIcon icon={faHandshake} /> Nice to meet you!
         </p>
         <Button variant="light" className="mt-3" as="a" href="/about">Explore More</Button>
       </Col>
     </Row>
   </Container>
 );
};


export default HomePage;



