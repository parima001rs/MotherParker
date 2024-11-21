import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMpinforInventTransferTable = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const MpinforInventTransferTable = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 


    const fetchTableId = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpheaderTables');
        setTableId(response.data);
    };

    const fetchInterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setInterfaces(response.data);
    };

    useEffect(() => {
        setType('MpinforInventTransferTable');
        fetchTableId();
        fetchInterfaces();

        if (MpinforInventTransferTable) {
            setValue('recid', MpinforInventTransferTable.recid || 6000000051);
            setValue('createddatetime', MpinforInventTransferTable.createddatetime || "2024-09-04T16:27:58");
            setValue('interface', MpinforInventTransferTable.interface || "InforAPS");
            setValue('tableid', MpinforInventTransferTable.tableid || 72);
            setValue('batchnum', MpinforInventTransferTable.batchnum || "2830-NA-10-20240904-162758");
            setValue('processed', MpinforInventTransferTable.processed || true);
            setValue('dataareaid', MpinforInventTransferTable.dataareaid || "10");
            setValue('transferId', MpinforInventTransferTable.transferId || "200000"); 
            setValue('inventLocationIdFrom', MpinforInventTransferTable.inventLocationIdFrom || "MM");
            setValue('inventLocationIdTo', MpinforInventTransferTable.inventLocationIdTo || "MD"); 
            setValue('transferStatus', MpinforInventTransferTable.transferStatus || "Created");                          
        }
        
    }, [setType, MpinforInventTransferTable, setValue]);

    const onSubmit = async (data) => {
        await updateEntity(data);
        navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="recid"
                control={control}
                defaultValue={6000000001}
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
                defaultValue="2024-08-29T09:34:38"
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Created DateTime"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="interface"
                control={control}
                defaultValue="InforAPS"
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
                defaultValue={72}
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
                defaultValue="2833-01-10-20240829-093438"
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
                defaultValue={true}
                render={({ field }) => (
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="processed-label">Processed</InputLabel>
                        <Select
                            {...field}
                            labelId="processed-label"
                            label="Processed"
                        >
                            <MenuItem value={true}>True</MenuItem>
                            <MenuItem value={false}>False</MenuItem>
                        </Select>
                    </FormControl>
                )}
            />

            <Controller
                name="dataareaid"
                control={control}
                defaultValue="10"
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
                name="transferId"
                control={control}
                defaultValue="200000"
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Transfer ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="inventLocationIdFrom"
                control={control}
                defaultValue="MM"
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Inventory Location ID From"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="inventLocationIdTo"
                control={control}
                defaultValue="MD"
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Inventory Location ID To"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="transferStatus"
                control={control}
                defaultValue="Created"
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Transfer Status"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
                <Button type="submit" variant="contained" color="primary">
                    Update MpinforInventTransferTable
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpinforInventTransferTable;
