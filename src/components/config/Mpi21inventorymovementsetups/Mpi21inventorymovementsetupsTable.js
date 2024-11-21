import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';

const columns = (navigate, deleteEntity) => [
    
    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-Mpi21inventorymovementsetup/${params.row.recid}`)}
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
    { field: 'activationdate', headerName: 'activationdate', width: 150 },
    { field: 'activationdatetzid', headerName: 'activationdatetzid', width: 200 },
    { field: 'description', headerName: 'description', width: 90 },
    { field: 'inventmovementjournal', headerName: 'inventmovementjournal', width: 150 },
    { field: 'reasoncode', headerName: 'reasoncode', width: 150 },
    { field: 'dataareaid', headerName: 'dataareaid', width: 200 },
    
];

const Mpi21inventorymovementsetupTable = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();

    useEffect(() => {
        setType('Mpi21inventorymovementsetups');
    }, [setType]);

    return (
        <Container>
            <h2>Mpi21inventorymovementsetup Table</h2>
            <Button style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-Mpi21inventorymovementsetup')}
            >
                Add Mpi21inventorymovementsetup
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={entities} columns={columns(navigate, deleteEntity)} pageSize={5} checkboxSelection getRowId={(row) => row.recid} />
            </div>
        </Container>
    );
};

export default Mpi21inventorymovementsetupTable;
