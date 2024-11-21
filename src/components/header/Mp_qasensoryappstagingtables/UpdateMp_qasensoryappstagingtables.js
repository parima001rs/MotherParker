import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { useSecondaryContext } from '../../../context/SecondaryContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';





const UpdateMp_qasensoryappstagingtables = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericPaginationContext();  
    const Mp_qasensoryappstagingtables = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 


    const fetchTableId = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpheaderTables');
            setTableId(response.data);
        } catch (error) {
            console.error("Error fetching table IDs:", error);
        }
    };

    const fetchInterfaces = async () => {
        try {
            const response = await axios.get( process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
            setInterfaces(response.data);
        } catch (error) {
            console.error("Error fetching interfaces:", error);
        }
    };

    useEffect(() => {
        setType('Mp_qasensoryappstagingtables');
        fetchTableId();
        fetchInterfaces();

        if (Mp_qasensoryappstagingtables) {
            setValue('recid', Mp_qasensoryappstagingtables.recid);
            setValue('createdDatetime', Mp_qasensoryappstagingtables.createdDatetime);
            setValue('interface', Mp_qasensoryappstagingtables.interface);
            setValue('tableId', Mp_qasensoryappstagingtables.tableId);
            setValue('batchNum', Mp_qasensoryappstagingtables.batchNum);
            setValue('processed', Mp_qasensoryappstagingtables.processed);
            setValue('dataAreaId', Mp_qasensoryappstagingtables.dataAreaId);
            setValue('blendItemId', Mp_qasensoryappstagingtables.blendItemId);
            setValue('blendItemName', Mp_qasensoryappstagingtables.blendItemName);
            setValue('ecoResProductName', Mp_qasensoryappstagingtables.ecoResProductName);
            setValue('fd46ItemBrand', Mp_qasensoryappstagingtables.fd46ItemBrand);
            setValue('fgItemId', Mp_qasensoryappstagingtables.fgItemId);
            setValue('fgItemType', Mp_qasensoryappstagingtables.fgItemType);
            setValue('inventRefId', Mp_qasensoryappstagingtables.inventRefId);
            setValue('inventSiteId', Mp_qasensoryappstagingtables.inventSiteId);
            setValue('qualityOrderId', Mp_qasensoryappstagingtables.qualityOrderId);
            setValue('sampleId', Mp_qasensoryappstagingtables.sampleId);
            setValue('wrkCtrId', Mp_qasensoryappstagingtables.wrkCtrId);
            setValue('createdBy', Mp_qasensoryappstagingtables.createdBy);
            setValue('color', Mp_qasensoryappstagingtables.color);
            setValue('moisture', Mp_qasensoryappstagingtables.moisture);
            setValue('recCreatedDatetime', Mp_qasensoryappstagingtables.recCreatedDatetime);
               
        }
    }, [setType, Mp_qasensoryappstagingtables, setValue]);

    const onSubmit = async (data) => {
        try {
            await updateEntity(data);
            navigate('/');
        } catch (error) {
            console.error("Error updating entity:", error);
        }
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text} </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
  name="recid"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="Recid"
      fullWidth
      margin="normal"
      disabled
    />
  )}
/>

<Controller
  name="createdDatetime"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="Created Datetime"
      type="datetime-local"
      InputLabelProps={{ shrink: true }}
      fullWidth
      margin="normal"
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
  name="batchNum"
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
  name="dataAreaId"
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

<Controller
  name="blendItemId"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="Blend Item ID"
      fullWidth
      margin="normal"
    />
  )}
/>

<Controller
  name="blendItemName"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="Blend Item Name"
      fullWidth
      margin="normal"
    />
  )}
/>

<Controller
  name="ecoResProductName"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="EcoRes Product Name"
      fullWidth
      margin="normal"
    />
  )}
/>

<Controller
  name="fd46ItemBrand"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="FD46 Item Brand"
      fullWidth
      margin="normal"
    />
  )}
/>

<Controller
  name="fgItemId"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="FG Item ID"
      fullWidth
      margin="normal"
    />
  )}
/>

<Controller
  name="fgItemType"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="FG Item Type"
      fullWidth
      margin="normal"
    />
  )}
/>

<Controller
  name="inventRefId"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="Invent Ref ID"
      fullWidth
      margin="normal"
    />
  )}
/>

<Controller
  name="inventSiteId"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="Invent Site ID"
      fullWidth
      margin="normal"
    />
  )}
/>

<Controller
  name="qualityOrderId"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="Quality Order ID"
      fullWidth
      margin="normal"
    />
  )}
/>

<Controller
  name="sampleId"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="Sample ID"
      fullWidth
      margin="normal"
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
    />
  )}
/>

<Controller
  name="createdBy"
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
  name="color"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="Color"
      fullWidth
      margin="normal"
    />
  )}
/>

<Controller
  name="moisture"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="Moisture"
      fullWidth
      margin="normal"
    />
  )}
/>

<Controller
  name="recCreatedDatetime"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="Record Created Datetime"
      type="datetime-local"
      InputLabelProps={{ shrink: true }}
      fullWidth
      margin="normal"
    />
  )}
/>

                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
                    Update Mp_qasensoryappstagingtable
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMp_qasensoryappstagingtables;
