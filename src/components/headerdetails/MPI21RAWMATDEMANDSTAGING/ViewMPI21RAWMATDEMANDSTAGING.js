import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';

import { TextField, Button, Container, Grid } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import MPI21RAWMATDEMANDLINETable from '../MPI21RAWMATDEMANDLINE/InlineupdateMPI21RAWMATDEMANDLINE';
import BackButton from '../../backButton';

const ViewMPI21RAWMATDEMANDSTAGING = () => {
    const { recid } = useParams();
    const { entities, ViewEntity, setType } = useGenericPaginationContext();
    const MPI21RAWMATDEMANDSTAGING = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        setType('MPI21RAWMATDEMANDSTAGING');
        if (MPI21RAWMATDEMANDSTAGING) {
            setValue('recid', MPI21RAWMATDEMANDSTAGING.recid);
            setValue('interface', MPI21RAWMATDEMANDSTAGING.interface);
            setValue('tableid', MPI21RAWMATDEMANDSTAGING.tableid);
            setValue('batchnum', MPI21RAWMATDEMANDSTAGING.batchnum);
            setValue('processed', MPI21RAWMATDEMANDSTAGING.processed);
            setValue('dataareaid', MPI21RAWMATDEMANDSTAGING.dataareaid);
            setValue('demandname', MPI21RAWMATDEMANDSTAGING.demandname);

        }
    }, [setType, MPI21RAWMATDEMANDSTAGING, setValue]);

    const onSubmit = async (data) => {
        await ViewEntity({ recid: parseInt(recid), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>View MPI21RAWMATDEMANDSTAGING</h2>
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
                            name="demandname"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Demandname"
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
                    <MPI21RAWMATDEMANDLINETable  parentid={recid}/>
                
            
                    
        </Container>
        
    );
};


export default ViewMPI21RAWMATDEMANDSTAGING;