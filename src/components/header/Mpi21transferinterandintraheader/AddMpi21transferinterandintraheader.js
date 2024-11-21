
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container,FormControlLabel,Checkbox,  FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';



const AddMpi21transferinterandintraheader = () => {
    const { addEntity, setType } = useGenericPaginationContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [capability, setCapability] = useState([]);
    const location = useLocation(); 


    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    const fetchCapability = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Wrkctrcapabilities');
        setCapability(response.data);
    };

    useEffect(() => {
        setType('Mpi21transferinterandintraheader');
        fetchCapability();
    }, [setType]);

    return (
        <Container>
            <BackButton />
            <h2>Add {location.state?.text} </h2>
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
    name="tableId"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Table ID"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="batchnum"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Batch Number"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="processed"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Processed"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="actionid"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Action ID"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="boldate"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="BOL Date"
            type="datetime-local"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
        />
    )}
/>
<Controller
    name="bolnumber"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="BOL Number"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="broker"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Broker"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="companylocation"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Company Location"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="erptransferorderno"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="ERP Transfer Order No"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="erptransordertype"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="ERP Trans Order Type"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="fromlocation"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="From Location"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="shipvia"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Ship Via"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="tolocation"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="To Location"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="trailerid"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Trailer ID"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="transferdate"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Transfer Date"
            type="datetime-local"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
        />
    )}
/>
<Controller
    name="transferno"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Transfer No"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="dataareaid"
    control={control}
    defaultValue=""
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
    name="bolreceiveddate"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="BOL Received Date"
            type="datetime-local"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
        />
    )}
/>
<Controller
    name="book"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Book"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="carriercode"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Carrier Code"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="dlvmode"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Delivery Mode"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="modecode"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Mode Code"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="vendaccount"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Vendor Account"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="tableId"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Table ID"
            fullWidth
            margin="normal"
        />
    )}
/>

                <Button type="submit" variant="contained" color="primary">
                    Add Mpi21transferinterandintraheader
                </Button>
            </form>
        </Container>
    );
};

export default AddMpi21transferinterandintraheader;
