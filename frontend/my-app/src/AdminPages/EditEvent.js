import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Container, Spinner } from 'react-bootstrap';
import axios from 'axios';

function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState({
    title: '',
    description: '',
    tag: '',
    month: '',
    day: '',
    eventtime: '',
    coordinator: '',
    posterlink: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  console.log(event);
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`/event/${id}/edit`);
        if (response.data.status === 200) {
          setEvent(response.data.event);
        } else {
          setError('Failed to fetch event details');
        }
      } catch (error) {
        setError('An error occurred while fetching event details');
        if (error.response && error.response.status === 401) {
          // Redirect to the login page if the status code is 401
          navigate('/login');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent(prevEvent => ({ ...prevEvent, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/event/${id}`, event);
      console.log(response.data.status);
      if (response.data.status === 200) {
        navigate(`/all-event`);
      } else {
        setError('Failed to update event');
      }
    } catch (error) {
      setError('An error occurred while updating the event');
    }
  };

  if (loading) {
    return (
      <Container>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <div><h2>Edit Event</h2>
    <Container>
      {error && <div className="alert alert-danger">{error}</div>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={event.title}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={event.description}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formTag">
          <Form.Label>Tag</Form.Label>
          <Form.Control
            type="text"
            name="tag"
            value={event.tag}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEventMonth">
          <Form.Label>Event Month</Form.Label>
          <Form.Control
            type="text"
            name="month"
            value={event.month}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEventDay">
          <Form.Label>Event Day</Form.Label>
          <Form.Control
            type="text"
            name="day"
            value={event.day}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEventTime">
          <Form.Label>Event Time</Form.Label>
          <Form.Control
            type="text"
            name="eventtime"
            value={event.eventtime}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formCoordinator">
          <Form.Label>Coordinator</Form.Label>
          <Form.Control
            type="text"
            name="coordinator"
            value={event.coordinator}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPosterlink">
          <Form.Label>Poster Link</Form.Label>
          <Form.Control
            type="text"
            name="posterlink"
            value={event.posterlink}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </Container>
    </div>
  );
}

export default EditEvent;
