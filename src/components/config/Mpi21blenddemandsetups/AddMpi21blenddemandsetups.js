import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';

import { useLocation } from 'react-router-dom'; 

const AddMpi21blenddemandsetup = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('Mpi21blenddemandsetups');
    }, [setType]);

    return (
        <Container>
            <BackButton />
            <h2>Add {location.state?.text}</h2>
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
                            InputLabelProps={{
                                shrink: true,
                            }}
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
                    name="demandnumseq"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Demandnumseq"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="demandreqplan"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Demandreqplan"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="demandtype"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Demandtype"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="enddate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Enddate"
                            type="datetime-local"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    )}
                />
                <Controller
                    name="startdate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Startdate"
                            type="datetime-local"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    )}
                />


                <Button type="submit" variant="contained" color="primary">
                    Add Mpi21blenddemandsetup
                </Button>
            </form>
        </Container>
    );
};

export default AddMpi21blenddemandsetup;
