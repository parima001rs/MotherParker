import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';

import { TextField, Button, Container, Grid } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import MPI21PURCHASEORDERLINETable from '../MPI21PURCHASEORDERLINE/InlineupdateMPI21PURCHASEORDERLINE';
import BackButton from '../../backButton';

const ViewMPI21COMMITMENTPRICINGBGNHEADER = () => {
    const { recid } = useParams();
    const { entities, ViewEntity, setType } = useGenericPaginationContext();
    const MPI21COMMITMENTPRICINGBGNHEADER = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();

   
    useEffect(() => {
        setType('MPI21COMMITMENTPRICINGBGNHEADER');
        if (MPI21COMMITMENTPRICINGBGNHEADER) {
            setValue('recid', MPI21COMMITMENTPRICINGBGNHEADER.recid);
            setValue('createddatetime', MPI21COMMITMENTPRICINGBGNHEADER.createddatetime);
            setValue('interface', MPI21COMMITMENTPRICINGBGNHEADER.interface);
            setValue('tableid', MPI21COMMITMENTPRICINGBGNHEADER.tableid);
            setValue('batchnum', MPI21COMMITMENTPRICINGBGNHEADER.batchnum);
            setValue('processed', MPI21COMMITMENTPRICINGBGNHEADER.processed);
            setValue('dataareaid', MPI21COMMITMENTPRICINGBGNHEADER.dataareaid);
            setValue('actionid', MPI21COMMITMENTPRICINGBGNHEADER.actionid);
            setValue('approvalbasis', MPI21COMMITMENTPRICINGBGNHEADER.approvalbasis);
            setValue('book', MPI21COMMITMENTPRICINGBGNHEADER.book);
            setValue('commodity', MPI21COMMITMENTPRICINGBGNHEADER.commodity);
            setValue('contractdate', MPI21COMMITMENTPRICINGBGNHEADER.contractdate);
            setValue('contractno', MPI21COMMITMENTPRICINGBGNHEADER.contractno);
            setValue('createdpurchid', MPI21COMMITMENTPRICINGBGNHEADER.createdpurchid);
            setValue('incoterm', MPI21COMMITMENTPRICINGBGNHEADER.incoterm);
            setValue('incotermlocation', MPI21COMMITMENTPRICINGBGNHEADER.incotermlocation);
            setValue('position', MPI21COMMITMENTPRICINGBGNHEADER.position);
            setValue('purchpoolid', MPI21COMMITMENTPRICINGBGNHEADER.purchpoolid);
            setValue('termscode', MPI21COMMITMENTPRICINGBGNHEADER.termscode);
            setValue('vendaccount', MPI21COMMITMENTPRICINGBGNHEADER.vendaccount);
            setValue('vendoraccountno', MPI21COMMITMENTPRICINGBGNHEADER.vendoraccountno);
            setValue('vendorrefno', MPI21COMMITMENTPRICINGBGNHEADER.vendorrefno);
            setValue('weightterm', MPI21COMMITMENTPRICINGBGNHEADER.weightterm);


        }
    }, [setType, MPI21COMMITMENTPRICINGBGNHEADER, setValue]);

    const onSubmit = async (data) => {
        await ViewEntity({ recid: parseInt(recid), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>View MPI21COMMITMENTPRICINGBGNHEADER</h2>
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
                            name="approvalbasis"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Approvalbasis"
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
                            name="commodity"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Commodity"
                                    fullWidth
                                    margin="normal"
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="contractdate"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Contractdate"
                                    fullWidth
                                    margin="normal"
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="contractno"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Contractno"
                                    fullWidth
                                    margin="normal"
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="createdpurchid"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Createdpurchid"
                                    fullWidth
                                    margin="normal"
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="incoterm"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Incoterm"
                                    fullWidth
                                    margin="normal"
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="incotermlocation"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Incotermlocation"
                                    fullWidth
                                    margin="normal"
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="position"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Position"
                                    fullWidth
                                    margin="normal"
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="purchpoolid"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Purchpoolid"
                                    fullWidth
                                    margin="normal"
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="termscode"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Termscode"
                                    fullWidth
                                    margin="normal"
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="vendaccount"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Vendaccount"
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
                            name="vendorrefno"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Vendorrefno"
                                    fullWidth
                                    margin="normal"
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="weightterm"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Weightterm"
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


export default ViewMPI21COMMITMENTPRICINGBGNHEADER;
