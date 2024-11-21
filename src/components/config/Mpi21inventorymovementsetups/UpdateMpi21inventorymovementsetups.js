import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';

const UpdateMpi21inventorymovementsetup = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpi21inventorymovementsetup = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        setType('Mpi21inventorymovementsetups');
        if (Mpi21inventorymovementsetup) {
            setValue('createddatetime', Mpi21inventorymovementsetup.createddatetime);
            setValue('activationdate', Mpi21inventorymovementsetup.activationdate);
            setValue('activationdatetzid', Mpi21inventorymovementsetup.activationdatetzid);
            setValue('description', Mpi21inventorymovementsetup.description);
            setValue('inventmovementjournal', Mpi21inventorymovementsetup.inventmovementjournal);
            setValue('reasoncode', Mpi21inventorymovementsetup.reasoncode);
            setValue('dataareaid', Mpi21inventorymovementsetup.dataareaid);
        }
    }, [setType, Mpi21inventorymovementsetup, setValue]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update Mpi21inventorymovementsetup</h2>
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
                    name="activationdate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Activationdate"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="activationdatetzid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Activationdatetzid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="description"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Description"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="inventmovementjournal"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Inventmovementjournal"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="reasoncode"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Reasoncode"
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

                <Button type="submit" variant="contained" color="primary">
                    Update Mpi21inventorymovementsetup
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21inventorymovementsetup;
