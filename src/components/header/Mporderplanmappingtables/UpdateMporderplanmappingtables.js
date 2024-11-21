import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMporderplanmappingtables = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericPaginationContext();
    const Mporderplanmappingtables = entities.find((u) => u.recid === parseInt(recid));
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
        setType('Mporderplanmappingtables');
        fetchTableId();
        fetchInterfaces();

        if (Mporderplanmappingtables) {
            setValue('recid', Mporderplanmappingtables.recid || 6000000024);
            setValue('createddatetime', Mporderplanmappingtables.createddatetime || "2024-07-11T18:05:54");
            setValue('interface', Mporderplanmappingtables.interface || "BluJay");
            setValue('batchnum', Mporderplanmappingtables.batchnum || "86969");
            setValue('processed', Mporderplanmappingtables.processed || true);
            setValue('chargecodecategory', Mporderplanmappingtables.chargecodecategory || "0");
            setValue('chargedetail_Chargecodeid', Mporderplanmappingtables.chargedetail_Chargecodeid || "BAS");
            setValue('chargedetail_Chargecodeid1', Mporderplanmappingtables.chargedetail_Chargecodeid1 || "");
            setValue('deliverylocationname', Mporderplanmappingtables.deliverylocationname || "SOBEY'S ONT WHSE");
            setValue('deliverylocationref', Mporderplanmappingtables.deliverylocationref || "5637187327");
            setValue('filename', Mporderplanmappingtables.filename || "orderplan-20240718-100404-0486.xml");
            setValue('loadnumber', Mporderplanmappingtables.loadnumber || "164222487");
            setValue('mode_', Mporderplanmappingtables.mode_ || "LTL");
            setValue('name', Mporderplanmappingtables.name || "");
            setValue('net', Mporderplanmappingtables.net || 215.28);
            setValue('ordernumber', Mporderplanmappingtables.ordernumber || "3000211");
            setValue('ordertype', Mporderplanmappingtables.ordertype || "SALES ORDER");
            setValue('originlocationname', Mporderplanmappingtables.originlocationname || "SD");
            setValue('originlocationref', Mporderplanmappingtables.originlocationref || "5637144576");
            setValue('pallets', Mporderplanmappingtables.pallets || 10);
            setValue('pickupstartduedate', Mporderplanmappingtables.pickupstartduedate || "2024-07-10T00:00:00");
            setValue('pickupstartduedatetzid', Mporderplanmappingtables.pickupstartduedatetzid || "EST");
            setValue('pieces', Mporderplanmappingtables.pieces || 1050);
            setValue('pronumber', Mporderplanmappingtables.pronumber || "");
            setValue('scac', Mporderplanmappingtables.scac || "YRKN");
            setValue('scheduleintgkey', Mporderplanmappingtables.scheduleintgkey || "1");
            setValue('shipperref', Mporderplanmappingtables.shipperref || "10SALES ORDER3000211");
            setValue('status', Mporderplanmappingtables.status || 0);
            setValue('weight', Mporderplanmappingtables.weight || 3517.92);
            setValue('weight_Uom', Mporderplanmappingtables.weight_Uom || "lb");
            setValue('companyid', Mporderplanmappingtables.companyid || "");
            setValue('errormessage', Mporderplanmappingtables.errormessage || "Invalid execution invent id");
            setValue('inventtranstype', Mporderplanmappingtables.inventtranstype || "0");
            setValue('shipperorderplan_Executioneventid', Mporderplanmappingtables.shipperorderplan_Executioneventid || "");
            setValue('skipeventid', Mporderplanmappingtables.skipeventid || 0);
            setValue('dlvmodeid', Mporderplanmappingtables.dlvmodeid || "");
            setValue('refrecid', Mporderplanmappingtables.refrecid || 0);
            setValue('reftableid', Mporderplanmappingtables.reftableid || 0);
            setValue('valid', Mporderplanmappingtables.valid || 0);
            setValue('dataareaid', Mporderplanmappingtables.dataareaid || "dat");
            setValue('tableId', Mporderplanmappingtables.tableId || 23);
        }
        
    }, [setType, Mporderplanmappingtables, setValue]);

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
                name="chargecodecategory"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Charge Code Category"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="chargedetail_Chargecodeid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Charge Detail Chargecode ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="deliverylocationname"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Delivery Location Name"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="deliverylocationref"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Delivery Location Ref"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="loadnumber"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Load Number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mode_"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Mode"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="net"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Net"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />
            <Controller
                name="ordernumber"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Order Number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="ordertype"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Order Type"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="originlocationname"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Origin Location Name"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="originlocationref"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Origin Location Ref"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="pallets"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Pallets"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />
            <Controller
                name="pickupstartduedate"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Pickup Start Due Date"
                        type="datetime-local"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="pickupstartduedatetzid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Pickup Start Due Date TZ ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="pieces"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Pieces"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />
            <Controller
                name="pronumber"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Pro Number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="scac"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="SCAC"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="scheduleintgkey"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Schedule Integration Key"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="shipperref"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Shipper Ref"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="status"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Status"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />
            <Controller
                name="weight"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Weight"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />
            <Controller
                name="weight_Uom"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Weight UOM"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

                <Button type="submit" variant="contained" color="primary">
                    Update Mporderplanmappingtables
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMporderplanmappingtables;
