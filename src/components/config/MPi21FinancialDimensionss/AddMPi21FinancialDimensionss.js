import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const MPi21FinancialDimensions = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    const onSubmit = async (data) => {
        await addEntity(data);
        navigate('/');
    };

    useEffect(() => {
        setType('MPi21FinancialDimensionss');
    }, [setType]);

    return (
        <Container>
            <BackButton />
            <h2>Add {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="recId"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Rec ID"
                            fullWidth
                            margin="normal"
                            disabled
                        />
                    )}
                />

                <Controller
                    name="createdDateTime"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Created Date"
                            type="datetime-local"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ shrink: true }}
                        />
                    )}
                />

                <Controller
                    name="dataAreaId"
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
                    name="dimensionName"
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
                    name="dimensionValueId"
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
                    name="commodityType"
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
                    Add MPi21FinancialDimensions
                </Button>
            </form>
        </Container>
    );
};

export default MPi21FinancialDimensions;
