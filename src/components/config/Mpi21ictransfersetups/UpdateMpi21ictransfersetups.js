import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';

const UpdateMpi21ictransfersetup = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpi21ictransfersetup = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        setType('Mpi21ictransfersetups');
        if (Mpi21ictransfersetup) {
            setValue('mpi21customerid', Mpi21ictransfersetup.mpi21customerid);
            setValue('mpi21fromsite', Mpi21ictransfersetup.mpi21fromsite);
            setValue('mpi21tosite', Mpi21ictransfersetup.mpi21tosite);
            setValue('mpi21entity', Mpi21ictransfersetup.mpi21entity);
        }
    }, [setType, Mpi21ictransfersetup, setValue]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update Mpi21ictransfersetup</h2>
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
                            label="Mpi21entity"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />


                <Button type="submit" variant="contained" color="primary">
                    Update Mpi21ictransfersetup
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21ictransfersetup;
