import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import { fetchTableDisplayName } from '../../../services/apiservice'; // Assuming you have this service

const columns = (navigate, deleteEntity, displayUniqueName) => [
    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-mpinterfacelegacyids/${params.row.recid}`, { state: { text: displayUniqueName } })}
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
    { field: 'createddatetime', headerName: 'Createddatetime', width: 150 },
    { field: 'id', headerName: 'Id', width: 150 },
    { field: 'value', headerName: 'Value', width: 150 },
];

const Mpinterfacelegacyids = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    const location = useLocation();

    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');

    useEffect(() => {
        setType('Mpinterfacelegacyids');
    }, [setType]);

    // Handle fetching display name based on the current route
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
                onClick={() => navigate('/add-Mpinterfacelegacyids', { state: { text: displayUniqueName } })}
            >
                Add Mpinterfacelegacyidss
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

export default Mpinterfacelegacyids;
