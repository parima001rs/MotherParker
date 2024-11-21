import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';


const UpdateMpaveitemmasterheaders = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericPaginationContext();
    const Mpaveitemmasterheaders = entities.find((u) => u.recid === parseInt(recid));
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
        setType('Mpaveitemmasterheaders');
        fetchInterfaces();
        fetchTableId();

        if (Mpaveitemmasterheaders) {
            setValue('recid', Mpaveitemmasterheaders.recid);
            setValue('batchnum', Mpaveitemmasterheaders.batchnum);
            setValue('ground_Coffee_Item', Mpaveitemmasterheaders.ground_Coffee_Item);
            setValue('item_Class_Id', Mpaveitemmasterheaders.item_Class_Id);
            setValue('item_Desc', Mpaveitemmasterheaders.item_Desc);
            setValue('item_Id', Mpaveitemmasterheaders.item_Id);
            setValue('mpproductstatus', Mpaveitemmasterheaders.mpproductstatus);
            setValue('notes', Mpaveitemmasterheaders.notes);
            setValue('uom_Id', Mpaveitemmasterheaders.uom_Id);
            setValue('grsdepth', Mpaveitemmasterheaders.grsdepth);
            setValue('grsheight', Mpaveitemmasterheaders.grsheight);
            setValue('grswidth', Mpaveitemmasterheaders.grswidth);
            setValue('itemdesc1', Mpaveitemmasterheaders.itemdesc1);
            setValue('itemmajorclass', Mpaveitemmasterheaders.itemmajorclass);
            setValue('itemtype', Mpaveitemmasterheaders.itemtype);
            setValue('labelweight', Mpaveitemmasterheaders.labelweight);
            setValue('labelweightuom', Mpaveitemmasterheaders.labelweightuom);
            setValue('netweight', Mpaveitemmasterheaders.netweight);
            setValue('packagespersaleableunit', Mpaveitemmasterheaders.packagespersaleableunit);
            setValue('packsize', Mpaveitemmasterheaders.packsize);
            setValue('productionshelflifedays', Mpaveitemmasterheaders.productionshelflifedays);
            setValue('qtyperpallet', Mpaveitemmasterheaders.qtyperpallet);
            setValue('saleableunitpercase', Mpaveitemmasterheaders.saleableunitpercase);
            setValue('scccode', Mpaveitemmasterheaders.scccode);
            setValue('shipshelflifedays', Mpaveitemmasterheaders.shipshelflifedays);
            setValue('tie', Mpaveitemmasterheaders.tie);
            setValue('tier', Mpaveitemmasterheaders.tier);
            setValue('upccode', Mpaveitemmasterheaders.upccode);
            setValue('createddatetime', Mpaveitemmasterheaders.createddatetime);
            setValue('dataareaid', Mpaveitemmasterheaders.dataareaid);
            setValue('tableId', Mpaveitemmasterheaders.tableId);
            setValue('interface', Mpaveitemmasterheaders.interface);
            setValue('processed', Mpaveitemmasterheaders.processed);
            setValue('actionid', Mpaveitemmasterheaders.actionid);
        } else {
            console.error('Entity not found');
        }
    }, [setType, Mpaveitemmasterheaders, setValue]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data }, 'recid'); // Passing the primary key field 'recid'
        navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text} </h2>
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
                            label="Ground Coffee Item"
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
                            label="Item Class Id"
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
                            label="Item Desc"
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
                    name="grsdepth"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="GRS Depth"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="grsheight"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="GRS Height"
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
                            label="GRS Width"
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
                            label="Item Desc 1"
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
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Packages per Saleable Unit"
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
                            label="Qty per Pallet"
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
                    name="tableId"
                    control={control}
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="tableId-label">TableId</InputLabel>
                            <Select
                                {...field}
                                labelId="tableId-label"
                                label="TableId"
                                value={field.value || Mpaveitemmasterheaders?.tableId || ""}
                                onChange={(e) => field.onChange(e.target.value)}
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
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="interface-label">Interface</InputLabel>
                            <Select
                                {...field}
                                labelId="interface-label"
                                label="Interface"
                                value={field.value ||Mpaveitemmasterheaders?.interface || ""}
                                onChange={(e) => field.onChange(e.target.value)}
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
                    name="actionid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Action Id"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Button type="submit" variant="contained" color="primary">
                    Update Mpaveitemmasterheaders
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpaveitemmasterheaders;
