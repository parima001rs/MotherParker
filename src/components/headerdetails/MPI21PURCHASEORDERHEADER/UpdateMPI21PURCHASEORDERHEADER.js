import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';

import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import BackButton from '../../backButton';

const UpdateMPI21PURCHASEORDERHEADER = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericPaginationContext();
    const MPI21PURCHASEORDERHEADER = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();

    const [mpInterfaceEntities, setMpInterfaceEntities] = useState([]);

    useEffect(() => {
        setType('MPI21PURCHASEORDERHEADER');
        if (MPI21PURCHASEORDERHEADER) {
            setValue('createddatetime', MPI21PURCHASEORDERHEADER.createddatetime);
            setValue('interface', MPI21PURCHASEORDERHEADER.interface);
            setValue('tableid', MPI21PURCHASEORDERHEADER.tableid);
            setValue('batchnum', MPI21PURCHASEORDERHEADER.batchnum);
            setValue('processed', MPI21PURCHASEORDERHEADER.processed);
            setValue('dataareaid', MPI21PURCHASEORDERHEADER.dataareaid);
            setValue('actionid', MPI21PURCHASEORDERHEADER.actionid);
            setValue('approvalbasis', MPI21PURCHASEORDERHEADER.approvalbasis);
            setValue('book', MPI21PURCHASEORDERHEADER.book);
            setValue('commodity', MPI21PURCHASEORDERHEADER.commodity);
            setValue('contractdate', MPI21PURCHASEORDERHEADER.contractdate);
            setValue('contractno', MPI21PURCHASEORDERHEADER.contractno);
            setValue('createdpurchid', MPI21PURCHASEORDERHEADER.createdpurchid);
            setValue('incoterm', MPI21PURCHASEORDERHEADER.incoterm);
            setValue('incotermlocation', MPI21PURCHASEORDERHEADER.incotermlocation);
            setValue('position', MPI21PURCHASEORDERHEADER.position);
            setValue('purchpoolid', MPI21PURCHASEORDERHEADER.purchpoolid);
            setValue('termscode', MPI21PURCHASEORDERHEADER.termscode);
            setValue('vendaccount', MPI21PURCHASEORDERHEADER.vendaccount);
            setValue('vendoraccountno', MPI21PURCHASEORDERHEADER.vendoraccountno);
            setValue('vendorrefno', MPI21PURCHASEORDERHEADER.vendorrefno);
            setValue('weightterm', MPI21PURCHASEORDERHEADER.weightterm);

            fetchMpInterfaceEntities();
        }
    }, [setType, MPI21PURCHASEORDERHEADER, setValue]);

    const fetchMpInterfaceEntities = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setMpInterfaceEntities(response.data);
    };

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update MPI21PURCHASEORDERHEADER</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

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
                        />
                    )}
                />
                
                <Controller
                    name="interface"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <FormControl fullWidth>
                            <InputLabel id="interface-label">Interface</InputLabel>
                            <Select {...field} labelId="interface-label">
                                {mpInterfaceEntities.map((entity, index) => (
                                    <MenuItem key={index} value={entity.interface}>
                                        {entity.interface}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />
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


                <Button type="submit" variant="contained" color="primary">
                    Update MPI21PURCHASEORDERHEADER
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMPI21PURCHASEORDERHEADER;
