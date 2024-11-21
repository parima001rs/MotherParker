
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';

import { useLocation } from 'react-router-dom'; 

const UpdateMpi21rawmatdemanditemgroup = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpi21rawmatdemanditemgroup = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 
    useEffect(() => {
        setType('Mpi21rawmatdemanditemgroup');
        if (Mpi21rawmatdemanditemgroup) {
            setValue('recid', Mpi21rawmatdemanditemgroup.recid);
            setValue('createddatetime', Mpi21rawmatdemanditemgroup.createddatetime);
            setValue('dataareaid', Mpi21rawmatdemanditemgroup.dataareaid);
            setValue('mpi21rawmatdemandsetup', Mpi21rawmatdemanditemgroup.mpi21rawmatdemandsetup);
            setValue('mpitemgroupid', Mpi21rawmatdemanditemgroup.mpitemgroupid);


        } else {
            console.error('Entity not found');
            //navigate('/');
        }
    }, [setType, Mpi21rawmatdemanditemgroup, setValue, navigate]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data }, 'recid'); // Passing the primary key field 'recid'
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text}</h2>
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
                    name="mpi21rawmatdemandsetup"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpi21rawmatdemandsetup"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />


                <Controller
                    name="mpitemgroupid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpitemgroupid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Button type="submit" variant="contained" color="primary">
                    Update Mpi21rawmatdemanditemgroup
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21rawmatdemanditemgroup;
