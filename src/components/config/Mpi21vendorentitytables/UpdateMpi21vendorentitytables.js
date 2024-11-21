import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';


const UpdateMpi21vendorentitytable = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpi21vendorentitytable = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    useEffect(() => {
        setType('Mpi21vendorentitytables');
        if (Mpi21vendorentitytable) {
            setValue('createddatetime', Mpi21vendorentitytable.createddatetime);
            setValue('dataareaid', Mpi21vendorentitytable.dataareaid);
            setValue('description', Mpi21vendorentitytable.description);
            setValue('mpi21vendorentitytype', Mpi21vendorentitytable.mpi21vendorentitytype);


        }
    }, [setType, Mpi21vendorentitytable, setValue]);

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
                    name="mpi21vendorentitytype"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpi21vendorentitytype"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />


                <Button type="submit" variant="contained" color="primary">
                    Update Mpi21vendorentitytable
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21vendorentitytable;
