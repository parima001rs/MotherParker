import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, Checkbox, FormControlLabel, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMpinterfaceRouteTable = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType, setInterfaceType } = useGenericPaginationContext();
    const MpinterfaceRouteTable = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 
    setInterfaceType(location.state?.interfaceName);

    const [interfaces, setinterfaces] = useState([]);
    const [secinterfaces, setsecinterfaces] = useState([]);

    useEffect(() => {
        setType('MpinterfaceRouteTables');
        if (MpinterfaceRouteTable) {
            setValue('recid', MpinterfaceRouteTable.recid);
            setValue('actionId', MpinterfaceRouteTable.actionId);
            setValue('batchnum', MpinterfaceRouteTable.batchnum);
            setValue('interface', MpinterfaceRouteTable.interface);
            setValue('tableId', MpinterfaceRouteTable.tableId);
            setValue('createddatetime', MpinterfaceRouteTable.createddatetime);
            setValue('mproutebasiscode', MpinterfaceRouteTable.mproutebasiscode);
            setValue('mproutefacility', MpinterfaceRouteTable.mproutefacility);
            setValue('mprouteitem', MpinterfaceRouteTable.mprouteitem);
            setValue('mproutemachinehours', MpinterfaceRouteTable.mproutemachinehours);
            setValue('mproutemachineid', MpinterfaceRouteTable.mproutemachineid);
            setValue('mproutenoofoperators', MpinterfaceRouteTable.mproutenoofoperators);
            setValue('mprouteoperation', MpinterfaceRouteTable.mprouteoperation);
            setValue('mprouteoperationdesc', MpinterfaceRouteTable.mprouteoperationdesc);
            setValue('mproutestdefficiency', MpinterfaceRouteTable.mproutestdefficiency);
            setValue('mprouteworkcentre', MpinterfaceRouteTable.mprouteworkcentre);
            setValue('processed', MpinterfaceRouteTable.processed);
            setValue('dataAreaId', MpinterfaceRouteTable.dataAreaId);
            setValue('routeId', MpinterfaceRouteTable.routeId);

            fetchinterfaces();
            fetchsecinterfaces();
        }
    }, [setType, MpinterfaceRouteTable, setValue, navigate]);

    const fetchinterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setinterfaces(response.data);
    };

    const fetchsecinterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpheaderTables');
        setsecinterfaces(response.data);
    };


    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text}</h2>
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
                    name="actionId"
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
                    name="tableId"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Table ID"
                            fullWidth
                            margin="normal"
                            type="number"
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
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    )}
                />

                <Controller
                    name="mproutebasiscode"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Route Basis Code"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mproutefacility"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Route Facility"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mprouteitem"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Route Item"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mproutemachinehours"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Route Machine Hours"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />

                <Controller
                    name="mproutemachineid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Route Machine ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mproutenoofoperators"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Route No of Operators"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />

                <Controller
                    name="mprouteoperation"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Route Operation"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mprouteoperationdesc"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Route Operation Desc"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mproutestdefficiency"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Route Std Efficiency"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />

                <Controller
                    name="mprouteworkcentre"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Route Work Centre"
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
                    name="dataAreaId"
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
                    name="routeId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Route ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />


                <Button type="submit" variant="contained" color="primary">
                    Update MpinterfaceRouteTable
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpinterfaceRouteTable;
