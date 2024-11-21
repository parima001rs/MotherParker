import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';

const UpdatePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { entities, updateEntity, setType } = useGenericContext();
  const post = entities.find((p) => p.id === parseInt(id));
  const [title, setTitle] = useState(post?.title || '');
  const [body, setBody] = useState(post?.body || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateEntity({ id: parseInt(id), title, body });
    navigate('/posts');
  };

  useEffect(() => {
    setType('posts');
  }, [setType]);

  return (
    <Container>
      <h2>Update Post</h2>
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
          Update Post
        </Button>
      </form>
    </Container>
  );
};

export default UpdatePost;
