/**
 * import React from 'react';

const Contact = () => {
  return (
    <section id="Contact">
      <h2>Contact Me</h2>
        <p>Email: <a href="mailto:mitchell.jack@northeastern.edu?subject=Inquiry&body=Hello%20Jack,%0D%0A%0D%0AI%20am%20interested%20in%20learning%20more%20about%20you!" target="_blank" rel="noopener noreferrer">mitchell.jack@northeastern.edu</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/jack-mitchell-a340a6256/" target="_blank" rel="noopener noreferrer">linkedin.com/in/jack-mitchell</a></p>
    </section>
  );
}

export default Contact;
Testing 123
**/

import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const ContactPage = () => {
  return (
    <Container className="mt-5">
      <h2>Contact Me</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            I'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactPage;
