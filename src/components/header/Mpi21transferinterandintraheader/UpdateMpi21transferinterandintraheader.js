import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
//import { useGenericContext } from '../../../context/GenericContext';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container,FormControlLabel,Checkbox, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMPI21TRANSFERINTERANDINTRAHEADER = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType, setInterfaceType } = useGenericPaginationContext();  
    const MPI21TRANSFERINTERANDINTRAHEADER = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 
    setInterfaceType(location.state?.interfaceName);


    useEffect(() => {
        setType('MPI21TRANSFERINTERANDINTRAHEADER');
        fetchTableId();
        fetchInterfaces();

        if (MPI21TRANSFERINTERANDINTRAHEADER) {
            
            

            setValue('recid', MPI21TRANSFERINTERANDINTRAHEADER.recid);
            setValue('createddatetime', MPI21TRANSFERINTERANDINTRAHEADER.createddatetime);
            setValue('interface', MPI21TRANSFERINTERANDINTRAHEADER.interface);
            setValue('tableId', MPI21TRANSFERINTERANDINTRAHEADER.tableId);
            setValue('batchnum', MPI21TRANSFERINTERANDINTRAHEADER.batchnum);
            setValue('processed', MPI21TRANSFERINTERANDINTRAHEADER.processed);
            setValue('actionid', MPI21TRANSFERINTERANDINTRAHEADER.actionid);
            setValue('boldate', MPI21TRANSFERINTERANDINTRAHEADER.boldate);
            setValue('bolnumber', MPI21TRANSFERINTERANDINTRAHEADER.bolnumber);
            setValue('broker', MPI21TRANSFERINTERANDINTRAHEADER.broker);
            setValue('companylocation', MPI21TRANSFERINTERANDINTRAHEADER.companylocation);
            setValue('erptransferorderno', MPI21TRANSFERINTERANDINTRAHEADER.erptransferorderno);
            setValue('erptransordertype', MPI21TRANSFERINTERANDINTRAHEADER.erptransordertype);
            setValue('fromlocation', MPI21TRANSFERINTERANDINTRAHEADER.fromlocation);
            setValue('shipvia', MPI21TRANSFERINTERANDINTRAHEADER.shipvia);
            setValue('tolocation', MPI21TRANSFERINTERANDINTRAHEADER.tolocation);
            setValue('trailerid', MPI21TRANSFERINTERANDINTRAHEADER.trailerid);
            setValue('transferdate', MPI21TRANSFERINTERANDINTRAHEADER.transferdate);
            setValue('transferno', MPI21TRANSFERINTERANDINTRAHEADER.transferno);
            setValue('dataareaid', MPI21TRANSFERINTERANDINTRAHEADER.dataareaid);
            setValue('bolreceiveddate', MPI21TRANSFERINTERANDINTRAHEADER.bolreceiveddate);
            setValue('book', MPI21TRANSFERINTERANDINTRAHEADER.book);
            setValue('carriercode', MPI21TRANSFERINTERANDINTRAHEADER.carriercode);
            setValue('dlvmode', MPI21TRANSFERINTERANDINTRAHEADER.dlvmode);
            setValue('modecode', MPI21TRANSFERINTERANDINTRAHEADER.modecode);
            setValue('vendaccount', MPI21TRANSFERINTERANDINTRAHEADER.vendaccount);
            
        }
    }, [setType, MPI21TRANSFERINTERANDINTRAHEADER, setValue]);

    const fetchTableId = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpheaderTables');
        setTableId(response.data);
    };

    const fetchInterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setInterfaces(response.data);
    };

    const onSubmit = async (data) => {
        await updateEntity(data); 
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text} </h2>
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
                    Update MPI21TRANSFERINTERANDINTRAHEADER
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMPI21TRANSFERINTERANDINTRAHEADER;
