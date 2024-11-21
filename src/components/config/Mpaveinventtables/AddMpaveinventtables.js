import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';


const AddMpaveitemmasterexportstatus = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('Mpaveitemmasterexportstatus');
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
                name="itemid"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Item ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="groundcoffee"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Ground Coffee"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="inventstatus"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Inventory Status"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpavedefaultbatch"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Default Batch"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpaveva"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MPA VEVA"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="pdsdispositioncode"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="PDS Disposition Code"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="quarantineorderonraf"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Quarantine Order on RAF"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="routeid"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Route ID"
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

            <Button type="submit" variant="contained" color="primary">
                Add Mpaveinventtable
            </Button>
        </form>
    </Container>
     
    );
};

export default AddMpaveitemmasterexportstatus;
