import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container, FormControlLabel, Checkbox, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';



const UpdateMpinforProdBatchOrderHeaderEntity = () => {
  const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
  const { entities, updateEntity, setType } = useGenericContext();
  debugger
  const MpinforProdBatchOrderHeaderEntity = entities.find((u) => u.recid === parseInt(recid));
  const { control, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const [capability, setCapability] = useState([]);
  const location = useLocation(); 


  const fetchCapability = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpinforProdBatchOrderHeaderEntity');
      setCapability(response.data);
    } catch (error) {
      console.error('Error fetching capability data:', error);
    }
  };

  useEffect(() => {
    setType('MpinforProdBatchOrderHeaderEntitys');
    fetchCapability();
  }, [setType]);

  useEffect(() => {
    if (MpinforProdBatchOrderHeaderEntity) {
        setValue('recid', MpinforProdBatchOrderHeaderEntity.recid);


      setValue('createddatetime', MpinforProdBatchOrderHeaderEntity.createddatetime);
      setValue('interface', MpinforProdBatchOrderHeaderEntity.interface);
      setValue('tableid', MpinforProdBatchOrderHeaderEntity.tableid);
      setValue('batchnum', MpinforProdBatchOrderHeaderEntity.batchnum);
      setValue('processed', MpinforProdBatchOrderHeaderEntity.processed);
      setValue('itemId', MpinforProdBatchOrderHeaderEntity.itemId);
      setValue('name', MpinforProdBatchOrderHeaderEntity.name)
      setValue('dataareaid', MpinforProdBatchOrderHeaderEntity.dataareaid)

      setValue('prodId', MpinforProdBatchOrderHeaderEntity.prodId);
      setValue('itemId', MpinforProdBatchOrderHeaderEntity.itemId);
      setValue('qtySched', MpinforProdBatchOrderHeaderEntity.qtySched);
      setValue('schedStart', MpinforProdBatchOrderHeaderEntity.schedStart);
      setValue('schedEnd', MpinforProdBatchOrderHeaderEntity.schedEnd);
      setValue('schedFromTime', MpinforProdBatchOrderHeaderEntity.schedFromTime);
      setValue('schedToTime', MpinforProdBatchOrderHeaderEntity.schedToTime);
      setValue('wrkCtrIdSched', MpinforProdBatchOrderHeaderEntity.wrkCtrIdSched);

   
      





    } else {
      console.error('Entity not found');
      //navigate('/');
    }
  }, [MpinforProdBatchOrderHeaderEntity, setValue, navigate]);

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
            label="Prod Id"
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
            label="Item Id"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
        />
    )}
/>

<Controller 
    name="qtySched"
    control={control}
    defaultValue=""
    disabled
    render={({ field }) => (
        <TextField
            {...field}
            label="Qty Sched"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
        />
    )}
/>

<Controller 
    name="schedStart"
    control={control}
    defaultValue=""
    disabled
    render={({ field }) => (
        <TextField
            {...field}
            label="Sched Start"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
        />
    )}
/>

<Controller 
    name="schedEnd"
    control={control}
    defaultValue=""
    disabled
    render={({ field }) => (
        <TextField
            {...field}
            label="Sched End"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
        />
    )}
/>

<Controller 
    name="schedFromTime"
    control={control}
    defaultValue=""
    disabled
    render={({ field }) => (
        <TextField
            {...field}
            label="Sched From Time"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
        />
    )}
/>

<Controller 
    name="schedToTime"
    control={control}
    defaultValue=""
    disabled
    render={({ field }) => (
        <TextField
            {...field}
            label="Sched To Time"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
        />
    )}
/>

<Controller 
    name="wrkCtrIdSched"
    control={control}
    defaultValue=""
    disabled
    render={({ field }) => (
        <TextField
            {...field}
            label="Wrk Ctr Id Sched"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
        />
    )}
/>
        <Button type="submit" variant="contained" color="primary">
          Update MpinforProdBatchOrderHeaderEntity
        </Button>
      </form>
    </Container>
  );
};

export default UpdateMpinforProdBatchOrderHeaderEntity;
