import React, { useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMpi21vendormappingtable = () => {
    const { recid } = useParams(); // Using 'recid' as the primary key
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpi21vendormappingtable = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        setType('Mpi21vendormappingtables');
        if (Mpi21vendormappingtable) {
            setValue('vendAccount', Mpi21vendormappingtable.vendAccount);
            setValue('vendorSubgroup', Mpi21vendormappingtable.vendorSubgroup);
            setValue('dataAreaId', Mpi21vendormappingtable.dataAreaId);
            setValue('entityType', Mpi21vendormappingtable.entityType);
           
        } else {
            console.error('Entity not found');
        }
    }, [setType, Mpi21vendormappingtable, setValue]);

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
                    Update Mpi21vendormappingtable
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21vendormappingtable;
