import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container,FormControlLabel,Checkbox, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const UpdateMpinterfaceacktable = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpinterfaceacktable = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

   
    

    useEffect(() => {
        setType('Mpinterfaceacktable');
      
    }, [setType]);

    useEffect(() => {
        if (Mpinterfaceacktable) {
            
            setValue('recid', Mpinterfaceacktable.recid);
            setValue('createddatetime', Mpinterfaceacktable.createddatetime);
            setValue('mperrormessageshort', Mpinterfaceacktable.mperrormessageshort);
            setValue('mpinterfaceackref', Mpinterfaceacktable.mpinterfaceackref);
            setValue('mpinterfaceackstatus', Mpinterfaceacktable.mpinterfaceackstatus);
            setValue('mperrormessagelong', Mpinterfaceacktable.mperrormessagelong);
            setValue('refrecid', Mpinterfaceacktable.refrecid);
            setValue('reftableid', Mpinterfaceacktable.reftableid);
            setValue('interface', Mpinterfaceacktable.interface);
            setValue('notes', Mpinterfaceacktable.notes);
            
            
            
        } else {
            console.error('Entity not found');
            //navigate('/');
        }
    }, [Mpinterfaceacktable, setValue, navigate]);

    const onSubmit = async (data) => {
        try {
            await updateEntity({ recid: parseInt(recid), ...data }, 'recid'); // Passing the primary key field 'recid'
            //navigate('/');
        } catch (error) {
            console.error('Error updating entity:', error);
        }
    };

    return (
        <Container>
            <h2>Update {location.state?.text}</h2>
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
                    Update Mpinterfaceacktable
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpinterfaceacktable;
