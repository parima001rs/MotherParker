import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container, FormControlLabel, Checkbox, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';



const UpdateMpinforWrkCtrTable = () => {
  const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
  const { entities, updateEntity, setType } = useGenericContext();
  debugger
  const MpinforWrkCtrTable = entities.find((u) => u.recid === parseInt(recid));
  const { control, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const [capability, setCapability] = useState([]);
  const location = useLocation(); 


  const fetchCapability = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpinforWrkCtrTable');
      setCapability(response.data);
    } catch (error) {
      console.error('Error fetching capability data:', error);
    }
  };

  useEffect(() => {
    setType('MpinforWrkCtrTables');
    fetchCapability();
  }, [setType]);

  useEffect(() => {
    if (MpinforWrkCtrTable) {
        setValue('recid', MpinforWrkCtrTable.recid);


      setValue('createddatetime', MpinforWrkCtrTable.createddatetime);
      setValue('interface', MpinforWrkCtrTable.interface);
      setValue('tableid', MpinforWrkCtrTable.tableid);
      setValue('batchnum', MpinforWrkCtrTable.batchnum);
      setValue('processed', MpinforWrkCtrTable.processed);
      setValue('itemId', MpinforWrkCtrTable.itemId);
      setValue('name', MpinforWrkCtrTable.name)
      setValue('dataareaid', MpinforWrkCtrTable.dataareaid)

      setValue('routeGroupId', MpinforWrkCtrTable.routeGroupId);
      setValue('toHours', MpinforWrkCtrTable.toHours);
      setValue('vendId', MpinforWrkCtrTable.vendId);
      setValue('wrkCtrId', MpinforWrkCtrTable.wrkCtrId);
      setValue('wrkCtrType', MpinforWrkCtrTable.wrkCtrType);
      setValue('wkcId', MpinforWrkCtrTable.wkcId);
      setValue('bottleneckResource', MpinforWrkCtrTable.bottleneckResource);
      setValue('capacity', MpinforWrkCtrTable.capacity);
      setValue('capacityBatch', MpinforWrkCtrTable.capacityBatch);
      setValue('capLimited', MpinforWrkCtrTable.capLimited);
      setValue('effectivityPct', MpinforWrkCtrTable.effectivityPct);
      setValue('errorPct', MpinforWrkCtrTable.errorPct);
      setValue('exclusive', MpinforWrkCtrTable.exclusive);
      setValue('name', MpinforWrkCtrTable.name);
      setValue('operationSchedPct', MpinforWrkCtrTable.operationSchedPct);
      setValue('pmfsequenceGroupId', MpinforWrkCtrTable.pmfsequenceGroupId);
      setValue('processCategoryId', MpinforWrkCtrTable.processCategoryId);
      setValue('processPerQty', MpinforWrkCtrTable.processPerQty);
      setValue('processTime', MpinforWrkCtrTable.processTime);
      setValue('propertyLimited', MpinforWrkCtrTable.propertyLimited);
      setValue('qtyCategoryId', MpinforWrkCtrTable.qtyCategoryId);
      setValue('queueTimeBefore', MpinforWrkCtrTable.queueTimeBefore);
      setValue('queueTimeAfter', MpinforWrkCtrTable.queueTimeAfter);
     


   
      





    } else {
      console.error('Entity not found');
      //navigate('/');
    }
  }, [MpinforWrkCtrTable, setValue, navigate]);

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
        name="routeGroupId"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Route Group ID"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="toHours"
        control={control}
        defaultValue="" // Set default to empty string
        render={({ field }) => (
          <TextField
            {...field}
            label="To Hours"
            type="number"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="vendId"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Vendor ID"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="wrkCtrId"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Work Center ID"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="wrkCtrType"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Work Center Type"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="wkcId"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Work Center ID"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="bottleneckResource"
        control={control}
        defaultValue={false}
        render={({ field }) => (
          <FormControlLabel
            control={
              <Checkbox
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              />
            }
            label="Bottleneck Resource"
          />
        )}
      />

      <Controller
        name="capacity"
        control={control}
        defaultValue="" // Set default to empty string
        render={({ field }) => (
          <TextField
            {...field}
            label="Capacity"
            type="number"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="capacityBatch"
        control={control}
        defaultValue="" // Set default to empty string
        render={({ field }) => (
          <TextField
            {...field}
            label="Capacity Batch"
            type="number"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="capLimited"
        control={control}
        defaultValue={false}
        render={({ field }) => (
          <FormControlLabel
            control={
              <Checkbox
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              />
            }
            label="Capacity Limited"
          />
        )}
      />

      <Controller
        name="effectivityPct"
        control={control}
        defaultValue="" // Set default to empty string
        render={({ field }) => (
          <TextField
            {...field}
            label="Effectivity Percentage"
            type="number"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="errorPct"
        control={control}
        defaultValue="" // Set default to empty string
        render={({ field }) => (
          <TextField
            {...field}
            label="Error Percentage"
            type="number"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="exclusive"
        control={control}
        defaultValue={false}
        render={({ field }) => (
          <FormControlLabel
            control={
              <Checkbox
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              />
            }
            label="Exclusive"
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
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="operationSchedPct"
        control={control}
        defaultValue="" // Set default to empty string
        render={({ field }) => (
          <TextField
            {...field}
            label="Operation Scheduled Percentage"
            type="number"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="pmfsequenceGroupId"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="PMF Sequence Group ID"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="processCategoryId"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Process Category ID"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="processPerQty"
        control={control}
        defaultValue="" // Set default to empty string
        render={({ field }) => (
          <TextField
            {...field}
            label="Process Per Quantity"
            type="number"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="processTime"
        control={control}
        defaultValue="" // Set default to empty string
        render={({ field }) => (
          <TextField
            {...field}
            label="Process Time"
            type="number"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="propertyLimited"
        control={control}
        defaultValue={false}
        render={({ field }) => (
          <FormControlLabel
            control={
              <Checkbox
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              />
            }
            label="Property Limited"
          />
        )}
      />

      <Controller
        name="qtyCategoryId"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Quantity Category ID"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="queueTimeBefore"
        control={control}
        defaultValue="" // Set default to empty string
        render={({ field }) => (
          <TextField
            {...field}
            label="Queue Time Before"
            type="number"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />

      <Controller
        name="queueTimeAfter"
        control={control}
        defaultValue="" // Set default to empty string
        render={({ field }) => (
          <TextField
            {...field}
            label="Queue Time After"
            type="number"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}
      />
        <Button type="submit" variant="contained" color="primary">
          Update MpinforWrkCtrTable
        </Button>
      </form>
    </Container>
  );
};

export default UpdateMpinforWrkCtrTable;
