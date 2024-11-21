import React, { useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container, Checkbox, FormControlLabel } from '@mui/material'; // Added missing imports
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMpprobatequipmentxreftable = () => {
    const { recid } = useParams(); // Using 'recid' as the primary key
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpprobatequipmentxreftable = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        setType('Mpprobatequipmentxreftables');
        if (Mpprobatequipmentxreftable) {
            setValue('recid', Mpprobatequipmentxreftable.recid);
          
            // Set additional values as needed
            setValue('createddatetime', Mpprobatequipmentxreftable.createddatetime);
            setValue('status', Mpprobatequipmentxreftable.status);
            setValue('facility', Mpprobatequipmentxreftable.facility);
            setValue('probatEqId', Mpprobatequipmentxreftable.probatEqId);
            setValue('type', Mpprobatequipmentxreftable.type);
            setValue('groupId', Mpprobatequipmentxreftable.groupId);
            setValue('machineId', Mpprobatequipmentxreftable.machineId);
            setValue('equipmentGroupPos', Mpprobatequipmentxreftable.equipmentGroupPos);
            setValue('machineWholeBean', Mpprobatequipmentxreftable.machineWholeBean);
            setValue('machineGround', Mpprobatequipmentxreftable.machineGround);
            setValue('machineFlavor', Mpprobatequipmentxreftable.machineFlavor);
        } else {
            console.error('Entity not found');
            // Optionally navigate back or show an error
        }
    }, [setType, Mpprobatequipmentxreftable, setValue]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data }, 'recid'); // Update using the primary key 'recid'
        // Optionally navigate back after update
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
                defaultValue="6000000074"
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
                name="createddatetime"
                control={control}
                defaultValue="2024-03-04T16:25:32"
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Created Date"
                        fullWidth
                        margin="normal"
                        disabled
                    />
                )}
            />



    

<Controller
                name="status"
                control={control}
                defaultValue="01"
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Status"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="facility"
                control={control}
                defaultValue="01"
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Facility"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="probatEqId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Probat Equipment ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="type"
                control={control}
                defaultValue="P"
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Type"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="groupId"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Group ID"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />

            <Controller
                name="machineId"
                control={control}
                defaultValue="3180-01"
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Machine ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="equipmentGroupPos"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Equipment Group Position"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />

            <Controller
                name="machineWholeBean"
                control={control}
                defaultValue="0"
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Machine Whole Bean"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="machineGround"
                control={control}
                defaultValue="01-7017"
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Machine Ground"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="machineFlavor"
                control={control}
                defaultValue="0"
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Machine Flavor"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Button type="submit" variant="contained" color="primary">
                Update Mpprobatequipmentxreftable
            </Button>
        </form>
    </Container>
    );
};

export default UpdateMpprobatequipmentxreftable;
