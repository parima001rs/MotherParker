import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import BackButton from '../../backButton';

const AddMPInforBOMLines = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();

    const [parentRecIdEntities, setParentRecIdEntities] = useState([]);

    const onSubmit = async (data) => {
        await addEntity(data);
        // navigate('/');
    };

    useEffect(() => {
        setType('MPInforBOMLines');
        fetchParentRecIdEntities();
    }, [setType]);

    const fetchParentRecIdEntities = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpinforBomheader');
        setParentRecIdEntities(response.data);
    };

    return (
        <Container>
            <BackButton />
            <h2>Add MPInforBOMLines</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

            <Controller
    name="recid"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Recid"
            type="number"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="createdDateTime"
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
    name="dataAreaId"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Data Area ID"
            type="text"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="bomConsump"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="BOM Consumption"
            type="text"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="bomId"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="BOM ID"
            type="text"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="bomQty"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="BOM Quantity"
            type="number"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="bomQtySerie"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="BOM Quantity Series"
            type="number"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="bomType"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="BOM Type"
            type="text"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="configGroupId"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Config Group ID"
            type="text"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="formula"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Formula"
            type="text"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="fromDate"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="From Date"
            type="date"
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
            label="Invent Dim ID"
            type="text"
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
            type="text"
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
            type="text"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="lineNum"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Line Number"
            type="number"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="oprNum"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Operation Number"
            type="number"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="pmfFormulaPct"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="PMF Formula Percentage"
            type="number"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="pmfPctEnable"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="PMF Percentage Enable"
            type="checkbox"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="pmfScalable"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="PMF Scalable"
            type="checkbox"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="prodFlushingPrincip"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Production Flushing Principle"
            type="text"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="parentRecId"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Parent Rec ID"
            type="number"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="scrapConst"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Scrap Constant"
            type="number"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="scrapVar"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Scrap Variable"
            type="number"
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
            type="text"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="toDate"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="To Date"
            type="date"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="unitId"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Unit ID"
            type="text"
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
            type="text"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="wrkCtrConsumption"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Work Center Consumption"
            type="checkbox"
            fullWidth
            margin="normal"
        />
    )}
/>


                <Button type="submit" variant="contained" color="primary">
                    Add MPInforBOMLines
                </Button>
            </form>
        </Container>
    );
};

export default AddMPInforBOMLines;
