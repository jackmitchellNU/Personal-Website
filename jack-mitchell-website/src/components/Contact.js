import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h572gtz', 'template_q5vcjoh', form.current, 'rXp_3i2mDaRW8ei4L')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
      });
  };

  return (
    <Container className="mt-5">
      <h2>Contact Me</h2>
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="user_email" />
          <Form.Text className="text-muted">
            I'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" name="from_name" />
      </Form.Group>

      </Form>
    </Container>
  );
};

export default ContactPage;
