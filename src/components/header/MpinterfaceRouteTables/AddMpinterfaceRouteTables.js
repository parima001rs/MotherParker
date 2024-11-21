import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, Checkbox, FormControlLabel, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const AddMpinterfaceRouteTable = () => {
    const { addEntity, setType } = useGenericPaginationContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    const [interfaces, setinterfaces] = useState([]);
    const [secinterfaces, setsecinterfaces] = useState([]);

    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('MpinterfaceRouteTables');
        fetchinterfaces();
        fetchsecinterfaces();
    }, [setType]);

    const fetchinterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setinterfaces(response.data);
    };

    const fetchsecinterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpheaderTables');
        setsecinterfaces(response.data);
    };

    return (
        <Container>
            <BackButton />
            <h2>Add {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

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
                    name="interface"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <FormControl fullWidth>
                            <InputLabel id="interface">Interface</InputLabel>
                            <Select {...field} labelId="interface">
                                {interfaces.map((entity, index) => (
                                    <MenuItem key={index} value={entity.interface}>
                                        {entity.interface}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />

                <Controller
                    name="tableId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <FormControl fullWidth>
                            <InputLabel id="tableid">Table Id</InputLabel>
                            <Select {...field} labelId="tableid">
                                {secinterfaces.map((entity, index) => (
                                    <MenuItem key={index} value={entity.tableId}>
                                        {entity.tableId}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
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
                    defaultValue={false}
                    render={({ field }) => (
                        <FormControlLabel
                            control={<Checkbox {...field} />}
                            label="Processed"
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
                    Add MpinterfaceRouteTable
                </Button>
            </form>
        </Container>
    );
};

export default AddMpinterfaceRouteTable;
