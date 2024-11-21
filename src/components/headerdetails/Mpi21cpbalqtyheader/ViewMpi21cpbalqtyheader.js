import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';

import { TextField, Container, Grid} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import Mpi21cpbalqtylineTable from '../Mpi21cpbalqtyline/InlineupdateMpi21cpbalqtyline';
import BackButton from '../../backButton';

const ViewMpi21cpbalqtyheader = () => {
    const { recid } = useParams();
    const { entities, ViewEntity, setType } = useGenericPaginationContext();
    const Mpi21cpbalqtyheader = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();

   
    useEffect(() => {
        setType('Mpi21cpbalqtyheader');
        if (Mpi21cpbalqtyheader) {
            setValue('recid', Mpi21cpbalqtyheader.recid);
            setValue('createddatetime', Mpi21cpbalqtyheader.createddatetime);
            setValue('interface', Mpi21cpbalqtyheader.interface);
            setValue('tableid', Mpi21cpbalqtyheader.tableid);
            setValue('batchnum', Mpi21cpbalqtyheader.batchnum);
            setValue('processed', Mpi21cpbalqtyheader.processed);
            setValue('dataareaid', Mpi21cpbalqtyheader.dataareaid);
            setValue('companylocation', Mpi21cpbalqtyheader.companylocation);
            setValue('trxsequenceno', Mpi21cpbalqtyheader.trxsequenceno);            

        }
    }, [setType, Mpi21cpbalqtyheader, setValue]);

    const onSubmit = async (data) => {
        await ViewEntity({ recid: parseInt(recid), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>View Mpi21cpbalqtyheader</h2>
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
                                id="createddatetime"
                                label="Created Datetime"
                                type="datetime-local"
                                InputLabelProps={{ shrink: true }}
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
                                id="tableid"
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
                                id="batchnum"
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
                                id="dataareaid"
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
                                id="companylocation"
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
                                id="trxsequenceno"
                                label="Transaction Sequence No"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                </Grid>
            </Grid>

            </form>
            <Mpi21cpbalqtylineTable  parentid={recid}/>
        </Container>
        
    );
};


export default ViewMpi21cpbalqtyheader;
