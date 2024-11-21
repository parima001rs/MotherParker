import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container,FormControlLabel,Checkbox, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMpinterfaceItemReceipt = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericContext();
    const MpinterfaceItemReceipt = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [capability, setCapability] = useState([]);
    const location = useLocation(); 


    const fetchCapability = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpinterfaceItemReceipt');
            setCapability(response.data);
        } catch (error) {
            console.error('Error fetching capability data:', error);
        }
    };

    useEffect(() => {
        setType('MpinterfaceItemReceipt');
        fetchCapability();
    }, [setType]);

    useEffect(() => {
        if (MpinterfaceItemReceipt) {
           
            setValue('createddatetime', MpinterfaceItemReceipt.createddatetime);
            setValue('interface', MpinterfaceItemReceipt.interface);
            setValue('tableid', MpinterfaceItemReceipt.tableid);
            setValue('batchnum', MpinterfaceItemReceipt.batchnum);
            setValue('processed', MpinterfaceItemReceipt.processed);
            setValue('siteId', MpinterfaceItemReceipt.siteId);
            setValue('mptobagmarks', MpinterfaceItemReceipt.mptobagmarks);
            setValue('mptobatchnumber', MpinterfaceItemReceipt.mptobatchnumber);
            setValue('mptocontainerno', MpinterfaceItemReceipt.mptocontainerno);
            setValue('mptocontractno', MpinterfaceItemReceipt.mptocontractno);
            setValue('mptodata13', MpinterfaceItemReceipt.mptodata13);
            setValue('mptodata2', MpinterfaceItemReceipt.mptodata2);
            setValue('mptodata3', MpinterfaceItemReceipt.mptodata3);
            setValue('mptodestination', MpinterfaceItemReceipt.mptodestination);
            setValue('mptoitemnumber', MpinterfaceItemReceipt.mptoitemnumber);
            setValue('mptoproexportid', MpinterfaceItemReceipt.mptoproexportid);
            setValue('mptopurchnumber', MpinterfaceItemReceipt.mptopurchnumber);
            setValue('mptoquantity', MpinterfaceItemReceipt.mptoquantity);
            setValue('mptorecorddate', MpinterfaceItemReceipt.mptorecorddate);
            setValue('mptotransferorderno', MpinterfaceItemReceipt.mptotransferorderno);
            setValue('mptotransferred', MpinterfaceItemReceipt.mptotransferred);
            setValue('mptozone', MpinterfaceItemReceipt.mptozone);
            setValue('dataareaid', MpinterfaceItemReceipt.dataareaid);
            
            
            
        } else {
            console.error('Entity not found');
            //navigate('/');
        }
    }, [MpinterfaceItemReceipt, setValue, navigate]);

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
                    Update MpinterfaceItemReceipt
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpinterfaceItemReceipt;
