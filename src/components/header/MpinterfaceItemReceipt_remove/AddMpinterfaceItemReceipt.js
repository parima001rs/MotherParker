
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container,FormControlLabel,Checkbox,  FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';





const AddMpinterfaceItemReceipt = () => {
    const { addEntity, setType } = useGenericContext();
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
        setType('MpinterfaceItemReceipt');
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
    defaultValue={false}
    render={({ field }) => (
        <Checkbox
            {...field}
            label="Processed"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="siteId"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Site ID"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mptobagmarks"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Bag Marks"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mptobatchnumber"
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
    name="mptocontainerno"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Container No"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mptocontractno"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Contract No"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mptodata13"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Data 13"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mptodata2"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Data 2"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mptodata3"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Data 3"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mptodestination"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Destination"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mptoitemnumber"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Item Number"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mptoproexportid"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Pro Export ID"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mptopurchnumber"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Purchase Number"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mptoquantity"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Quantity"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mptorecorddate"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Record Date"
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
        />
    )}
/>
<Controller
    name="mptotransferorderno"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Transfer Order No"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mptotransferred"
    control={control}
    defaultValue={0}
    render={({ field }) => (
        <TextField
            {...field}
            label="Transferred"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mptozone"
    control={control}
    defaultValue={1}
    render={({ field }) => (
        <TextField
            {...field}
            label="Zone"
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


                <Button type="submit" variant="contained" color="primary">
                    Add MpinterfaceItemReceipt
                </Button>
            </form>
        </Container>
    );
};

export default AddMpinterfaceItemReceipt;
