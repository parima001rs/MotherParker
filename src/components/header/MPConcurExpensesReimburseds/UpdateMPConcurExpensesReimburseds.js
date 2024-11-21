import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMPConcurExpensesReimbursed = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericPaginationContext();  
    const MPConcurExpensesReimbursed = entities.find((u) => u.recid === parseInt(recid));
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
            const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
            setInterfaces(response.data);
        } catch (error) {
            console.error("Error fetching interfaces:", error);
        }
    };

    useEffect(() => {
        setType('MPConcurExpensesReimbursedS');
        fetchTableId();
        fetchInterfaces();

        if (MPConcurExpensesReimbursed) {
            setValue('recid', MPConcurExpensesReimbursed.recid);
            setValue('createdDatetime', MPConcurExpensesReimbursed.createdDatetime);
            setValue('interface', MPConcurExpensesReimbursed.interface);
            setValue('tableId', MPConcurExpensesReimbursed.tableId);
            setValue('batchNum', MPConcurExpensesReimbursed.batchNum);
            setValue('processed', MPConcurExpensesReimbursed.processed);
            setValue('dataAreaId', MPConcurExpensesReimbursed.dataAreaId);
            setValue('batchDate', MPConcurExpensesReimbursed.batchDate);
            setValue('employeeId', MPConcurExpensesReimbursed.employeeId);
            setValue('lastName', MPConcurExpensesReimbursed.lastName);
            setValue('firstName', MPConcurExpensesReimbursed.firstName);
            setValue('middleName', MPConcurExpensesReimbursed.middleName);
            setValue('journalNet', MPConcurExpensesReimbursed.journalNet);
            setValue('concurReportId', MPConcurExpensesReimbursed.concurReportId);
            setValue('currencyCode', MPConcurExpensesReimbursed.currencyCode);
            setValue('reportName', MPConcurExpensesReimbursed.reportName);
            setValue('reportPolicyName', MPConcurExpensesReimbursed.reportPolicyName);
            setValue('containsVat', MPConcurExpensesReimbursed.containsVat);
            setValue('reportEntryDescription', MPConcurExpensesReimbursed.reportEntryDescription);
            setValue('reportVendName', MPConcurExpensesReimbursed.reportVendName);
            setValue('reportVendDesc', MPConcurExpensesReimbursed.reportVendDesc);
            setValue('journalAccountCode', MPConcurExpensesReimbursed.journalAccountCode);
            setValue('orgUnit1', MPConcurExpensesReimbursed.orgUnit1);
            setValue('orgUnit2', MPConcurExpensesReimbursed.orgUnit2);
            setValue('orgUnit3', MPConcurExpensesReimbursed.orgUnit3);
            setValue('paymentTypeCode', MPConcurExpensesReimbursed.paymentTypeCode);
            setValue('journalAmount', MPConcurExpensesReimbursed.journalAmount);
            setValue('journalKey', MPConcurExpensesReimbursed.journalKey);
            setValue('amountCurDebit', MPConcurExpensesReimbursed.amountCurDebit);
            setValue('vatAmount', MPConcurExpensesReimbursed.vatAmount);
            setValue('taxRecliamPosted', MPConcurExpensesReimbursed.taxRecliamPosted);
            setValue('filename', MPConcurExpensesReimbursed.filename);
            
        }
    }, [setType, MPConcurExpensesReimbursed, setValue]);

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
                    name="createdDatetime"
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

                <Controller
                    name="batchNum"
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
                    name="batchDate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Batch Date"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="employeeId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Employee ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="lastName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Last Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="firstName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="First Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="middleName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Middle Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="journalNet"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Journal Net"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="concurReportId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Concur Report ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="currencyCode"
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
                    name="reportName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Report Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="reportPolicyName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Report Policy Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="containsVat"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Contains VAT"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="reportEntryDescription"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Report Entry Description"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="reportVendName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Report Vendor Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="reportVendDesc"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Report Vendor Description"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="journalAccountCode"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Journal Account Code"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="orgUnit1"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Org Unit 1"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="orgUnit2"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Org Unit 2"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="orgUnit3"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Org Unit 3"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="paymentTypeCode"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Payment Type Code"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="journalAmount"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Journal Amount"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="journalKey"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Journal Key"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="amountCurDebit"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Amount Cur Debit"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="vatAmount"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="VAT Amount"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="taxRecliamPosted"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Tax Reclaim Posted"
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


                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
                    Update
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMPConcurExpensesReimbursed;
