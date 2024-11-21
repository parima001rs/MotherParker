import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';

const UpdateMpi21blenddemandsitewhse = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpi21blenddemandsitewhse = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        setType('Mpi21blenddemandsitewhses');
        if (Mpi21blenddemandsitewhse) {
            setValue('createddatetime', Mpi21blenddemandsitewhse.createddatetime);
            setValue('dataareaid', Mpi21blenddemandsitewhse.dataareaid);
            setValue('blenddemandsetup', Mpi21blenddemandsitewhse.blenddemandsetup);
            setValue('inventlocationid', Mpi21blenddemandsitewhse.inventlocationid);
            setValue('inventsiteid', Mpi21blenddemandsitewhse.inventsiteid);
        }
    }, [setType, Mpi21blenddemandsitewhse, setValue]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update Mpi21blenddemandsitewhse</h2>
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
                    name="blenddemandsetup"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Blenddemandsetup"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
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
                

                <Button type="submit" variant="contained" color="primary">
                    Update Mpi21blenddemandsitewhse
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21blenddemandsitewhse;
