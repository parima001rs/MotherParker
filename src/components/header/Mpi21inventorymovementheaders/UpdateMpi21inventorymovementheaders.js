import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';

import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';


const UpdateMPI21INVENTORYMOVEMENTHEADER = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericPaginationContext();
    const MPI21INVENTORYMOVEMENTHEADER = entities.find((u) => u.recid === parseInt(recid));
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
        setType('MPI21INVENTORYMOVEMENTHEADER');
        fetchTableId();
        fetchInterfaces();

        if (MPI21INVENTORYMOVEMENTHEADER) {
            setValue('recid', MPI21INVENTORYMOVEMENTHEADER.recid);
            setValue('createddatetime', MPI21INVENTORYMOVEMENTHEADER.createddatetime);
            setValue('interface', MPI21INVENTORYMOVEMENTHEADER.interface);
            setValue('tableid', MPI21INVENTORYMOVEMENTHEADER.tableid);
            setValue('batchnum', MPI21INVENTORYMOVEMENTHEADER.batchnum);
            setValue('processed', MPI21INVENTORYMOVEMENTHEADER.processed);
            setValue('dataareaid', MPI21INVENTORYMOVEMENTHEADER.dataareaid);
            setValue('journalid', MPI21INVENTORYMOVEMENTHEADER.journalid);
            setValue('linenum', MPI21INVENTORYMOVEMENTHEADER.linenum);
            setValue('prodid', MPI21INVENTORYMOVEMENTHEADER.prodid);
            setValue('actionid', MPI21INVENTORYMOVEMENTHEADER.actionid);
            setValue('companylocation', MPI21INVENTORYMOVEMENTHEADER.companylocation);
            setValue('itemno', MPI21INVENTORYMOVEMENTHEADER.itemno);
            setValue('lotno', MPI21INVENTORYMOVEMENTHEADER.lotno);
            setValue('newstoragelocation', MPI21INVENTORYMOVEMENTHEADER.newstoragelocation);
            setValue('newstorageunit', MPI21INVENTORYMOVEMENTHEADER.newstorageunit);
            setValue('notes', MPI21INVENTORYMOVEMENTHEADER.notes);
            setValue('quantity', MPI21INVENTORYMOVEMENTHEADER.quantity);
            setValue('quantityuom', MPI21INVENTORYMOVEMENTHEADER.quantityuom);
            setValue('reasoncode', MPI21INVENTORYMOVEMENTHEADER.reasoncode);
            setValue('sourcestoragelocation', MPI21INVENTORYMOVEMENTHEADER.sourcestoragelocation);
            setValue('sourcestorageunit', MPI21INVENTORYMOVEMENTHEADER.sourcestorageunit);
            setValue('transactiontypeid', MPI21INVENTORYMOVEMENTHEADER.transactiontypeid);
            setValue('createdby', MPI21INVENTORYMOVEMENTHEADER.createdby);
        }
    }, [setType, MPI21INVENTORYMOVEMENTHEADER, setValue]);

    const onSubmit = async (data) => {
        await updateEntity(data);
        navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update MPI21INVENTORYMOVEMENTHEADER</h2>
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
    name="actionid"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Action ID"
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
    name="newstoragelocation"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="New Storage Location"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="newstorageunit"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="New Storage Unit"
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
    name="reasoncode"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Reason Code"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="sourcestoragelocation"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Source Storage Location"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="sourcestorageunit"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Source Storage Unit"
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

                <Button type="submit" variant="contained" color="primary">
                    Update MPI21INVENTORYMOVEMENTHEADER
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMPI21INVENTORYMOVEMENTHEADER;
