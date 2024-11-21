import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import {
    TextField,
    Button,
    Container,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Checkbox,
    FormControlLabel
} from '@mui/material';


import { useLocation } from 'react-router-dom';


const AddMpinterfaceAaforecasts = () => {
    const { addEntity, setType } = useGenericPaginationContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    
     const location = useLocation(); 

    // Fetch table IDs from the API
    const fetchTableId = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpheaderTables');
            setTableId(response.data);
        } catch (error) {
            console.error('Error fetching table IDs:', error);
        }
    };

    // Fetch interfaces from the API
    const fetchInterfaces = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
            setInterfaces(response.data);
        } catch (error) {
            console.error('Error fetching interfaces:', error);
        }
    };

    useEffect(() => {
        setType('MpinterfaceAaforecasts');
        fetchTableId();
        fetchInterfaces();
    }, [setType]);

    const onSubmit = async (data) => {
        try {
            await addEntity(data);
            navigate('/');
        } catch (error) {
            console.error('Error adding entity:', error);
            // Handle error (e.g., show an error message to the user)
        }
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
                                <MenuItem key={entity.recid} value={entity.recid}>
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
                name="mpads1indicator"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Ads 1 Indicator"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpads2indicator"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Ads 2 Indicator"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpads3indicator"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Ads 3 Indicator"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpdatetopost"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Date to Post"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpfutureordersign"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Future Order Sign"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpitemlevel1"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Item Level 1"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mplevel1location"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Level 1 Location"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpmgmtfcstind"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Mgmt FCST Indicator"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpmgmtfcstqty"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Mgmt FCST Quantity"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpotherattribute"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Other Attribute"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpperiodtopost"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Period to Post"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mppyramid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Pyramid"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mprecordtype"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Record Type"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpads1iqty"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Ads 1 IQty"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpads2iqty"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Ads 2 IQty"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpads3iqty"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Ads 3 IQty"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpidemand"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP I Demand"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpperiod1"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Period 1"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpperiod10"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Period 10"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpperiod2"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Period 2"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpperiod3"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Period 3"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpperiod4"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Period 4"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpperiod5"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Period 5"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpperiod6"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Period 6"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpperiod7"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Period 7"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpperiod8"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Period 8"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpperiod9"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Period 9"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpinvqty"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Inv Qty"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mpqty"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Qty"
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
            <Button type="submit" variant="contained" color="primary">
                Add MpinterfaceFfhhforecasts
            </Button>
        </form>
    </Container>
    );
};

export default AddMpinterfaceAaforecasts;
