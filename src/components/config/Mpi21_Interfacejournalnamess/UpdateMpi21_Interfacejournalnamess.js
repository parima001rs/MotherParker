import React, { useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMpi21_Interfacejournalnames = () => {
    const { recid } = useParams(); // Using 'recid' as the primary key
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpi21_Interfacejournalnames = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        setType('Mpi21_Interfacejournalnamess');
        if (Mpi21_Interfacejournalnames) {
            setValue('recid', Mpi21_Interfacejournalnames.recid);
            setValue('createddatetime', Mpi21_Interfacejournalnames.createddatetime);
            setValue('dataareaid', Mpi21_Interfacejournalnames.dataareaid);
            setValue('interfacename', Mpi21_Interfacejournalnames.interfacename);
            setValue('interfacetypeid', Mpi21_Interfacejournalnames.interfacetypeid);
            setValue('inventjournalnameid', Mpi21_Interfacejournalnames.inventjournalnameid);
        } else {
            console.error('Entity not found');
            // Optionally navigate back or show an error
        }
    }, [setType, Mpi21_Interfacejournalnames, setValue]);

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
                    name="interfacename"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Interface Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="interfacetypeid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Interface Type ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="inventjournalnameid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Invent Journal Name ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Button type="submit" variant="contained" color="primary">
                    Update Mpi21_Interfacejournalnames
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21_Interfacejournalnames;
