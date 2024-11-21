import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const AddMpi21vendormappingtable = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('Mpi21vendormappingtables');
    }, [setType]);

    return (
        <Container>
        <BackButton />
        <h2>Add {location.state?.text}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="vendAccount"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="VendAccount"
                        fullWidth
                        margin="normal"
                        disabled // Optionally disable this field
                    />
                )}
            />
            <Controller
                name="vendorSubgroup"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="VendorSubgroup"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="dataAreaId"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="DataAreaId"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="entityType"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="entityTypeS"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
           
            <Button type="submit" variant="contained" color="primary">
                Add Mpi21vendormappingtable
            </Button>
        </form>
    </Container>
      
    );
};

export default AddMpi21vendormappingtable;
