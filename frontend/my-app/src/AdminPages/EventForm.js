import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function EventForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');
  const [posterlink, setPosterlink] = useState('');
  const [eventMonth, setEventMonth] = useState('');
  const [eventDay, setEventDay] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [coordinator, setCoordinator] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const response = await axios.post('/event', {
        title,
        description,
        tag,
        posterlink,
        eventMonth,
        eventDay,
        eventTime,
        coordinator,
      });
      if (response.data.status === 200) {
        setSuccess('Event created successfully');
        setTitle('');
        setDescription('');
        setTag('');
        setPosterlink('');
        setEventMonth('');
        setEventDay('');
        setEventTime('');
        setCoordinator('');
        navigate('/admin/dashboard');
      } else {
        setError('Failed to create event');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        navigate('/login');
      } else {
        setError('An error occurred while trying to create the event');
      }
    }
  };

  return (
    <div>
        <h1 className="text-center mb-4">Create New Event</h1>
    <Container className="my-5 p-4" style={{ backgroundColor: '#f7f7f7', borderRadius: '8px' }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="title" className="mb-3">
          <Form.Label column sm={2}>Event Title</Form.Label>
          <Col sm={10}>
            <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="description" className="mb-3">
          <Form.Label column sm={2}>Event Description</Form.Label>
          <Col sm={10}>
            <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="tag" className="mb-3">
          <Form.Label column sm={2}>Event Tag</Form.Label>
          <Col sm={10}>
            <Form.Control type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="posterLink" className="mb-3">
          <Form.Label column sm={2}>Poster Link</Form.Label>
          <Col sm={10}>
            <Form.Control type="text" value={posterlink} onChange={(e) => setPosterlink(e.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="eventMonth" className="mb-3">
          <Form.Label column sm={2}>Event Month</Form.Label>
          <Col sm={10}>
            <Form.Control type="text" value={eventMonth} onChange={(e) => setEventMonth(e.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="eventDay" className="mb-3">
          <Form.Label column sm={2}>Event Day</Form.Label>
          <Col sm={10}>
            <Form.Control type="text" value={eventDay} onChange={(e) => setEventDay(e.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="eventTime" className="mb-3">
          <Form.Label column sm={2}>Event Time</Form.Label>
          <Col sm={10}>
            <Form.Control type="text" value={eventTime} onChange={(e) => setEventTime(e.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="coordinator" className="mb-3">
          <Form.Label column sm={2}>Event Coordinator</Form.Label>
          <Col sm={10}>
            <Form.Control type="text" value={coordinator} onChange={(e) => setCoordinator(e.target.value)} />
          </Col>
        </Form.Group>

        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}

        <div className="text-center">
          <Button variant="primary" type="submit" style={{ color: 'white' }}>
            Add Event
          </Button>
        </div>
      </Form>
    </Container>
    </div>
  );
}

export default EventForm;
