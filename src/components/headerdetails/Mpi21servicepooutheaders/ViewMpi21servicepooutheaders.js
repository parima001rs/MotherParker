import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, Grid } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import MPi21ServicePOOutLineTable from '../MPi21ServicePOOutLine/InlineupdateMPi21ServicePOOutLine';
import BackButton from '../../backButton';
const ViewMPI21SERVICEPOOUTHEADER = () => {
    const { recid } = useParams();
    const { entities, ViewEntity, setType } = useGenericPaginationContext();
    const MPI21SERVICEPOOUTHEADER = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        setType('MPI21SERVICEPOOUTHEADER');
        if (MPI21SERVICEPOOUTHEADER) {
            setValue('recid', MPI21SERVICEPOOUTHEADER.recid);
            setValue('createddatetime', MPI21SERVICEPOOUTHEADER.createddatetime);
            setValue('interface', MPI21SERVICEPOOUTHEADER.interface);
            setValue('tableid', MPI21SERVICEPOOUTHEADER.tableid);
            setValue('batchnum', MPI21SERVICEPOOUTHEADER.batchnum);
            setValue('processed', MPI21SERVICEPOOUTHEADER.processed);
            setValue('dataareaid', MPI21SERVICEPOOUTHEADER.dataareaid);
            setValue('erpshoporderno', MPI21SERVICEPOOUTHEADER.erpshoporderno);
            setValue('trxsequenceno', MPI21SERVICEPOOUTHEADER.trxsequenceno);
            setValue('workorderno', MPI21SERVICEPOOUTHEADER.workorderno);
            setValue('erpservicepono', MPI21SERVICEPOOUTHEADER.erpservicepono);
            setValue('statusId', MPI21SERVICEPOOUTHEADER.statusId);
            setValue('statusText', MPI21SERVICEPOOUTHEADER.statusText);
        }
    }, [setType, MPI21SERVICEPOOUTHEADER, setValue]);

    const onSubmit = async (data) => {
        await ViewEntity({ recid: parseInt(recid), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>View MPI21SERVICEPOOUTHEADER</h2>
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
                label="Created Datetime"
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
        name="erpshoporderno"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="ERP Shop Order No"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="trxsequenceno"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="Transaction Sequence No"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="workorderno"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="Work Order No"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="erpservicepono"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="ERP Service PO No"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="statusId"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="Status ID"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
<Grid item xs={6}>
    <Controller
        name="statusText"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <TextField
                {...field}
                label="Status Text"
                fullWidth
                margin="normal"
            />
        )}
    />
</Grid>
                     
                </Grid>
            </form>
                    <MPi21ServicePOOutLineTable  parentid={recid}/>
                
            
                    
        </Container>
        
    );
};


export default ViewMPI21SERVICEPOOUTHEADER;