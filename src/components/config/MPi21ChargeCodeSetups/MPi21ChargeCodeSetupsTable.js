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
                    onClick={() => navigate(`/update-MPi21ChargeCodeSetups/${params.row.recId}`, { state: { text: displayUniqueName } })}>
                    <Edit />
                </IconButton>
                <IconButton
                    color="secondary"
                    onClick={() => deleteEntity(params.row.recId)}>
                    <Delete />
                </IconButton>
            </>
        ),
    },
    { field: 'recId', headerName: 'recId', width: 150 },
    { field: 'createddatetime', headerName: 'Createddatetime', width: 150 },
    { field: 'type', headerName: 'Type', width: 150 },
    { field: 'chargeCode', headerName: 'ChargeCode', width: 150 },
    { field: 'description', headerName: 'Description', width: 150 },
    { field: 'glAccount', headerName: 'GlAccount', width: 150 },
    { field: 'dataAreaId', headerName: 'DataAreaId', width: 150 },
];

const MPi21ChargeCodeSetup = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    
    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');

    const location = useLocation(); 

    useEffect(() => {
        setType('MPi21ChargeCodeSetups');
    }, [setType]);

    useEffect(() => {
        const pathName = location.pathname.replace(/^\//, '');
       
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
                onClick={() => navigate('/add-MPi21ChargeCodeSetups', { state: { text: displayUniqueName } })}>
                Add MPi21ChargeCodeSetups
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={entities} columns={columns(navigate, deleteEntity, displayUniqueName)} pageSize={5} checkboxSelection getRowId={(row) => row.recId} /> 
            </div>
        </Container>
    );
};

export default MPi21ChargeCodeSetup;
