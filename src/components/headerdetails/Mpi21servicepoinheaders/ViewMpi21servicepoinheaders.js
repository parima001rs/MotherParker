import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';

import { TextField, Button, Container, Grid } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import Mpi21servicepoinlineTable from '../Mpi21servicepoinlines/InlineupdateMpi21servicepoinlines';
import BackButton from '../../backButton';

const ViewMpi21servicepoinheader = () => {
    const { recid } = useParams();
    const { entities, ViewEntity, setType } = useGenericPaginationContext();
    const Mpi21servicepoinheader = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        setType('Mpi21servicepoinheader');
        if (Mpi21servicepoinheader) {
            setValue('recid', Mpi21servicepoinheader.recid);
            setValue('createddatetime', Mpi21servicepoinheader.createddatetime);
            setValue('interface', Mpi21servicepoinheader.interface);
            setValue('tableid', Mpi21servicepoinheader.tableid);
            setValue('batchnum', Mpi21servicepoinheader.batchnum);
            setValue('processed', Mpi21servicepoinheader.processed);
            setValue('dataareaid', Mpi21servicepoinheader.dataareaid);
            setValue('actionid', Mpi21servicepoinheader.actionid);
            setValue('companylocation', Mpi21servicepoinheader.companylocation);
            setValue('currency', Mpi21servicepoinheader.currency);
            setValue('erpserviceponumber', Mpi21servicepoinheader.erpserviceponumber);
            setValue('erpshoporderno', Mpi21servicepoinheader.erpshoporderno);
            setValue('itemno', Mpi21servicepoinheader.itemno);
            setValue('locationid', Mpi21servicepoinheader.locationid);
            setValue('mpi21exportedtoi21', Mpi21servicepoinheader.mpi21exportedtoi21);
            setValue('processname', Mpi21servicepoinheader.processname);
            setValue('quantity', Mpi21servicepoinheader.quantity);
            setValue('quantityuom', Mpi21servicepoinheader.quantityuom);
            setValue('servicecontractno', Mpi21servicepoinheader.servicecontractno);
            setValue('siteid', Mpi21servicepoinheader.siteid);
            setValue('storagelocation', Mpi21servicepoinheader.storagelocation);
            setValue('vendoraccountno', Mpi21servicepoinheader.vendoraccountno);
            setValue('workorderno', Mpi21servicepoinheader.workorderno);
            setValue('createdby', Mpi21servicepoinheader.createdby);
            setValue('book', Mpi21servicepoinheader.book);
            setValue('trxsequenceno', Mpi21servicepoinheader.trxsequenceno);
            setValue('vendaccount', Mpi21servicepoinheader.vendaccount);
        }
    }, [setType, Mpi21servicepoinheader, setValue]);

    const onSubmit = async (data) => {
        await ViewEntity({ recid: parseInt(recid), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>View Mpi21servicepoinheader</h2>
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
                                label="Createddatetime"
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
                                label="Tableid"
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
                                label="Batchnum"
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
                                label="Dataareaid"
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
                                label="Actionid"
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
                                label="Companylocation"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Controller
                        name="currency"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Currency"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Controller
                        name="erpserviceponumber"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Erpserviceponumber"
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
                                label="Erpshoporderno"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Controller
                        name="itemno"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Itemno"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Controller
                        name="locationid"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Locationid"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Controller
                        name="mpi21exportedtoi21"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Mpi21exportedtoi21"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Controller
                        name="processname"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Processname"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Controller
                        name="quantity"
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
                </Grid>

                <Grid item xs={6}>
                    <Controller
                        name="quantityuom"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Quantityuom"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Controller
                        name="servicecontractno"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Servicecontractno"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Controller
                        name="siteid"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Siteid"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Controller
                        name="storagelocation"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Storagelocation"
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
                                label="Vendoraccountno"
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
                                label="Workorderno"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Controller
                        name="createdby"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Createdby"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Controller
                        name="book"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Book"
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
                                label="Trxsequenceno"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                </Grid>


                <Grid item xs={6}>
                    <Controller
                        name="Vendaccount"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="vendaccount"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                </Grid>


                                        
                </Grid>
            </form>
                    <Mpi21servicepoinlineTable  parentid={recid}/>
                
            
                    
        </Container>
        
    );
};


export default ViewMpi21servicepoinheader;