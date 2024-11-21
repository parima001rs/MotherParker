import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, FormControlLabel, Checkbox, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';



const UpdateMpinterfaceLocationInventory = () => {
  const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
  const { entities, updateEntity, setType } = useGenericPaginationContext();
  const MpinterfaceLocationInventory = entities.find((u) => u.recid === parseInt(recid));
  const { control, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const [capability, setCapability] = useState([]);
  const location = useLocation(); 


  const fetchCapability = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpinterfaceLocationInventory');
      setCapability(response.data);
    } catch (error) {
      console.error('Error fetching capability data:', error);
    }
  };

  useEffect(() => {
    setType('MpinterfaceLocationInventorys');
    fetchCapability();
  }, [setType]);

  useEffect(() => {
    if (MpinterfaceLocationInventory) {

      setValue('createddatetime', MpinterfaceLocationInventory.createddatetime);
      setValue('interface', MpinterfaceLocationInventory.interface);
      setValue('tableId', MpinterfaceLocationInventory.tableId);
      setValue('batchnum', MpinterfaceLocationInventory.batchnum);
      setValue('processed', MpinterfaceLocationInventory.processed);
      setValue('mplocinvloccreatedby', MpinterfaceLocationInventory.mplocinvloccreatedby);
      setValue('mplocinvloccreateddate', MpinterfaceLocationInventory.mplocinvloccreateddate);
      setValue('mplocinvloccreatedtime', MpinterfaceLocationInventory.mplocinvloccreatedtime);
      setValue('mplocinvlocfacility', MpinterfaceLocationInventory.mplocinvlocfacility);
      setValue('mplocinvlocitemnumber', MpinterfaceLocationInventory.mplocinvlocitemnumber);
      setValue('mplocinvloclocation', MpinterfaceLocationInventory.mplocinvloclocation);
      setValue('mplocinvloclotnumber', MpinterfaceLocationInventory.mplocinvloclotnumber);
      setValue('mplocinvlocquantity', MpinterfaceLocationInventory.mplocinvlocquantity);
      setValue('mplocinvlocsequenceno', MpinterfaceLocationInventory.mplocinvlocsequenceno);
      setValue('mplocinvlocuserid', MpinterfaceLocationInventory.mplocinvlocuserid);
      setValue('mplocinvlocwarehouse', MpinterfaceLocationInventory.mplocinvlocwarehouse);
      setValue('mplocinvloczone', MpinterfaceLocationInventory.mplocinvloczone);
      setValue('mplocinvlotname', MpinterfaceLocationInventory.mplocinvlotname);
      setValue('mplocinvloctransferred', MpinterfaceLocationInventory.mplocinvloctransferred);
      setValue('dataareaid', MpinterfaceLocationInventory.dataareaid);
      //setValue('tableid', MpinterfaceLocationInventory.tableid);





    } else {
      console.error('Entity not found');
      //navigate('/');
    }
  }, [MpinterfaceLocationInventory, setValue, navigate]);

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
              type="date"
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
              type="time"
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
          Update MpinterfaceLocationInventory
        </Button>
      </form>
    </Container>
  );
};

export default UpdateMpinterfaceLocationInventory;
