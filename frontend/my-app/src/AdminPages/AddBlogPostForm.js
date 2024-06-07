import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddBlogPostForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');
  const [imageLink, setImageLink] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      description,
      tag,
      imageLink,
    };

    try {
      // Send a POST request to the backend
      const response = await axios.post('/blogs', newPost);
  

      // Reset form fields after submission
      setTitle('');
      setDescription('');
      setTag('');
      setImageLink('');

      // Redirect to the show blog post page
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Error adding the blog post', error);
      if (error.response && error.response.status === 401) {
        // Redirect to the login page if the status code is 401
        navigate('/login');
      }
    }
  };

  return (
    <div>
      <h1 className="text-center mb-4">Add New Blog Post</h1>
      <Container className="my-5 p-4" style={{ backgroundColor: '#f7f7f7', borderRadius: '8px' }}>
        <Row className="justify-content-center">
          <Col md={10}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="title" className="mb-3">
                <Form.Label>Blog Post Title</Form.Label>
                <Form.Control 
                  type="text" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  placeholder="Enter the title of the blog post"
                />
              </Form.Group>

              <Form.Group controlId="description" className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={3} 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)} 
                  placeholder="Enter the description of the blog post"
                />
              </Form.Group>

              <Form.Group controlId="tag" className="mb-3">
                <Form.Label>Tag</Form.Label>
                <Form.Control 
                  type="text" 
                  value={tag} 
                  onChange={(e) => setTag(e.target.value)} 
                  placeholder="Enter a tag for the blog post"
                />
              </Form.Group>

              <Form.Group controlId="imageLink" className="mb-3">
                <Form.Label>Image Link</Form.Label>
                <Form.Control 
                  type="text" 
                  value={imageLink} 
                  onChange={(e) => setImageLink(e.target.value)} 
                  placeholder="Enter the URL of the image"
                />
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit" style={{ color: 'white' }}>
                  Add Post
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AddBlogPostForm;
