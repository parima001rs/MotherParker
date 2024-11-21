
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container,FormControlLabel,Checkbox,  FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const AddMpinterfaceLocationInventory = () => {
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
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpinterfaceLocationInventory');
        setCapability(response.data);
    };

    useEffect(() => {
        setType('MpinterfaceLocationInventory');
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
      name="mplocinvloccreatedby"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          label="Created By"
          fullWidth
          margin="normal"
        />
      )}
    />
    <Controller
      name="mplocinvloccreateddate"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          label="Created Date"
          
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
      )}
    />
    <Controller
      name="mplocinvloccreatedtime"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          label="Created Time"
          
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
      )}
    />
    <Controller
      name="mplocinvlocfacility"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          label="Facility"
          fullWidth
          margin="normal"
        />
      )}
    />
    <Controller
      name="mplocinvlocitemnumber"
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
      name="mplocinvloclocation"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          label="Location"
          fullWidth
          margin="normal"
        />
      )}
    />
    <Controller
      name="mplocinvloclotnumber"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          label="Lot Number"
          fullWidth
          margin="normal"
        />
      )}
    />
    <Controller
      name="mplocinvlocquantity"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          label="Quantity"
          type="number"
          fullWidth
          margin="normal"
        />
      )}
    />
    <Controller
      name="mplocinvlocsequenceno"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          label="Sequence No"
          type="number"
          fullWidth
          margin="normal"
        />
      )}
    />
    <Controller
      name="mplocinvlocuserid"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          label="User ID"
          fullWidth
          margin="normal"
        />
      )}
    />
    <Controller
      name="mplocinvlocwarehouse"
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
      name="mplocinvloczone"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          label="Zone"
          type="number"
          fullWidth
          margin="normal"
        />
      )}
    />
    <Controller
      name="mplocinvlotname"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          label="Lot Name"
          fullWidth
          margin="normal"
        />
      )}
    />
    <Controller
      name="mplocinvloctransferred"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          label="Transferred"
          type="number"
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
          label="Dataarea ID"
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

                <Button type="submit" variant="contained" color="primary">
                    Add MpinterfaceLocationInventory
                </Button>
            </form>
        </Container>
    );
};

export default AddMpinterfaceLocationInventory;
