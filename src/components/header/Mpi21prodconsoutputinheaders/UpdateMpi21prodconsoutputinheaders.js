import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
//import { useGenericContext } from '../../../context/GenericContext';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMPI21PRODCONSOUTPUTINHEADER = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType, setInterfaceType } = useGenericPaginationContext();  
    const MPI21PRODCONSOUTPUTINHEADER = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate()
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 
    setInterfaceType(location.state?.interfaceName);


    useEffect(() => {
        setType('MPI21PRODCONSOUTPUTINHEADER');
        fetchTableId();
        fetchInterfaces();

        if (MPI21PRODCONSOUTPUTINHEADER) {
            
            

            setValue('recid', MPI21PRODCONSOUTPUTINHEADER.recid);
            setValue('createddatetime', MPI21PRODCONSOUTPUTINHEADER.createddatetime);
            setValue('interface', MPI21PRODCONSOUTPUTINHEADER.interface);
            setValue('batchnum', MPI21PRODCONSOUTPUTINHEADER.batchnum);
            setValue('processed', MPI21PRODCONSOUTPUTINHEADER.processed);
            setValue('dataareaid', MPI21PRODCONSOUTPUTINHEADER.dataareaid);
            setValue('actionid', MPI21PRODCONSOUTPUTINHEADER.actionid);
            setValue('companylocation', MPI21PRODCONSOUTPUTINHEADER.companylocation);
            setValue('erpshoporderno', MPI21PRODCONSOUTPUTINHEADER.erpshoporderno);
            setValue('locationid', MPI21PRODCONSOUTPUTINHEADER.locationid);
            setValue('siteid', MPI21PRODCONSOUTPUTINHEADER.siteid);
            setValue('storagelocation', MPI21PRODCONSOUTPUTINHEADER.storagelocation);
            setValue('workorderno', MPI21PRODCONSOUTPUTINHEADER.workorderno);
            setValue('workorderstatus', MPI21PRODCONSOUTPUTINHEADER.workorderstatus);
            setValue('createdby', MPI21PRODCONSOUTPUTINHEADER.createdby);
            setValue('tableId', MPI21PRODCONSOUTPUTINHEADER.tableId);


            
        }
    }, [setType, MPI21PRODCONSOUTPUTINHEADER, setValue]);

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
                            disabled
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
                            id="createddatetime"
                            label="Created Datetime"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
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
                    name="erpshoporderno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="ERP Shop Order No"
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
                            label="Location ID"
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
                            label="Site ID"
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
                    name="workorderno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Work Order No"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="workorderstatus"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Work Order Status"
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
                    name="tableId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="tableId-label">Table ID</InputLabel>
                            <Select
                                {...field}
                                labelId="tableId-label"
                                label="Table ID"
                            >
                                {tableId.map((entity) => (
                                    <MenuItem key={entity.recid} value={entity.recid}>
                                        {entity.tableId}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />


                <Button type="submit" variant="contained" color="primary">
                    Update MPI21PRODCONSOUTPUTINHEADER
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMPI21PRODCONSOUTPUTINHEADER;
