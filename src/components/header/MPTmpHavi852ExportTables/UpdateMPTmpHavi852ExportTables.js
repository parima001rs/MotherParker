import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { useSecondaryContext } from '../../../context/SecondaryContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';





const UpdateMPTmpHavi852ExportTable = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericPaginationContext();  
    const MPTmpHavi852ExportTable = entities.find((u) => u.recid === parseInt(recid));
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
        setType('MPTmpHavi852ExportTables');
        fetchTableId();
        fetchInterfaces();

        if (MPTmpHavi852ExportTable) {
            setValue('recid', MPTmpHavi852ExportTable.recid);
            setValue('createdDatetime', MPTmpHavi852ExportTable.createdDatetime);
            setValue('interface', MPTmpHavi852ExportTable.interface);
            setValue('tableId', MPTmpHavi852ExportTable.tableId);
            setValue('batchNum', MPTmpHavi852ExportTable.batchNum);
            setValue('processed', MPTmpHavi852ExportTable.processed);
            setValue('dataAreaId', MPTmpHavi852ExportTable.dataAreaId);
            setValue('transactionDate', MPTmpHavi852ExportTable.transactionDate);
            setValue('locationId', MPTmpHavi852ExportTable.locationId);
            setValue('globalLocationNumber', MPTmpHavi852ExportTable.globalLocationNumber);
            setValue('localItemId', MPTmpHavi852ExportTable.localItemId);
            setValue('itemId', MPTmpHavi852ExportTable.itemId);
            setValue('itemDescription', MPTmpHavi852ExportTable.itemDescription);
            setValue('gtin', MPTmpHavi852ExportTable.gtin);
            setValue('quantityTypeCode', MPTmpHavi852ExportTable.quantityTypeCode);
            setValue('quantity', MPTmpHavi852ExportTable.quantity);
            setValue('uom', MPTmpHavi852ExportTable.uom);
            setValue('date', MPTmpHavi852ExportTable.date);
        }
    }, [setType, MPTmpHavi852ExportTable, setValue]);

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
  name="transactionDate"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="Transaction Date"
      type="datetime-local"
      InputLabelProps={{ shrink: true }}
      fullWidth
      margin="normal"
    />
  )}
/>

<Controller
  name="locationId"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="Location ID"
      fullWidth
      margin="normal"
    />
  )}
/>

<Controller
  name="globalLocationNumber"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="Global Location Number"
      fullWidth
      margin="normal"
    />
  )}
/>

<Controller
  name="localItemId"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="Local Item ID"
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
  name="itemDescription"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="Item Description"
      fullWidth
      margin="normal"
    />
  )}
/>

<Controller
  name="gtin"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="GTIN"
      fullWidth
      margin="normal"
    />
  )}
/>

<Controller
  name="quantityTypeCode"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="Quantity Type Code"
      fullWidth
      margin="normal"
    />
  )}
/>

<Controller
  name="quantity"
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
  name="uom"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="UOM"
      fullWidth
      margin="normal"
    />
  )}
/>

<Controller
  name="date"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="Date"
      type="datetime-local"
      InputLabelProps={{ shrink: true }}
      fullWidth
      margin="normal"
    />
  )}
/>

                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
                    Update
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMPTmpHavi852ExportTable;
