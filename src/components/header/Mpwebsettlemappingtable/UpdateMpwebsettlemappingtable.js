import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container,FormControlLabel,Checkbox, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMpwebsettlemappingtable = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericPaginationContext();
    const Mpwebsettlemappingtable = entities.find((u) => u.recid === parseInt(recid));
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
        setType('Mpwebsettlemappingtable');
        fetchTableId();
        fetchInterfaces();

        if (Mpwebsettlemappingtable) {
            setValue('recid', Mpwebsettlemappingtable.recid);
            setValue('createddatetime', Mpwebsettlemappingtable.createddatetime);
            setValue('interface', Mpwebsettlemappingtable.interface);
            setValue('batchnum', Mpwebsettlemappingtable.batchnum);
            setValue('processed', Mpwebsettlemappingtable.processed);
            setValue('accountnumber', Mpwebsettlemappingtable.accountnumber);
            setValue('carrier', Mpwebsettlemappingtable.carrier);
            setValue('carrier_Scac', Mpwebsettlemappingtable.carrier_Scac);
            setValue('currencycode', Mpwebsettlemappingtable.currencycode);
            setValue('invoicedate', Mpwebsettlemappingtable.invoicedate);
            setValue('invoicenum', Mpwebsettlemappingtable.invoicenum);
            setValue('leanid', Mpwebsettlemappingtable.leanid);
            setValue('payamount', Mpwebsettlemappingtable.payamount);
            setValue('paymentid', Mpwebsettlemappingtable.paymentid);
            setValue('shipperref', Mpwebsettlemappingtable.shipperref);
            setValue('status', Mpwebsettlemappingtable.status);
            setValue('companyid', Mpwebsettlemappingtable.companyid);
            setValue('errormessage', Mpwebsettlemappingtable.errormessage);
            setValue('filename', Mpwebsettlemappingtable.filename);
            setValue('inventtranstype', Mpwebsettlemappingtable.inventtranstype);
            setValue('payable', Mpwebsettlemappingtable.payable);
            setValue('uniqueref', Mpwebsettlemappingtable.uniqueref);
            setValue('vendname', Mpwebsettlemappingtable.vendname);
            setValue('leanloadid', Mpwebsettlemappingtable.leanloadid);
            setValue('payablecurrencycode', Mpwebsettlemappingtable.payablecurrencycode);
            setValue('refrecid', Mpwebsettlemappingtable.refrecid);
            setValue('reftableid', Mpwebsettlemappingtable.reftableid);
            setValue('valid', Mpwebsettlemappingtable.valid);
            setValue('weightload', Mpwebsettlemappingtable.weightload);
            setValue('dataareaid', Mpwebsettlemappingtable.dataareaid);
            setValue('tableId', Mpwebsettlemappingtable.tableId);
            
            
        } else {
            console.error('Entity not found');
            //navigate('/');
        }
    }, [setType, Mpwebsettlemappingtable, setValue, ]);

    const onSubmit = async (data) => {
        await updateEntity(data);
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
                            label="Created DateTime"
                            type="datetime-local"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ shrink: true }}
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
                    name="accountnumber"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Account Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="carrier"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Carrier"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="carrier_Scac"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Carrier SCAC"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="currencycode"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Currency Code"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="invoicedate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Invoice Date"
                            type="datetime-local"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ shrink: true }}
                        />
                    )}
                />
                <Controller
                    name="invoicenum"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Invoice Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="leanid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Lean ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="payamount"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Pay Amount"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="paymentid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Payment ID"
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
                            label="Shipper Reference"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="status"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Status"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="companyid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Company ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="errormessage"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Error Message"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="filename"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Filename"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="inventtranstype"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Invent Trans Type"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="payable"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Payable"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="uniqueref"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Unique Ref"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="vendname"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Vendor Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="leanloadid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Lean Load ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="payablecurrencycode"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Payable Currency Code"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="refrecid"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Ref Recid"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="reftableid"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Ref Table ID"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="valid"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Valid"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="weightload"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Weight Load"
                            type="number"
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
                    name="tableId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Table ID"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Button type="submit" variant="contained" color="primary">
                    Update Mpwebsettlemappingtable
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpwebsettlemappingtable;
