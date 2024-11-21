import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';



const UpdateMpaveprodorderpickingheaders = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericPaginationContext();
    const Mpaveprodorderpickingheaders = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableIds, setTableIds] = useState([]);
    const location = useLocation(); 


    const fetchTableIds = async () => {
        const response = await axios.get( process.env.REACT_APP_API_URL + '/api/MpheaderTables');
        setTableIds(response.data);
    };

    const fetchInterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setInterfaces(response.data);
    };

    useEffect(() => {
        setType('Mpaveprodorderpickingheaders');
        fetchInterfaces();
        fetchTableIds();

        if (Mpaveprodorderpickingheaders) {
            Object.keys(Mpaveprodorderpickingheaders).forEach((key) => {
                setValue(key, Mpaveprodorderpickingheaders[key]);
            });
        } else {
            console.error('Entity not found');
        }
    }, [setType, Mpaveprodorderpickingheaders, setValue]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data }, 'recid'); // Passing the primary key field 'recid'
        navigate('/');
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
                    name="createddatetime"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Createddatetime"
                            fullWidth
                            margin="normal"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
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
                    name="axlocation"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Axlocation"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="axlot_No"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Axlot_No"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="item_Id"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Item_Id"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="journalid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Journalid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="location"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Location"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="lot_No"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Lot_No"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="qty_Cons"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Qty_Cons"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="wo_Id"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Wo_Id"
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
                    name="tableId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="tableId-label">TableId</InputLabel>
                            <Select
                                {...field}
                                labelId="tableId-label"
                                label="TableId"
                            >
                                {tableIds.map((entity) => (
                                    <MenuItem key={entity.recid} value={entity.recid}>
                                        {entity.tableId}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />
                <Controller
                    name="inventSiteId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="InventSiteId"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="inventLocationId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="InventLocationId"
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
                        <TextField
                            {...field}
                            label="Processed"
                            fullWidth
                            margin="normal"
                          
                            checked={field.value}
                            onChange={(e) => field.onChange(e.target.checked)}
                        />
                    )}
                />
                <Button type="submit" variant="contained" color="primary">
                    Update Mpaveprodorderpickingheaders
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpaveprodorderpickingheaders;
