import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';

// Define columns with the updated keys
const columns = (navigate, deleteEntity) => [
    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-Mpi21inventorymovementexporteds/${params.row.recid}`)}
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
    { field: 'createddatetime', headerName: 'Created Datetime', width: 150 },
    { field: 'exported', headerName: 'Exported', width: 120 },
    { field: 'journaltransrecid', headerName: 'Journal Trans Recid', width: 180 },
    { field: 'journalnumber', headerName: 'Journal Number', width: 180 },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    
];

const Mpi21inventorymovementexportedsTable = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();

    useEffect(() => {
        setType('Mpi21inventorymovementexporteds');
    }, [setType]);

    return (
        <Container>
            <h2>Mpi21inventorymovementexporteds Table</h2>
            <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-Mpi21inventorymovementexporteds')}
            >
                Add Mpi21inventorymovementexporteds
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={entities}
                    columns={columns(navigate, deleteEntity)}
                    pageSize={5}
                    checkboxSelection
                    getRowId={(row) => row.recid}
                    slots={{ toolbar: GridToolbar }}
                />
            </div>
        </Container>
    );
};

export default Mpi21inventorymovementexportedsTable;
