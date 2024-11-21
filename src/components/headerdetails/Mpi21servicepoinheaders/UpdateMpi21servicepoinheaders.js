
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMpi21servicepoinheader = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType, setInterfaceType } = useGenericPaginationContext();  
    const Mpi21servicepoinheader = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 
    setInterfaceType(location.state?.interfaceName);


    useEffect(() => {
        setType('Mpi21servicepoinheader');
        fetchTableId();
        fetchInterfaces();

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

    const fetchTableId = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpheaderTables');
        setTableId(response.data);
    };

    const fetchInterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setInterfaces(response.data);
    };

    const onSubmit = async (data) => {
        await updateEntity(data); 
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text} </h2>
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
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="interface-label">Interface</InputLabel>
                            <Select
                                {...field}
                                labelId="interface-label"
                                label="Interface"
                            >
                                {interfaces.map((entity) => (
                                    <MenuItem key={entity.recid} value={entity.interface}>
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

                <Button type="submit" variant="contained" color="primary">
                    Update Mpi21servicepoinheader
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21servicepoinheader;
