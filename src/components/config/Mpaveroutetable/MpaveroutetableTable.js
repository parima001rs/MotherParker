import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
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
                    onClick={() => navigate(`/update-mpaveroutetable/${params.row.recid}`, { state: { text: displayUniqueName } })}
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
    { field: 'recid', headerName: 'Recid', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'routeid', headerName: 'Route ID', width: 150 },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    { field: 'grossweight', headerName: 'Gross Weight', width: 150 },
    { field: 'createddatetime', headerName: 'Created DateTime', width: 150 },
    
];

const MpaveroutetableTable = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    const location = useLocation();
    
    const [displayUniqueName, setTableDisplayName] = useState('');
    const [tableUniqueName, setTableName] = useState('');

    useEffect(() => {
        setType('Mpaveroutetable');
    }, [setType]);

    useEffect(() => {
        const pathName = location.pathname.replace(/^\//, '');
        
        if (pathName && pathName !== tableUniqueName) {
            setTableName(pathName);
            fetchTableDisplayName(pathName)
                .then(setTableDisplayName)
                .catch(console.error);
        }
    }, [location.pathname, tableUniqueName]);

    return (
        <Container>
            <h2>{displayUniqueName }</h2>
            <Button
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-mpaveroutetable', { state: { text: displayUniqueName } })}
                style={{ marginBottom: 10 }}
            >
                Add Mpaveroutetable
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

export default MpaveroutetableTable;
