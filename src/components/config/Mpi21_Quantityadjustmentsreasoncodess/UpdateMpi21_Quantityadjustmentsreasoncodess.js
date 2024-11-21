import React, { useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMpi21_Quantityadjustmentsreasoncodes = () => {
    const { recid } = useParams(); // Using 'recid' as the primary key
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpi21_Quantityadjustmentsreasoncodes = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        setType('Mpi21_Quantityadjustmentsreasoncodess');
        if (Mpi21_Quantityadjustmentsreasoncodes) {
            setValue('recid', Mpi21_Quantityadjustmentsreasoncodes.recid);
            setValue('createddatetime', Mpi21_Quantityadjustmentsreasoncodes.createddatetime);
            setValue('dataareaid', Mpi21_Quantityadjustmentsreasoncodes.dataareaid);
            setValue('description', Mpi21_Quantityadjustmentsreasoncodes.description);
            setValue('quantityadjustmentssetup', Mpi21_Quantityadjustmentsreasoncodes.quantityadjustmentssetup);
            setValue('reasoncode', Mpi21_Quantityadjustmentsreasoncodes.reasoncode);
            setValue('exportqty', Mpi21_Quantityadjustmentsreasoncodes.exportqty);
        } else {
            console.error('Entity not found');
            // Optionally navigate back or show an error
        }
    }, [setType, Mpi21_Quantityadjustmentsreasoncodes, setValue]);

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
                    name="dataareaid"
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
                    name="quantityadjustmentssetup"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Quantity Adjustments Setup"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="reasoncode"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Reason Code"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="exportqty"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Export Quantity"
                            fullWidth
                            margin="normal"
                            type="number" // Assuming this is a number
                        />
                    )}
                />

                <Button type="submit" variant="contained" color="primary">
                    Update Mpi21_Quantityadjustmentsreasoncodes
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21_Quantityadjustmentsreasoncodes;
