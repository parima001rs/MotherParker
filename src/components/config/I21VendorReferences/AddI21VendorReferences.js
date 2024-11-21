import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const AddI21VendorReferences = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('I21VendorReferences');
    }, [setType]);

    return (
        <Container>
            <BackButton />
            <h2>Add {location.state?.text}</h2>
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
                            InputLabelProps={{
                                shrink: true,
                            }}
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
                    Update I21VendorReferences
                </Button>
            </form>
        </Container>
    );
};

export default AddI21VendorReferences;
