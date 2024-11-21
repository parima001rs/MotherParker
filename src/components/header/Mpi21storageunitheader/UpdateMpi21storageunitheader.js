import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
//import { useGenericContext } from '../../../context/GenericContext';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, FormControl,FormControlLabel,Checkbox, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMPI21STORAGEUNITHEADER = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType, setInterfaceType } = useGenericPaginationContext();  
    const MPI21STORAGEUNITHEADER = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 
    setInterfaceType(location.state?.interfaceName);


    useEffect(() => {
        setType('MPI21STORAGEUNITHEADER');
        fetchTableId();
        fetchInterfaces();

        if (MPI21STORAGEUNITHEADER) {
            
            

            setValue('recid', MPI21STORAGEUNITHEADER.recid);
            setValue('createddatetime', MPI21STORAGEUNITHEADER.createddatetime);
            setValue('interface', MPI21STORAGEUNITHEADER.interface);
            setValue('tableid', MPI21STORAGEUNITHEADER.tableid);
            setValue('batchnum', MPI21STORAGEUNITHEADER.batchnum);
            setValue('processed', MPI21STORAGEUNITHEADER.processed);
            setValue('actionid', MPI21STORAGEUNITHEADER.actionid);
            setValue('companylocation', MPI21STORAGEUNITHEADER.companylocation);
            setValue('storagelocation', MPI21STORAGEUNITHEADER.storagelocation);
            setValue('storageunit', MPI21STORAGEUNITHEADER.storageunit);
            setValue('storageunittype', MPI21STORAGEUNITHEADER.storageunittype);
            setValue('createdby', MPI21STORAGEUNITHEADER.createdby);
            setValue('dataareaid', MPI21STORAGEUNITHEADER.dataareaid);
            
        }
    }, [setType, MPI21STORAGEUNITHEADER, setValue]);

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
            name="recid"
            control={control}
            defaultValue=""
            render={({ field }) => (
                <TextField
                    {...field}
                    label="Recid"
                    fullWidth
                    margin="normal"
                    InputProps={{ readOnly: true }} // Make field read-only if needed
                />
            )}
        />
        <Controller
            name="createddatetime"
            control={control}
            defaultValue=""
            render={({ field }) => (
                <TextField
                    {...field}
                    label="Created DateTime"
                    fullWidth
                    margin="normal"
                    type="datetime-local" // Adjust input type as needed
                    InputLabelProps={{ shrink: true }}
                />
            )}
        />
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
        <Controller
            name="tableid"
            control={control}
            defaultValue=""
            render={({ field }) => (
                <TextField
                    {...field}
                    label="Table ID"
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
                    label="Batch Number"
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
            name="actionid"
            control={control}
            defaultValue=""
            render={({ field }) => (
                <TextField
                    {...field}
                    label="Action ID"
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
                    label="Company Location"
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
                    label="Storage Location"
                    fullWidth
                    margin="normal"
                />
            )}
        />
        <Controller
            name="storageunit"
            control={control}
            defaultValue=""
            render={({ field }) => (
                <TextField
                    {...field}
                    label="Storage Unit"
                    fullWidth
                    margin="normal"
                />
            )}
        />
        <Controller
            name="storageunittype"
            control={control}
            defaultValue=""
            render={({ field }) => (
                <TextField
                    {...field}
                    label="Storage Unit Type"
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
                    label="Created By"
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
                    label="Data Area ID"
                    fullWidth
                    margin="normal"
                />
                    )}
                />
                              
                <Button type="submit" variant="contained" color="primary">
                    Update MPI21STORAGEUNITHEADER
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMPI21STORAGEUNITHEADER;
