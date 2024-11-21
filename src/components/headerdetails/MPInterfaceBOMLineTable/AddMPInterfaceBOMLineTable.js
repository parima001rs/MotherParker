import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import BackButton from '../../backButton';


const AddMPInterfaceBOMLineTable = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();

    const [parentRecIdEntities, setParentRecIdEntities] = useState([]);

    const onSubmit = async (data) => {
        await addEntity(data);
        // navigate('/');
    };

    useEffect(() => {
        setType('MPInterfaceBOMLineTable');
        fetchParentRecIdEntities();
    }, [setType]);

    const fetchParentRecIdEntities = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MPInterfaceBOMLineTable');
        setParentRecIdEntities(response.data);
    };

    return (
        <Container>
            <BackButton />
            <h2>Add MPInterfaceBOMLineTable</h2>
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
            InputProps={{
                readOnly: true,
            }}
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
            label="Createddatetime"
            type="datetime-local"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="refTableID"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="RefTableID"
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
            label="Batchnum"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="refRecid"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="RefRecid"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpBomBlend"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="MPBomBlend"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpBomComponentItem"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="MPBomComponentItem"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpBomComponentQty"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="MPBomComponentQty"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpBomFromDate"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="MPBomFromDate"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpBomGrind"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="MPBomGrind"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpBomItemShrinkage"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="MPBomItemShrinkage"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpBomLineCreatedBy"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="MPBomLineCreatedBy"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpBomLineCreatedOn"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="MPBomLineCreatedOn"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpBomLineFacility"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="MPBomLineFacility"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpBomLineItem"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="MPBomLineItem"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpBomLineNo"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="MPBomLineNo"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpBomLineScrap"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="MPBomLineScrap"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpBomLineUOM"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="MPBomLineUOM"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpBomMaintDate"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="MPBomMaintDate"
            type="datetime-local"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpBomMaintTime"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="MPBomMaintTime"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpBomMustIssueOverride"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="MPBomMustIssueOverride"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpBomShopOrder"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="MPBomShopOrder"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpBomToDate"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="MPBomToDate"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpBomLineNum"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="MPBomLineNum"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="mpBomActivity"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="MPBomActivity"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="bomRecid"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="BomRecid"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="formulaLineQuantity"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="FormulaLineQuantity"
            fullWidth
            margin="normal"
        />
    )}
/>
<Controller
    name="formulaLineQuantityDenominator"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="FormulaLineQuantityDenominator"
            fullWidth
            margin="normal"
        />
    )}
/>



                <Button type="submit" variant="contained" color="primary">
                    Add MPInterfaceBOMLineTable
                </Button>
            </form>
        </Container>
    );
};

export default AddMPInterfaceBOMLineTable;
