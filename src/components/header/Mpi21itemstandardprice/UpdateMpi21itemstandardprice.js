import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
//import { useSecondaryContext } from '../../../context/SecondaryContext';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMpi21itemstandardprices = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericPaginationContext();  
    const Mpi21itemstandardprices = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 


    useEffect(() => {
        setType('Mpi21itemstandardprices');
        fetchTableId();
        fetchInterfaces();

        if (Mpi21itemstandardprices) {
            setValue('recid', Mpi21itemstandardprices.recid);
            setValue('createddatetime', Mpi21itemstandardprices.createddatetime);
            setValue('interface', Mpi21itemstandardprices.interface);
            setValue('tableid', Mpi21itemstandardprices.tableid);
            setValue('batchnum', Mpi21itemstandardprices.batchnum);
            setValue('processed', Mpi21itemstandardprices.processed);
            setValue('dataareaid', Mpi21itemstandardprices.dataareaid);
            setValue('activeprice', Mpi21itemstandardprices.activeprice);
            setValue('companycurrencycode', Mpi21itemstandardprices.companycurrencycode);
            setValue('companylocation', Mpi21itemstandardprices.companylocation);
            setValue('costingtype', Mpi21itemstandardprices.costingtype);
            setValue('currency', Mpi21itemstandardprices.currency);
            setValue('exchangerate', Mpi21itemstandardprices.exchangerate);
            setValue('itemid', Mpi21itemstandardprices.itemid);
            setValue('itemno', Mpi21itemstandardprices.itemno);
            setValue('markup', Mpi21itemstandardprices.markup);
            setValue('mpsiteforcosting', Mpi21itemstandardprices.mpsiteforcosting);
            setValue('price', Mpi21itemstandardprices.price);
            setValue('priceqty', Mpi21itemstandardprices.priceqty);
            setValue('priceunit', Mpi21itemstandardprices.priceunit);
            setValue('productname', Mpi21itemstandardprices.productname);
            setValue('transdate', Mpi21itemstandardprices.transdate);
            setValue('unitid', Mpi21itemstandardprices.unitid);
        }
        
    }, [setType, Mpi21itemstandardprices, setValue]);

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
                    name="activeprice"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Active Price"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="companycurrencycode"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Company Currency Code"
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
                    name="costingtype"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Costing Type"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="currency"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Currency"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="exchangerate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Exchange Rate"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="itemid"
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
                    name="itemno"
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
                    name="markup"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Markup"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpsiteforcosting"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Site for Costing"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="price"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Price"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="priceqty"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Price Quantity"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="priceunit"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Price Unit"
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
                    name="unitid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Unit ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Button type="submit" variant="contained" color="primary">
                    Update Mpi21itemstandardprices
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21itemstandardprices;
