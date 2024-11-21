import React, { useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMpi21_Quantityadjustmentssetup = () => {
    const { recid } = useParams(); // Using 'recid' as the primary key
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpi21_Quantityadjustmentssetup = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        setType('Mpi21_Quantityadjustmentssetups');
        if (Mpi21_Quantityadjustmentssetup) {
            setValue('recid', Mpi21_Quantityadjustmentssetup.recid);
            setValue('createddatetime', Mpi21_Quantityadjustmentssetup.createddatetime);
            setValue('dataareaid', Mpi21_Quantityadjustmentssetup.dataareaid);
            setValue('activationdate', Mpi21_Quantityadjustmentssetup.activationdate);
            setValue('activationdatetzid', Mpi21_Quantityadjustmentssetup.activationdatetzid);
            setValue('description', Mpi21_Quantityadjustmentssetup.description);
            setValue('quantityadjustjournal', Mpi21_Quantityadjustmentssetup.quantityadjustjournal);
        } else {
            console.error('Entity not found');
            // Optionally navigate back or show an error
        }
    }, [setType, Mpi21_Quantityadjustmentssetup, setValue]);

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
                    name="activationdate"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Activation Date"
                            fullWidth
                            margin="normal"
                            type="datetime-local"
                        />
                    )}
                />

                <Controller
                    name="activationdatetzid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Activation Date TZ ID"
                            fullWidth
                            margin="normal"
                            type="number" // Assuming this is a number
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
                    name="quantityadjustjournal"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Quantity Adjust Journal"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Button type="submit" variant="contained" color="primary">
                    Update Mpi21_Quantityadjustmentssetup
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21_Quantityadjustmentssetup;
