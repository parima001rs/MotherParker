import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container, FormControlLabel, Checkbox, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';



const UpdateMpinforProdOrderCancel = () => {
  const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
  const { entities, updateEntity, setType } = useGenericContext();
  debugger
  const MpinforProdOrderCancel = entities.find((u) => u.recid === parseInt(recid));
  const { control, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const [capability, setCapability] = useState([]);
  const location = useLocation(); 


  const fetchCapability = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpinforProdOrderCancel');
      setCapability(response.data);
    } catch (error) {
      console.error('Error fetching capability data:', error);
    }
  };

  useEffect(() => {
    setType('MpinforProdOrderCancels');
    fetchCapability();
  }, [setType]);

  useEffect(() => {
    if (MpinforProdOrderCancel) {
    setValue('recid', MpinforProdOrderCancel.recid);


      setValue('createddatetime', MpinforProdOrderCancel.createddatetime);
      setValue('interface', MpinforProdOrderCancel.interface);
      setValue('tableid', MpinforProdOrderCancel.tableid);
      setValue('batchnum', MpinforProdOrderCancel.batchnum);
      setValue('processed', MpinforProdOrderCancel.processed);
      setValue('itemId', MpinforProdOrderCancel.itemId);
      setValue('name', MpinforProdOrderCancel.name)
      setValue('dataareaid', MpinforProdOrderCancel.dataareaid)

      setValue('prodId', MpinforProdOrderCancel.ProdId);
      setValue('itemId', MpinforProdOrderCancel.ItemId);
      setValue('siteId', MpinforProdOrderCancel.SiteId);
      setValue('inventLocationId', MpinforProdOrderCancel.InventLocationId);
   
      





    } else {
      console.error('Entity not found');
      //navigate('/');
    }
  }, [MpinforProdOrderCancel, setValue, navigate]);

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
          name="recid"
          control={control}
          defaultValue=""
          disabled
          render={({ field }) => (
            <TextField
              {...field}
              label="Recid"
              
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
          )}
        />


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
            <TextField
              {...field}
              label="Processed"
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
              label="Dataareaid"
              fullWidth
              margin="normal"
            />
          )}
        />
           <Controller 
    name="prodId"
    control={control}
    defaultValue=""
    disabled
    render={({ field }) => (
        <TextField
            {...field}
            label="ProdId"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
        />
    )}
/>

<Controller 
    name="itemId"
    control={control}
    defaultValue=""
    disabled
    render={({ field }) => (
        <TextField
            {...field}
            label="ItemId"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
        />
    )}
/>

<Controller 
    name="siteId"
    control={control}
    defaultValue=""
    disabled
    render={({ field }) => (
        <TextField
            {...field}
            label="SiteId"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
        />
    )}
/>

<Controller 
    name="inventLocationId"
    control={control}
    defaultValue=""
    disabled
    render={({ field }) => (
        <TextField
            {...field}
            label="Invent Location Id"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
        />
    )}
/>
        <Button type="submit" variant="contained" color="primary">
          Update MpinforProdOrderCancel
        </Button>
      </form>
    </Container>
  );
};

export default UpdateMpinforProdOrderCancel;
