import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';

import { useLocation } from 'react-router-dom';

const UpdateMpi21rawmatdemandsitewhse = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpi21rawmatdemandsitewhse = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        setType('Mpi21rawmatdemandsitewhse');
        if (Mpi21rawmatdemandsitewhse) {
            setValue('dataareaid', Mpi21rawmatdemandsitewhse.dataareaid);
            setValue('createddatetime', Mpi21rawmatdemandsitewhse.createddatetime);
            setValue('recid', Mpi21rawmatdemandsitewhse.recid);
            setValue('mpi21rawmatdemandsetup', Mpi21rawmatdemandsitewhse.mpi21rawmatdemandsetup);
            setValue('mpinventlocationid', Mpi21rawmatdemandsitewhse.mpinventlocationid);
            setValue('mpinventsiteid', Mpi21rawmatdemandsitewhse.mpinventsiteid);

        }
    }, [setType, Mpi21rawmatdemandsitewhse, setValue]);

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
                    name="mpinventlocationid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpinventlocationid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mpinventsiteid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpinventsiteid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />



                <Button type="submit" variant="contained" color="primary">
                    Update Mpi21rawmatdemandsitewhse
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21rawmatdemandsitewhse;
