import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMpi21vendormasterheader = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType, setInterfaceType } = useGenericPaginationContext();  
    const Mpi21vendormasterheader = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 
    setInterfaceType(location.state?.interfaceName);


    useEffect(() => {
        setType('Mpi21vendormasterheader');
        fetchTableId();
        fetchInterfaces();

        if (Mpi21vendormasterheader) {
            setValue('recid', Mpi21vendormasterheader.recid);

            setValue('createddatetime', Mpi21vendormasterheader.createddatetime);
            setValue('interface', Mpi21vendormasterheader.interface);
            setValue('tableid', Mpi21vendormasterheader.tableid);
            setValue('batchnum', Mpi21vendormasterheader.batchnum);
            setValue('processed', Mpi21vendormasterheader.processed);
            setValue('dataareaid', Mpi21vendormasterheader.dataareaid);
            setValue('actionid', Mpi21vendormasterheader.actionid);
            setValue('companylocation', Mpi21vendormasterheader.companylocation);
            setValue('contactname', Mpi21vendormasterheader.contactname);
            setValue('currency', Mpi21vendormasterheader.currency);
            setValue('defaultlocation', Mpi21vendormasterheader.defaultlocation);
            setValue('entitytype', Mpi21vendormasterheader.entitytype);
            setValue('locationvendornumber', Mpi21vendormasterheader.locationvendornumber);
            setValue('status', Mpi21vendormasterheader.status);
            setValue('taxno', Mpi21vendormasterheader.taxno);
            setValue('termscode', Mpi21vendormasterheader.termscode);
            setValue('vendoraccountnumber', Mpi21vendormasterheader.vendoraccountnumber);
            setValue('vendorname', Mpi21vendormasterheader.vendorname);
   
         
        }
    }, [setType, Mpi21vendormasterheader, setValue]);

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
                    name="contactname"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Contactname"
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
                    name="defaultlocation"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Defaultlocation"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="entitytype"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Entitytype"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="locationvendornumber"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Locationvendornumber"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="status"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Status"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="taxno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Taxno"
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
                    name="vendoraccountnumber"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Vendoraccountnumber"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="vendorname"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Vendorname"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Button type="submit" variant="contained" color="primary">
                    Update 
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21vendormasterheader;
