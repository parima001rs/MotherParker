import React, { useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMPProbatAvevaGroundLocations = () => {
    const { recid } = useParams(); // Using 'recid' as the primary key
    const { entities, updateEntity, setType } = useGenericContext();
    const MPProbatAvevaGroundLocations = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        setType('MPProbatAvevaGroundLocationss');
        if (MPProbatAvevaGroundLocations) {
            setValue('recid', MPProbatAvevaGroundLocations.recid);
            setValue('createddatetime', MPProbatAvevaGroundLocations.createddatetime);
            setValue('destination', MPProbatAvevaGroundLocations.destination);
            setValue('destinationinventlocationid', MPProbatAvevaGroundLocations.destinationinventlocationid);
            setValue('destinationinventsiteid', MPProbatAvevaGroundLocations.destinationinventsiteid);
            setValue('destinationwmslocationid', MPProbatAvevaGroundLocations.destinationwmslocationid);
            setValue('inventlocationid', MPProbatAvevaGroundLocations.inventlocationid);
            setValue('inventsiteid', MPProbatAvevaGroundLocations.inventsiteid);
            setValue('wmslocationid', MPProbatAvevaGroundLocations.wmslocationid);
        } else {
            console.error('Entity not found');
            // Optionally navigate back or show an error
        }
    }, [setType, MPProbatAvevaGroundLocations, setValue]);

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
                    Update MPProbatAvevaGroundLocations
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMPProbatAvevaGroundLocations;
