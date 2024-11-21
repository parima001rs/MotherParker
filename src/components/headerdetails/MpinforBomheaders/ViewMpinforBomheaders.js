import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';

import { useSecondaryContext } from '../../../context/SecondaryContext';
import { TextField, Button, Container, Grid } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import MPInforBOMLinesTable from '../MPInforBOMLines/InlineupdateMPInforBOMLines';
import BackButton from '../../backButton';
const ViewMpinforBomheaders = () => {
    const { recid } = useParams();
    const { entities, ViewEntity, setType } = useSecondaryContext();
    const MpinforBomheaders = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        setType('MpinforBomheader');
        if (MpinforBomheaders) {
            setValue('recid', MpinforBomheaders.recid);
setValue('createddatetime', MpinforBomheaders.createddatetime);
setValue('interface', MpinforBomheaders.interface);
setValue('tableid', MpinforBomheaders.tableid);
setValue('batchnum', MpinforBomheaders.batchnum);
setValue('processed', MpinforBomheaders.processed);
setValue('dataareaid', MpinforBomheaders.dataareaid);
setValue('active', MpinforBomheaders.active);
setValue('approved', MpinforBomheaders.approved);
setValue('approver', MpinforBomheaders.approver);
setValue('pmfBatchSize', MpinforBomheaders.pmfBatchSize);
setValue('bomid', MpinforBomheaders.bomid);
setValue('pmfBulkParent', MpinforBomheaders.pmfBulkParent);
setValue('pmfCoByVarAllow', MpinforBomheaders.pmfCoByVarAllow);
setValue('construction', MpinforBomheaders.construction);
setValue('pmfFormulaChangeDate', MpinforBomheaders.pmfFormulaChangeDate);
setValue('pmfFormulaMultiple', MpinforBomheaders.pmfFormulaMultiple);
setValue('pmfformulaversioncalculation', MpinforBomheaders.pmfformulaversioncalculation);
setValue('fromdate', MpinforBomheaders.fromdate);
setValue('fromQty', MpinforBomheaders.fromQty);
setValue('inventDimId', MpinforBomheaders.inventDimId);
setValue('itemId', MpinforBomheaders.itemId);
setValue('itemname', MpinforBomheaders.itemname);
setValue('inventsiteId', MpinforBomheaders.inventsiteId);
setValue('toDate', MpinforBomheaders.toDate);
setValue('pmfTotalCostAllocation', MpinforBomheaders.pmfTotalCostAllocation);
setValue('pmfTypeId', MpinforBomheaders.pmfTypeId);
setValue('pmfYieldPct', MpinforBomheaders.pmfYieldPct);
setValue('name', MpinforBomheaders.name);

        }
    }, [setType, MpinforBomheaders, setValue]);

    const onSubmit = async (data) => {
        await ViewEntity({ recid: parseInt(recid), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>View MpinforBomheaders</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                <Grid item xs={6}>
    <Controller
        name="recid"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="Rec ID"
                fullWidth
                margin="normal"
                InputProps={{
                    readOnly: true,
                }}
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="createddatetime"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="Created Date Time"
                type="datetime-local"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
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
</Grid>
<Grid item xs={6}>
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
</Grid>
<Grid item xs={6}>
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
</Grid>
<Grid item xs={6}>
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
</Grid>
<Grid item xs={6}>
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
</Grid>
<Grid item xs={6}>
    <Controller
        name="active"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="Active"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="approved"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="Approved"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="approver"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="Approver"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="pmfBatchSize"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="PMF Batch Size"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="bomid"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="BOM ID"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="pmfBulkParent"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="PMF Bulk Parent"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="pmfCoByVarAllow"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="PMF Co-By Var Allow"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="construction"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="Construction"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="pmfFormulaChangeDate"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="PMF Formula Change Date"
                type="date"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="pmfFormulaMultiple"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="PMF Formula Multiple"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="pmfformulaversioncalculation"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="PMF Formula Version Calculation"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="fromdate"
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
</Grid>
<Grid item xs={6}>
    <Controller
        name="fromQty"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="From Quantity"
                type="number"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="inventDimId"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="Invent Dim ID"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
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
</Grid>
<Grid item xs={6}>
    <Controller
        name="itemname"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="Item Name"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="inventsiteId"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="Invent Site ID"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
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
</Grid>
<Grid item xs={6}>
    <Controller
        name="pmfTotalCostAllocation"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="PMF Total Cost Allocation"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="pmfTypeId"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="PMF Type ID"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="pmfYieldPct"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="PMF Yield Percentage"
                type="number"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
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
</Grid>


            
                </Grid>
            </form>
                    <MPInforBOMLinesTable  parentRecId={recid}/>
                
            
                    
        </Container>
        
    );
};


export default ViewMpinforBomheaders;