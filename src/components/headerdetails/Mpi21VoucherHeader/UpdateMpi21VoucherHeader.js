import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { useSecondaryContext } from '../../../context/SecondaryContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem} from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';





const UpdateMpi21VoucherHeader = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericPaginationContext();  
    const Mpi21VoucherHeader = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 


    const fetchTableId = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpheaderTables');
            setTableId(response.data);
        } catch (error) {
            console.error("Error fetching table IDs:", error);
        }
    };

    const fetchInterfaces = async () => {
        try {
            const response = await axios.get( process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
            setInterfaces(response.data);
        } catch (error) {
            console.error("Error fetching interfaces:", error);
        }
    };

    useEffect(() => {
        setType('Mpi21VoucherHeader');
        fetchTableId();
        fetchInterfaces();

        if (Mpi21VoucherHeader) {
            setValue('recid', Mpi21VoucherHeader.recid);
            setValue('createddatetime', Mpi21VoucherHeader.createddatetime);
            setValue('interface', Mpi21VoucherHeader.interface);
            setValue('tableid', Mpi21VoucherHeader.tableid);
            setValue('batchnum', Mpi21VoucherHeader.batchnum);
            setValue('processed', Mpi21VoucherHeader.processed);
            setValue('dataareaid', Mpi21VoucherHeader.dataareaid);
            setValue('trxSequenceNo', Mpi21VoucherHeader.trxSequenceNo);
            setValue('companyLocation', Mpi21VoucherHeader.companyLocation);
            setValue('actionId', Mpi21VoucherHeader.actionId);
            setValue('voucherTypeId', Mpi21VoucherHeader.voucherTypeId);
            setValue('voucherNo', Mpi21VoucherHeader.voucherNo);
            setValue('voucherDate', Mpi21VoucherHeader.voucherDate);
            setValue('vendorAccountNo', Mpi21VoucherHeader.vendorAccountNo);
            setValue('book', Mpi21VoucherHeader.book);
            setValue('invoiceNo', Mpi21VoucherHeader.invoiceNo);
            setValue('invoiceDate', Mpi21VoucherHeader.invoiceDate);
            setValue('termCode', Mpi21VoucherHeader.termCode);
            setValue('dueDate', Mpi21VoucherHeader.dueDate);
            setValue('referenceNo', Mpi21VoucherHeader.referenceNo);
            setValue('currency', Mpi21VoucherHeader.currency);
            setValue('totalDiscount', Mpi21VoucherHeader.totalDiscount);
            setValue('totalTax', Mpi21VoucherHeader.totalTax);
            setValue('voucherTotal', Mpi21VoucherHeader.voucherTotal);
            setValue('remarks', Mpi21VoucherHeader.remarks);
            setValue('erpvoucherNo', Mpi21VoucherHeader.erpvoucherNo);
            setValue('createdDate', Mpi21VoucherHeader.createdDate);
            setValue('createdByUser', Mpi21VoucherHeader.createdByUser);                     
               
        }
    }, [setType, Mpi21VoucherHeader, setValue]);

    const onSubmit = async (data) => {
        try {
            await updateEntity(data);
            navigate('/');
        } catch (error) {
            console.error("Error updating entity:", error);
        }
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
                            id="tableid"
                            label="Table ID"
                            type="number"
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
                            id="batchnum"
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
                    name="dataareaid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="dataareaid"
                            label="Data Area ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="trxSequenceNo"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Transaction Sequence No"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="companyLocation"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Company Location"
                            fullWidth
                            margin="normal"
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
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="voucherTypeId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Voucher Type ID"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="voucherNo"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Voucher No"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="voucherDate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Voucher Date"
                            type="date"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ shrink: true }}
                        />
                    )}
                />

                <Controller
                    name="vendorAccountNo"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Vendor Account No"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="book"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Book"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="invoiceNo"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Invoice No"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="invoiceDate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Invoice Date"
                            type="date"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ shrink: true }}
                        />
                    )}
                />

                <Controller
                    name="termCode"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Term Code"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="dueDate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Due Date"
                            type="date"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ shrink: true }}
                        />
                    )}
                />

                <Controller
                    name="referenceNo"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Reference No"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="currency"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Currency"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="totalDiscount"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Total Discount"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="totalTax"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Total Tax"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="voucherTotal"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Voucher Total"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="remarks"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Remarks"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="erpvoucherNo"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="ERP Voucher No"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="createdDate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Created Date"
                            type="date"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ shrink: true }}
                        />
                    )}
                />

                <Controller
                    name="createdByUser"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Created By User"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
                    Update
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21VoucherHeader;
