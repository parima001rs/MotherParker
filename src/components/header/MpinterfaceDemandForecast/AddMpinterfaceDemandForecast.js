
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container,FormControlLabel,Checkbox,  FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const AddMpinterfaceDemandForecast = () => {
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
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpinterfaceDemandForecast');
        setCapability(response.data);
    };

    useEffect(() => {
        setType('MpinterfaceDemandForecast');
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
    name="tableid"
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
    name="mpforecastmodel"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Forecast Model"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpperiodkey"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Period Key"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpasofmonth"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="As of Month"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpasofyear"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="As of Year"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpcustomerindirectconsolidation"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Customer Indirect Consolidation"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpforecastlevel"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Forecast Level"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpitemlevel"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Item Level"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpresultfc01"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Result FC01"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpresultfc02"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Result FC02"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpresultfc03"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Result FC03"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpresultfc04"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Result FC04"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpresultfc05"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Result FC05"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpresultfc06"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Result FC06"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpresultfc07"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Result FC07"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpresultfc08"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Result FC08"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpresultfc09"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Result FC09"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpresultfc10"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Result FC10"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpresultfc11"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Result FC11"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpresultfc12"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Result FC12"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpresultfc13"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Result FC13"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpresultfc14"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Result FC14"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpresultfc15"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Result FC15"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpresultfc16"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Result FC16"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpresultfc17"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Result FC17"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpresultfc18"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Result FC18"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpresultfc19"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Result FC19"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpresultfc20"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Result FC20"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpresultfc21"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Result FC21"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpresultfc22"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Result FC22"
            fullWidth
            margin="normal"
        />
    )}
/>

<Controller
    name="mpresultfc23"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Result FC23"
            fullWidth
            margin="normal"
        />
    )}
/>

<Controller
    name="mpresultfc24"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Result FC24"
            fullWidth
            margin="normal"
        />
    )}
/>

<Controller
    name="mpsite"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Site"
            fullWidth
            margin="normal"
        />
    )}
/>

<Controller
    name="mpwhse"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Warehouse"
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


                <Button type="submit" variant="contained" color="primary">
                    Add MpinterfaceDemandForecast
                </Button>
            </form>
        </Container>
    );
};

export default AddMpinterfaceDemandForecast;
