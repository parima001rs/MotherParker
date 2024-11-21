import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container, Typography, FormControlLabel, Checkbox, FormControl, InputLabel, Select, MenuItem
 } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';



const UpdateUserLogin = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const user = entities.find((u) => u.id === parseInt(recid));
    const { control, handleSubmit, setValue, formState: { errors } } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        setType('UserLogins');
        if (user) {
            setValue('id', user.id);
            setValue('recid', user.recid);
            setValue('name', user.name);
            setValue('email', user.email);
            setValue('phoneNumber', user.phoneNumber);
            setValue('createdOn', user.createdOn);
            setValue('isActive', user.isActive);
        }
    }, [setType, user, setValue]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data });
        // navigate('/'); // Uncomment this if you want to navigate after successful update
    };

    return (
        <Container>
            <BackButton />
            <Typography variant="h4" gutterBottom>
                Update User Login
            </Typography>
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
                            error={!!errors.name}
                            helperText={errors.name ? errors.name.message : ''}
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
                            helperText={errors.email ? errors.email.message : ''}
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
                            helperText={errors.phoneNumber ? errors.phoneNumber.message : ''}
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
                            helperText={errors.createdOn ? errors.createdOn.message : ''}
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
                                value={field.value ?? false}
                            >
                                <MenuItem value={true}>True</MenuItem>
                                <MenuItem value={false}>False</MenuItem>
                            </Select>
                        </FormControl>
                    )}
                />

                <Button type="submit" variant="contained" color="primary">
                    Update User Login
                </Button>
            </form>
        </Container>
    );
};

export default UpdateUserLogin;
