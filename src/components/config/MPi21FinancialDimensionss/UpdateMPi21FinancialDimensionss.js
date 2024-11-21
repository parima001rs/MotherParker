import React, { useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMPi21FinancialDimensions = () => {
    const { recid } = useParams(); // Using 'recid' as the primary key
    const { entities, updateEntity, setType } = useGenericContext();
    const MPi21FinancialDimensions = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        setType('MPi21FinancialDimensionss');
        if (MPi21FinancialDimensions) {
            setValue('recid', MPi21FinancialDimensions.recid);
            setValue('createdDateTime', MPi21FinancialDimensions.createdDateTime); // Updated field
            setValue('dataAreaId', MPi21FinancialDimensions.dataAreaId); // Updated field
            setValue('dimensionName', MPi21FinancialDimensions.dimensionName); // New field
            setValue('dimensionValueId', MPi21FinancialDimensions.dimensionValueId); // New field
            setValue('description', MPi21FinancialDimensions.description); // New field
            setValue('commodityType', MPi21FinancialDimensions.commodityType); // New field
        } else {
            console.error('Entity not found');
            // Optionally navigate back or show an error
        }
    }, [setType, MPi21FinancialDimensions, setValue]);

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
                    name="createdDateTime" // Updated field name
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
                    name="dataAreaId" // Updated field name
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
                    name="dimensionName" // New field
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Dimension Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="dimensionValueId" // New field
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Dimension Value ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="description" // New field
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
                    name="commodityType" // New field
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Commodity Type"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Button type="submit" variant="contained" color="primary">
                    Update MPi21FinancialDimensions
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMPi21FinancialDimensions;
