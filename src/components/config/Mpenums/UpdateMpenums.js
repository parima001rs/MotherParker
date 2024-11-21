import React, { useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMpenum = () => {
    const { recId } = useParams(); // Using 'recId' as the primary key
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpenum = entities.find((u) => u.recId === parseInt(recId));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        setType('Mpenumss');
        if (Mpenum) {
            setValue('recId', Mpenum.recId);
            setValue('enumtable', Mpenum.enumtable);
            setValue('name', Mpenum.name);
            setValue('label', Mpenum.label);
            setValue('enumValue', Mpenum.enumValue);
        } else {
            console.error('Entity not found');
            // Optionally navigate back or show an error
        }
    }, [setType, Mpenum, setValue]);

    const onSubmit = async (data) => {
        await updateEntity({ recId: parseInt(recId), ...data }, 'recId'); // Update using the primary key 'recId'
        // Optionally navigate back after update
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="recId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Rec ID"
                            fullWidth
                            margin="normal"
                            disabled // Optionally disable this field
                        />
                    )}
                />

                <Controller
                    name="enumtable"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Enum Table"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="label"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Label"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="enumValue"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Enum Value"
                            type="number" // Assuming enumValue is a number
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Button type="submit" variant="contained" color="primary">
                    Update Mpenum
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpenum;
