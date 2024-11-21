import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMpinforWrkCtrResourceGroupResource = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const MpinforWrkCtrResourceGroupResource = entities.find((u) => u.recid === parseInt(recid));
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
        setType('MpinforWrkCtrResourceGroupResource');
        fetchTableId();
        fetchInterfaces();

        if (MpinforWrkCtrResourceGroupResource) {
            setValue('recid', MpinforWrkCtrResourceGroupResource.recid || 6000000051);
            setValue('createddatetime', MpinforWrkCtrResourceGroupResource.createddatetime || "2024-09-04T16:27:58");
            setValue('interface', MpinforWrkCtrResourceGroupResource.interface || "InforAPS");
            setValue('tableid', MpinforWrkCtrResourceGroupResource.tableid || 72);
            setValue('batchnum', MpinforWrkCtrResourceGroupResource.batchnum || "2830-NA-10-20240904-162758");
            setValue('processed', MpinforWrkCtrResourceGroupResource.processed || true);
            setValue('dataareaid', MpinforWrkCtrResourceGroupResource.dataareaid || "10");
            setValue('calendarId', MpinforWrkCtrResourceGroupResource.calendarId || "24/7");
            setValue('inputWmslocationId', MpinforWrkCtrResourceGroupResource.inputWmslocationId || null);
            setValue('resourceGroup', MpinforWrkCtrResourceGroupResource.resourceGroup || "3240");
            setValue('validFrom', MpinforWrkCtrResourceGroupResource.validFrom || "2016-07-19T00:00:00");
            setValue('validTo', MpinforWrkCtrResourceGroupResource.validTo || "2154-12-31T00:00:00");
            setValue('wrkCtrId', MpinforWrkCtrResourceGroupResource.wrkCtrId || "3240-04");
            setValue('siteId', MpinforWrkCtrResourceGroupResource.siteId || "01");                                      
        }
        
    }, [setType, MpinforWrkCtrResourceGroupResource, setValue]);

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
                name="calendarId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Calendar ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="inputWmslocationId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Input WMS Location ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="resourceGroup"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Resource Group"
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
                name="validTo"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Valid To"
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
                name="siteId"
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
                <Button type="submit" variant="contained" color="primary">
                    Update MpinforWrkCtrResourceGroupResource
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpinforWrkCtrResourceGroupResource;
