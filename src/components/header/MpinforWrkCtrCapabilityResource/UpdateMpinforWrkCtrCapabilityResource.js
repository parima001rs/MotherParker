import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMpinforWrkCtrCapabilityResource = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const MpinforWrkCtrCapabilityResource = entities.find((u) => u.recid === parseInt(recid));
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
        setType('MpinforWrkCtrCapabilityResource');
        fetchTableId();
        fetchInterfaces();

        if (MpinforWrkCtrCapabilityResource) {
            setValue('recid', MpinforWrkCtrCapabilityResource.recid || 6000000051);
            setValue('createddatetime', MpinforWrkCtrCapabilityResource.createddatetime || "2024-09-04T16:27:58");
            setValue('interface', MpinforWrkCtrCapabilityResource.interface || "InforAPS");
            setValue('tableid', MpinforWrkCtrCapabilityResource.tableid || 72);
            setValue('batchnum', MpinforWrkCtrCapabilityResource.batchnum || "2830-NA-10-20240904-162758");
            setValue('processed', MpinforWrkCtrCapabilityResource.processed || true);
            setValue('dataareaid', MpinforWrkCtrCapabilityResource.dataareaid || "10");
            setValue('name', MpinforWrkCtrCapabilityResource.name || "Coffee Grinding");
            setValue('priority', MpinforWrkCtrCapabilityResource.priority || "0");
            setValue('validFrom', MpinforWrkCtrCapabilityResource.validFrom || "2016-01-05");
            setValue('validTo', MpinforWrkCtrCapabilityResource.validTo || "2154-12-31");
            setValue('wrkCtrId', MpinforWrkCtrCapabilityResource.wrkCtrId || "3160-04");
            setValue('level', MpinforWrkCtrCapabilityResource.level || "0.000000");                              
        }
        
    }, [setType, MpinforWrkCtrCapabilityResource, setValue]);

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
                        label="Created DateTime"
                        type="datetime-local"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
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
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Name"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="priority"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Priority"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="validFrom"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Valid From"
                        type="date"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                )}
            />

            <Controller
                name="validTo"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Valid To"
                        type="date"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                )}
            />

            <Controller
                name="wrkCtrId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Work Center ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="level"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Level"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

                <Button type="submit" variant="contained" color="primary">
                    Update MpinforWrkCtrCapabilityResource
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpinforWrkCtrCapabilityResource;
