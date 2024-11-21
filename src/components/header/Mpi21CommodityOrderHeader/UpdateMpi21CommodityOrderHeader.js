import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { useSecondaryContext } from '../../../context/SecondaryContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';





const UpdateMpi21CommodityOrderHeader = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericPaginationContext();  
    const Mpi21CommodityOrderHeader = entities.find((u) => u.recid === parseInt(recid));
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
        setType('Mpi21CommodityOrderHeader');
        fetchTableId();
        fetchInterfaces();

        if (Mpi21CommodityOrderHeader) {
            setValue('recid', Mpi21CommodityOrderHeader.recid);
            setValue('createddatetime', Mpi21CommodityOrderHeader.createddatetime);
            setValue('interface', Mpi21CommodityOrderHeader.interface);
            setValue('tableid', Mpi21CommodityOrderHeader.tableid);
            setValue('batchnum', Mpi21CommodityOrderHeader.batchnum);
            setValue('processed', Mpi21CommodityOrderHeader.processed);
            setValue('dataareaid', Mpi21CommodityOrderHeader.dataareaid);
            setValue('book', Mpi21CommodityOrderHeader.book);
            setValue('companyLocation', Mpi21CommodityOrderHeader.companyLocation);
            setValue('contractDate', Mpi21CommodityOrderHeader.contractDate);
            setValue('customerPrefix', Mpi21CommodityOrderHeader.customerPrefix);
            setValue('endDate', Mpi21CommodityOrderHeader.endDate);
            setValue('erpconumber', Mpi21CommodityOrderHeader.erpconumber);
            setValue('futuresMarket', Mpi21CommodityOrderHeader.futuresMarket);
            setValue('futuresMonth', Mpi21CommodityOrderHeader.futuresMonth);
            setValue('futuresPrice', Mpi21CommodityOrderHeader.futuresPrice);
            setValue('fxCurrency', Mpi21CommodityOrderHeader.fxCurrency);
            setValue('fxrate', Mpi21CommodityOrderHeader.fxrate);
            setValue('interfaceNum', Mpi21CommodityOrderHeader.interfaceNum);
            setValue('lots', Mpi21CommodityOrderHeader.lots);
            setValue('mpcommOrdBuyConfirmNum', Mpi21CommodityOrderHeader.mpcommOrdBuyConfirmNum);
            setValue('priceCurrency', Mpi21CommodityOrderHeader.priceCurrency);
            setValue('priceUom', Mpi21CommodityOrderHeader.priceUom);
            setValue('quantity', Mpi21CommodityOrderHeader.quantity);
            setValue('quantityPerLot', Mpi21CommodityOrderHeader.quantityPerLot);
            setValue('quantityPerLotUom', Mpi21CommodityOrderHeader.quantityPerLotUom);
            setValue('quantityUom', Mpi21CommodityOrderHeader.quantityUom);
            setValue('referenceFutureMarket', Mpi21CommodityOrderHeader.referenceFutureMarket);
            setValue('referenceFutureMonth', Mpi21CommodityOrderHeader.referenceFutureMonth);
            setValue('referenceFuturesPrice', Mpi21CommodityOrderHeader.referenceFuturesPrice);
            setValue('referencePriceCurrency', Mpi21CommodityOrderHeader.referencePriceCurrency);
            setValue('referencePriceUom', Mpi21CommodityOrderHeader.referencePriceUom);
            setValue('startDate', Mpi21CommodityOrderHeader.startDate);
            setValue('subBook', Mpi21CommodityOrderHeader.subBook);
            setValue('termsCode', Mpi21CommodityOrderHeader.termsCode);
            setValue('trxSequenceNo', Mpi21CommodityOrderHeader.trxSequenceNo);
            setValue('contractNo', Mpi21CommodityOrderHeader.contractNo);            
               
        }
    }, [setType, Mpi21CommodityOrderHeader, setValue]);

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
                            id="dataareaid"
                            label="Data Area ID"
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
                name="contractDate"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                    {...field}
                    id="contractDate"
                    label="Contract Date"
                    type="date"
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
                name="endDate"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                    {...field}
                    id="endDate"
                    label="End Date"
                    type="date"
                    fullWidth
                    margin="normal"
                    />
                )}
                />

                <Controller
                name="erpconumber"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                    {...field}
                    id="erpconumber"
                    label="ERP Co Number"
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
                name="fxCurrency"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                    {...field}
                    id="fxCurrency"
                    label="FX Currency"
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
                name="interfaceNum"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                    {...field}
                    id="interfaceNum"
                    label="Interface Number"
                    type="number"
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
                name="mpcommOrdBuyConfirmNum"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                    {...field}
                    id="mpcommOrdBuyConfirmNum"
                    label="MP Comm Ord Buy Confirm Number"
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

                <Controller
                name="quantityPerLotUom"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                    {...field}
                    id="quantityPerLotUom"
                    label="Quantity Per Lot UOM"
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
                name="referenceFutureMarket"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                    {...field}
                    id="referenceFutureMarket"
                    label="Reference Future Market"
                    fullWidth
                    margin="normal"
                    />
                )}
                />

                <Controller
                name="referenceFutureMonth"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                    {...field}
                    id="referenceFutureMonth"
                    label="Reference Future Month"
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
                name="sellConfirmNum"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                    {...field}
                    id="sellConfirmNum"
                    label="Sell Confirm Number"
                    fullWidth
                    margin="normal"
                    />
                )}
                />

                <Controller
                name="shipmentPeriodFrom"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                    {...field}
                    id="shipmentPeriodFrom"
                    label="Shipment Period From"
                    InputLabelProps={{ shrink: true }}
                    type="date"
                    fullWidth
                    margin="normal"
                    />
                )}
                />

                <Controller
                name="shipmentPeriodTo"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                    {...field}
                    id="shipmentPeriodTo"
                    label="Shipment Period To"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    margin="normal"
                    />
                )}
                />

                <Controller
                name="siteId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                    {...field}
                    id="siteId"
                    label="Site ID"
                    fullWidth
                    margin="normal"
                    />
                )}
                />

                <Controller
                name="status"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                    {...field}
                    id="status"
                    label="Status"
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
                    id="transdate"
                    label="Transaction Date"
                    InputLabelProps={{ shrink: true }}
                    type="date"
                    fullWidth
                    margin="normal"
                    />
                )}
                />

                <Controller
                name="vendorAccount"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                    {...field}
                    id="vendorAccount"
                    label="Vendor Account"
                    fullWidth
                    margin="normal"
                    />
                )}
                />

                <Controller
                name="vendorPrefix"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                    {...field}
                    id="vendorPrefix"
                    label="Vendor Prefix"
                    fullWidth
                    margin="normal"
                    />
                )}
                />

                <Controller
                name="vendorRef"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                    {...field}
                    id="vendorRef"
                    label="Vendor Reference"
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

                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
                    Update
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21CommodityOrderHeader;
