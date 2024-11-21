import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMpinforPlannedProdOrder = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const MpinforPlannedProdOrder = entities.find((u) => u.recid === parseInt(recid));
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
        setType('MpinforPlannedProdOrder');
        fetchTableId();
        fetchInterfaces();

        if (MpinforPlannedProdOrder) {
            setValue('recid', MpinforPlannedProdOrder.recid || 6000000051);
            setValue('createddatetime', MpinforPlannedProdOrder.createddatetime || "2024-09-04T16:27:58");
            setValue('interface', MpinforPlannedProdOrder.interface || "InforAPS");
            setValue('tableid', MpinforPlannedProdOrder.tableid || 72);
            setValue('batchnum', MpinforPlannedProdOrder.batchnum || "2830-NA-10-20240904-162758");
            setValue('processed', MpinforPlannedProdOrder.processed || true);
            setValue('dataareaid', MpinforPlannedProdOrder.dataareaid || "10");
            setValue('itemId', MpinforPlannedProdOrder.itemId || "3232601");
            setValue('productName', MpinforPlannedProdOrder.productName || "MCDON CF PREM RST W/F 160-2.25OZ");
            setValue('siteId', MpinforPlannedProdOrder.siteId || "01");
            setValue('inventLocationId', MpinforPlannedProdOrder.inventLocationId || "MM");
            setValue('orderNo', MpinforPlannedProdOrder.orderNo || "0201000680");
            setValue('status', MpinforPlannedProdOrder.status || "Completed");
            setValue('quantity', MpinforPlannedProdOrder.quantity || 3970);
            setValue('quantityUom', MpinforPlannedProdOrder.quantityUom || "CA");
            setValue('deliveryDate', MpinforPlannedProdOrder.deliveryDate || "2024-09-05T00:00:00");
            setValue('requiredDate', MpinforPlannedProdOrder.requiredDate || "2024-09-05T00:00:00");
            setValue('routeId', MpinforPlannedProdOrder.routeId || "113401");
            setValue('bomId', MpinforPlannedProdOrder.bomId || null);
            setValue('reqPlanId', MpinforPlannedProdOrder.reqPlanId || "Short Term");                    
        }
        
    }, [setType, MpinforPlannedProdOrder, setValue]);

    const onSubmit = async (data) => {
        await updateEntity(data);
        navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text}
            </h2>
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
                    <TextField
                        {...field}
                        label="Table ID"
                        fullWidth
                        margin="normal"
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
                defaultValue={true}
                render={({ field }) => (
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="processed-label">Processed</InputLabel>
                        <Select
                            {...field}
                            labelId="processed-label"
                            label="Processed"
                        >
                            <MenuItem value={true}>True</MenuItem>
                            <MenuItem value={false}>False</MenuItem>
                        </Select>
                    </FormControl>
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
                name="productName"
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
                name="siteId"
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
                name="inventLocationId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Inventory Location ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="orderNo"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Order Number"
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
                        label="Status"
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
                name="quantityUom"
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
                name="deliveryDate"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Delivery Date"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="requiredDate"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Required Date"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="routeId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Route ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="bomId"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="BOM ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="reqPlanId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Request Plan ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

                <Button type="submit" variant="contained" color="primary">
                    Update MpinforPlannedProdOrder
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpinforPlannedProdOrder;
