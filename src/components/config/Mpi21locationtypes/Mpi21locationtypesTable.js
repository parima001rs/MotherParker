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
                    onClick={() => navigate(`/update-Mpi21locationtype/${params.row.recid}`)}
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
    { field: 'inventlocationid', headerName: 'inventlocationid', width: 150 },
    { field: 'inventsiteid', headerName: 'inventsiteid', width: 150 },
    { field: 'locationtype', headerName: 'locationtype', width: 150 },
    { field: 'whsloc', headerName: 'whsloc', width: 150 },
    { field: 'dataareaid', headerName: 'dataareaid', width: 150 },
    
];

const Mpi21locationtypeTable = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();

    useEffect(() => {
        setType('Mpi21locationtypes');
    }, [setType]);

    return (
        <Container>
            <h2>Mpi21locationtype Table</h2>
            <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-Mpi21locationtype')}
            >
                Add Mpi21locationtype
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={entities} columns={columns(navigate, deleteEntity)} pageSize={5} checkboxSelection getRowId={(row) => row.recid} />
            </div>
        </Container>
    );
};

export default Mpi21locationtypeTable;
