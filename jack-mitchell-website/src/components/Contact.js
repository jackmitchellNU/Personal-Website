import React, { useState, useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import confetti from 'canvas-confetti';

const ContactPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const resetFormFields = () => {
    setEmail('');
    setName('');
    setMessage('');
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_h572gtz', 'template_q5vcjoh', form.current, 'rXp_3i2mDaRW8ei4L')
      .then((result) => {
          console.log(result.text);
          resetFormFields();
          triggerConfetti();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Container className="mt-5">
      <h2>Contact Me</h2>
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="from_name"
            value={name}
            onChange={handleNameChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="user_email"
            value={email}
            onChange={handleEmailChange}
          />
          <Form.Text className="text-muted">
            I'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            value={message}
            onChange={handleMessageChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactPage;

