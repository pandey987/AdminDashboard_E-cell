import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button } from 'react-bootstrap';

function EditBlogPost() {
  const [postData, setPostData] = useState({
    title: '',
    tag: '',
    description: '',
    imageLink: ''
  });
  const { postId } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostData = async () => {
      console.log(postId);
      try {
        const response = await axios.get(`/blogs/${postId}/edit`);
        console.log(response.data.data);
        console.log("hello");
        if (response.data.status === 401) {
          navigate('/login'); // Redirect to login page if unauthorized
        } else if (response.data.status === 200) {
          setPostData(response.data.data); // Accessing the data correctly
        } else {
          setError(response.data.message);
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
            navigate('/login');
          } else {
        console.error('Error fetching blog post:', error);
        setError('Error fetching blog post. Please try again later.');}
      }
    };

    fetchPostData();
  }, [postId, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(postData);
    console.log("postId");
    try {
      const response = await axios.put(`/blogs/${postId}`, postData);
       navigate(`/show-blog-post`);
    } catch (error) {
        if (error.response && error.response.status === 401) {
            navigate('/login');
          } else {
      setError('Error updating blog post. Please try again later.');}
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', color: 'black' }}>
      <h1>Edit Blog Post</h1>
      
      <Form.Group controlId="title">
        <Form.Label>Post Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={postData.title}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="tag">
        <Form.Label>Tag</Form.Label>
        <Form.Control
          type="text"
          name="tag"
          value={postData.tag}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          value={postData.description}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="urltoimage1">
        <Form.Label>Image Link</Form.Label>
        <Form.Control
          type="text"
          name="urltoimage1"
          value={postData.urltoimage1}
          onChange={handleChange}
        />
      </Form.Group>

      {error && <div className="alert alert-danger">{error}</div>}

      <Button variant="primary" type="submit" style={{ color: 'black' }}>
        Save Changes
      </Button>
    </Form>
  );
}

export default EditBlogPost;
