import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { addEntity, setType } = useGenericContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEntity({ title, body });
    navigate('/posts');
  };

  useEffect(() => {
    setType('posts');
  }, [setType]);

  return (
    <Container>
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Body"
          fullWidth
          margin="normal"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Add Post
        </Button>
      </form>
    </Container>
  );
};

export default AddPost;
