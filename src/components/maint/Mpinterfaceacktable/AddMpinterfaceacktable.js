import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container ,FormControlLabel,Checkbox} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useLocation } from 'react-router-dom';


const AddMpinterfaceacktable = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('Mpinterfaceacktable');
    }, [setType]);

    return (
        <Container>
            <h2>Add {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                
           

<Controller
    name="createddatetime"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Created DateTime"
            type="datetime-local"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
        />
    )}
/>
<Controller
    name="mperrormessageshort"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Error Message Short"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpinterfaceackref"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Interface Ack Ref"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpinterfaceackstatus"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Interface Ack Status"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mperrormessagelong"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Error Message Long"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="refrecid"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Ref Recid"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="reftableid"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Ref Table ID"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="interface"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Interface"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="notes"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Notes"
            fullWidth
            margin="normal"
        />
    )}
/>

                <Button type="submit" variant="contained" color="primary">
                    Add Mpinterfaceacktable
                </Button>
            </form>
        </Container>
    );
};

export default AddMpinterfaceacktable;
