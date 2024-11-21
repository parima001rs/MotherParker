import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container, FormControlLabel, Checkbox, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';



const UpdateMpinforWrkCtrResourceGroup = () => {
  const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
  const { entities, updateEntity, setType } = useGenericContext();
  debugger
  const MpinforWrkCtrResourceGroup = entities.find((u) => u.recid === parseInt(recid));
  const { control, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const [capability, setCapability] = useState([]);
  const location = useLocation(); 


  const fetchCapability = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpinforWrkCtrResourceGroup');
      setCapability(response.data);
    } catch (error) {
      console.error('Error fetching capability data:', error);
    }
  };

  useEffect(() => {
    setType('MpinforWrkCtrResourceGroups');
    fetchCapability();
  }, [setType]);

  useEffect(() => {
    if (MpinforWrkCtrResourceGroup) {
        setValue('recid', MpinforWrkCtrResourceGroup.recid);


      setValue('createddatetime', MpinforWrkCtrResourceGroup.createddatetime);
      setValue('interface', MpinforWrkCtrResourceGroup.interface);
      setValue('tableid', MpinforWrkCtrResourceGroup.tableid);
      setValue('batchnum', MpinforWrkCtrResourceGroup.batchnum);
      setValue('processed', MpinforWrkCtrResourceGroup.processed);
      setValue('itemId', MpinforWrkCtrResourceGroup.itemId);
      setValue('name', MpinforWrkCtrResourceGroup.name)
      setValue('dataareaid', MpinforWrkCtrResourceGroup.dataareaid)

      setValue('inputInventLocationId', MpinforWrkCtrResourceGroup.inputInventLocationId);
      setValue('inputWmslocationId', MpinforWrkCtrResourceGroup.inputWmslocationId);
      setValue('isWorkCell', MpinforWrkCtrResourceGroup.isWorkCell);
      setValue('outputInventLocationId', MpinforWrkCtrResourceGroup.outputInventLocationId);
      setValue('outputWmslocationId', MpinforWrkCtrResourceGroup.outputWmslocationId);
      setValue('siteId', MpinforWrkCtrResourceGroup.siteId);
      setValue('wrkCtrId', MpinforWrkCtrResourceGroup.wrkCtrId);
   
      





    } else {
      console.error('Entity not found');
      //navigate('/');
    }
  }, [MpinforWrkCtrResourceGroup, setValue, navigate]);

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
  name="inputInventLocationId"
  control={control}
  defaultValue="" // Assuming it can be empty
  render={({ field }) => (
    <TextField
      {...field}
      label="Input Inventory Location ID"
      fullWidth
      margin="normal"
    />
  )}
/>
<Controller
  name="inputWmslocationId"
  control={control}
  defaultValue="" // Assuming it can be empty
  render={({ field }) => (
    <TextField
      {...field}
      label="Input WMS Location ID"
      fullWidth
      margin="normal"
    />
  )}
/>
<Controller
  name="isWorkCell"
  control={control}
  defaultValue={false} // Assuming a boolean field
  render={({ field }) => (
    <FormControlLabel
      control={<Checkbox {...field} checked={field.value} />}
      label="Is Work Cell"
    />
  )}
/>
<Controller
  name="outputInventLocationId"
  control={control}
  defaultValue="" // Assuming it can be empty
  render={({ field }) => (
    <TextField
      {...field}
      label="Output Inventory Location ID"
      fullWidth
      margin="normal"
    />
  )}
/>
<Controller
  name="outputWmslocationId"
  control={control}
  defaultValue="" // Assuming it can be empty
  render={({ field }) => (
    <TextField
      {...field}
      label="Output WMS Location ID"
      fullWidth
      margin="normal"
    />
  )}
/>
<Controller
  name="siteId"
  control={control}
  defaultValue="01" // Defaulting to the provided value
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
  name="wrkCtrId"
  control={control}
  defaultValue="3100" // Defaulting to the provided value
  render={({ field }) => (
    <TextField
      {...field}
      label="Work Center ID"
      fullWidth
      margin="normal"
    />
  )}
/>
        <Button type="submit" variant="contained" color="primary">
          Update MpinforWrkCtrResourceGroup
        </Button>
      </form>
    </Container>
  );
};

export default UpdateMpinforWrkCtrResourceGroup;
