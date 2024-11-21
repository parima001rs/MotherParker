import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, Box } from '@mui/material';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMpsalesOrderOutboundDataContract = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericPaginationContext();
    const MpsalesOrderOutboundDataContracts = entities.find((u) => u.recid === parseInt(recid));
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
        setType('MpsalesOrderOutboundDataContracts');
        fetchTableId();
        fetchInterfaces();

        if (MpsalesOrderOutboundDataContracts) {
            setValue('recid', MpsalesOrderOutboundDataContracts.recid || 0);
            setValue('createddatetime', MpsalesOrderOutboundDataContracts.createddatetime || new Date());
            setValue('interface', MpsalesOrderOutboundDataContracts.interface || '');
            setValue('batchnum', MpsalesOrderOutboundDataContracts.batchnum || '');
            setValue('processed', MpsalesOrderOutboundDataContracts.processed || false);
            setValue('salesid', MpsalesOrderOutboundDataContracts.salesid || '');
            setValue('salesname', MpsalesOrderOutboundDataContracts.salesname || '');
            setValue('reservation', MpsalesOrderOutboundDataContracts.reservation || 0);
            setValue('custaccount', MpsalesOrderOutboundDataContracts.custaccount || '');
            setValue('invoiceaccount', MpsalesOrderOutboundDataContracts.invoiceaccount || '');
            setValue('deliverydate', MpsalesOrderOutboundDataContracts.deliverydate || new Date());
            setValue('url', MpsalesOrderOutboundDataContracts.url || '');
            setValue('purchorderformnum', MpsalesOrderOutboundDataContracts.purchorderformnum || '');
            setValue('salesgroup', MpsalesOrderOutboundDataContracts.salesgroup || '');
            setValue('freightsliptype', MpsalesOrderOutboundDataContracts.freightsliptype || 0);
            setValue('documentstatus', MpsalesOrderOutboundDataContracts.documentstatus || 0);
            setValue('intercompanyoriginalsalesid', MpsalesOrderOutboundDataContracts.intercompanyoriginalsalesid || '');
            setValue('currencycode', MpsalesOrderOutboundDataContracts.currencycode || '');
            setValue('payment', MpsalesOrderOutboundDataContracts.payment || '');
            setValue('cashdisc', MpsalesOrderOutboundDataContracts.cashdisc || '');
            setValue('taxgroup', MpsalesOrderOutboundDataContracts.taxgroup || '');
            setValue('linedisc', MpsalesOrderOutboundDataContracts.linedisc || '');
            setValue('custgroup', MpsalesOrderOutboundDataContracts.custgroup || '');
            setValue('discpercent', MpsalesOrderOutboundDataContracts.discpercent || 0);
            setValue('intercompanyoriginalcustaccount', MpsalesOrderOutboundDataContracts.intercompanyoriginalcustaccount || '');
            setValue('pricegroupid', MpsalesOrderOutboundDataContracts.pricegroupid || '');
            setValue('multilinedisc', MpsalesOrderOutboundDataContracts.multilinedisc || '');
            setValue('enddisc', MpsalesOrderOutboundDataContracts.enddisc || '');
            setValue('customerref', MpsalesOrderOutboundDataContracts.customerref || '');
            setValue('countyorigdest', MpsalesOrderOutboundDataContracts.countyorigdest || '');
            setValue('listcode', MpsalesOrderOutboundDataContracts.listcode || 0);
            setValue('dlvterm', MpsalesOrderOutboundDataContracts.dlvterm || '');
            setValue('dlvmode', MpsalesOrderOutboundDataContracts.dlvmode || '');
            setValue('purchid', MpsalesOrderOutboundDataContracts.purchid || '');
            setValue('salesstatus', MpsalesOrderOutboundDataContracts.salesstatus || 0);
            setValue('markupgroup', MpsalesOrderOutboundDataContracts.markupgroup || '');
            setValue('salestype', MpsalesOrderOutboundDataContracts.salestype || 0);
            setValue('salespoolid', MpsalesOrderOutboundDataContracts.salespoolid || '');
            setValue('postingprofile', MpsalesOrderOutboundDataContracts.postingprofile || '');
            setValue('transactioncode', MpsalesOrderOutboundDataContracts.transactioncode || '');
            setValue('intercompanyautocreateorders', MpsalesOrderOutboundDataContracts.intercompanyautocreateorders || 0);
            setValue('intercompanydirectdelivery', MpsalesOrderOutboundDataContracts.intercompanydirectdelivery || 0);
            setValue('settlevoucher', MpsalesOrderOutboundDataContracts.settlevoucher || 0);
            setValue('enterprisenumber', MpsalesOrderOutboundDataContracts.enterprisenumber || '');
            setValue('deliveryname', MpsalesOrderOutboundDataContracts.deliveryname || '');
            setValue('onetimecustomer', MpsalesOrderOutboundDataContracts.onetimecustomer || 0);
            setValue('covstatus', MpsalesOrderOutboundDataContracts.covstatus || 0);
            setValue('commissiongroup', MpsalesOrderOutboundDataContracts.commissiongroup || '');
            setValue('paymentsched', MpsalesOrderOutboundDataContracts.paymentsched || '');
            setValue('intercompanyorigin', MpsalesOrderOutboundDataContracts.intercompanyorigin || 0);
            setValue('email', MpsalesOrderOutboundDataContracts.email || '');
            setValue('freightzone', MpsalesOrderOutboundDataContracts.freightzone || '');
            setValue('returnitemnum', MpsalesOrderOutboundDataContracts.returnitemnum || '');
            setValue('cashdiscpercent', MpsalesOrderOutboundDataContracts.cashdiscpercent || 0);
            setValue('contactpersonid', MpsalesOrderOutboundDataContracts.contactpersonid || '');
            setValue('deadline', MpsalesOrderOutboundDataContracts.deadline || new Date());
            setValue('projid', MpsalesOrderOutboundDataContracts.projid || '');
            setValue('inventlocationid', MpsalesOrderOutboundDataContracts.inventlocationid || '');
            setValue('addressreftableid', MpsalesOrderOutboundDataContracts.addressreftableid || 0);
            setValue('vatnum', MpsalesOrderOutboundDataContracts.vatnum || '');
            setValue('port', MpsalesOrderOutboundDataContracts.port || '');
            setValue('incltax', MpsalesOrderOutboundDataContracts.incltax || 0);
            setValue('numbersequencegroup', MpsalesOrderOutboundDataContracts.numbersequencegroup || '');
            setValue('fixedexchrate', MpsalesOrderOutboundDataContracts.fixedexchrate || 0);
            setValue('languageid', MpsalesOrderOutboundDataContracts.languageid || '');
            setValue('salesoriginid', MpsalesOrderOutboundDataContracts.salesoriginid || '');
            setValue('estimate', MpsalesOrderOutboundDataContracts.estimate || 0);
            setValue('transport', MpsalesOrderOutboundDataContracts.transport || '');
            setValue('paymmode', MpsalesOrderOutboundDataContracts.paymmode || '');
            setValue('paymspec', MpsalesOrderOutboundDataContracts.paymspec || '');
            setValue('fixedduedate', MpsalesOrderOutboundDataContracts.fixedduedate || new Date());
            setValue('exportreason', MpsalesOrderOutboundDataContracts.exportreason || '');
            setValue('statprocid', MpsalesOrderOutboundDataContracts.statprocid || '');
            setValue('Bankcentralbankpurposetext', MpsalesOrderOutboundDataContracts.Bankcentralbankpurposetext || null);
            setValue('Intercompanycompanyid', MpsalesOrderOutboundDataContracts.Intercompanycompanyid || '');
            setValue('Intercompanypurchid', MpsalesOrderOutboundDataContracts.Intercompanypurchid || '');
            setValue('Intercompanyorder', MpsalesOrderOutboundDataContracts.Intercompanyorder || 0);
            setValue('Dlvreason', MpsalesOrderOutboundDataContracts.Dlvreason || '');
            setValue('Quotationid', MpsalesOrderOutboundDataContracts.Quotationid || '');
            setValue('Receiptdaterequested', MpsalesOrderOutboundDataContracts.Receiptdaterequested || new Date());
            setValue('Receiptdateconfirmed', MpsalesOrderOutboundDataContracts.Receiptdateconfirmed || new Date());
            setValue('Shippingdaterequested', MpsalesOrderOutboundDataContracts.Shippingdaterequested || new Date());
            setValue('Shippingdateconfirmed', MpsalesOrderOutboundDataContracts.Shippingdateconfirmed || new Date());
            setValue('Bankcentralbankpurposecode', MpsalesOrderOutboundDataContracts.Bankcentralbankpurposecode || '');
            setValue('Einvoiceaccountcode', MpsalesOrderOutboundDataContracts.Einvoiceaccountcode || '');
            setValue('Itemtagging', MpsalesOrderOutboundDataContracts.Itemtagging || 0);
            setValue('Casetagging', MpsalesOrderOutboundDataContracts.Casetagging || 0);
            setValue('Pallettagging', MpsalesOrderOutboundDataContracts.Pallettagging || 0);
            setValue('Addressrefrecid', MpsalesOrderOutboundDataContracts.Addressrefrecid || 0);
            setValue('Custinvoiceid', MpsalesOrderOutboundDataContracts.Custinvoiceid || '');
            setValue('Inventsiteid', MpsalesOrderOutboundDataContracts.Inventsiteid || '');
            setValue('Defaultdimension', MpsalesOrderOutboundDataContracts.Defaultdimension || 0);
            setValue('Creditcardcustrefid', MpsalesOrderOutboundDataContracts.Creditcardcustrefid || 0);            
            setValue('Shipcarrieraccount', MpsalesOrderOutboundDataContracts.Shipcarrieraccount || '');
            setValue('Shipcarrierid', MpsalesOrderOutboundDataContracts.Shipcarrierid || '');
            setValue('Shipcarrierfuelsurcharge', MpsalesOrderOutboundDataContracts.Shipcarrierfuelsurcharge || 0);
            setValue('Shipcarrierblindshipment', MpsalesOrderOutboundDataContracts.Shipcarrierblindshipment || 0);
            setValue('Shipcarrierdeliverycontact', MpsalesOrderOutboundDataContracts.Shipcarrierdeliverycontact || '');
            setValue('Creditcardapprovalamount', MpsalesOrderOutboundDataContracts.Creditcardapprovalamount || 0);
            setValue('Creditcardauthorization', MpsalesOrderOutboundDataContracts.Creditcardauthorization || '');
            setValue('Returndeadline', MpsalesOrderOutboundDataContracts.Returndeadline || new Date());
            setValue('Returnreplacementid', MpsalesOrderOutboundDataContracts.Returnreplacementid || '');
            setValue('Returnstatus', MpsalesOrderOutboundDataContracts.Returnstatus || 0);
            setValue('Returnreasoncodeid', MpsalesOrderOutboundDataContracts.Returnreasoncodeid || '');
            setValue('Creditcardauthorizationerror', MpsalesOrderOutboundDataContracts.Creditcardauthorizationerror || 0);
            setValue('Shipcarrieraccountcode', MpsalesOrderOutboundDataContracts.Shipcarrieraccountcode || '');
            setValue('Returnreplacementcreated', MpsalesOrderOutboundDataContracts.Returnreplacementcreated || 0);
            setValue('Shipcarrierdlvtype', MpsalesOrderOutboundDataContracts.Shipcarrierdlvtype || 0);
            setValue('Deliverydatecontroltype', MpsalesOrderOutboundDataContracts.Deliverydatecontroltype || 0);
            setValue('Shipcarrierexpeditedshipment', MpsalesOrderOutboundDataContracts.Shipcarrierexpeditedshipment || 0);
            setValue('Shipcarrierresidential', MpsalesOrderOutboundDataContracts.Shipcarrierresidential || 0);
            setValue('Matchingagreement', MpsalesOrderOutboundDataContracts.Matchingagreement || 0);
            setValue('Systementrysource', MpsalesOrderOutboundDataContracts.Systementrysource || 0);
            setValue('Systementrychangepolicy', MpsalesOrderOutboundDataContracts.Systementrychangepolicy || 0);
            setValue('Manualentrychangepolicy', MpsalesOrderOutboundDataContracts.Manualentrychangepolicy || 0);
            setValue('Deliverypostaladdress', MpsalesOrderOutboundDataContracts.Deliverypostaladdress || 0);
            setValue('Shipcarrierpostaladdress', MpsalesOrderOutboundDataContracts.Shipcarrierpostaladdress || 0);
            setValue('Shipcarriername', MpsalesOrderOutboundDataContracts.Shipcarriername || '');
            setValue('Workersalestaker', MpsalesOrderOutboundDataContracts.Workersalestaker || 0);
            setValue('Sourcedocumentheader', MpsalesOrderOutboundDataContracts.Sourcedocumentheader || 0);
            setValue('Bankdocumenttype', MpsalesOrderOutboundDataContracts.Bankdocumenttype || 0);
            setValue('Salesunitid', MpsalesOrderOutboundDataContracts.Salesunitid || '');
            setValue('Smmsalesamounttotal', MpsalesOrderOutboundDataContracts.Smmsalesamounttotal || 0);
            setValue('Smmcampaignid', MpsalesOrderOutboundDataContracts.Smmcampaignid || '');
            setValue('Customsexportorder_In', MpsalesOrderOutboundDataContracts.Customsexportorder_In || 0);
            setValue('Customsshippingbill_In', MpsalesOrderOutboundDataContracts.Customsshippingbill_In || 0);
            setValue('Tdsgroup_In', MpsalesOrderOutboundDataContracts.Tdsgroup_In || '');
            setValue('Tcsgroup_In', MpsalesOrderOutboundDataContracts.Tcsgroup_In || '');
            setValue('Natureofassessee_In', MpsalesOrderOutboundDataContracts.Natureofassessee_In || 0);
            setValue('Constarget_Jp', MpsalesOrderOutboundDataContracts.Constarget_Jp || 0);
            setValue('Intrastatfulfillmentdate_Hu', MpsalesOrderOutboundDataContracts.Intrastatfulfillmentdate_Hu || new Date());
            setValue('Unitedvatinvoice_Lt', MpsalesOrderOutboundDataContracts.Unitedvatinvoice_Lt || 0);
            setValue('Intrastataddvalue_Lv', MpsalesOrderOutboundDataContracts.Intrastataddvalue_Lv || 0);
            setValue('Invoiceregister_Lt', MpsalesOrderOutboundDataContracts.Invoiceregister_Lt || 0);
            setValue('Packingslipregister_Lt', MpsalesOrderOutboundDataContracts.Packingslipregister_Lt || 0);
            setValue('Bankaccount_Lv', MpsalesOrderOutboundDataContracts.Bankaccount_Lv || '');
            setValue('Cashdiscbasedate', MpsalesOrderOutboundDataContracts.Cashdiscbasedate || new Date());
            setValue('Cashdiscbasedays', MpsalesOrderOutboundDataContracts.Cashdiscbasedays || 0);
            setValue('Creditnotereasoncode', MpsalesOrderOutboundDataContracts.Creditnotereasoncode || 0);
            setValue('Curbankaccount_Lv', MpsalesOrderOutboundDataContracts.Curbankaccount_Lv || '');
            setValue('Custbankaccount_Lv', MpsalesOrderOutboundDataContracts.Custbankaccount_Lv || '');
            setValue('Daxintegrationid', MpsalesOrderOutboundDataContracts.Daxintegrationid || '');
            setValue('Directdebitmandate', MpsalesOrderOutboundDataContracts.Directdebitmandate || 0);
            setValue('Fiscaldoctype_Pl', MpsalesOrderOutboundDataContracts.Fiscaldoctype_Pl || 0);
            setValue('Mcrorderstopped', MpsalesOrderOutboundDataContracts.Mcrorderstopped || 0);
            setValue('Pdsbatchattribautores', MpsalesOrderOutboundDataContracts.Pdsbatchattribautores || 0);
            setValue('Pdscustrebategroupid', MpsalesOrderOutboundDataContracts.Pdscustrebategroupid || '');
            setValue('Pdsrebateprogramtmagroup', MpsalesOrderOutboundDataContracts.Pdsrebateprogramtmagroup || '');
            setValue('Releasestatus', MpsalesOrderOutboundDataContracts.Releasestatus || 0);
            setValue('Taxperiodpaymentcode_Pl', MpsalesOrderOutboundDataContracts.Taxperiodpaymentcode_Pl || '');
            setValue('Transportationdocument', MpsalesOrderOutboundDataContracts.Transportationdocument || 0);
            setValue('Workersalesresponsible', MpsalesOrderOutboundDataContracts.Workersalesresponsible || 0);
            setValue('Modifieddatetime', MpsalesOrderOutboundDataContracts.Modifieddatetime || new Date());
            setValue('Modifiedtransactionid', MpsalesOrderOutboundDataContracts.Modifiedtransactionid || 0);
            setValue('Createdtransactionid', MpsalesOrderOutboundDataContracts.Createdtransactionid || 0);
            setValue('Dataareaid', MpsalesOrderOutboundDataContracts.Dataareaid || '');
            setValue('Sab_Accincreditcontrol', MpsalesOrderOutboundDataContracts.Sab_Accincreditcontrol || 0);
            setValue('Sab_Accreleasedfromcreditcontrol', MpsalesOrderOutboundDataContracts.Sab_Accreleasedfromcreditcontrol || 0);
            setValue('Sab_Accid', MpsalesOrderOutboundDataContracts.Sab_Accid || '');
            setValue('Sab_Custclaimid', MpsalesOrderOutboundDataContracts.Sab_Custclaimid || '');
            setValue('Sab_Accrejected', MpsalesOrderOutboundDataContracts.Sab_Accrejected || 0);
            setValue('Foxpricedate', MpsalesOrderOutboundDataContracts.Foxpricedate || new Date());
            setValue('Foxrequirereprice', MpsalesOrderOutboundDataContracts.Foxrequirereprice || 0);
            setValue('Foxheaderid', MpsalesOrderOutboundDataContracts.Foxheaderid || '');
            setValue('Foxdisablepricing', MpsalesOrderOutboundDataContracts.Foxdisablepricing || 0);
            setValue('Foxquotecode', MpsalesOrderOutboundDataContracts.Foxquotecode || '');
            setValue('Mppassedholdcheckamount', MpsalesOrderOutboundDataContracts.Mppassedholdcheckamount || 0);
            setValue('Mppassedholdcheckdates', MpsalesOrderOutboundDataContracts.Mppassedholdcheckdates || 0);
            setValue('Mppassedholdcheckprice', MpsalesOrderOutboundDataContracts.Mppassedholdcheckprice || 0);
            setValue('Mppassedholdcheckvolume', MpsalesOrderOutboundDataContracts.Mppassedholdcheckvolume || 0);
            setValue('Mppassedholdcheckweight', MpsalesOrderOutboundDataContracts.Mppassedholdcheckweight || 0);
            setValue('Mppassedholdchecknullsalesprice', MpsalesOrderOutboundDataContracts.Mppassedholdchecknullsalesprice || 0);
            setValue('Sab_Accexcludesalesorder', MpsalesOrderOutboundDataContracts.Sab_Accexcludesalesorder || 0);
            setValue('Mprevddfreightchg', MpsalesOrderOutboundDataContracts.Mprevddfreightchg || 0);
            setValue('Mppassedholdcheckmincases', MpsalesOrderOutboundDataContracts.Mppassedholdcheckmincases || 0);
            setValue('Mppassedholdcheckpallet', MpsalesOrderOutboundDataContracts.Mppassedholdcheckpallet || 0);
            setValue('Retailchanneltable', MpsalesOrderOutboundDataContracts.Retailchanneltable || 0);
            setValue('Merchantid_In', MpsalesOrderOutboundDataContracts.Merchantid_In || '');
            setValue('Provisionalassessment_In', MpsalesOrderOutboundDataContracts.Provisionalassessment_In || 0);
            setValue('Ecommerceoperator_In', MpsalesOrderOutboundDataContracts.Ecommerceoperator_In || '');
            setValue('Ecommerceoperatorgstin_In', MpsalesOrderOutboundDataContracts.Ecommerceoperatorgstin_In || 0);
            setValue('Ecommercesale_In', MpsalesOrderOutboundDataContracts.Ecommercesale_In || 0);
            setValue('Mpbjloadid', MpsalesOrderOutboundDataContracts.Mpbjloadid || '');
            setValue('Mpexportedtotms', MpsalesOrderOutboundDataContracts.Mpexportedtotms || 0);
            setValue('Mpexportedtotmshistory', MpsalesOrderOutboundDataContracts.Mpexportedtotmshistory || 0);
            setValue('Mpsoreleased3pl', MpsalesOrderOutboundDataContracts.Mpsoreleased3pl || 0);
            setValue('Mpsoreleased3pldate', MpsalesOrderOutboundDataContracts.Mpsoreleased3pldate || new Date());
            setValue('Mptmsmanaged', MpsalesOrderOutboundDataContracts.Mptmsmanaged || 0);
            setValue('Mptmsexporteddate', MpsalesOrderOutboundDataContracts.Mptmsexporteddate || new Date());
            setValue('Mptmsexporteddatetzid', MpsalesOrderOutboundDataContracts.Mptmsexporteddatetzid || 0);
            setValue('Mptmsimporteddate', MpsalesOrderOutboundDataContracts.Mptmsimporteddate || new Date());
            setValue('Mptmsimporteddatetzid', MpsalesOrderOutboundDataContracts.Mptmsimporteddatetzid || 0);
            setValue('Mptmsactive', MpsalesOrderOutboundDataContracts.Mptmsactive || 0);
            setValue('Mpi21boldate', MpsalesOrderOutboundDataContracts.Mpi21boldate || new Date());
            setValue('Mpi21bolnumber', MpsalesOrderOutboundDataContracts.Mpi21bolnumber || '');
            setValue('Mpi21bolreceivedate', MpsalesOrderOutboundDataContracts.Mpi21bolreceivedate || new Date());
            setValue('Mpi21broker', MpsalesOrderOutboundDataContracts.Mpi21broker || '');
            setValue('Mpi21exportedtoi21', MpsalesOrderOutboundDataContracts.Mpi21exportedtoi21 || 0);
            setValue('Mpi21i21order', MpsalesOrderOutboundDataContracts.Mpi21i21order || 0);
            setValue('Mpi21i21ordernum', MpsalesOrderOutboundDataContracts.Mpi21i21ordernum || '');
            setValue('Mpi21ordertype', MpsalesOrderOutboundDataContracts.Mpi21ordertype || 0);
            setValue('Mpi21shipvia', MpsalesOrderOutboundDataContracts.Mpi21shipvia || '');
            setValue('Mpi21trailerid', MpsalesOrderOutboundDataContracts.Mpi21trailerid || '');
            setValue('Mpcustedideptnum', MpsalesOrderOutboundDataContracts.Mpcustedideptnum || '');
            setValue('Mpcustediglnno', MpsalesOrderOutboundDataContracts.Mpcustediglnno || '');
            setValue('Mpcustedipotype', MpsalesOrderOutboundDataContracts.Mpcustedipotype || '');
            setValue('Mptransferid', MpsalesOrderOutboundDataContracts.Mptransferid || '');
            setValue('Mpmabddate', MpsalesOrderOutboundDataContracts.Mpmabddate || new Date());
            setValue('Mpreviewdate', MpsalesOrderOutboundDataContracts.Mpreviewdate || new Date());
            setValue('TableId', MpsalesOrderOutboundDataContracts.TableId || 0);            
        }
        
    }, [setType, MpsalesOrderOutboundDataContracts, setValue]);

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
                defaultValue={MpsalesOrderOutboundDataContracts.recid || 0}
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
                defaultValue={MpsalesOrderOutboundDataContracts.createddatetime || new Date()}
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
                defaultValue={MpsalesOrderOutboundDataContracts.batchnum || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.salesid || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.salesname || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.reservation || 0}
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
                defaultValue={MpsalesOrderOutboundDataContracts.custaccount || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.invoiceaccount || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.deliverydate || new Date()}
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
                defaultValue={MpsalesOrderOutboundDataContracts.url || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.purchorderformnum || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.salesgroup || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.freightsliptype || 0}
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
                defaultValue={MpsalesOrderOutboundDataContracts.documentstatus || 0}
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
                defaultValue={MpsalesOrderOutboundDataContracts.intercompanyoriginalsalesid || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.currencycode || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.payment || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.cashdisc || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.taxgroup || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.linedisc || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.custgroup || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.discpercent || 0}
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
                defaultValue={MpsalesOrderOutboundDataContracts.intercompanyoriginalcustaccount || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.pricegroupid || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.multilinedisc || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.enddisc || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.customerref || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.countyorigdest || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.listcode || 0}
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
                defaultValue={MpsalesOrderOutboundDataContracts.dlvterm || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.dlvmode || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.purchid || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.salesstatus || 0}
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
                defaultValue={MpsalesOrderOutboundDataContracts.markupgroup || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.salestype || 0}
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
                defaultValue={MpsalesOrderOutboundDataContracts.salespoolid || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.postingprofile || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.transactioncode || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.intercompanyautocreateorders || 0}
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
                defaultValue={MpsalesOrderOutboundDataContracts.intercompanydirectdelivery || 0}
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
                defaultValue={MpsalesOrderOutboundDataContracts.settlevoucher || 0}
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
                defaultValue={MpsalesOrderOutboundDataContracts.enterprisenumber || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.deliveryname || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.onetimecustomer || 0}
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
                defaultValue={MpsalesOrderOutboundDataContracts.covstatus || 0}
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
                defaultValue={MpsalesOrderOutboundDataContracts.commissiongroup || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.paymentsched || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.intercompanyorigin || 0}
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
                defaultValue={MpsalesOrderOutboundDataContracts.email || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.freightzone || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.returnitemnum || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.cashdiscpercent || 0}
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
                defaultValue={MpsalesOrderOutboundDataContracts.contactpersonid || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.deadline || new Date()}
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
                defaultValue={MpsalesOrderOutboundDataContracts.projid || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.inventlocationid || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.addressreftableid || 0}
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
                defaultValue={MpsalesOrderOutboundDataContracts.vatnum || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.port || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.incltax || 0}
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
                defaultValue={MpsalesOrderOutboundDataContracts.numbersequencegroup || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.fixedexchrate || 0}
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
                defaultValue={MpsalesOrderOutboundDataContracts.languageid || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.salesoriginid || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.estimate || 0}
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
                defaultValue={MpsalesOrderOutboundDataContracts.transport || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.paymmode || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.paymspec || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.fixedduedate || new Date()}
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
                defaultValue={MpsalesOrderOutboundDataContracts.exportreason || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.statprocid || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.Bankcentralbankpurposetext || null}
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
                defaultValue={MpsalesOrderOutboundDataContracts.Intercompanycompanyid || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.Intercompanypurchid || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.Intercompanyorder || 0}
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
                defaultValue={MpsalesOrderOutboundDataContracts.Dlvreason || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.Quotationid || ''}
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
                defaultValue={MpsalesOrderOutboundDataContracts.Receiptdaterequested || new Date()}
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
                defaultValue={MpsalesOrderOutboundDataContracts.Receiptdateconfirmed || new Date()}
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
                defaultValue={MpsalesOrderOutboundDataContracts.Shippingdaterequested || new Date()}
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
                defaultValue={MpsalesOrderOutboundDataContracts.Shippingdateconfirmed || new Date()}
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
                    Update MpsalesOrderOutboundDataContracts
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpsalesOrderOutboundDataContract;
