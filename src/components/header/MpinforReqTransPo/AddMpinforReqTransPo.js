
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container,FormControlLabel,Checkbox,  FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const AddMpinforReqTransPo = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 


    // Fetch Table IDs from API
    const fetchTableId = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL +  '/api/MpheaderTables');
        setTableId(response.data);
    };

    // Fetch Interfaces from API
    const fetchInterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setInterfaces(response.data);
    };

    useEffect(() => {
        setType('MpinforReqTransPo');
        fetchTableId();
        fetchInterfaces();
    }, [setType]);

    // Handle form submission
    const onSubmit = async (data) => {
        await addEntity(data);
        navigate('/'); // Redirect after submission
    };

    return (
        <Container>
            <BackButton />
            <h2>Add {location.state?.text}</h2>
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
                        fullWidth
                        margin="normal"
                        type="datetime-local"
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
                name="refId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Reference ID"
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
                name="inventSiteId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Inventory Site ID"
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
                name="qty"
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
                name="reqDateDlv"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Request Delivery Date"
                        fullWidth
                        margin="normal"
                        type="date"
                    />
                )}
            />

            <Controller
                name="schedFromDate"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Scheduled From Date"
                        fullWidth
                        margin="normal"
                        type="date"
                    />
                )}
            />

            <Controller
                name="schedToDate"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Scheduled To Date"
                        fullWidth
                        margin="normal"
                        type="date"
                    />
                )}
            />

            <Controller
                name="reqTime"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Request Time"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="itemBomId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Item BOM ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="itemRouteId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Item Route ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="inforStatusId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Infor Status ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="inforStatus"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Infor Status"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="inforKey"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Infor Key"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="created_By"
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
                name="creation_Time"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Creation Time"
                        fullWidth
                        margin="normal"
                        type="datetime-local"
                    />
                )}
            />

            <Controller
                name="modification_Time"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Modification Time"
                        fullWidth
                        margin="normal"
                        type="datetime-local"
                    />
                )}
            />

            <Controller
                name="modified_By"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Modified By"
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
                <Button type="submit" variant="contained" color="primary">
                    Add MpinforReqTransPo
                </Button>
            </form>
        </Container>
    );
};

export default AddMpinforReqTransPo;
