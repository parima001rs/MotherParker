import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, Grid } from '@mui/material';
import { useSecondaryContext } from '../../../context/SecondaryContext';

import { useForm, Controller } from 'react-hook-form';
import MPI21BLENDDEMANDLINETable from '../MPI21BLENDDEMANDLINE/InlineupdateMPI21BLENDDEMANDLINE';
import BackButton from '../../backButton';

const ViewMPI21BLENDDEMANDSTAGING = () => {
    const { recid } = useParams();
    const { entities, ViewEntity, setType } = useGenericPaginationContext();
    const MPI21BLENDDEMANDSTAGING = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        setType('MPI21BLENDDEMANDSTAGING');
        if (MPI21BLENDDEMANDSTAGING) {
            setValue('recid', MPI21BLENDDEMANDSTAGING.recid);
            setValue('interface', MPI21BLENDDEMANDSTAGING.interface);
            setValue('tableid', MPI21BLENDDEMANDSTAGING.tableid);
            setValue('batchnum', MPI21BLENDDEMANDSTAGING.batchnum);
            setValue('processed', MPI21BLENDDEMANDSTAGING.processed);
            setValue('dataareaid', MPI21BLENDDEMANDSTAGING.dataareaid);
            setValue('companylocation', MPI21BLENDDEMANDSTAGING.companylocation);
            setValue('orderno', MPI21BLENDDEMANDSTAGING.orderno);

        }
    }, [setType, MPI21BLENDDEMANDSTAGING, setValue]);

    const onSubmit = async (data) => {
        await ViewEntity({ recid: parseInt(recid), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>View MPI21BLENDDEMANDSTAGING</h2>
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
                            name="orderno"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Orderno"
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
                    <MPI21BLENDDEMANDLINETable  parentid={recid}/>
                
            
                    
        </Container>
        
    );
};


export default ViewMPI21BLENDDEMANDSTAGING;