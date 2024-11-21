import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import {
    TextField, Button, Container, Typography, FormControlLabel, Checkbox, FormControl, InputLabel, Select, MenuItem
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';

const AddUserLogin = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    // Function to handle form submission
    const onSubmit = async (data) => {
        try {
            await addEntity(data);
            //navigate('/'); // Redirect after successful submission
        } catch (error) {
            console.error('Submission error:', error);
            // Handle error (e.g., show an error message)
        }
    };

    // Set type on component mount
    useEffect(() => {
        setType('UserLogins');
    }, [setType]);

    return (
        <Container>

            <BackButton />
            <h2>Add UserLogin</h2>


            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Name is required' }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Name"
                            fullWidth
                            margin="normal"
                            error={!!errors.name}
                            helperText={errors.name?.message}
                        />
                    )}
                />
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: 'Email is required',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Invalid email address',
                        }
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Email"
                            type="email"
                            fullWidth
                            margin="normal"
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                    )}
                />
                <Controller
                    name="phoneNumber"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: 'Phone number is required',
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: 'Phone number must be 10 digits',
                        }
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Phone Number"
                            fullWidth
                            margin="normal"
                            error={!!errors.phoneNumber}
                            helperText={errors.phoneNumber?.message}
                        />
                    )}
                />
                <Controller
                    name="createdOn"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Creation date is required' }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Created On"
                            type="datetime-local"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ shrink: true }}
                            error={!!errors.createdOn}
                            helperText={errors.createdOn?.message}
                        />
                    )}
                />
                {/* <Controller
                    name="isActive"
                    control={control}
                    
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="isActive"
                            fullWidth
                            margin="normal"
                            error={!!errors.phoneNumber}
                            helperText={errors.phoneNumber ? errors.phoneNumber.message : ''}
                        />
                    )}
                /> */}

                <Controller
                    name="isActive"
                    control={control}
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="isActive">Is Active</InputLabel>
                            <Select
                                {...field}
                                labelId="isActive"
                                label="isActive"
                                value={field.value ?? true}
                            >
                                <MenuItem value={true}>True</MenuItem>
                                <MenuItem value={false}>False</MenuItem>
                            </Select>
                        </FormControl>
                    )}
                />


                <Button type="submit" variant="contained" color="primary">
                    Add UserLogin
                </Button>
            </form>
        </Container>
    );
};

export default AddUserLogin;
