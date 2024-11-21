import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container, Checkbox, FormControlLabel } from '@mui/material'; // Added missing imports
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const AddMpprobatequipmentxreftable = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('Mpprobatequipmentxreftables');
    }, [setType]);

    return (
        <Container>
        <BackButton />
        <h2>Add {location.state?.text}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

            <Controller
                name="recid"
                control={control}
                defaultValue=""
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
                defaultValue=""
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
                defaultValue=""
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
                defaultValue=""
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
                        label="ProbatEqId"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="type"
                control={control}
                defaultValue=""
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
                defaultValue=""
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
                defaultValue=""
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
                defaultValue=""
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
                defaultValue=""
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
                Add Mpprobatequipmentxreftable
            </Button>
        </form>
    </Container>
    );
};

export default AddMpprobatequipmentxreftable;
