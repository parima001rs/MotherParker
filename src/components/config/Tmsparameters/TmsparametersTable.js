import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import { fetchTableDisplayName } from '../../../services/apiservice'; // Ensure this service is available

const columns = (navigate, deleteEntity, displayUniqueName) => [
    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-Tmsparameters/${params.row.recid}`, { state: { text: displayUniqueName } })}
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
    { field: 'recid', headerName: 'Recid', width: 150 },
    { field: 'createddatetime', headerName: 'Created Datetime', width: 150 },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    { field: 'parameterskey', headerName: 'Parameters Key', width: 150 },
    { field: 'drivercheckoutinterval', headerName: 'Driver Checkout Interval', width: 200 },
    { field: 'vendjournalname', headerName: 'Vend Journal Name', width: 150 },
    { field: 'vendoffacct', headerName: 'Vend Off Acct', width: 150 },
    { field: 'porthubtype', headerName: 'Port Hub Type', width: 150 },
    { field: 'writeinvoicejournal', headerName: 'Write Invoice Journal', width: 180 },
    { field: 'loadnotetype', headerName: 'Load Note Type', width: 150 },
    { field: 'defaultnotetype', headerName: 'Default Note Type', width: 150 },
    { field: 'defaultnotename', headerName: 'Default Note Name', width: 150 },
    { field: 'workflowuser', headerName: 'Workflow User', width: 150 },
    { field: 'enableinvoiceworkflow', headerName: 'Enable Invoice Workflow', width: 200 },
    { field: 'postjournal', headerName: 'Post Journal', width: 150 },
    { field: 'matchinterval', headerName: 'Match Interval', width: 150 },
    { field: 'matchandpay', headerName: 'Match and Pay', width: 150 },
    { field: 'planbyshipment', headerName: 'Plan by Shipment', width: 150 },
    { field: 'autocreateloadso', headerName: 'Auto Create Load SO', width: 180 },
    { field: 'autocreateloadpo', headerName: 'Auto Create Load PO', width: 180 },
    { field: 'autocreateloadto', headerName: 'Auto Create Load TO', width: 180 },
    { field: 'fbgljourlinetranstxt', headerName: 'FBGL Jourline Transtxt', width: 200 },
    { field: 'overrideshipconfirmdate', headerName: 'Override Ship Confirm Date', width: 220 },
    { field: 'intransitplanning', headerName: 'Intransit Planning', width: 170 },
    { field: 'bolcarrierrolerecid', headerName: 'BOL Carrier Role Recid', width: 180 },
    { field: 'defaultduration', headerName: 'Default Duration', width: 150 },
    { field: 'directdeliverycustomercharge', headerName: 'Direct Delivery Customer Charge', width: 250 },
    { field: 'enablefreightreconcile', headerName: 'Enable Freight Reconcile', width: 200 },
    { field: 'createmasterbol', headerName: 'Create Master BOL', width: 170 },
    { field: 'separateshipconfirmationformixedloads', headerName: 'Separate Ship Confirmation for Mixed Loads', width: 330 },
    { field: 'mpintegrationfilenamenumber', headerName: 'MP Integration Filename Number', width: 250 },
    { field: 'mpintegrationfilepath', headerName: 'MP Integration File Path', width: 200 },
    { field: 'mpintegrationfilepathloadplan', headerName: 'MP Integration File Path Load Plan', width: 270 },
    { field: 'mpintegrationfilepathloadplanprocessed', headerName: 'MP Integration File Path Load Plan Processed', width: 320 },
    { field: 'mpintegrationfilepathwebsettlement', headerName: 'MP Integration File Path Web Settlement', width: 320 },
    { field: 'mpintegrationfilepathwebsettlementpro', headerName: 'MP Integration File Path Web Settlement Processed', width: 340 },
    { field: 'mpchargecodeimportfilepath', headerName: 'MP Charge Code Import File Path', width: 270 },
    { field: 'mpintegrationfilepathpayment', headerName: 'MP Integration File Path Payment', width: 240 },
    { field: 'mptmsimportvalidate', headerName: 'MP TMS Import Validate', width: 200 },
    { field: 'mpcoleediinbound', headerName: 'MP Cole EDI Inbound', width: 200 },
    { field: 'mpcoleediinboundprocessed', headerName: 'MP Cole EDI Inbound Processed', width: 270 },
    { field: 'mpcoleedioutbound', headerName: 'MP Cole EDI Outbound', width: 220 },
    { field: 'mpcoleedioutboundprocessed', headerName: 'MP Cole EDI Outbound Processed', width: 270 },
    { field: 'mpintegrationfilepathtransferrec', headerName: 'MP Integration File Path Transfer Rec', width: 280 },
    { field: 'mpintegrationfilepathtransferrecproc', headerName: 'MP Integration File Path Transfer Rec Proc', width: 320 },
    { field: 'mpintegrationfilepathpackingslip', headerName: 'MP Integration File Path Packing Slip', width: 270 },
    { field: 'mpintegrationfilepathpackingslipproc', headerName: 'MP Integration File Path Packing Slip Proc', width: 320 },
    { field: 'mpenablebjchange', headerName: 'MP Enable BJ Change', width: 200 },
];

const TmsparametersTable = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    const location = useLocation();

    const [displayUniqueName, setTableDisplayName] = useState('');
    const [tableUniqueName, setTableName] = useState('');

    useEffect(() => {
        setType('Tmsparameters');
    }, [setType]);

    // Fetch display name based on the current route
    useEffect(() => {
        const pathName = location.pathname.replace(/^\//, ''); // Remove leading slash
        if (pathName && pathName !== tableUniqueName) {
            setTableName(pathName);
            fetchTableDisplayName(pathName).then(setTableDisplayName).catch(console.error);
        }
    }, [location.pathname, tableUniqueName]);

    return (
        <Container>
            <h2>{displayUniqueName}</h2>
            <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-Tmsparameters', { state: { text: displayUniqueName } })}
            >
                Add Tmsparameters
            </Button>
            <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={entities}
                    columns={columns(navigate, deleteEntity, displayUniqueName)}
                    pageSize={10}
                    checkboxSelection
                    getRowId={(row) => row.recid}
                />
            </div>
        </Container>
    );
};

export default TmsparametersTable;
