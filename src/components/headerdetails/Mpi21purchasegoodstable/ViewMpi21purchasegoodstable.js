import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';

import { TextField, Button, Container, Grid } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import MPI21PURCHASEORDERLINETable from '../MPI21PURCHASEORDERLINE/InlineupdateMPI21PURCHASEORDERLINE';
import BackButton from '../../backButton';

const ViewMPI21_PURCHASEGOODSTABLE = () => {
    const { recid } = useParams();
    const { entities, ViewEntity, setType } = useGenericPaginationContext();
    const MPI21_PURCHASEGOODSTABLE = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();

   
    useEffect(() => {
        setType('MPI21_PURCHASEGOODSTABLE');
        if (MPI21_PURCHASEGOODSTABLE) {
            setValue('recid', MPI21_PURCHASEGOODSTABLE.recid);
            setValue('createddatetime', MPI21_PURCHASEGOODSTABLE.createddatetime);
            setValue('interface', MPI21_PURCHASEGOODSTABLE.interface);
            setValue('tableid', MPI21_PURCHASEGOODSTABLE.tableid);
            setValue('batchnum', MPI21_PURCHASEGOODSTABLE.batchnum);
            setValue('processed', MPI21_PURCHASEGOODSTABLE.processed);
            setValue('dataareaid', MPI21_PURCHASEGOODSTABLE.dataareaid);
            setValue('actionid', MPI21_PURCHASEGOODSTABLE.actionid);
            setValue('bolno', MPI21_PURCHASEGOODSTABLE.bolno);
            setValue('companylocation', MPI21_PURCHASEGOODSTABLE.companylocation);
            setValue('erptransferorderno', MPI21_PURCHASEGOODSTABLE.erptransferorderno);
            setValue('receiptdate', MPI21_PURCHASEGOODSTABLE.receiptdate);
            setValue('receiptno', MPI21_PURCHASEGOODSTABLE.receiptno);
            setValue('transferorderno', MPI21_PURCHASEGOODSTABLE.transferorderno);
            setValue('vendoraccountno', MPI21_PURCHASEGOODSTABLE.vendoraccountno);
            setValue('vendorrefno', MPI21_PURCHASEGOODSTABLE.vendorrefno);
            setValue('warehouserefno', MPI21_PURCHASEGOODSTABLE.warehouserefno);


        }
    }, [setType, MPI21_PURCHASEGOODSTABLE, setValue]);

    const onSubmit = async (data) => {
        await ViewEntity({ recid: parseInt(recid), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>View MPI21_PURCHASEGOODSTABLE</h2>
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
                label="Recid"
                fullWidth
                margin="normal"
                disabled
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
                label="Created DateTime"
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
                label="Table Id"
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
        name="actionid"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="Action ID"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="bolno"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="BOL Number"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="companylocation"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="Company Location"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="erptransferorderno"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="ERP Transfer Order Number"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="receiptdate"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="Receipt Date"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="receiptno"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="Receipt Number"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="transferorderno"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="Transfer Order Number"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="vendoraccountno"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="Vendor Account Number"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="vendorrefno"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="Vendor Reference Number"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="warehouserefno"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="Warehouse Reference Number"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>

                </Grid>
            </form>
            <MPI21PURCHASEORDERLINETable  parentid={recid}/>
        </Container>
        
    );
};


export default ViewMPI21_PURCHASEGOODSTABLE;
