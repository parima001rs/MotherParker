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
                    onClick={() => navigate(`/update-AveWhLocationss/${params.row.recid}`, { state: { text: displayUniqueName } })}>
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
    { field: 'inventLocationId', headerName: 'Invent Location ID', width: 150 },
    { field: 'wmslocationId', headerName: 'WMS Location ID', width: 150 },
    { field: 'dataAreaId', headerName: 'Data Area ID', width: 150 },
    { field: 'siteId', headerName: 'Site ID', width: 150 },
];

const AveWhLocations = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    
    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');

    const location = useLocation(); 

    useEffect(() => {
        setType('AveWhLocationss');
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
                onClick={() => navigate('/add-AveWhLocationss', { state: { text: displayUniqueName } })}>
                Add AveWhLocationss
            </Button>
            <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={entities} columns={columns(navigate, deleteEntity, displayUniqueName)} pageSize={5} checkboxSelection getRowId={(row) => row.recid} /> 
                 </div>
        </Container>
    );
};

export default AveWhLocations;
