// EventList.js
import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function EventList() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/event'); // Adjust the endpoint as necessary
        if (response.data.status === 200) {
          setEvents(response.data.events);
        } else {
          setError('Failed to fetch events');
        }
      } catch (error) {
        setError('An error occurred while fetching events');
      }
    };

    fetchEvents();
  }, []);

  const handleEdit = (eventId) => {
    navigate(`/event/${eventId}/edit`);
  };

  const handleDelete = async (eventId) => {
    try {
      const response = await axios.delete(`/event/${eventId}/delete`);
      if (response.data.status === 200) {
        setEvents(events.filter(event => event._id !== eventId));
      } else {
        setError('Failed to delete the event');
      }
    } catch (error) {
      setError('An error occurred while deleting the event');
    }
  };

  return (
    <Container>
      {error && <div className="alert alert-danger">{error}</div>}
      <Row>
        {events.map((event) => (
          <Col key={event._id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={event.posterlink} alt={event.title} />
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <Card.Text><strong>Tag:</strong> {event.tag}</Card.Text>
                <Card.Text><strong>Date:</strong> {event.month} {event.day}</Card.Text>
                <Card.Text><strong>Time:</strong> {event.eventtime}</Card.Text>
                <Card.Text><strong>Coordinator:</strong> {event.coordinator}</Card.Text>
                <Button variant="primary" onClick={() => handleEdit(event._id)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(event._id)} className="ml-2">Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default EventList;
