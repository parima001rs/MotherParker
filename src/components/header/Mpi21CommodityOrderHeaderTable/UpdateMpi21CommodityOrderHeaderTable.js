import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { useSecondaryContext } from '../../../context/SecondaryContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';





const UpdateMpi21CommodityOrderHeaderTable = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericPaginationContext();  
    const Mpi21CommodityOrderHeaderTable = entities.find((u) => u.recid === parseInt(recid));
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
        setType('Mpi21CommodityOrderHeaderTable');
        fetchTableId();
        fetchInterfaces();

        if (Mpi21CommodityOrderHeaderTable) {
            setValue('recid', Mpi21CommodityOrderHeaderTable.recid);
            setValue('createddatetime', Mpi21CommodityOrderHeaderTable.createddatetime);
            setValue('interface', Mpi21CommodityOrderHeaderTable.interface);
            setValue('tableid', Mpi21CommodityOrderHeaderTable.tableid);
            setValue('batchnum', Mpi21CommodityOrderHeaderTable.batchnum);
            setValue('processed', Mpi21CommodityOrderHeaderTable.processed);
            setValue('dataareaid', Mpi21CommodityOrderHeaderTable.dataareaid);
            setValue('trxSequenceNo', Mpi21CommodityOrderHeaderTable.trxSequenceNo);
            setValue('companyLocation', Mpi21CommodityOrderHeaderTable.companyLocation);
            setValue('actionId', Mpi21CommodityOrderHeaderTable.actionId);
            setValue('createdBy', Mpi21CommodityOrderHeaderTable.createdBy);
            setValue('contractNo', Mpi21CommodityOrderHeaderTable.contractNo);
            setValue('contractDate', Mpi21CommodityOrderHeaderTable.contractDate);
            setValue('customerPrefix', Mpi21CommodityOrderHeaderTable.customerPrefix);
            setValue('termsCode', Mpi21CommodityOrderHeaderTable.termsCode);
            setValue('startDate', Mpi21CommodityOrderHeaderTable.startDate);
            setValue('endDate', Mpi21CommodityOrderHeaderTable.endDate);
            setValue('quantity', Mpi21CommodityOrderHeaderTable.quantity);
            setValue('quantityUom', Mpi21CommodityOrderHeaderTable.quantityUom);
            setValue('futuresMarket', Mpi21CommodityOrderHeaderTable.futuresMarket);
            setValue('futuresMonth', Mpi21CommodityOrderHeaderTable.futuresMonth);
            setValue('lots', Mpi21CommodityOrderHeaderTable.lots);
            setValue('futuresPrice', Mpi21CommodityOrderHeaderTable.futuresPrice);
            setValue('priceUom', Mpi21CommodityOrderHeaderTable.priceUom);
            setValue('priceCurrency', Mpi21CommodityOrderHeaderTable.priceCurrency);
            setValue('fxrate', Mpi21CommodityOrderHeaderTable.fxrate);
            setValue('fxcurrency', Mpi21CommodityOrderHeaderTable.fxcurrency);
            setValue('referenceFuturesMarket', Mpi21CommodityOrderHeaderTable.referenceFuturesMarket);
            setValue('referenceFuturesMonth', Mpi21CommodityOrderHeaderTable.referenceFuturesMonth);
            setValue('referenceFuturesPrice', Mpi21CommodityOrderHeaderTable.referenceFuturesPrice);
            setValue('referencePriceUom', Mpi21CommodityOrderHeaderTable.referencePriceUom);
            setValue('referencePriceCurrency', Mpi21CommodityOrderHeaderTable.referencePriceCurrency);
            setValue('book', Mpi21CommodityOrderHeaderTable.book);
            setValue('subBook', Mpi21CommodityOrderHeaderTable.subBook);
            setValue('quantityPerLot', Mpi21CommodityOrderHeaderTable.quantityPerLot);
               
        }
    }, [setType, Mpi21CommodityOrderHeaderTable, setValue]);

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
                    name="tableId"
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
                            id="dataareaid"
                            label="Data Area ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="trxSequenceNo"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="trxSequenceNo"
                            label="Transaction Sequence No"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="companyLocation"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="companyLocation"
                            label="Company Location"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="actionId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="actionId"
                            label="Action ID"
                            type="number"
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
                            id="createdBy"
                            label="Created By"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="contractNo"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="contractNo"
                            label="Contract No"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="contractDate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="contractDate"
                            label="Contract Date"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="customerPrefix"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="customerPrefix"
                            label="Customer Prefix"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="termsCode"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="termsCode"
                            label="Terms Code"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="startDate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="startDate"
                            label="Start Date"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="endDate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="endDate"
                            label="End Date"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
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
                            id="quantity"
                            label="Quantity"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="quantityUom"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="quantityUom"
                            label="Quantity UOM"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="futuresMarket"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="futuresMarket"
                            label="Futures Market"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="futuresMonth"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="futuresMonth"
                            label="Futures Month"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="lots"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="lots"
                            label="Lots"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="futuresPrice"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="futuresPrice"
                            label="Futures Price"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="priceUom"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="priceUom"
                            label="Price UOM"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="priceCurrency"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="priceCurrency"
                            label="Price Currency"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="fxrate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="fxrate"
                            label="FX Rate"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="fxcurrency"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="fxcurrency"
                            label="FX Currency"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="referenceFuturesMarket"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="referenceFuturesMarket"
                            label="Reference Futures Market"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="referenceFuturesMonth"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="referenceFuturesMonth"
                            label="Reference Futures Month"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="referenceFuturesPrice"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="referenceFuturesPrice"
                            label="Reference Futures Price"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="referencePriceUom"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="referencePriceUom"
                            label="Reference Price UOM"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="referencePriceCurrency"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="referencePriceCurrency"
                            label="Reference Price Currency"
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
                            id="book"
                            label="Book"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="subBook"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="subBook"
                            label="Sub Book"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="quantityPerLot"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="quantityPerLot"
                            label="Quantity Per Lot"
                            type="number"
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

export default UpdateMpi21CommodityOrderHeaderTable;
