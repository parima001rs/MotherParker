import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const AddMPProbatAvevaGroundLocations = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('MPProbatAvevaGroundLocationss');
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
                    name="destination"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Destination"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="destinationinventlocationid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Destination Invent Location ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="destinationinventsiteid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Destination Invent Site ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="destinationwmslocationid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Destination WMS Location ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="inventlocationid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Invent Location ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="inventsiteid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Invent Site ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="wmslocationid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="WMS Location ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Button type="submit" variant="contained" color="primary">
                    Add MPProbatAvevaGroundLocations
                </Button>
            </form>
        </Container>
    );
};

export default AddMPProbatAvevaGroundLocations;
