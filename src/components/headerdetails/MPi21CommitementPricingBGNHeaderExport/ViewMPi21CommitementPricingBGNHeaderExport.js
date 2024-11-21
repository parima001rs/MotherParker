import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';

import { TextField, Container, Grid} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import MPi21CommitementPricingBGNLineExportTable from '../MPi21CommitementPricingBGNLineExport/InlineupdateMPi21CommitementPricingBGNLineExport';
import BackButton from '../../backButton';

const ViewMPi21CommitementPricingBGNHeaderExport = () => {
    const { recid } = useParams();
    const { entities, ViewEntity, setType } = useGenericPaginationContext();
    const MPi21CommitementPricingBGNHeaderExport = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();

   
    useEffect(() => {
        setType('MPi21CommitementPricingBGNHeaderExport');
        if (MPi21CommitementPricingBGNHeaderExport) {
            setValue('recid', MPi21CommitementPricingBGNHeaderExport.recid);
            setValue('createddatetime', MPi21CommitementPricingBGNHeaderExport.createddatetime);
            setValue('interface', MPi21CommitementPricingBGNHeaderExport.interface);
            setValue('tableid', MPi21CommitementPricingBGNHeaderExport.tableid);
            setValue('batchnum', MPi21CommitementPricingBGNHeaderExport.batchnum);
            setValue('processed', MPi21CommitementPricingBGNHeaderExport.processed);
            setValue('dataareaid', MPi21CommitementPricingBGNHeaderExport.dataareaid);
            setValue('companylocation', MPi21CommitementPricingBGNHeaderExport.companylocation);
            setValue('trxsequenceno', MPi21CommitementPricingBGNHeaderExport.trxsequenceno);
            setValue('pricingNo', MPi21CommitementPricingBGNHeaderExport.pricingNo);
            setValue('erpRefNo', MPi21CommitementPricingBGNHeaderExport.erpRefNo);
            setValue('statusId', MPi21CommitementPricingBGNHeaderExport.statusId);
            setValue('statusText', MPi21CommitementPricingBGNHeaderExport.statusText);
                       

        }
    }, [setType, MPi21CommitementPricingBGNHeaderExport, setValue]);

    const onSubmit = async (data) => {
        await ViewEntity({ recid: parseInt(recid), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>View MPi21CommitementPricingBGNHeaderExport</h2>
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
                                label="Created Datetime"
                                type="datetime-local"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{ shrink: true }}
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
                                type="number"
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
                        name="trxsequenceno"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Transaction Sequence No"
                                type="number"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Controller
                        name="pricingNo"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Pricing No"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Controller
                        name="erpRefNo"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="ERP Reference No"
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
                                type="number"
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
            <MPi21CommitementPricingBGNLineExportTable  parentid={recid}/>
        </Container>
        
    );
};


export default ViewMPi21CommitementPricingBGNHeaderExport;
