import React, { useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMplogilityWarehouseReference = () => {
    const { recid } = useParams(); // Using 'recid' as the primary key
    const { entities, updateEntity, setType } = useGenericContext();
    const MplogilityWarehouseReference = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        setType('MplogilityWarehouseReferences');
        if (MplogilityWarehouseReference) {
            setValue('recid', MplogilityWarehouseReference.recid);
            setValue('createddatetime', MplogilityWarehouseReference.createddatetime);
            setValue('d365childSite', MplogilityWarehouseReference.d365childSite);
            setValue('d365childWarehouse', MplogilityWarehouseReference.d365childWarehouse);
            setValue('parentSite', MplogilityWarehouseReference.parentSite);
            setValue('parentWarehouse', MplogilityWarehouseReference.parentWarehouse);
        } else {
            console.error('Entity not found');
            // Optionally navigate back or show an error
        }
    }, [setType, MplogilityWarehouseReference, setValue]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data }, 'recid'); // Update using the primary key 'recid'
        navigate('/path-to-redirect'); // Adjust the path as needed
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text}</h2>
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
                    Update MplogilityWarehouseReference
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMplogilityWarehouseReference;
