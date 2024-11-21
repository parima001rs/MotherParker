import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';

import { useLocation } from 'react-router-dom';

const AddMpi21rawmatdemandsetup = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('Mpi21rawmatdemandsetup');
    }, [setType]);

    return (
        <Container>
            <BackButton />
            <h2>Add {location.state?.text} </h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* <Controller
                    name="recid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Recid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                /> */}

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
                            fullWidth
                            margin="normal"
                        />
                    )}
                />



                <Controller
                    name="rawmatdemandnumseq"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Rawmatdemandnumseq"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />






                <Controller
                    name="rawmatdemandreqpl"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Rawmatdemandreqpl"
                            fullWidth
                            margin="normal"
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
                            fullWidth
                            margin="normal"
                        />
                    )}
                />


                <Button type="submit" variant="contained" color="primary">
                    Add Mpi21rawmatdemandsetup
                </Button>
            </form>
        </Container>
    );
};

export default AddMpi21rawmatdemandsetup;
