import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMpinforProdOrderTable = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const MpinforProdOrderTable = entities.find((u) => u.recid === parseInt(recid));
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
        setType('MpinforProdOrderTable');
        fetchTableId();
        fetchInterfaces();

        if (MpinforProdOrderTable) {
            setValue('recid', MpinforProdOrderTable.recid || 6000000051);
            setValue('createddatetime', MpinforProdOrderTable.createddatetime || "2024-09-04T16:27:58");
            setValue('interface', MpinforProdOrderTable.interface || "InforAPS");
            setValue('tableid', MpinforProdOrderTable.tableid || 72);
            setValue('batchnum', MpinforProdOrderTable.batchnum || "2830-NA-10-20240904-162758");
            setValue('processed', MpinforProdOrderTable.processed || true);
            setValue('dataareaid', MpinforProdOrderTable.dataareaid || "10");
            setValue('name', MpinforProdOrderTable.name || "MCDON CF PREM RST W/F 160-2.25OZ");
            setValue('itemId', MpinforProdOrderTable.itemId || "3232601");
            setValue('siteId', MpinforProdOrderTable.siteId || "01");
            setValue('orderQty', MpinforProdOrderTable.orderQty || 968);
            setValue('remainInventPhysical', MpinforProdOrderTable.remainInventPhysical || 968);
            setValue('reportedFinishedGood', MpinforProdOrderTable.reportedFinishedGood || null);
            setValue('startDate', MpinforProdOrderTable.startDate || "2024-09-04T00:00:00");
            setValue('startTime', MpinforProdOrderTable.startTime || 0);
            setValue('endDate', MpinforProdOrderTable.endDate || "2024-09-04T00:00:00");
            setValue('endTime', MpinforProdOrderTable.endTime || 61730);
            setValue('prodId', MpinforProdOrderTable.prodId || "10000003");            
        }
        
    }, [setType, MpinforProdOrderTable, setValue]);

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
                defaultValue=""
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
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Name"
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
                name="orderQty"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Order Quantity"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="remainInventPhysical"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Remaining Inventory"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="reportedFinishedGood"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Reported Finished Good"
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
                        label="Start Date"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="startTime"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Start Time"
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
                        label="End Date"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="endTime"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="End Time"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="prodId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Product ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

                <Button type="submit" variant="contained" color="primary">
                    Update Mporderplanmappingtables
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpinforProdOrderTable;
