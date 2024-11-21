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
                    onClick={() => navigate(`/update-MPHaviSetupTable/${params.row.recid}`, { state: { text: displayUniqueName } })}
                >
                    <Edit />
                </IconButton>
                <IconButton
                    color="secondary"
                    onClick={() => {
                        if (window.confirm("Are you sure you want to delete this item?")) {
                            deleteEntity(params.row.recid);
                        }
                    }}
                >
                    <Delete />
                </IconButton>
            </>
        ),
    },
    { field: 'recid', headerName: 'Recid', width: 150 },
    { field: 'createdDatetime', headerName: 'Created Datetime', width: 150 },
    { field: 'dataAreaId', headerName: 'Data Area ID', width: 150 },
    { field: 'customer', headerName: 'Customer', width: 150 },
    { field: 'itmBrand1', headerName: 'Item Brand 1', width: 150 },
    { field: 'itmBrand2', headerName: 'Item Brand 2', width: 150 },
    { field: 'slsDivision1', headerName: 'Sales Division 1', width: 150 },
    { field: 'slsDivision2', headerName: 'Sales Division 2', width: 150 },
    { field: 'itemStatus', headerName: 'Item Status', width: 150 },
    // Other fields can be added as needed
];

const MPHaviSetupTable = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    
    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');

    const location = useLocation(); 

    useEffect(() => {
        setType('MPHaviSetupTables');
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
                onClick={() => navigate('/add-MPHaviSetupTable', { state: { text: displayUniqueName } })}>
                Add MPHaviSetupTables
            </Button>
            <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={entities} columns={columns(navigate, deleteEntity, displayUniqueName)} pageSize={5} checkboxSelection getRowId={(row) => row.recid} /> 
                 </div>
        </Container>
    );
};

export default MPHaviSetupTable;
