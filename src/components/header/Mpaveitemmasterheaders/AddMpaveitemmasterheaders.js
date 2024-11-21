import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';

import { useLocation } from 'react-router-dom';


const AddMpaveitemmasterheaders = () => {
    const { addEntity, setType } = useGenericPaginationContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 


    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    const fetchTableId = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpheaderTables');
            setTableId(response.data);
        } catch (error) {
            console.error('Error fetching tableId data:', error);
        }
    };

    const fetchInterfaces = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
            setInterfaces(response.data);
        } catch (error) {
            console.error('Error fetching interfaces data:', error);
        }
    };

    useEffect(() => {
        setType('Mpaveitemmasterheaders');
        fetchInterfaces();
        fetchTableId();
    }, [setType]);

    return (
        <Container>
            <BackButton />
            <h2>Add {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    name="ground_Coffee_Item"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Ground_Coffee_Item"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="item_Class_Id"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Item_Class_Id"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="item_Desc"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Item Description"
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
                            label="Item Id"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpproductstatus"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Product Status"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="notes"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Notes"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="uom_Id"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="UOM Id"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name=""
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Gross Depth"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name=""
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Gross Height"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="grswidth"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Gross Width"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="itemdesc1"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Item Description 1"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="itemmajorclass"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Item Major Class"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="itemtype"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Item Type"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="labelweight"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Label Weight"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="labelweightuom"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Label Weight UOM"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="netweight"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Net Weight"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="packagespersaleableunit"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label=""
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="packsize"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Pack Size"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="productionshelflifedays"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Production Shelf Life Days"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="qtyperpallet"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Quantity per Pallet"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="saleableunitpercase"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Saleable Unit per Case"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="scccode"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="SCC Code"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="shipshelflifedays"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Ship Shelf Life Days"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="tie"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Tie"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="tier"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Tier"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="upccode"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="UPC Code"
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
                            label="Created Datetime"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
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
                            label="Data Area Id"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
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
                    name="tableId"
                    control={control}
                    defaultValue={5}
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="tableId-label">TableId</InputLabel>
                            <Select
                                {...field}
                                labelId="tableId-label"
                                label="TableId"
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
                    defaultValue="Aveva"
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="interface-label">Interface</InputLabel>
                            <Select
                                {...field}
                                labelId="interface-label"
                                label="Interface"
                            >
                                {interfaces.map((entity) => (
                                    <MenuItem key={entity.recid} value={entity.recid}>
                                        {entity.interface}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />
                <Controller
                    name="actionid"
                    control={control}
                    defaultValue={2}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Action ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Button type="submit" variant="contained" color="primary">
                    Add Mpaveitemmasterheaders
                </Button>
            </form>
        </Container>
    );
};

export default AddMpaveitemmasterheaders;
