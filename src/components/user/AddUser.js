import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

const AddUser = () => {
  const { addEntity, setType } = useGenericContext();
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await addEntity(data);
    navigate('/');
  };

  useEffect(() => {
    setType('users');
  }, [setType]);

  return (
    <Container>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Name"
              fullWidth
              margin="normal"
            />
          )}
        />
        <Controller
          name="username"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Username"
              fullWidth
              margin="normal"
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              fullWidth
              margin="normal"
            />
          )}
        />
        <Button type="submit" variant="contained" color="primary">
          Add User
        </Button>
      </form>
    </Container>
  );
};

export default AddUser;
