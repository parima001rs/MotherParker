import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMpinterfaceTransferOrders = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericPaginationContext();
    const MpinterfaceTransferOrders = entities.find((u) => u.recid === parseInt(recid));
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
        setType('MpinterfaceTransferOrders');
        fetchTableId();
        fetchInterfaces();

        if (MpinterfaceTransferOrders) {
            setValue('recid', MpinterfaceTransferOrders.recid);
            setValue('createddatetime', MpinterfaceTransferOrders.createddatetime);
            setValue('interface', MpinterfaceTransferOrders.interface);
            setValue('tableid', MpinterfaceTransferOrders.tableid);
            setValue('batchnum', MpinterfaceTransferOrders.batchnum);
            setValue('processed', MpinterfaceTransferOrders.processed);
            setValue('mptransactivity', MpinterfaceTransferOrders.mptransactivity);
            setValue('mptranscontractnumber', MpinterfaceTransferOrders.mptranscontractnumber);
            setValue('mptransdeliveryqty', MpinterfaceTransferOrders.mptransdeliveryqty);
            setValue('mptransitemid', MpinterfaceTransferOrders.mptransitemid);
            setValue('mptranslotnumber', MpinterfaceTransferOrders.mptranslotnumber);
            setValue('mptransorderedqty', MpinterfaceTransferOrders.mptransorderedqty);
            setValue('mptransordernumber', MpinterfaceTransferOrders.mptransordernumber);
            setValue('mptranspocontainer', MpinterfaceTransferOrders.mptranspocontainer);
            setValue('mptranspomarks', MpinterfaceTransferOrders.mptranspomarks);
            setValue('mptransponumber', MpinterfaceTransferOrders.mptransponumber);
            setValue('mptransprobatseqno', MpinterfaceTransferOrders.mptransprobatseqno);
            setValue('mptransscheduleddate', MpinterfaceTransferOrders.mptransscheduleddate);
            setValue('mptranstransferred', MpinterfaceTransferOrders.mptranstransferred);
            setValue('mptranszone', MpinterfaceTransferOrders.mptranszone);
            setValue('dataareaid', MpinterfaceTransferOrders.dataareaid);
            setValue('siteId', MpinterfaceTransferOrders.siteId);
        }
    }, [setType, MpinterfaceTransferOrders, setValue]);

    const onSubmit = async (data) => {
        await updateEntity(data);
        navigate('/'); // Adjust the path as needed
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
                    name="tableid"
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
                    name="mptransactivity"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Trans Activity"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mptranscontractnumber"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Trans Contract Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mptransdeliveryqty"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Trans Delivery Quantity"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mptransitemid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Trans Item ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mptranslotnumber"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Trans Lot Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mptransorderedqty"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Trans Ordered Quantity"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mptransordernumber"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Trans Order Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mptranspocontainer"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Trans PO Container"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mptranspomarks"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Trans PO Marks"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mptransponumber"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Trans PO Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mptransprobatseqno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Trans Probat Seq No"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mptransscheduleddate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Trans Scheduled Date"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mptranstransferred"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Trans Transferred"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mptranszone"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Trans Zone"
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
                    Update MpinterfaceTransferOrders
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpinterfaceTransferOrders;
