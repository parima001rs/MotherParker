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
                    onClick={() => navigate(`/update-MPProbatAvevaGroundLocationss/${params.row.recid}`, { state: { text: displayUniqueName } })}>
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
    { field: 'destination', headerName: 'Destination', width: 150 },
    { field: 'destinationinventlocationid', headerName: 'Destination Invent Location ID', width: 200 },
    { field: 'destinationinventsiteid', headerName: 'Destination Invent Site ID', width: 200 },
    { field: 'destinationwmslocationid', headerName: 'Destination WMS Location ID', width: 200 },
    { field: 'inventlocationid', headerName: 'Invent Location ID', width: 200 },
    { field: 'inventsiteid', headerName: 'Invent Site ID', width: 150 },
    { field: 'wmslocationid', headerName: 'WMS Location ID', width: 150 },
];

const MPProbatAvevaGroundLocations = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    
    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');

    const location = useLocation(); 

    useEffect(() => {
        setType('MPProbatAvevaGroundLocationss');
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
                onClick={() => navigate('/add-MPProbatAvevaGroundLocationss', { state: { text: displayUniqueName } })}>
                Add MPProbatAvevaGroundLocationss
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={entities} columns={columns(navigate, deleteEntity, displayUniqueName)} pageSize={5} checkboxSelection getRowId={(row) => row.recid} /> 
            </div>
        </Container>
    );
};

export default MPProbatAvevaGroundLocations;
