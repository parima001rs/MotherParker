import React, { useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMpaveinventtable = () => {
    const { recid } = useParams(); // Using 'recid' as the primary key
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpaveinventtable = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        setType('Mpaveinventtables');
        if (Mpaveinventtable) {
            setValue('recid', Mpaveinventtable.recid);
            setValue('createddatetime', Mpaveinventtable.createddatetime);
            setValue('itemid', Mpaveinventtable.itemid);
            setValue('groundcoffee', Mpaveinventtable.groundcoffee);
            setValue('inventstatus', Mpaveinventtable.inventstatus);
            setValue('mpavedefaultbatch', Mpaveinventtable.mpavedefaultbatch);
            setValue('mpaveva', Mpaveinventtable.mpaveva);
            setValue('pdsdispositioncode', Mpaveinventtable.pdsdispositioncode);
            setValue('quarantineorderonraf', Mpaveinventtable.quarantineorderonraf);
            setValue('routeid', Mpaveinventtable.routeid);
            setValue('dataareaid', Mpaveinventtable.dataareaid);
        } else {
            console.error('Entity not found');
            // Optionally navigate back or show an error
        }
    }, [setType, Mpaveinventtable, setValue]);

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
                    Update Mpaveinventtable
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpaveinventtable;
