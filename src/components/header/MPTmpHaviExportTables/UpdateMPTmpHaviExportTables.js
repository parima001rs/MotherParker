import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { useSecondaryContext } from '../../../context/SecondaryContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';





const UpdateMPTmpHaviExportTable = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericPaginationContext();  
    const MPTmpHaviExportTable = entities.find((u) => u.recid === parseInt(recid));
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
        setType('MPTmpHaviExportTables');
        fetchTableId();
        fetchInterfaces();

        if (MPTmpHaviExportTable) {
          setValue('recid', MPTmpHaviExportTable.recid);
          setValue('createdDatetime', MPTmpHaviExportTable.createdDatetime);
          setValue('interface', MPTmpHaviExportTable.interface);
          setValue('tableId', MPTmpHaviExportTable.tableId);
          setValue('batchNum', MPTmpHaviExportTable.batchNum);
          setValue('processed', MPTmpHaviExportTable.processed);
          setValue('dataAreaId', MPTmpHaviExportTable.dataAreaId);
          setValue('transactionDate', MPTmpHaviExportTable.transactionDate);
          setValue('transactionTime', MPTmpHaviExportTable.transactionTime);
          setValue('inventoryDate', MPTmpHaviExportTable.inventoryDate);
          setValue('inventoryTime', MPTmpHaviExportTable.inventoryTime);
          setValue('locationId', MPTmpHaviExportTable.locationId);
          setValue('gln', MPTmpHaviExportTable.gln);
          setValue('customerItemId', MPTmpHaviExportTable.customerItemId);
          setValue('itemId', MPTmpHaviExportTable.itemId);
          setValue('itemDescription', MPTmpHaviExportTable.itemDescription);
          setValue('gtin', MPTmpHaviExportTable.gtin);
          setValue('quantityTypeCode', MPTmpHaviExportTable.quantityTypeCode);
          setValue('quantity', MPTmpHaviExportTable.quantity);
          setValue('uom', MPTmpHaviExportTable.uom);
          setValue('lotNumber', MPTmpHaviExportTable.lotNumber);
          setValue('expirationDate', MPTmpHaviExportTable.expirationDate);
          setValue('manufacturerLocationId', MPTmpHaviExportTable.manufacturerLocationId);
          setValue('manufacturerGln', MPTmpHaviExportTable.manufacturerGln);
        }
    }, [setType, MPTmpHaviExportTable, setValue]);

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
                    name="transactionTime"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Transaction Time"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="inventoryDate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Inventory Date"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="inventoryTime"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Inventory Time"
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
                    name="gln"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="GLN"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="customerItemId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Customer Item ID"
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
                    name="lotNumber"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Lot Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="expirationDate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Expiration Date"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="manufacturerLocationId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Manufacturer Location ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="manufacturerGln"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Manufacturer GLN"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
                Update MPTmpHaviExportTable
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMPTmpHaviExportTable;
