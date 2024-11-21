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
        width: 100,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-Mpi21vendorreference/${params.row.recid}`, { state: { text: displayUniqueName } })}
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
    { field: 'companyid', headerName: 'Companyid', width: 150 },
    { field: 'i21vendorref', headerName: 'I21vendorref', width: 200 },
    { field: 'paymmode', headerName: 'Paymmode', width: 90 },
    { field: 'vendaccount', headerName: 'Vendaccount', width: 150 },
    { field: 'vendname', headerName: 'Vendname', width: 150 },
    { field: 'vendorpaymexportexclude', headerName: 'Vendorpaymexportexclude', width: 200 },
];

const Mpi21vendorreferenceTable = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    
    const [displayUniqueName, setTableDisplayName] = useState('');
    const [tableUniqueName, setTableName] = useState('');
    const location = useLocation();

    useEffect(() => {
        setType('Mpi21vendorreferences');
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
                onClick={() => navigate('/add-Mpi21vendorreference', { state: { text: displayUniqueName } })}
            >
                Add Mpi21vendorreference
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

export default Mpi21vendorreferenceTable;
