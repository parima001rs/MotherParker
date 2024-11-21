import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';

import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';



const UpdateMPI21PRODORDERINHEADER = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericPaginationContext();
    const MPI21PRODORDERINHEADER = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 


    const fetchTableId = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpheaderTables');
        setTableId(response.data);
    };

    const fetchInterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setInterfaces(response.data);
    };

    useEffect(() => {
        setType('MPI21PRODORDERINHEADER');
        fetchInterfaces();
        fetchTableId();

        if (MPI21PRODORDERINHEADER) {
            setValue('recid', MPI21PRODORDERINHEADER.recid);
            setValue('createddatetime', MPI21PRODORDERINHEADER.createddatetime);
            setValue('interface', MPI21PRODORDERINHEADER.interface);
            setValue('batchnum', MPI21PRODORDERINHEADER.batchnum);
            setValue('processed', MPI21PRODORDERINHEADER.processed);
            setValue('dataareaid', MPI21PRODORDERINHEADER.dataareaid);
            setValue('actionid', MPI21PRODORDERINHEADER.actionid);
            setValue('companylocation', MPI21PRODORDERINHEADER.companylocation);
            setValue('duedate', MPI21PRODORDERINHEADER.duedate);
            setValue('erpshoporderno', MPI21PRODORDERINHEADER.erpshoporderno);
            setValue('formulanumber', MPI21PRODORDERINHEADER.formulanumber);
            setValue('itemno', MPI21PRODORDERINHEADER.itemno);
            setValue('lineexists', MPI21PRODORDERINHEADER.lineexists);
            setValue('locationid', MPI21PRODORDERINHEADER.locationid);
            setValue('machine', MPI21PRODORDERINHEADER.machine);
            setValue('manufacturingcell', MPI21PRODORDERINHEADER.manufacturingcell);
            setValue('processname', MPI21PRODORDERINHEADER.processname);
            setValue('productname', MPI21PRODORDERINHEADER.productname);
            setValue('quantity', MPI21PRODORDERINHEADER.quantity);
            setValue('quantityuom', MPI21PRODORDERINHEADER.quantityuom);
            setValue('siteid', MPI21PRODORDERINHEADER.siteid);
            setValue('storagelocation', MPI21PRODORDERINHEADER.storagelocation);
            setValue('workorderno', MPI21PRODORDERINHEADER.workorderno);
            setValue('workordertype', MPI21PRODORDERINHEADER.workordertype);
            setValue('createdby', MPI21PRODORDERINHEADER.createdby);
            setValue('book', MPI21PRODORDERINHEADER.book);
            setValue('vendaccount', MPI21PRODORDERINHEADER.vendaccount);
            setValue('vendoraccountno', MPI21PRODORDERINHEADER.vendoraccountno);
            setValue('tableId', MPI21PRODORDERINHEADER.tableId);
            setValue('status', MPI21PRODORDERINHEADER.status);
        } else {
            console.error('Entity not found');
        }
    }, [setType, MPI21PRODORDERINHEADER, setValue]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data }, 'recid'); // Passing the primary key field 'recid'
        navigate('/');
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
                    name="createddatetime"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Createddatetime"
                            fullWidth
                            margin="normal"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
                        />
                    )}
                />
                <Controller
                    name="interface"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="interface-label">Interface</InputLabel>
                            <Select
                                {...field}
                                labelId="interface-label"
                                label="Interface"
                            >
                                {interfaces.map((entity) => (
                                    <MenuItem key={entity.recid} value={entity.interface}>
                                        {entity.interface}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />

                <Controller
                    name="batchnum"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Batchnum"
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
                    name="actionid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Actionid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="companylocation"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Company Location"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="duedate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Due Date"
                            fullWidth
                            margin="normal"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
                        />
                    )}
                />
                <Controller
                    name="erpshoporderno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="ERP Shop Order No"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="formulanumber"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Formula Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="itemno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Item No"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="lineexists"
                    control={control}
                    defaultValue={1}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Line Exists"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
                <Controller
                    name="locationid"
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
                    name="machine"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Machine"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="manufacturingcell"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Manufacturing Cell"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="processname"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Process Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="productname"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Product Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="quantity"
                    control={control}
                    defaultValue={12}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Quantity"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />
                <Controller
                    name="quantityuom"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Quantity UOM"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="siteid"
                    control={control}
                    defaultValue=""
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
                    name="storagelocation"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Storage Location"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="workorderno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Work Order No"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="workordertype"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Work Order Type"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="createdby"
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
                    name="book"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Book"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="vendaccount"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Vendor Account"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="vendoraccountno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Vendor Account No"
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
                            label="Table Id"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                
                <Controller
                    name="status"
                    control={control}
                    defaultValue={null}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Status"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Button type="submit" variant="contained" color="primary">
                Update Mpi21prodorderinheader
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMPI21PRODORDERINHEADER;
