import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';

const AddMpi21ictransfersetup = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('Mpi21ictransfersetups');
    }, [setType]);

    return (
        <Container>
            <BackButton />
            <h2>Add Mpi21ictransfersetup</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                
               
                <Controller
                    name="mpi21customerid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpi21customerid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mpi21fromsite"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpi21fromsite"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpi21tosite"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpi21tosite"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpi21entity"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="mpi21entity"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
            

                <Button type="submit" variant="contained" color="primary">
                    Add Mpi21ictransfersetup
                </Button>
            </form>
        </Container>
    );
};

export default AddMpi21ictransfersetup;
