import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button, Container, IconButton, Box } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { fetchTableDisplayName } from '../../../services/apiservice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';

// Define columns with the updated fields
const columns = (navigate, deleteEntity,displayUniqueName) => [
    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-MpsalesOrderOutboundDataContract/${params.row.recid}`,{ state: { text: displayUniqueName } })}
                >
                    <Edit />
                </IconButton>
                <IconButton
                    color="secondary"
                    onClick={() => deleteEntity(params.row.recid)}
                >
                    <Delete />
                </IconButton>
            </>
        ),
    },
    { field: 'sbRecid', headerName: 'SB Recid', width: 150 },
    { field: 'sbBatchnum', headerName: 'SB Batchnum', width: 150 },
    { field: 'sbCreateddatetime', headerName: 'SB Createddatetime', width: 150 },
    { field: 'sbProcessingstatus', headerName: 'SB Processingstatus', width: 100 },
    { field: 'sbError', headerName: 'SB Error', width: 90, renderCell: (params) => (
        params.value === true ? (
            <Button
                color="primary"
                onClick={() => navigate(`/Mpblujayerrorlog/${params.row.sbRecid}`)}
                style={{ textTransform: 'none', padding: 0, minWidth: 0}}
            >
                True
            </Button>
        ) : (
            "False"
        )
        ),
    },
    { field: 'sbInterface', headerName: 'SB Interface', width: 150 },
    { field: 'sbRefrecid', headerName: 'SB Refrecid', width: 150 },
    { field: 'sbReftableid', headerName: 'SB Reftableid', width: 150 },
    { field: 'sbDataareaid', headerName: 'SB Dataareaid', width: 150 },
    { field: 'sbTrxsequenceno', headerName: 'SB Trxsequenceno', width: 150 },
    { field: 'Interfacenum', headerName: 'SB Interfacenum', width: 90 },
    { field: 'recid', headerName: 'Recid', width: 150 },
    { field: 'createddatetime', headerName: 'Created Datetime', width: 150 },
    { field: 'interface', headerName: 'Interface', width: 150 },
    { field: 'batchnum', headerName: 'Batch Number', width: 200 },
    { field: 'processed', headerName: 'Processed', width: 150, type: 'boolean' },
    { field: 'salesid', headerName: 'Sales ID', width: 200 },
    { field: 'salesname', headerName: 'Sales Name', width: 250 },
    { field: 'reservation', headerName: 'Reservation', width: 150, type: 'number' },
    { field: 'custaccount', headerName: 'Customer Account', width: 200 },
    { field: 'invoiceaccount', headerName: 'Invoice Account', width: 200 },
    { field: 'deliverydate', headerName: 'Delivery Date', width: 200 },
    { field: 'url', headerName: 'URL', width: 250 },
    { field: 'purchorderformnum', headerName: 'Purchase Order Form Number', width: 250 },
    { field: 'salesgroup', headerName: 'Sales Group', width: 200 },
    { field: 'freightsliptype', headerName: 'Freight Slip Type', width: 150, type: 'number' },
    { field: 'documentstatus', headerName: 'Document Status', width: 150, type: 'number' },
    { field: 'intercompanyoriginalsalesid', headerName: 'Intercompany Original Sales ID', width: 250 },
    { field: 'currencycode', headerName: 'Currency Code', width: 150 },
    { field: 'payment', headerName: 'Payment', width: 200 },
    { field: 'cashdisc', headerName: 'Cash Discount', width: 200 },
    { field: 'taxgroup', headerName: 'Tax Group', width: 200 },
    { field: 'linedisc', headerName: 'Line Discount', width: 200 },
    { field: 'custgroup', headerName: 'Customer Group', width: 200 },
    { field: 'discpercent', headerName: 'Discount Percent', width: 150, type: 'number' },
    { field: 'intercompanyoriginalcustaccount', headerName: 'Intercompany Original Customer Account', width: 250 },
    { field: 'pricegroupid', headerName: 'Price Group ID', width: 200 },
    { field: 'multilinedisc', headerName: 'Multi-Line Discount', width: 200 },
    { field: 'enddisc', headerName: 'End Discount', width: 200 },
    { field: 'customerref', headerName: 'Customer Reference', width: 200 },
    { field: 'countyorigdest', headerName: 'County Origin/Destination', width: 250 },
    { field: 'listcode', headerName: 'List Code', width: 150, type: 'number' },
    { field: 'dlvterm', headerName: 'Delivery Term', width: 200 },
    { field: 'dlvmode', headerName: 'Delivery Mode', width: 200 },
    { field: 'purchid', headerName: 'Purchase ID', width: 200 },
    { field: 'salesstatus', headerName: 'Sales Status', width: 150, type: 'number' },
    { field: 'markupgroup', headerName: 'Markup Group', width: 200 },
    { field: 'salestype', headerName: 'Sales Type', width: 150, type: 'number' },
    { field: 'salespoolid', headerName: 'Sales Pool ID', width: 200 },
    { field: 'postingprofile', headerName: 'Posting Profile', width: 200 },
    { field: 'transactioncode', headerName: 'Transaction Code', width: 200 },
    { field: 'intercompanyautocreateorders', headerName: 'Intercompany Auto Create Orders', width: 250, type: 'number' },
    { field: 'intercompanydirectdelivery', headerName: 'Intercompany Direct Delivery', width: 250, type: 'number' },
    { field: 'settlevoucher', headerName: 'Settle Voucher', width: 200, type: 'number' },
    { field: 'enterprisenumber', headerName: 'Enterprise Number', width: 200 },
    { field: 'deliveryname', headerName: 'Delivery Name', width: 200 },
    { field: 'onetimecustomer', headerName: 'One Time Customer', width: 200, type: 'number' },
    { field: 'covstatus', headerName: 'COV Status', width: 150, type: 'number' },
    { field: 'commissiongroup', headerName: 'Commission Group', width: 200 },
    { field: 'paymentsched', headerName: 'Payment Schedule', width: 200 },
    { field: 'intercompanyorigin', headerName: 'Intercompany Origin', width: 200, type: 'number' },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'freightzone', headerName: 'Freight Zone', width: 200 },
    { field: 'returnitemnum', headerName: 'Return Item Number', width: 200 },
    { field: 'cashdiscpercent', headerName: 'Cash Discount Percent', width: 200, type: 'number' },
    { field: 'contactpersonid', headerName: 'Contact Person ID', width: 200 },
    { field: 'deadline', headerName: 'Deadline', width: 200 },
    { field: 'projid', headerName: 'Project ID', width: 200 },
    { field: 'inventlocationid', headerName: 'Inventory Location ID', width: 200 },
    { field: 'addressreftableid', headerName: 'Address Ref Table ID', width: 200, type: 'number' },
    { field: 'vatnum', headerName: 'VAT Number', width: 200 },
    { field: 'port', headerName: 'Port', width: 200 },
    { field: 'incltax', headerName: 'Include Tax', width: 150, type: 'number' },
    { field: 'numbersequencegroup', headerName: 'Number Sequence Group', width: 250 },
    { field: 'fixedexchrate', headerName: 'Fixed Exchange Rate', width: 200, type: 'number' },
    { field: 'languageid', headerName: 'Language ID', width: 150 },
    { field: 'salesoriginid', headerName: 'Sales Origin ID', width: 200 },
    { field: 'estimate', headerName: 'Estimate', width: 150, type: 'number' },
    { field: 'transport', headerName: 'Transport', width: 200 },
    { field: 'paymmode', headerName: 'Payment Mode', width: 200 },
    { field: 'paymspec', headerName: 'Payment Specification', width: 200 },
    { field: 'fixedduedate', headerName: 'Fixed Due Date', width: 200 },
    { field: 'exportreason', headerName: 'Export Reason', width: 250 },
    { field: 'statprocid', headerName: 'Stat Procedure ID', width: 200 },
    { field: 'Bankcentralbankpurposetext', headerName: 'Bank Central Bank Purpose Text', width: 200 },
    { field: 'Intercompanycompanyid', headerName: 'Intercompany Company ID', width: 200 },
    { field: 'Intercompanypurchid', headerName: 'Intercompany Purch ID', width: 200 },
    { field: 'Intercompanyorder', headerName: 'Intercompany Order', width: 150 },
    { field: 'Dlvreason', headerName: 'Delivery Reason', width: 200 },
    { field: 'Quotationid', headerName: 'Quotation ID', width: 200 },
    { field: 'Receiptdaterequested', headerName: 'Receipt Date Requested', width: 200 },
    { field: 'Receiptdateconfirmed', headerName: 'Receipt Date Confirmed', width: 200 },
    { field: 'Shippingdaterequested', headerName: 'Shipping Date Requested', width: 200 },
    { field: 'Shippingdateconfirmed', headerName: 'Shipping Date Confirmed', width: 200 },
    { field: 'Bankcentralbankpurposecode', headerName: 'Bank Central Bank Purpose Code', width: 200 },
    { field: 'Einvoiceaccountcode', headerName: 'E-invoice Account Code', width: 200 },
    { field: 'Itemtagging', headerName: 'Item Tagging', width: 150 },
    { field: 'Casetagging', headerName: 'Case Tagging', width: 150 },
    { field: 'Pallettagging', headerName: 'Pallet Tagging', width: 150 },
    { field: 'Addressrefrecid', headerName: 'Address Ref Rec ID', width: 150 },
    { field: 'Custinvoiceid', headerName: 'Customer Invoice ID', width: 200 },
    { field: 'Inventsiteid', headerName: 'Inventory Site ID', width: 200 },
    { field: 'Defaultdimension', headerName: 'Default Dimension', width: 150 },
    { field: 'Creditcardcustrefid', headerName: 'Credit Card Customer Ref ID', width: 200 },
    { field: 'Shipcarrieraccount', headerName: 'Ship Carrier Account', width: 200 },
    { field: 'Shipcarrierid', headerName: 'Ship Carrier ID', width: 200 },
    { field: 'Shipcarrierfuelsurcharge', headerName: 'Ship Carrier Fuel Surcharge', width: 150 },
    { field: 'Shipcarrierblindshipment', headerName: 'Ship Carrier Blind Shipment', width: 150 },
    { field: 'Shipcarrierdeliverycontact', headerName: 'Ship Carrier Delivery Contact', width: 200 },
    { field: 'Creditcardapprovalamount', headerName: 'Credit Card Approval Amount', width: 200 },
    { field: 'Creditcardauthorization', headerName: 'Credit Card Authorization', width: 200 },
    { field: 'Returndeadline', headerName: 'Return Deadline', width: 200 },
    { field: 'Returnreplacementid', headerName: 'Return Replacement ID', width: 200 },
    { field: 'Returnstatus', headerName: 'Return Status', width: 150 },
    { field: 'Returnreasoncodeid', headerName: 'Return Reason Code ID', width: 200 },
    { field: 'Creditcardauthorizationerror', headerName: 'Credit Card Authorization Error', width: 150 },
    { field: 'Shipcarrieraccountcode', headerName: 'Ship Carrier Account Code', width: 200 },
    { field: 'Returnreplacementcreated', headerName: 'Return Replacement Created', width: 150 },
    { field: 'Shipcarrierdlvtype', headerName: 'Ship Carrier Delivery Type', width: 150 },
    { field: 'Deliverydatecontroltype', headerName: 'Delivery Date Control Type', width: 150 },
    { field: 'Shipcarrierexpeditedshipment', headerName: 'Ship Carrier Expedited Shipment', width: 150 },
    { field: 'Shipcarrierresidential', headerName: 'Ship Carrier Residential', width: 150 },
    { field: 'Matchingagreement', headerName: 'Matching Agreement', width: 150 },
    { field: 'Systementrysource', headerName: 'System Entry Source', width: 150 },
    { field: 'Systementrychangepolicy', headerName: 'System Entry Change Policy', width: 150 },
    { field: 'Manualentrychangepolicy', headerName: 'Manual Entry Change Policy', width: 150 },
    { field: 'Deliverypostaladdress', headerName: 'Delivery Postal Address', width: 150 },
    { field: 'Shipcarrierpostaladdress', headerName: 'Ship Carrier Postal Address', width: 150 },
    { field: 'Shipcarriername', headerName: 'Ship Carrier Name', width: 200 },
    { field: 'Workersalestaker', headerName: 'Worker Sales Taker', width: 150 },
    { field: 'Sourcedocumentheader', headerName: 'Source Document Header', width: 150 },
    { field: 'Bankdocumenttype', headerName: 'Bank Document Type', width: 150 },
    { field: 'Salesunitid', headerName: 'Sales Unit ID', width: 200 },
    { field: 'Smmsalesamounttotal', headerName: 'SMM Sales Amount Total', width: 200 },
    { field: 'Smmcampaignid', headerName: 'SMM Campaign ID', width: 200 },
    { field: 'Customsexportorder_In', headerName: 'Customs Export Order', width: 150 },
    { field: 'Customsshippingbill_In', headerName: 'Customs Shipping Bill', width: 150 },
    { field: 'Tdsgroup_In', headerName: 'TDS Group', width: 150 },
    { field: 'Tcsgroup_In', headerName: 'TCS Group', width: 150 },
    { field: 'Natureofassessee_In', headerName: 'Nature of Assessee', width: 150 },
    { field: 'Constarget_Jp', headerName: 'Consolidation Target JP', width: 150 },
    { field: 'Intrastatfulfillmentdate_Hu', headerName: 'Intrastat Fulfillment Date', width: 200 },
    { field: 'Unitedvatinvoice_Lt', headerName: 'United VAT Invoice', width: 150 },
    { field: 'Intrastataddvalue_Lv', headerName: 'Intrastat Add Value', width: 150 },
    { field: 'Invoiceregister_Lt', headerName: 'Invoice Register', width: 150 },
    { field: 'Packingslipregister_Lt', headerName: 'Packing Slip Register', width: 150 },
    { field: 'Bankaccount_Lv', headerName: 'Bank Account', width: 200 },
    { field: 'Cashdiscbasedate', headerName: 'Cash Disc Base Date', width: 200 },
    { field: 'Cashdiscbasedays', headerName: 'Cash Disc Base Days', width: 150 },
    { field: 'Creditnotereasoncode', headerName: 'Credit Note Reason Code', width: 150 },
    { field: 'Curbankaccount_Lv', headerName: 'Cur Bank Account', width: 200 },
    { field: 'Custbankaccount_Lv', headerName: 'Cust Bank Account', width: 200 },
    { field: 'Daxintegrationid', headerName: 'DAX Integration ID', width: 200 },
    { field: 'Directdebitmandate', headerName: 'Direct Debit Mandate', width: 150 },
    { field: 'Fiscaldoctype_Pl', headerName: 'Fiscal Document Type', width: 150 },
    { field: 'Mcrorderstopped', headerName: 'MCR Order Stopped', width: 150 },
    { field: 'Pdsbatchattribautores', headerName: 'PDS Batch Attribute', width: 150 },
    { field: 'Pdscustrebategroupid', headerName: 'PDS Customer Rebate Group ID', width: 200 },
    { field: 'Pdsrebateprogramtmagroup', headerName: 'PDS Rebate Program TM Group', width: 200 },
    { field: 'Releasestatus', headerName: 'Release Status', width: 150 },
    { field: 'Taxperiodpaymentcode_Pl', headerName: 'Tax Period Payment Code', width: 200 },
    { field: 'Transportationdocument', headerName: 'Transportation Document', width: 150 },
    { field: 'Workersalesresponsible', headerName: 'Worker Sales Responsible', width: 150 },
    { field: 'Modifieddatetime', headerName: 'Modified Date Time', width: 200 },
    { field: 'Modifiedtransactionid', headerName: 'Modified Transaction ID', width: 150 },
    { field: 'Createdtransactionid', headerName: 'Created Transaction ID', width: 150 },
    { field: 'Dataareaid', headerName: 'Data Area ID', width: 200 },
    { field: 'Sab_Accincreditcontrol', headerName: 'Sab Acc in Credit Control', width: 150 },
    { field: 'Sab_Accreleasedfromcreditcontrol', headerName: 'Sab Acc Released from Credit Control', width: 150 },
    { field: 'Sab_Accid', headerName: 'Sab Acc ID', width: 200 },
    { field: 'Sab_Custclaimid', headerName: 'Sab Cust Claim ID', width: 200 },
    { field: 'Sab_Accrejected', headerName: 'Sab Acc Rejected', width: 150 },
    { field: 'Foxpricedate', headerName: 'Fox Price Date', width: 200 },
    { field: 'Foxrequirereprice', headerName: 'Fox Require Reprice', width: 150 },
    { field: 'Foxheaderid', headerName: 'Fox Header ID', width: 200 },
    { field: 'Foxdisablepricing', headerName: 'Fox Disable Pricing', width: 150 },
    { field: 'Foxquotecode', headerName: 'Fox Quote Code', width: 200 },
    { field: 'Mppassedholdcheckamount', headerName: 'MP Passed Hold Check Amount', width: 150 },
    { field: 'Mppassedholdcheckdates', headerName: 'MP Passed Hold Check Dates', width: 150 },
    { field: 'Mppassedholdcheckprice', headerName: 'MP Passed Hold Check Price', width: 150 },
    { field: 'Mppassedholdcheckvolume', headerName: 'MP Passed Hold Check Volume', width: 150 },
    { field: 'Mppassedholdcheckweight', headerName: 'MP Passed Hold Check Weight', width: 150 },
    { field: 'Mppassedholdchecknullsalesprice', headerName: 'MP Passed Hold Check Null Sales Price', width: 150 },
    { field: 'Sab_Accexcludesalesorder', headerName: 'Sab Acc Exclude Sales Order', width: 150 },
    { field: 'Mprevddfreightchg', headerName: 'MP Rev DD Freight Charge', width: 150 },
    { field: 'Mppassedholdcheckmincases', headerName: 'MP Passed Hold Check Min Cases', width: 150 },
    { field: 'Mppassedholdcheckpallet', headerName: 'MP Passed Hold Check Pallet', width: 150 },
    { field: 'Retailchanneltable', headerName: 'Retail Channel Table', width: 150 },
    { field: 'Merchantid_In', headerName: 'Merchant ID', width: 200 },
    { field: 'Provisionalassessment_In', headerName: 'Provisional Assessment', width: 150 },
    { field: 'Ecommerceoperator_In', headerName: 'E-commerce Operator', width: 200 },
    { field: 'Ecommerceoperatorgstin_In', headerName: 'E-commerce Operator GSTIN', width: 200 },
    { field: 'Ecommercesale_In', headerName: 'E-commerce Sale', width: 150 },
    { field: 'Mpbjloadid', headerName: 'MP BJ Load ID', width: 200 },
    { field: 'Mpexportedtotms', headerName: 'MP Exported to TMS', width: 150 },
    { field: 'Mpexportedtotmshistory', headerName: 'MP Exported to TMS History', width: 150 },
    { field: 'Mpsoreleased3pl', headerName: 'MP SO Released 3PL', width: 150 },
    { field: 'Mpsoreleased3pldate', headerName: 'MP SO Released 3PL Date', width: 200 },
    { field: 'Mptmsmanaged', headerName: 'MP TMS Managed', width: 150 },
    { field: 'Mptmsexporteddate', headerName: 'MP TMS Exported Date', width: 200 },
    { field: 'Mptmsexporteddatetzid', headerName: 'MP TMS Exported Date TZ ID', width: 200 },
    { field: 'Mptmsimporteddate', headerName: 'MP TMS Imported Date', width: 200 },
    { field: 'Mptmsimporteddatetzid', headerName: 'MP TMS Imported Date TZ ID', width: 200 },
    { field: 'Mptmsactive', headerName: 'MP TMS Active', width: 150 },
    { field: 'Mpi21boldate', headerName: 'MPI21 BOL Date', width: 200 },
    { field: 'Mpi21bolnumber', headerName: 'MPI21 BOL Number', width: 200 },
    { field: 'Mpi21bolreceivedate', headerName: 'MPI21 BOL Receive Date', width: 200 },
    { field: 'Mpi21broker', headerName: 'MPI21 Broker', width: 200 },
    { field: 'Mpi21exportedtoi21', headerName: 'MPI21 Exported to I21', width: 150 },
    { field: 'Mpi21i21order', headerName: 'MPI21 I21 Order', width: 150 },
    { field: 'Mpi21i21ordernum', headerName: 'MPI21 I21 Order Number', width: 200 },
    { field: 'Mpi21ordertype', headerName: 'MPI21 Order Type', width: 150 },
    { field: 'Mpi21shipvia', headerName: 'MPI21 Ship Via', width: 200 },
    { field: 'Mpi21trailerid', headerName: 'MPI21 Trailer ID', width: 200 },
    { field: 'Mpcustedideptnum', headerName: 'MPCUSTED ID Dept Number', width: 200 },
    { field: 'Mpcustediglnno', headerName: 'MPCUSTED IG LN No', width: 200 },
    { field: 'Mpcustedipotype', headerName: 'MPCUSTED IPO Type', width: 200 },
    { field: 'Mptransferid', headerName: 'MP Transfer ID', width: 200 },
    { field: 'Mpmabddate', headerName: 'MP MABD Date', width: 200 },
    { field: 'Mpreviewdate', headerName: 'MP Review Date', width: 200 },
    { field: 'TableId', headerName: 'Table ID', width: 150 }
];

const MpsalesOrderOutboundDataContractTable = () => {
    const { entities, setType, rowCount, setPaginationData, fetchEntitiesWithPagination, deleteEntity, resetEntity, pendingEntity, processEntity, triggerAdfPipeline } = useGenericPaginationContext();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');
    const [pipelineLoading, setPipelineLoading] = useState(false);

    //new display change
    const location = useLocation();
    // Manage loading state
    const [selectedItems, setSelectedItems] = useState([]);

    const [paginationModel, setPaginationModel] = useState({
        pageSize: 100,
        page: 0,
    });

    useEffect(() => {
        setPaginationData(paginationModel.page, paginationModel.pageSize);
        fetchEntitiesWithPagination(paginationModel.page, paginationModel.pageSize);
    }, [paginationModel]);

    const handlePaginationModelChange = (model) => {
        // Reset page to 0 if page size changes
        if (model.pageSize !== paginationModel.pageSize) {
            setPaginationModel({ page: 1, pageSize: model.pageSize });
        } else {
            setPaginationModel(model);
        }
    };

    const handleRowSelection = (itm) => {
        const selectedRows = entities.filter((row) => itm.includes(row.recid));
        const selectedSbRecids = selectedRows.map(row => row.sbRecid);    
        setSelectedItems(selectedSbRecids);
    };

    useEffect(() => {
        setType('MpsalesOrderOutboundDataContracts');
        setLoading(false); // Set loading to false once data is set
    }, [setType]);

    useEffect(() => {
        var pathName = location.pathname.replace(/^\//, ''); // Remove leading slash
      
        if (pathName && pathName !== tableUniqueName) {
            setTableName(pathName);
            fetchTableDisplayName(pathName).then(setTableDisplayName).catch(console.error);
        }
    }, [location.pathname, tableUniqueName]);

    const handleTriggerPipelineClick = async () => {
        setPipelineLoading(true); 
        try {
            await triggerAdfPipeline(tableUniqueName); 
        } catch (error) {
            console.error("Pipeline trigger failed:", error);
        } finally {
            setPipelineLoading(false);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                width: '100%', 
                padding: '20px',
            }}
        >
            <h2>{displayUniqueName}</h2>
            
            {/* <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-MpinterfaceEndProductions')}
            >
                Add MpinterfaceEndProductionss
            </Button> */}
            <Box>
                <Button //RESET
                    style={{ marginBottom: 10, marginRight: 10 }}
                    variant="outlined"
                    color="primary"
                    onClick={() => resetEntity(selectedItems)}
                >
                    Reset Error
                </Button>
                <Button //PENDING
                    style={{ marginBottom: 10, marginRight: 10 }}
                    variant="contained"
                    color="secondary"
                    onClick={() => pendingEntity(selectedItems)}
                >
                    Reprocess
                </Button>
                <Button //PROCESSED
                    style={{ marginBottom: 10 }}
                    variant="contained"
                    color="success"
                    onClick={() => processEntity(selectedItems)}
                >
                    Hold
                </Button>

                <Button 
                    style={{ marginBottom: 10, marginLeft: 10 }}
                    variant="outlined"
                    color="primary"
                    onClick={handleTriggerPipelineClick}
                    disabled={pipelineLoading} 
                    startIcon={pipelineLoading ? <CircularProgress size={20} /> : null} 
                >
                    {pipelineLoading ? 'Loading...' : 'Trigger Pipeline'}
                </Button>
            </Box>
            <Box
                sx={{
                    flexGrow: 1,  
                    minHeight: 0, 
                }}
            >
                <DataGrid
                    rows={entities}
                    columns={columns(navigate, deleteEntity, displayUniqueName)}
                    pageSize={5}
                    checkboxSelection
                    getRowId={(row) => row.recid}
                    onRowSelectionModelChange={handleRowSelection}
                    sx={{
                        '& .MuiDataGrid-root': {
                            minHeight: '100%',  
                        },
                        width: '100%', 
                    }}

                    pagination
                    paginationMode="server" // Enable server-side pagination
                    paginationModel={paginationModel}
                    onPaginationModelChange={handlePaginationModelChange}
                    rowCount={rowCount}
                    slots={{ toolbar: GridToolbar }}
                />
            </Box>
            <ToastContainer />

        </Box>
    );
};

export default MpsalesOrderOutboundDataContractTable;
