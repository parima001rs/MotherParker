
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';

import { useLocation } from 'react-router-dom';

const UpdateMpi21rawmatdemandsetup = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpi21rawmatdemandsetup = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        setType('Mpi21rawmatdemandsetup');
        if (Mpi21rawmatdemandsetup) {
            setValue('recid', Mpi21rawmatdemandsetup.recid);
            setValue('createddatetime', Mpi21rawmatdemandsetup.createddatetime);
            setValue('dataareaid', Mpi21rawmatdemandsetup.dataareaid);
            setValue('demandtype', Mpi21rawmatdemandsetup.demandtype);
            setValue('enddate', Mpi21rawmatdemandsetup.enddate);
            setValue('rawmatdemandnumseq', Mpi21rawmatdemandsetup.rawmatdemandnumseq);
            setValue('rawmatdemandreqpl', Mpi21rawmatdemandsetup.rawmatdemandreqpl);
            setValue('startdate', Mpi21rawmatdemandsetup.startdate);
        } else {
            console.error('Entity not found');
            //navigate('/');
        }
    }, [setType, Mpi21rawmatdemandsetup, setValue, navigate]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data }, 'recid'); // Passing the primary key field 'recid'
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text}</h2>
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
                    Update Mpi21rawmatdemandsetup
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21rawmatdemandsetup;
