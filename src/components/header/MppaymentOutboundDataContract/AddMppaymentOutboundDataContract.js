
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container,FormControlLabel,Checkbox,  FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';



const AddMppaymentOutboundDataContract = () => {
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
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MppaymentOutboundDataContract');
        setCapability(response.data);
    };

    useEffect(() => {
        setType('MppaymentOutboundDataContract');
        fetchCapability();
    }, [setType]);

    return (
        <Container>
            <BackButton />
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
                    Add MppaymentOutboundDataContract
                </Button>
            </form>
        </Container>
    );
};

export default AddMppaymentOutboundDataContract;
