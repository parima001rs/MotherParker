import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';

const AddMpi21locationtype = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('Mpi21locationtypes');
    }, [setType]);

    return (
        <Container>
            <BackButton />
            <h2>Add Mpi21locationtype</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                
               
                <Controller
                    name="inventlocationid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Inventlocationid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="inventsiteid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Inventsiteid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="locationtype"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Locationtype"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="whsloc"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Whsloc"
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
                            label="dataareaid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
            

                <Button type="submit" variant="contained" color="primary">
                    Add Mpi21locationtype
                </Button>
            </form>
        </Container>
    );
};

export default AddMpi21locationtype;
