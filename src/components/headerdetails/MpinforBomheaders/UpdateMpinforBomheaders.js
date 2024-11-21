import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
//import { useGenericContext } from '../../../context/GenericContext';
import { useSecondaryContext } from '../../../context/SecondaryContext';
import { TextField, Button, Container, FormControl,Checkbox,FormControlLabel, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMpinforBomheader = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType, setInterfaceType } = useSecondaryContext();  
    const MpinforBomheader = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 
    setInterfaceType(location.state?.interfaceName);


    useEffect(() => {
        setType('MpinforBomheader');
        fetchTableId();
        fetchInterfaces();

        if (MpinforBomheader) {
            
            setValue('recid', MpinforBomheader.recid);
      setValue('createddatetime', MpinforBomheader.createddatetime);
      setValue('interface', MpinforBomheader.interface);
      setValue('tableid', MpinforBomheader.tableid);
      setValue('batchnum', MpinforBomheader.batchnum);
      setValue('processed', MpinforBomheader.processed);
      setValue('itemId', MpinforBomheader.itemId);
      setValue('name', MpinforBomheader.name)
      setValue('dataareaid', MpinforBomheader.dataareaid)
      setValue('active', MpinforBomheader.active);
      setValue('approved', MpinforBomheader.approved);
      setValue('approver', MpinforBomheader.approver);
      setValue('pmfBatchSize', MpinforBomheader.pmfBatchSize);
      setValue('bomid', MpinforBomheader.bomid);
      setValue('pmfBulkParent', MpinforBomheader.pmfBulkParent);
      setValue('pmfCoByVarAllow', MpinforBomheader.pmfCoByVarAllow);
      setValue('construction', MpinforBomheader.construction);
      setValue('pmfFormulaChangeDate', MpinforBomheader.pmfFormulaChangeDate);
      setValue('pmfFormulaMultiple', MpinforBomheader.pmfFormulaMultiple);
      setValue('pmfformulaversioncalculation', MpinforBomheader.pmfformulaversioncalculation);
      setValue('fromdate', MpinforBomheader.fromdate);
      setValue('fromQty', MpinforBomheader.fromQty);
      setValue('inventDimId', MpinforBomheader.inventDimId);
      setValue('itemId', MpinforBomheader.itemId);
      setValue('itemname', MpinforBomheader.itemname);
      setValue('inventsiteId', MpinforBomheader.inventsiteId);
      setValue('toDate', MpinforBomheader.toDate);
      setValue('pmfTotalCostAllocation', MpinforBomheader.pmfTotalCostAllocation);
      setValue('pmfTypeId', MpinforBomheader.pmfTypeId);
      setValue('pmfYieldPct', MpinforBomheader.pmfYieldPct);
      setValue('name', MpinforBomheader.name);
      

        }
    }, [setType, MpinforBomheader, setValue]);

    const fetchTableId = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpheaderTables');
        setTableId(response.data);
    };

    const fetchInterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setInterfaces(response.data);
    };

    const onSubmit = async (data) => {
        await updateEntity(data); 
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
  defaultValue=""
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
  name="pmfBatchSize"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="PMF Batch Size"
      type="number"
      fullWidth
      margin="normal"
    />
  )}
/>
<Controller
  name="bomid"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="BOM ID"
      fullWidth
      margin="normal"
    />
  )}
/>
<Controller
  name="pmfBulkParent"
  control={control}
  defaultValue="" 
  render={({ field }) => (
    <TextField
      {...field}
      label="PMF Bulk Parent"
      fullWidth
      margin="normal"
    />
  )}
/>
<Controller
  name="pmfCoByVarAllow"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
    {...field}
    label="PmfCoByVarAllow"
    
    fullWidth
    margin="normal"
    InputLabelProps={{ shrink: true }}
  />
  )}
/>
<Controller
  name="construction"
  control={control}
  defaultValue={false} // Defaulting to false
  render={({ field }) => (
    <TextField
    {...field}
    label="Construction"
    
    fullWidth
    margin="normal"
    InputLabelProps={{ shrink: true }}
  />
  )}
/>
<Controller
  name="pmfFormulaChangeDate"
  control={control}
  defaultValue="" // Defaulting to an empty string for date
  render={({ field }) => (
    <TextField
      {...field}
      label="PMF Formula Change Date"
      type="datetime-local"
      fullWidth
      margin="normal"
      InputLabelProps={{ shrink: true }}
    />
  )}
/>
<Controller
  name="pmfFormulaMultiple"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="PMF Formula Multiple"
      type="number"
      fullWidth
      margin="normal"
    />
  )}
/>
<Controller
  name="pmfformulaversioncalculation"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <FormControlLabel
      control={<Checkbox {...field} checked={field.value} />}
      label="PMF Formula Version Calculation"
    />
  )}
/>
<Controller
  name="fromdate"
  control={control}
  defaultValue="" // Defaulting to an empty string for date
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
  defaultValue=""
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
  name="itemname"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="Item Name"
      fullWidth
      margin="normal"
    />
  )}
/>
<Controller
  name="inventsiteId"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="Inventory Site ID"
      fullWidth
      margin="normal"
    />
  )}
/>
<Controller
  name="toDate"
  control={control}
  defaultValue="" // Defaulting to an empty string for date
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
<Controller
  name="pmfTotalCostAllocation"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <FormControlLabel
      control={<Checkbox {...field} checked={field.value} />}
      label="PMF Total Cost Allocation"
    />
  )}
/>
<Controller
  name="pmfTypeId"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="PMF Type ID"
      fullWidth
      margin="normal"
    />
  )}
/>
<Controller
  name="pmfYieldPct"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="PMF Yield Percentage"
      type="number"
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

                <Button type="submit" variant="contained" color="primary">
                    Update  MpinforBomheader
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpinforBomheader;
