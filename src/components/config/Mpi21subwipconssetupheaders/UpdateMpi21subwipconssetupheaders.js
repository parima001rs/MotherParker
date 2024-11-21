import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';






const UpdateMpi21subwipconssetupheader = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpi21subwipconssetupheader = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    useEffect(() => {
        setType('Mpi21subwipconssetupheaders');
        if (Mpi21subwipconssetupheader) {
            setValue('createddatetime', Mpi21subwipconssetupheader.createddatetime);
            setValue('mpi21active', Mpi21subwipconssetupheader.mpi21active);
            setValue('mpi21enddate', Mpi21subwipconssetupheader.mpi21enddate);
            setValue('mpi21startdate', Mpi21subwipconssetupheader.mpi21startdate);
            setValue('mpi21subwipconsnumseq', Mpi21subwipconssetupheader.mpi21subwipconsnumseq);
            setValue('dataareaid', Mpi21subwipconssetupheader.dataareaid);
            setValue('mpi21conspostedstartdate', Mpi21subwipconssetupheader.mpi21conspostedstartdate);
        }
    }, [setType, Mpi21subwipconssetupheader, setValue]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text} </h2>
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
                    name="mpi21active"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpi21active"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpi21enddate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpi21enddate"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpi21startdate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpi21startdate"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpi21subwipconsnumseq"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpi21subwipconsnumseq"
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
                    name="mpi21conspostedstartdate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpi21conspostedstartdate"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Button type="submit" variant="contained" color="primary">
                    Update Mpi21subwipconssetupheader
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21subwipconssetupheader;
