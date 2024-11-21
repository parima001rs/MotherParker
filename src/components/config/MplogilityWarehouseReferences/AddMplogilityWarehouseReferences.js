import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const AddMplogilityWarehouseReference = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('MplogilityWarehouseReferences');
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
                name="d365childSite"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="D365 Child Site"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="d365childWarehouse"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="D365 Child Warehouse"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="parentSite"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Parent Site"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="parentWarehouse"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Parent Warehouse"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Button type="submit" variant="contained" color="primary">
                Add MplogilityWarehouseReference
            </Button>
        </form>
         </Container>
    );
};

export default AddMplogilityWarehouseReference;
