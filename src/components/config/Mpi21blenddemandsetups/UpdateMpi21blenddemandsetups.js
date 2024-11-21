import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';


import { useLocation } from 'react-router-dom'; 

const UpdateMpi21blenddemandsetup = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpi21blenddemandsetup = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setType('Mpi21blenddemandsetups');
        if (Mpi21blenddemandsetup) {
            setValue('createddatetime', Mpi21blenddemandsetup.createddatetime);
            setValue('dataareaid', Mpi21blenddemandsetup.dataareaid);
            setValue('demandnumseq', Mpi21blenddemandsetup.demandnumseq);
            setValue('demandreqplan', Mpi21blenddemandsetup.demandreqplan);
            setValue('demandtype', Mpi21blenddemandsetup.demandtype);
            setValue('enddate', Mpi21blenddemandsetup.enddate);
            setValue('startdate', Mpi21blenddemandsetup.startdate);
        }
    }, [setType, Mpi21blenddemandsetup, setValue]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data });
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
                            label="enddate"
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
                    Update Mpi21blenddemandsetup
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21blenddemandsetup;
