import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';

const AddMpi21vendormasterline = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        await addEntity(data);
        // navigate('/');
    };

    useEffect(() => {
        setType('Mpi21vendormasterlines');
    }, [setType]);

    return (
        <Container>
            <BackButton />
            <h2>Add Mpi21vendormasterline</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Controller
                    name="createddatetime"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Createddatetime"
                            type="datetime-local"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="dataareaid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Dataareaid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="actionid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Actionid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="address"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Address"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="city"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="City"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="country"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Country"
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
                <Controller
                    name="fax"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Fax"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="linetype"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Linetype"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="locationname"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Locationname"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mobile"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mobile"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
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
                    name="parentrecid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Parentrecid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="phone"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Phone"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="state"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="State"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="termscode"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Termscode"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="zip"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Zip"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                


                <Button type="submit" variant="contained" color="primary">
                    Add Mpi21vendormasterline
                </Button>
            </form>
        </Container>
    );
};

export default AddMpi21vendormasterline;
