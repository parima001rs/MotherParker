import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';

import { TextField, Container, Grid} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import Mpi21VoucherLineTable from '../Mpi21VoucherLine/InlineupdateMpi21VoucherLine';
import BackButton from '../../backButton';

const ViewMpi21VoucherHeader = () => {
    const { recid } = useParams();
    const { entities, ViewEntity, setType } = useGenericPaginationContext();
    const Mpi21VoucherHeader = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();

   
    useEffect(() => {
        setType('Mpi21VoucherHeader');
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
        await ViewEntity({ recid: parseInt(recid), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>View Mpi21VoucherHeader</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Controller
                        name="recid"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Recid"
                                type="number"
                                fullWidth
                                margin="normal"
                                disabled
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Controller
                        name="createddatetime"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Created Datetime"
                                type="datetime-local"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Controller
                        name="interface"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Interface"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Controller
                        name="tableid"
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
                </Grid>

                <Grid item xs={6}>
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
                </Grid>

                <Grid item xs={6}>
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
                </Grid>

                <Grid item xs={6}>
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
                </Grid>

                <Grid item xs={6}>
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
                </Grid>

                <Grid item xs={6}>
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
                </Grid>

                <Grid item xs={6}>
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
                </Grid>

                <Grid item xs={6}>
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
                </Grid>

                <Grid item xs={6}>
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
                </Grid>

                <Grid item xs={6}>
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
                </Grid>

                <Grid item xs={6}>
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
                </Grid>

                <Grid item xs={6}>
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
                </Grid>

                <Grid item xs={6}>
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
                </Grid>

                <Grid item xs={6}>
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
                </Grid>

                <Grid item xs={6}>
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
                </Grid>

                <Grid item xs={6}>
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
                </Grid>

                <Grid item xs={6}>
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
                </Grid>

                <Grid item xs={6}>
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
                </Grid>

                <Grid item xs={6}>
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
                </Grid>

                <Grid item xs={6}>
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
                </Grid>

                <Grid item xs={6}>
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
                </Grid>

                <Grid item xs={6}>
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
                </Grid>

                <Grid item xs={6}>
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
                </Grid>

                <Grid item xs={6}>
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
                </Grid>

                <Grid item xs={6}>
                    <Controller
                        name="createdByUser"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Created By"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                </Grid>
            </Grid>


            </form>
            <Mpi21VoucherLineTable />
        </Container>
        
    );
};


export default ViewMpi21VoucherHeader;
