import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container,FormControlLabel,Checkbox, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';



const UpdateMppaymentOutboundDataContract = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericPaginationContext();
    const MppaymentOutboundDataContract = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [capability, setCapability] = useState([]);
    const location = useLocation(); 


    const fetchCapability = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MppaymentOutboundDataContract');
            setCapability(response.data);
        } catch (error) {
            console.error('Error fetching capability data:', error);
        }
    };

    useEffect(() => {
        setType('MppaymentOutboundDataContracts');
        fetchCapability();
    }, [setType]);

    useEffect(() => {
        if (MppaymentOutboundDataContract) {
            setValue('recid', MppaymentOutboundDataContract.recid);
            setValue('createddatetime', MppaymentOutboundDataContract.createddatetime);
            setValue('interface', MppaymentOutboundDataContract.interface);
            setValue('batchnum', MppaymentOutboundDataContract.batchnum);
            setValue('processed', MppaymentOutboundDataContract.processed);
            setValue('tableId', MppaymentOutboundDataContract.tableId); // Updated to match JSON field name
            setValue('reference', MppaymentOutboundDataContract.reference);
            setValue('paymentAmount', MppaymentOutboundDataContract.paymentAmount);
            setValue('paymentDate', MppaymentOutboundDataContract.paymentDate);
            setValue('paymentRequestId', MppaymentOutboundDataContract.paymentRequestId);
            setValue('currencyCode', MppaymentOutboundDataContract.currencyCode);
            setValue('dataareaid', MppaymentOutboundDataContract.dataareaid);
            
            
        } else {
            console.error('Entity not found');
            //navigate('/');
        }
    }, [MppaymentOutboundDataContract, setValue, navigate]);

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
    name="tableId"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Table ID"
            type="number"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="reference"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Reference"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="paymentAmount"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Payment Amount"
            type="number"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="paymentDate"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Payment Date"
            type="datetime-local"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
        />
    )}
/>
<Controller
    name="paymentRequestId"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Payment Request ID"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="currencyCode"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Currency Code"
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
                    Update MppaymentOutboundDataContract
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMppaymentOutboundDataContract;
