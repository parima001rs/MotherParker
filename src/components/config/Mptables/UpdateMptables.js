import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMptable = () => {
    const { id } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const Mptable = entities?.find((u) => u.id === parseInt(id));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setType('Mptables');
        if (Mptable) {
            setValue('id', Mptable.id);
            setValue('tableName', Mptable.tableName);
            setValue('type', Mptable.type);
            setValue('createddatetime', Mptable.createddatetime);
        }
    }, [setType, Mptable, setValue]);

    const onSubmit = async (data) => {
        await updateEntity({ id: parseInt(id), ...data });
        navigate('/');  // Uncomment to enable navigation after submit
    };

    // Handle case where Mptable is not found
    if (!Mptable) {
        return <Container><h2>Mptable not found</h2></Container>;
    }

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="id"
                    control={control}
                    defaultValue={Mptable?.id || ''}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Id"
                            fullWidth
                            margin="normal"
                            disabled
                        />
                    )}
                />
                <Controller
                    name="tableName"
                    control={control}
                    defaultValue={Mptable?.tableName || ''}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="TableName"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="type"
                    control={control}
                    defaultValue={Mptable?.type || ''}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Type"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="createddatetime"
                    control={control}
                    defaultValue={Mptable?.createddatetime || ''}
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
                <Button type="submit" variant="contained" color="primary">
                    Update Mptable
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMptable;
