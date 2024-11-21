import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, FormControlLabel, Checkbox, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';



const UpdateMpinforRouteVersion = () => {
  const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
  const { entities, updateEntity, setType } = useGenericPaginationContext();
  debugger
  const MpinforRouteVersion = entities.find((u) => u.recid === parseInt(recid));
  const { control, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const [capability, setCapability] = useState([]);
  const location = useLocation(); 


  const fetchCapability = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpinforRouteVersion');
      setCapability(response.data);
    } catch (error) {
      console.error('Error fetching capability data:', error);
    }
  };

  useEffect(() => {
    setType('MpinforRouteVersions');
    fetchCapability();
  }, [setType]);

  useEffect(() => {
    if (MpinforRouteVersion) {
        setValue('recid', MpinforRouteVersion.recid);


      setValue('createddatetime', MpinforRouteVersion.createddatetime);
      setValue('interface', MpinforRouteVersion.interface);
      setValue('tableid', MpinforRouteVersion.tableid);
      setValue('batchnum', MpinforRouteVersion.batchnum);
      setValue('processed', MpinforRouteVersion.processed);
      setValue('itemId', MpinforRouteVersion.itemId);
      setValue('name', MpinforRouteVersion.name)
      setValue('dataareaid', MpinforRouteVersion.dataareaid)

      setValue('active', MpinforRouteVersion.active);
      setValue('approved', MpinforRouteVersion.approved);
      setValue('approver', MpinforRouteVersion.approver);
      setValue('construction', MpinforRouteVersion.construction);
      setValue('fromDate', MpinforRouteVersion.fromDate);
      setValue('fromQty', MpinforRouteVersion.fromQty);
      setValue('inventDimId', MpinforRouteVersion.inventDimId);
      setValue('itemId', MpinforRouteVersion.itemId);
      setValue('name', MpinforRouteVersion.name);
      setValue('routeId', MpinforRouteVersion.routeId);
     setValue('site', MpinforRouteVersion.site);
     setValue('toDate', MpinforRouteVersion.toDate);


   
      





    } else {
      console.error('Entity not found');
      //navigate('/');
    }
  }, [MpinforRouteVersion, setValue, navigate]);

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
            name="tableid"
            control={control}
            render={({ field }) => (
                <TextField
                    {...field}
                    label="Table ID"
                    fullWidth
                    margin="normal"
                    type="number"
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
  name="active"
  control={control}
  defaultValue=""// Assuming a boolean field
  render={({ field }) => (
    <FormControlLabel
      control={<Checkbox {...field} checked={field.value} />}
      label="Active"
    />
  )}
/>
<Controller
  name="approved"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <FormControlLabel
      control={<Checkbox {...field} checked={field.value} />}
      label="Approved"
    />
  )}
/>
<Controller
  name="approver"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="Approver"
      fullWidth
      margin="normal"
    />
  )}
/>
<Controller
  name="construction"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="Construction"
      fullWidth
      margin="normal"
    />
  )}
/>
<Controller
  name="fromDate"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="From Date"
      type="datetime-local"
      fullWidth
      margin="normal"
      InputLabelProps={{ shrink: true }}
    />
  )}
/>
<Controller
  name="fromQty"
  control={control}
  defaultValue=""// Assuming it's a number
  render={({ field }) => (
    <TextField
      {...field}
      label="From Quantity"
      type="number"
      fullWidth
      margin="normal"
    />
  )}
/>
<Controller
  name="inventDimId"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="Inventory Dimension ID"
      fullWidth
      margin="normal"
    />
  )}
/>
<Controller
  name="itemId"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="Item ID"
      fullWidth
      margin="normal"
    />
  )}
/>
<Controller
  name="name"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="Name"
      fullWidth
      margin="normal"
    />
  )}
/>
<Controller
  name="routeId"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="Route ID"
      fullWidth
      margin="normal"
    />
  )}
/>
<Controller
  name="site"
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
  name="toDate"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="To Date"
      type="datetime-local"
      fullWidth
      margin="normal"
      InputLabelProps={{ shrink: true }}
    />
  )}
/>
        <Button type="submit" variant="contained" color="primary">
          Update MpinforRouteVersion
        </Button>
      </form>
    </Container>
  );
};

export default UpdateMpinforRouteVersion;
