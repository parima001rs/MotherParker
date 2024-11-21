import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';





const AddMpsalesOrderOutboundDataContract = () => {
    const { addEntity, setType } = useGenericPaginationContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [interfaces, setInterfaces] = useState([]);
    const [tableId, setTableId] = useState([]);
    const location = useLocation(); 


    // Fetch Table IDs from API
    const fetchTableId = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL +  '/api/MpheaderTables');
        setTableId(response.data);
    };

    // Fetch Interfaces from API
    const fetchInterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setInterfaces(response.data);
    };

    useEffect(() => {
        setType('MpsalesOrderOutboundDataContracts');
        fetchTableId();
        fetchInterfaces();
    }, [setType]);

    // Handle form submission
    const onSubmit = async (data) => {
        await addEntity(data);
        navigate('/'); // Redirect after submission
    };

    return (
        <Container>
            <BackButton />
        <h2>Add {location.state?.text} </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
                name="recid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Rec ID"
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
                        label="Created Date Time"
                        type="datetime-local"
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
                name="salesid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Sales ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="salesname"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Sales Name"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="reservation"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Reservation"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />

            <Controller
                name="custaccount"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Customer Account"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="invoiceaccount"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Invoice Account"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="deliverydate"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Delivery Date"
                        type="date"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="url"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="URL"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="purchorderformnum"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Purch Order Form Num"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="salesgroup"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Sales Group"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="freightsliptype"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Freight Slip Type"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="documentstatus"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Document Status"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="intercompanyoriginalsalesid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Intercompany Original Sales ID"
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
                name="payment"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Payment"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="cashdisc"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Cash Discount"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="taxgroup"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Tax Group"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="linedisc"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Line Discount"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="custgroup"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Customer Group"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="discpercent"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Discount Percent"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="intercompanyoriginalcustaccount"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Intercompany Original Customer Account"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="pricegroupid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Price Group ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="multilinedisc"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Multi-line Discount"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="enddisc"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="End Discount"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="customerref"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Customer Reference"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="countyorigdest"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="County or Original Destination"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="listcode"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="List Code"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="dlvterm"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Delivery Term"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="dlvmode"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Delivery Mode"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="purchid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Purchase ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="salesstatus"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Sales Status"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />

            <Controller
                name="markupgroup"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Markup Group"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="salestype"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Sales Type"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />

            <Controller
                name="salespoolid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Sales Pool ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="postingprofile"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Posting Profile"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="transactioncode"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Transaction Code"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="intercompanyautocreateorders"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Intercompany Auto Create Orders"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />

            <Controller
                name="intercompanydirectdelivery"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Intercompany Direct Delivery"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />

            <Controller
                name="settlevoucher"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Settle Voucher"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />

            <Controller
                name="enterprisenumber"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Enterprise Number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="deliveryname"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Delivery Name"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="onetimecustomer"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="One-Time Customer"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />

            <Controller
                name="covstatus"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="COV Status"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />

            <Controller
                name="commissiongroup"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Commission Group"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="paymentsched"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Payment Schedule"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="intercompanyorigin"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Intercompany Origin"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />

            <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Email"
                        fullWidth
                        margin="normal"
                        type="email"
                    />
                )}
            />

            <Controller
                name="freightzone"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Freight Zone"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="returnitemnum"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Return Item Number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="cashdiscpercent"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Cash Discount Percentage"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />

            <Controller
                name="contactpersonid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Contact Person ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="deadline"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Deadline"
                        fullWidth
                        margin="normal"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                    />
                )}
            />

            <Controller
                name="projid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Project ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="inventlocationid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Inventory Location ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="addressreftableid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Address Reference Table ID"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />

            <Controller
                name="vatnum"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="VAT Number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="port"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Port"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="incltax"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Included Tax"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />

            <Controller
                name="numbersequencegroup"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Number Sequence Group"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="fixedexchrate"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Fixed Exchange Rate"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />

            <Controller
                name="languageid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Language ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="salesoriginid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Sales Origin ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="estimate"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Estimate"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />

            <Controller
                name="transport"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Transport"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="paymmode"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Payment Mode"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="paymspec"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Payment Specification"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="fixedduedate"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Fixed Due Date"
                        fullWidth
                        margin="normal"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                    />
                )}
            />

            <Controller
                name="exportreason"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Export Reason"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="statprocid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Status Process ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="Bankcentralbankpurposetext"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Bank Central Bank Purpose Text"
                        fullWidth
                        margin="normal"
                        multiline
                        rows={4}
                    />
                )}
            />

            <Controller
                name="Intercompanycompanyid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Intercompany Company ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="Intercompanypurchid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Intercompany Purchase ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="Intercompanyorder"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Intercompany Order"
                        fullWidth
                        margin="normal"
                        type="number"
                    />
                )}
            />

            <Controller
                name="Dlvreason"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Delivery Reason"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="Quotationid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Quotation ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="Receiptdaterequested"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Receipt Date Requested"
                        fullWidth
                        margin="normal"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                    />
                )}
            />

            <Controller
                name="Receiptdateconfirmed"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Receipt Date Confirmed"
                        fullWidth
                        margin="normal"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                    />
                )}
            />

            <Controller
                name="Shippingdaterequested"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Shipping Date Requested"
                        fullWidth
                        margin="normal"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                    />
                )}
            />

            <Controller
                name="Shippingdateconfirmed"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Shipping Date Confirmed"
                        fullWidth
                        margin="normal"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                    />
                )}
            />
            <Controller
                name="bankCentralBankPurposeCode"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Bank Central Bank Purpose Code"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="einvoiceAccountCode"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="E-Invoice Account Code"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="itemTagging"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Item Tagging"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="caseTagging"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Case Tagging"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="palletTagging"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Pallet Tagging"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="addressRefRecId"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Address Reference Rec ID"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="custInvoiceId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Customer Invoice ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="inventSiteId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Inventory Site ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="defaultDimension"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Default Dimension"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="creditCardCustRefId"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Credit Card Customer Ref ID"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="shipCarrierAccount"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Ship Carrier Account"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="shipCarrierId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Ship Carrier ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="shipCarrierFuelSurcharge"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Ship Carrier Fuel Surcharge"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="shipCarrierBlindShipment"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Ship Carrier Blind Shipment"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="shipCarrierDeliveryContact"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Ship Carrier Delivery Contact"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="creditCardApprovalAmount"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Credit Card Approval Amount"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="creditCardAuthorization"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Credit Card Authorization"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="returnDeadline"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Return Deadline"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="returnReplacementId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Return Replacement ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="returnStatus"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Return Status"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="returnReasonCodeId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Return Reason Code ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="creditCardAuthorizationError"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Credit Card Authorization Error"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="shipCarrierAccountCode"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Ship Carrier Account Code"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="returnReplacementCreated"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Return Replacement Created"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="shipCarrierDlvType"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Ship Carrier Delivery Type"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="deliveryDateControlType"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Delivery Date Control Type"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="shipCarrierExpeditedShipment"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Ship Carrier Expedited Shipment"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="shipCarrierResidential"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Ship Carrier Residential"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="matchingAgreement"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Matching Agreement"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="systemEntrySource"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="System Entry Source"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="systemEntryChangePolicy"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="System Entry Change Policy"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="manualEntryChangePolicy"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Manual Entry Change Policy"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="deliveryPostalAddress"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Delivery Postal Address"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="shipCarrierPostalAddress"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Ship Carrier Postal Address"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="shipCarrierName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Ship Carrier Name"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="workerSalesTaker"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Worker Sales Taker"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="sourceDocumentHeader"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Source Document Header"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="bankDocumentType"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Bank Document Type"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="salesUnitId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Sales Unit ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="smmSalesAmountTotal"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="SMM Sales Amount Total"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="smmCampaignId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="SMM Campaign ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="customsExportOrderIn"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Customs Export Order (In)"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="customsShippingBillIn"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Customs Shipping Bill (In)"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="tdsGroupIn"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="TDS Group (In)"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="tcsGroupIn"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="TCS Group (In)"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="natureOfAssesseeIn"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Nature of Assessee (In)"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="consTargetJp"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Cons Target (JP)"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="intrastatFulfillmentDateHu"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Intrastat Fulfillment Date (HU)"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="unitedVatInvoiceLt"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="United VAT Invoice (LT)"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="intrastatAddValueLv"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Intrastat Add Value (LV)"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="invoiceRegisterLt"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Invoice Register (LT)"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="packingSlipRegisterLt"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Packing Slip Register (LT)"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="bankAccountLv"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Bank Account (LV)"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="cashDiscBaseDate"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Cash Discount Base Date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="cashDiscBaseDays"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Cash Discount Base Days"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="creditNoteReasonCode"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Credit Note Reason Code"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="curBankAccountLv"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Current Bank Account (LV)"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="custBankAccountLv"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Customer Bank Account (LV)"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="daxIntegrationId"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="DAX Integration ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="directDebitMandate"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Direct Debit Mandate"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="fiscalDocTypePl"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Fiscal Document Type (PL)"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mcrOrderStopped"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MCR Order Stopped"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="pdsBatchAttribAutores"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="PDS Batch Attrib Autores"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="pdsCustRebateGroupId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="PDS Customer Rebate Group ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="pdsRebateProgramTmaGroup"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="PDS Rebate Program TMA Group"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="releaseStatus"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Release Status"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="taxPeriodPaymentCodePl"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Tax Period Payment Code (PL)"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="transportationDocument"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Transportation Document"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="workerSalesResponsible"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Worker Sales Responsible"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="modifiedDateTime"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Modified Date Time"
                        type="datetime-local"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="modifiedTransactionId"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Modified Transaction ID"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="createdTransactionId"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Created Transaction ID"
                        type="number"
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
                name="sab_AccInCreditControl"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="SAB Account in Credit Control"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="sab_AccReleasedFromCreditControl"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="SAB Account Released from Credit Control"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="sab_AccId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="SAB Account ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="sab_CustClaimId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="SAB Customer Claim ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="sab_AccRejected"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="SAB Account Rejected"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="foxPriceDate"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Fox Price Date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="foxRequireReprice"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Fox Require Reprice"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="foxHeaderId"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Fox Header ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="foxDisablePricing"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Fox Disable Pricing"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="foxQuoteCode"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Fox Quote Code"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpPassedHoldCheckAmount"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Passed Hold Check Amount"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpPassedHoldCheckDates"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MP Passed Hold Check Dates"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="mppassedHoldCheckPrice"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Passed Hold Check Price"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mppassedHoldCheckVolume"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Passed Hold Check Volume"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mppassedHoldCheckWeight"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Passed Hold Check Weight"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mppassedHoldCheckNullSalesPrice"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Passed Hold Check Null Sales Price"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="sab_AccexcludeSalesOrder"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Exclude Sales Order"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mprevDdFreightChg"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Previous DD Freight Charge"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mppassedHoldCheckMinCases"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Passed Hold Check Min Cases"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mppassedHoldCheckPallet"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Passed Hold Check Pallet"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="retailChannelTable"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Retail Channel Table"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="merchantId_In"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Merchant ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="provisionalAssessment_In"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Provisional Assessment"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="ecommerceOperator_In"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="E-commerce Operator"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="ecommerceOperatorGstin_In"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="E-commerce Operator GSTIN"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="ecommerceSale_In"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="E-commerce Sale"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpbjLoadId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MPBJ Load ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpExportedToTMS"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Exported to TMS"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpExportedToTMSHistory"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Exported to TMS History"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpSoReleased3PL"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="SO Released 3PL"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpSoReleased3PLDate"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="SO Released 3PL Date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpTmsManaged"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="TMS Managed"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpTmsExportedDate"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="TMS Exported Date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpTmsExportedDataTzId"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="TMS Exported Data TZ ID"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpTmsImportedDate"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="TMS Imported Date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpTmsImportedDataTzId"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="TMS Imported Data TZ ID"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpTmsActive"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="TMS Active"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpi21BolDate"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MPI21 BOL Date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpi21BolNumber"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MPI21 BOL Number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpi21BolReceiveDate"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MPI21 BOL Receive Date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpi21Broker"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MPI21 Broker"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpi21ExportedToI21"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Exported to I21"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpi21I21Order"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="I21 Order"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpi21I21OrderNum"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="I21 Order Number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpi21OrderType"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Order Type"
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpi21ShipVia"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Ship Via"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpi21TrailerId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Trailer ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpCustEdIdDeptNum"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Customer Department Number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpCustEdIglNNo"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Customer GLN Number"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpCustEdIpoType"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Customer PO Type"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpTransferId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Transfer ID"
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpMabDDate"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="MAB Date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="mpReviewDate"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Review Date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="tableId"
                control={control}
                defaultValue={0}
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
                Add MpsalesOrderOutboundDataContract
            </Button>
        </form>
    </Container>
    );
};

export default AddMpsalesOrderOutboundDataContract;
