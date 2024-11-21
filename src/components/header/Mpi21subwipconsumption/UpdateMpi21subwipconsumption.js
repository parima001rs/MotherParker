import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';

import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';


const UpdateMPI21SUBWIPCONSUMPTION = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericPaginationContext();
    const MPI21SUBWIPCONSUMPTION = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);

    const fetchTableId = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpheaderTables');
        setTableId(response.data);
    };

    const fetchInterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setInterfaces(response.data);
    };

    useEffect(() => {
        setType('MPI21SUBWIPCONSUMPTION');
        fetchTableId();
        fetchInterfaces();

        if (MPI21SUBWIPCONSUMPTION) {
            setValue('recid', MPI21SUBWIPCONSUMPTION.recid);
            setValue('createddatetime', MPI21SUBWIPCONSUMPTION.createddatetime);
            setValue('interface', MPI21SUBWIPCONSUMPTION.interface);
            setValue('tableid', MPI21SUBWIPCONSUMPTION.tableid);
            setValue('batchnum', MPI21SUBWIPCONSUMPTION.batchnum);
            setValue('processed', MPI21SUBWIPCONSUMPTION.processed);
            setValue('dataareaid', MPI21SUBWIPCONSUMPTION.dataareaid);
            setValue('companylocation', MPI21SUBWIPCONSUMPTION.companylocation);
            setValue('itemno', MPI21SUBWIPCONSUMPTION.itemno);
            setValue('lotno', MPI21SUBWIPCONSUMPTION.lotno);
            setValue('notes', MPI21SUBWIPCONSUMPTION.notes);
            setValue('productname', MPI21SUBWIPCONSUMPTION.productname);
            setValue('quantity', MPI21SUBWIPCONSUMPTION.quantity);
            setValue('quantityuom', MPI21SUBWIPCONSUMPTION.quantityuom);
            setValue('site', MPI21SUBWIPCONSUMPTION.site);
            setValue('storagelocation', MPI21SUBWIPCONSUMPTION.storagelocation);
            setValue('storageunit', MPI21SUBWIPCONSUMPTION.storageunit);
            setValue('warehouse', MPI21SUBWIPCONSUMPTION.warehouse);
            setValue('inventtransid', MPI21SUBWIPCONSUMPTION.inventtransid);
            setValue('journalid', MPI21SUBWIPCONSUMPTION.journalid);
            setValue('transactiontypeid', MPI21SUBWIPCONSUMPTION.transactiontypeid);
            setValue('transdate', MPI21SUBWIPCONSUMPTION.transdate);
            setValue('createdby', MPI21SUBWIPCONSUMPTION.createdby);
            setValue('proditemid', MPI21SUBWIPCONSUMPTION.proditemid);
            
        }
    }, [setType, MPI21SUBWIPCONSUMPTION, setValue]);

    const onSubmit = async (data) => {
        await updateEntity(data);
        navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update MPI21SUBWIPCONSUMPTION</h2>
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
            id="createddatetime"
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
    name="tableid"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <FormControl fullWidth margin="normal">
            <InputLabel id="tableId-label">Table ID</InputLabel>
            <Select
                {...field}
                labelId="tableId-label"
                label="Table ID"
            >
                {tableId.map((entity) => (
                    <MenuItem key={entity.recid} value={entity.recid}>
                        {entity.tableId}
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
    name="dataareaid"
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
    name="lotno"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Lot No"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="notes"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Notes"
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
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Quantity"
            fullWidth
            margin="normal"
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
    name="storageunit"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Storage Unit"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="warehouse"
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
    name="inventtransid"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Invent Trans ID"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="journalid"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Journal ID"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="transactiontypeid"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Transaction Type ID"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="transdate"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Transaction Date"
            type="date"
            InputLabelProps={{ shrink: true }}
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
    name="proditemid"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Product Item ID"
            fullWidth
            margin="normal"
        />
    )}
/>


                <Button type="submit" variant="contained" color="primary">
                    Update MPI21SUBWIPCONSUMPTION
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMPI21SUBWIPCONSUMPTION;
