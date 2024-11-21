import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const Mpi21_Quantityadjustmentssetup = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('Mpi21_Quantityadjustmentssetups');
    }, [setType]);

    return (
        <Container>
        <BackButton />
        <h2>Add {location.state?.text}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="recid"
                control={control}
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
                name="createddatetime"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Created Date"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="dataareaid"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Data Area ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="activationdate"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Activation Date"
                        fullWidth
                        margin="normal"
                        type="datetime-local"
                    />
                )}
            />

            <Controller
                name="activationdatetzid"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Activation Date TZ ID"
                        fullWidth
                        margin="normal"
                        type="number" // Assuming this is a number
                    />
                )}
            />

            <Controller
                name="description"
                control={control}
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
                name="quantityadjustjournal"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Quantity Adjust Journal"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Button type="submit" variant="contained" color="primary">
                Add Mpi21_Quantityadjustmentssetup
            </Button>
        </form>
    </Container>
    );
};

export default Mpi21_Quantityadjustmentssetup;
