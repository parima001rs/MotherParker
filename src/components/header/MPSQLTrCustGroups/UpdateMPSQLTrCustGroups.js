import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { useSecondaryContext } from '../../../context/SecondaryContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';





const UpdateMPSQLTrCustGroup = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericPaginationContext();  
    const MPSQLTrCustGroup = entities.find((u) => u.recid === parseInt(recid));
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
        setType('MPSQLTrCustGroups');
        fetchTableId();
        fetchInterfaces();

        if (MPSQLTrCustGroup) {
            setValue('recid', MPSQLTrCustGroup.recid);
    setValue('createdDatetime', MPSQLTrCustGroup.createdDatetime);
    setValue('interface', MPSQLTrCustGroup.interface);
    setValue('tableId', MPSQLTrCustGroup.tableId);
    setValue('batchNum', MPSQLTrCustGroup.batchNum);
    setValue('processed', MPSQLTrCustGroup.processed);
    setValue('dataAreaId', MPSQLTrCustGroup.dataAreaId);
    setValue('description', MPSQLTrCustGroup.description);
    setValue('custGroup', MPSQLTrCustGroup.custGroup);
               
        }
    }, [setType, MPSQLTrCustGroup, setValue]);

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
  name="description"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="Description"
      fullWidth
      margin="normal"
    />
  )}
/>

<Controller
  name="custGroup"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField
      {...field}
      label="Customer Group"
      fullWidth
      margin="normal"
    />
  )}
/>

                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
                    Update MPSQLTrCustGroup
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMPSQLTrCustGroup;
