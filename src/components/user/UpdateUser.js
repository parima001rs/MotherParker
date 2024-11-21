import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

const UpdateUser = () => {
  const { id } = useParams();
  const { entities, updateEntity, setType } = useGenericContext();
  const user = entities.find((u) => u.id === parseInt(id));
  const { control, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    setType('users');
    if (user) {
      setValue('name', user.name);
      setValue('username', user.username);
      setValue('email', user.email);
    }
  }, [setType, user, setValue]);

  const onSubmit = async (data) => {
    await updateEntity({ id: parseInt(id), ...data });
    //navigate('/');
  };

  return (
    <Container>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
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
          Update User
        </Button>
      </form>
    </Container>
  );
};

export default UpdateUser;
