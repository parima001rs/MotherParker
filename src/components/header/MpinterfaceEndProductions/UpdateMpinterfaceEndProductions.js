import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
//import { useGenericContext } from '../../../context/GenericContext';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMpinterfaceEndProductions = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType, setInterfaceType } = useGenericPaginationContext();  
    const MpinterfaceEndProductions = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 
    setInterfaceType(location.state?.interfaceName);


    useEffect(() => {
        setType('MpinterfaceEndProductions');
        fetchTableId();
        fetchInterfaces();

        if (MpinterfaceEndProductions) {
            
            setValue('recid', MpinterfaceEndProductions.recid);
            setValue('createddatetime', MpinterfaceEndProductions.createddatetime);
            setValue('tableId', MpinterfaceEndProductions.tableId);
            setValue('interface', MpinterfaceEndProductions.interface);
            setValue('batchnum', MpinterfaceEndProductions.batchnum);
            setValue('dataareaid', MpinterfaceEndProductions.dataareaid);
            setValue('mpbomactivity', MpinterfaceEndProductions.mpbomactivity);
            setValue('mpbomcreatedby', MpinterfaceEndProductions.mpbomcreatedby);
            setValue('mpbomcreatedon', MpinterfaceEndProductions.mpbomcreatedon);
            setValue('mpbomsiteid', MpinterfaceEndProductions.mpbomsiteid);
            setValue('mpbomitem', MpinterfaceEndProductions.mpbomitem);
            setValue('mpbomitemdesc', MpinterfaceEndProductions.mpbomitemdesc);
            setValue('mpbomitemname', MpinterfaceEndProductions.mpbomitemname);
            setValue('mpbomprobatseqno', MpinterfaceEndProductions.mpbomprobatseqno);
            setValue('mpbomquantity1', MpinterfaceEndProductions.mpbomquantity1);
            setValue('mpbomtransferred', MpinterfaceEndProductions.mpbomtransferred);
            setValue('mpbomzone', MpinterfaceEndProductions.mpbomzone);
            setValue('mpcomponentitem1', MpinterfaceEndProductions.mpcomponentitem1);
            setValue('processed', MpinterfaceEndProductions.processed);
            setValue('bomrecid', MpinterfaceEndProductions.bomrecid);
            setValue('mpqty', MpinterfaceEndProductions.mpqty);
        }
    }, [setType, MpinterfaceEndProductions, setValue]);

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
                    name="mpbomactivity"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP BOM Activity"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpbomcreatedby"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP BOM Created By"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpbomcreatedon"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP BOM Created On"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpbomsiteid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP BOM Site ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpbomitem"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP BOM Item"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpbomitemdesc"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP BOM Item Desc"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpbomitemname"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP BOM Item Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpbomprobatseqno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP BOM Probat Seq No"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpbomquantity1"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP BOM Quantity 1"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                
                <Controller
                    name="mpbomtransferred"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP BOM Transferred"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpbomzone"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP BOM Zone"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpcomponentitem1"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Component Item 1"
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
                    name="bomrecid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="BOM Recid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpqty"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Quantity"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Button type="submit" variant="contained" color="primary">
                    Update MpinterfaceEndProductions
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpinterfaceEndProductions;
