import React, { useEffect } from 'react';  
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateI21VendorReference = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const I21VendorReference = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        setType('I21VendorReferences');
        if (I21VendorReference) {
            setValue('recid', I21VendorReference.recid);
            setValue('createddatetime', I21VendorReference.createddatetime);
            setValue('companyCode', I21VendorReference.companyCode);
            setValue('i21VendorReferenceId', I21VendorReference.i21VendorReferenceId);
            setValue('i21EntityType', I21VendorReference.i21EntityType);
            setValue('i21MethodPayment', I21VendorReference.i21MethodPayment);
            setValue('d365vendorNumber', I21VendorReference.d365vendorNumber);
            setValue('subgroup', I21VendorReference.subgroup);
        } else {
            console.error('Entity not found');
            // Optionally navigate away if the entity is not found
            // navigate('/your-default-path');
        }
    }, [setType, I21VendorReference, setValue]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data }, 'recid');
        // Optionally navigate back or show a success message here
        // navigate('/your-success-path');
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
                            label="Created Datetime"
                            type="datetime-local"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ shrink: true }}
                        />
                    )}
                />
                <Controller
                    name="companyCode"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Company Code"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="i21VendorReferenceId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Vendor Reference ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="i21EntityType"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Entity Type"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="i21MethodPayment"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Method of Payment"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="d365vendorNumber"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="D365 Vendor Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="subgroup"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Subgroup"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Button type="submit" variant="contained" color="primary">
                    Update I21VendorReference
                </Button>
            </form>
        </Container>
    );
};

export default UpdateI21VendorReference;
