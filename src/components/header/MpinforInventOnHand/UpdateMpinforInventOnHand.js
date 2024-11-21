import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMpinforInventOnHand = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const MpinforInventOnHand = entities.find((u) => u.recid === parseInt(recid));
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
        setType('MpinforInventOnHand');
        fetchTableId();
        fetchInterfaces();

        if (MpinforInventOnHand) {
            setValue('recid', MpinforInventOnHand.recid || 6000000051);
            setValue('createddatetime', MpinforInventOnHand.createddatetime || "2024-09-04T16:27:58");
            setValue('interface', MpinforInventOnHand.interface || "InforAPS");
            setValue('tableid', MpinforInventOnHand.tableid || 72);
            setValue('batchnum', MpinforInventOnHand.batchnum || "2830-NA-10-20240904-162758");
            setValue('processed', MpinforInventOnHand.processed || true);
            setValue('dataareaid', MpinforInventOnHand.dataareaid || "10");
            setValue('itemId', MpinforInventOnHand.itemId || "3232601");
            setValue('onHandInventoryQuantity', MpinforInventOnHand.onHandInventoryQuantity || 3970);
            setValue('inventDimId', MpinforInventOnHand.inventDimId || "#0000000150012C83");
            setValue('site', MpinforInventOnHand.site || "01");
            setValue('warehouse', MpinforInventOnHand.warehouse || "MM");
            setValue('inventStatusId', MpinforInventOnHand.inventStatusId || "Available");
            setValue('productName', MpinforInventOnHand.productName || "MCDON CF PREM RST W/F 160-2.25OZ");
            setValue('buyerGroup', MpinforInventOnHand.buyerGroup || "106-01");
            setValue('uoM', MpinforInventOnHand.uoM || "EA");                        
        }
        
    }, [setType, MpinforInventOnHand, setValue]);

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
                        label="Created DateTime"
                        type="datetime-local"
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
                        type="number"
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
                name="onHandInventoryQuantity"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="On Hand Inventory Quantity"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="inventDimId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Inventory Dimension ID"
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
                name="inventStatusId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Inventory Status ID"
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
                name="buyerGroup"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Buyer Group"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="uoM"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Unit of Measure (UOM)"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
                <Button type="submit" variant="contained" color="primary">
                    Update MpinforInventOnHand
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpinforInventOnHand;
