import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';  

const UpdateMpi21blenddemandordertype = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpi21blenddemandordertype = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setType('Mpi21blenddemandordertypes');
        if (Mpi21blenddemandordertype) {
            setValue('createddatetime', Mpi21blenddemandordertype.createddatetime);
            setValue('dataareaid', Mpi21blenddemandordertype.dataareaid);
            setValue('blenddemandsetup', Mpi21blenddemandordertype.blenddemandsetup);
            setValue('reqreftype', Mpi21blenddemandordertype.reqreftype);
        }
    }, [setType, Mpi21blenddemandordertype, setValue]);

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
                    name="reqreftype"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Reqreftype"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Button type="submit" variant="contained" color="primary">
                    Update Mpi21blenddemandordertype
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21blenddemandordertype;
