import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { useSecondaryContext } from '../../../context/SecondaryContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';





const UpdateMpi21VendPaymConfirmationHeader = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericPaginationContext();  
    const Mpi21VendPaymConfirmationHeader = entities.find((u) => u.recid === parseInt(recid));
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
        setType('Mpi21VendPaymConfirmationHeader');
        fetchTableId();
        fetchInterfaces();

        if (Mpi21VendPaymConfirmationHeader) {
            setValue('recid', Mpi21VendPaymConfirmationHeader.recid);
            setValue('createddatetime', Mpi21VendPaymConfirmationHeader.createddatetime);
            setValue('interface', Mpi21VendPaymConfirmationHeader.interface);
            setValue('tableid', Mpi21VendPaymConfirmationHeader.tableid);
            setValue('batchnum', Mpi21VendPaymConfirmationHeader.batchnum);
            setValue('processed', Mpi21VendPaymConfirmationHeader.processed);
            setValue('dataareaid', Mpi21VendPaymConfirmationHeader.dataareaid);
            setValue('trxSequenceNo', Mpi21VendPaymConfirmationHeader.trxSequenceNo);
            setValue('companyLocation', Mpi21VendPaymConfirmationHeader.companyLocation);
            setValue('actionId', Mpi21VendPaymConfirmationHeader.actionId);
            setValue('createdDate', Mpi21VendPaymConfirmationHeader.createdDate);
            setValue('createdByUser', Mpi21VendPaymConfirmationHeader.createdByUser);
            setValue('voucherNo', Mpi21VendPaymConfirmationHeader.voucherNo);
            setValue('erpvoucherNo', Mpi21VendPaymConfirmationHeader.erpvoucherNo);
            setValue('erpjournalNo', Mpi21VendPaymConfirmationHeader.erpjournalNo);
            setValue('paymentStatus', Mpi21VendPaymConfirmationHeader.paymentStatus);
            setValue('erppaymentReferenceNo', Mpi21VendPaymConfirmationHeader.erppaymentReferenceNo);
            setValue('purchId', Mpi21VendPaymConfirmationHeader.purchId);             
               
        }
    }, [setType, Mpi21VendPaymConfirmationHeader, setValue]);

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
                        id="trxSequenceNo"
                        label="Trx Sequence No"
                        type="number"
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
                        id="companyLocation"
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
                        id="actionId"
                        label="Action ID"
                        type="number"
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
                        id="createdDate"
                        label="Created Date"
                        type="datetime-local"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        margin="normal"
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
                        id="createdByUser"
                        label="Created By User"
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
                        id="voucherNo"
                        label="Voucher No"
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
                        id="erpvoucherNo"
                        label="ERP Voucher No"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="erpjournalNo"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        id="erpjournalNo"
                        label="ERP Journal No"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="paymentStatus"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        id="paymentStatus"
                        label="Payment Status"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="erppaymentReferenceNo"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        id="erppaymentReferenceNo"
                        label="ERP Payment Reference No"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="purchId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        id="purchId"
                        label="Purch ID"
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

export default UpdateMpi21VendPaymConfirmationHeader;
