import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import { useLocation } from 'react-router-dom'; 

import { fetchTableDisplayName } from '../../../services/apiservice';

const columns = (navigate, deleteEntity, displayUniqueName) => [
    {
        field: 'actions',
        headerName: 'Actions',
        width: 200,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-MpaveParameters/${params.row.recid}`, { state: { text: displayUniqueName } })}>
                    <Edit />
                </IconButton>
                <IconButton
                    color="secondary"
                    onClick={() => deleteEntity(params.row.recid)}>
                    <Delete />
                </IconButton>
            </>
        ),
    },
    { field: 'recid', headerName: 'Recid', width: 150 },
    { field: 'createdatetime', headerName: 'Created Datetime', width: 150 },
    { field: 'inventSiteId', headerName: 'Inventory Site ID', width: 150 },
    { field: 'journalNameIdPick', headerName: 'Pick Journal Name', width: 150 },
    { field: 'journalNameIdRaf', headerName: 'RAF Journal Name', width: 150 },
    { field: 'journalNameIdReconciliation', headerName: 'Reconciliation Journal', width: 200 },
    { field: 'journalNameIdRoute', headerName: 'Route Journal', width: 150 },
    { field: 'journalNameIdTransferGc', headerName: 'Transfer GC Journal', width: 200 },
    { field: 'journalNameIdTransferLm', headerName: 'Transfer LM Journal', width: 200 },
    { field: 'aveActivate', headerName: 'Activate', width: 150 },
    { field: 'aveBatchNumSeqCode', headerName: 'Batch Number Sequence Code', width: 250 },
    { field: 'aveFd60ReasonCodeForRecon', headerName: 'Reason Code for Recon', width: 200 },
    { field: 'aveFilePath', headerName: 'File Path', width: 250 },
    { field: 'aveHeaderKey', headerName: 'Header Key', width: 150 },
    { field: 'aveHeaderValue', headerName: 'Header Value', width: 200 },
    { field: 'aveShowDebugMsg', headerName: 'Show Debug Message', width: 200 },
    { field: 'aveUrl', headerName: 'API URL', width: 250 },
    { field: 'probatDefaultSourceWarehouse', headerName: 'Default Source Warehouse', width: 250 },
    { field: 'processEndPointInbound', headerName: 'Inbound End Point', width: 200 },
    { field: 'processStagingInbound', headerName: 'Staging Inbound', width: 200 },
];

const MpaveParameter = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    
    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');

    const location = useLocation(); 

    useEffect(() => {
        setType('MpaveParameters');
    }, [setType]);

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
                onClick={() => navigate('/add-MpaveParameters', { state: { text: displayUniqueName } })}>
                Add MpaveParameters
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={entities}
                    columns={columns(navigate, deleteEntity, displayUniqueName)}
                    pageSize={5}
                    checkboxSelection
                    getRowId={(row) => row.recid}
                /> 
            </div>
        </Container>
    );
};

export default MpaveParameter;
