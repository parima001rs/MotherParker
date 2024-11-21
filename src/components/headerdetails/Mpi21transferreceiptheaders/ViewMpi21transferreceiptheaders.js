import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, Grid } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import Mpi21transferreceiptlinesTable from '../Mpi21transferreceiptlines/InlineupdateMpi21transferreceiptlines';
import BackButton from '../../backButton';
const ViewMpi21transferreceiptheaders = () => {
    const { recid } = useParams();
    const { entities, ViewEntity, setType } = useGenericPaginationContext();
    const Mpi21transferreceiptheaders = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        setType('Mpi21transferreceiptheaders');
        if (Mpi21transferreceiptheaders) {
            setValue('recid', Mpi21transferreceiptheaders.recid);
            setValue('createddatetime', Mpi21transferreceiptheaders.createddatetime);
            setValue('interface', Mpi21transferreceiptheaders.interface);
            setValue('tableid', Mpi21transferreceiptheaders.tableid);
            setValue('batchnum', Mpi21transferreceiptheaders.batchnum);
            setValue('processed', Mpi21transferreceiptheaders.processed);
            setValue('dataareaid', Mpi21transferreceiptheaders.dataareaid);
            setValue('actionid', Mpi21transferreceiptheaders.actionid);
            setValue('bolno', Mpi21transferreceiptheaders.bolno);
            setValue('companylocation', Mpi21transferreceiptheaders.companylocation);
            setValue('erpreceiptno', Mpi21transferreceiptheaders.erpreceiptno);
            setValue('erptransferorderno', Mpi21transferreceiptheaders.erptransferorderno);
            setValue('erptransordertype', Mpi21transferreceiptheaders.erptransordertype);
            setValue('receiptdate', Mpi21transferreceiptheaders.receiptdate);
            setValue('transferorderno', Mpi21transferreceiptheaders.transferorderno);
            setValue('vendoraccountno', Mpi21transferreceiptheaders.vendoraccountno);
            setValue('vendorrefno', Mpi21transferreceiptheaders.vendorrefno);
            setValue('warehouserefno', Mpi21transferreceiptheaders.warehouserefno);
            setValue('createdby', Mpi21transferreceiptheaders.createdby);
        }
    }, [setType, Mpi21transferreceiptheaders, setValue]);

    const onSubmit = async (data) => {
        await ViewEntity({ recid: parseInt(recid), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>View Mpi21transferreceiptheaders</h2>
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
                                    label="Createddatetime"
                                    type="datetime-local"
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
                            name="interface"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Interface"
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
                            name="tableid"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Tableid"
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
                            name="batchnum"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Batchnum"
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
                            name="processed"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Processed"
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
                            name="dataareaid"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Dataareaid"
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
                            name="actionid"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Actionid"
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
                            name="bolno"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Bolno"
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
                            name="companylocation"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Companylocation"
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
                            name="erpreceiptno"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Erpreceiptno"
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
                            name="erptransferorderno"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Erptransferorderno"
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
                            name="erptransordertype"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Erptransordertype"
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
                            name="receiptdate"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Receiptdate"
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
                            name="transferorderno"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Transferorderno"
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
                            name="vendoraccountno"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Vendoraccountno"
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
                            name="vendorrefno"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Vendorrefno"
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
                            name="warehouserefno"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Warehouserefno"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            )}
                        />
                    </Grid>                       
                </Grid>
            </form>
                    <Mpi21transferreceiptlinesTable  parentid={recid}/>
                
            
                    
        </Container>
        
    );
};


export default ViewMpi21transferreceiptheaders;