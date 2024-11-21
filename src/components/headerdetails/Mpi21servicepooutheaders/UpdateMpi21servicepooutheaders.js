import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMPI21SERVICEPOOUTHEADER = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType, setInterfaceType } = useGenericPaginationContext();  
    const MPI21SERVICEPOOUTHEADER = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 
    setInterfaceType(location.state?.interfaceName);


    useEffect(() => {
        setType('MPI21SERVICEPOOUTHEADER');
        fetchTableId();
        fetchInterfaces();

        if (MPI21SERVICEPOOUTHEADER) {
            
            setValue('recid', MPI21SERVICEPOOUTHEADER.recid);
            setValue('createddatetime', MPI21SERVICEPOOUTHEADER.createddatetime);
            setValue('interface', MPI21SERVICEPOOUTHEADER.interface);
            setValue('tableid', MPI21SERVICEPOOUTHEADER.tableid);
            setValue('batchnum', MPI21SERVICEPOOUTHEADER.batchnum);
            setValue('processed', MPI21SERVICEPOOUTHEADER.processed);
            setValue('dataareaid', MPI21SERVICEPOOUTHEADER.dataareaid);
            setValue('erpshoporderno', MPI21SERVICEPOOUTHEADER.erpshoporderno);
            setValue('trxsequenceno', MPI21SERVICEPOOUTHEADER.trxsequenceno);
            setValue('workorderno', MPI21SERVICEPOOUTHEADER.workorderno);
            setValue('erpservicepono', MPI21SERVICEPOOUTHEADER.erpservicepono);
            setValue('statusId', MPI21SERVICEPOOUTHEADER.statusId);
            setValue('statusText', MPI21SERVICEPOOUTHEADER.statusText);
 

        }
    }, [setType, MPI21SERVICEPOOUTHEADER, setValue]);

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
                    name="tableid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="tableid-label">Table ID</InputLabel>
                            <Select
                                {...field}
                                labelId="tableid-label"
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
                name="trxsequenceno"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Transaction Sequence No"
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
                name="erpservicepono"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="ERP Service PO No"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="statusId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Status ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
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

                <Button type="submit" variant="contained" color="primary">
                    Update 
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMPI21SERVICEPOOUTHEADER;
