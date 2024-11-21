import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';

const UpdateMpi21locationtype = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpi21locationtype = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        setType('Mpi21locationtypes');
        if (Mpi21locationtype) {
            setValue('inventlocationid', Mpi21locationtype.inventlocationid);
            setValue('inventsiteid', Mpi21locationtype.inventsiteid);
            setValue('locationtype', Mpi21locationtype.locationtype);
            setValue('whsloc', Mpi21locationtype.whsloc);
            setValue('dataareaid', Mpi21locationtype.dataareaid);
        }
    }, [setType, Mpi21locationtype, setValue]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update Mpi21locationtype</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

               
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

                <Controller
                    name="locationtype"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Locationtype"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="whsloc"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Whsloc"
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
                    Update Mpi21locationtype
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21locationtype;
