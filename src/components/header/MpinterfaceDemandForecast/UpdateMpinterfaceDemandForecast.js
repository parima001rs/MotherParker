import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container,FormControlLabel,Checkbox, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';


const UpdateMpinterfaceDemandForecast = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericPaginationContext();
    const MpinterfaceDemandForecast = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [capability, setCapability] = useState([]);
    const location = useLocation(); 


    const fetchCapability = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpinterfaceDemandForecast');
            setCapability(response.data);
        } catch (error) {
            console.error('Error fetching capability data:', error);
        }
    };

    useEffect(() => {
        setType('MpinterfaceDemandForecast');
        fetchCapability();
    }, [setType]);

    useEffect(() => {
        if (MpinterfaceDemandForecast) {
            setValue('recid', MpinterfaceDemandForecast.recid);
            setValue('createddatetime', MpinterfaceDemandForecast.createddatetime);
            setValue('interface', MpinterfaceDemandForecast.interface);
            setValue('tableid', MpinterfaceDemandForecast.tableid);
            setValue('batchnum', MpinterfaceDemandForecast.batchnum);
            setValue('processed', MpinterfaceDemandForecast.processed);
            setValue('mpforecastmodel', MpinterfaceDemandForecast.mpforecastmodel);
            setValue('mpperiodkey', MpinterfaceDemandForecast.mpperiodkey);
            setValue('mpasofmonth', MpinterfaceDemandForecast.mpasofmonth);
            setValue('mpasofyear', MpinterfaceDemandForecast.mpasofyear);
            setValue('mpcustomerindirectconsolidation', MpinterfaceDemandForecast.mpcustomerindirectconsolidation);
            setValue('mpforecastlevel', MpinterfaceDemandForecast.mpforecastlevel);
            setValue('mpitemlevel', MpinterfaceDemandForecast.mpitemlevel);
            setValue('mpresultfc01', MpinterfaceDemandForecast.mpresultfc01);
            setValue('mpresultfc02', MpinterfaceDemandForecast.mpresultfc02);
            setValue('mpresultfc03', MpinterfaceDemandForecast.mpresultfc03);
            setValue('mpresultfc04', MpinterfaceDemandForecast.mpresultfc04);
            setValue('mpresultfc05', MpinterfaceDemandForecast.mpresultfc05);
            setValue('mpresultfc06', MpinterfaceDemandForecast.mpresultfc06);
            setValue('mpresultfc07', MpinterfaceDemandForecast.mpresultfc07);
            setValue('mpresultfc08', MpinterfaceDemandForecast.mpresultfc08);
            setValue('mpresultfc09', MpinterfaceDemandForecast.mpresultfc09);
            setValue('mpresultfc10', MpinterfaceDemandForecast.mpresultfc10);
            setValue('mpresultfc11', MpinterfaceDemandForecast.mpresultfc11);
            setValue('mpresultfc12', MpinterfaceDemandForecast.mpresultfc12);
            setValue('mpresultfc13', MpinterfaceDemandForecast.mpresultfc13);
            setValue('mpresultfc14', MpinterfaceDemandForecast.mpresultfc14);
            setValue('mpresultfc15', MpinterfaceDemandForecast.mpresultfc15);
            setValue('mpresultfc16', MpinterfaceDemandForecast.mpresultfc16);
            setValue('mpresultfc17', MpinterfaceDemandForecast.mpresultfc17);
            setValue('mpresultfc18', MpinterfaceDemandForecast.mpresultfc18);
            setValue('mpresultfc19', MpinterfaceDemandForecast.mpresultfc19);
            setValue('mpresultfc20', MpinterfaceDemandForecast.mpresultfc20);
            setValue('mpresultfc21', MpinterfaceDemandForecast.mpresultfc21);
            setValue('mpresultfc22', MpinterfaceDemandForecast.mpresultfc22);
            setValue('mpresultfc23', MpinterfaceDemandForecast.mpresultfc23);
            setValue('mpresultfc24', MpinterfaceDemandForecast.mpresultfc24);
            setValue('mpsite', MpinterfaceDemandForecast.mpsite);
            setValue('mpwhse', MpinterfaceDemandForecast.mpwhse);
            setValue('dataareaid', MpinterfaceDemandForecast.dataareaid);
            setValue('status', MpinterfaceDemandForecast.status);
            
            
            
        } else {
            console.error('Entity not found');
            //navigate('/');
        }
    }, [MpinterfaceDemandForecast, setValue, navigate]);

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
            <BackButton />
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
                    Update MpinterfaceDemandForecast
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpinterfaceDemandForecast;
