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
                    onClick={() => navigate(`/update-MpinforPayloadParameter/${params.row.recid}`, { state: { text: displayUniqueName } })}>
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
    { field: 'createddatetime', headerName: 'Created Datetime', width: 150 },
    { field: 'dataareaid', headerName: 'Dataareaid', width: 150 },
    { field: 'fromLogicalId', headerName: 'From Logical ID', width: 150 },
    { field: 'toLogicalId', headerName: 'To Logical ID', width: 150 },
    { field: 'documentName', headerName: 'Document Name', width: 150 },
    { field: 'messageId', headerName: 'Message ID', width: 150 },
    { field: 'tenantId', headerName: 'Tenant ID', width: 150 },
    { field: 'instances', headerName: 'Instances', width: 150 },
    { field: 'encoding', headerName: 'Encoding', width: 150 },
    { field: 'characterSet', headerName: 'Character Set', width: 150 },
    { field: 'accountingEntity', headerName: 'Accounting Entity', width: 150 },
    { field: 'location', headerName: 'Location', width: 150 },
    { field: 'documentId', headerName: 'Document ID', width: 150 },
    { field: 'source', headerName: 'Source', width: 150 },
];

const MpinforPayloadParameter = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    
    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');

    const location = useLocation(); 

    useEffect(() => {
        setType('MpinforPayloadParameters');
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
                onClick={() => navigate('/add-MpinforPayloadParameter', { state: { text: displayUniqueName } })}>
                Add MpinforPayloadParameters
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

export default MpinforPayloadParameter;
