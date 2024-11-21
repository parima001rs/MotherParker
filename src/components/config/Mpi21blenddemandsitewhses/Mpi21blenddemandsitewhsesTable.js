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
                    onClick={() => navigate(`/update-Mpi21blenddemandsitewhse/${params.row.recid}`)}
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
    { field: 'dataareaid', headerName: 'Dataareaid', width: 150 },
    { field: 'blenddemandsetup', headerName: 'Blenddemandsetup', width: 150 },
    { field: 'inventlocationid', headerName: 'Inventlocationid', width: 150 },
    { field: 'inventsiteid', headerName: 'Inventsiteid', width: 150 },
    
];

const Mpi21blenddemandsitewhseTable = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();

    useEffect(() => {
        setType('Mpi21blenddemandsitewhses');
    }, [setType]);

    return (
        <Container>
            <h2>Mpi21blenddemandsitewhse Table</h2>
            <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-Mpi21blenddemandsitewhse')}
            >
                Add Mpi21blenddemandsitewhse
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={entities} columns={columns(navigate, deleteEntity)} pageSize={5} checkboxSelection getRowId={(row) => row.recid} />
            </div>
        </Container>
    );
};

export default Mpi21blenddemandsitewhseTable;
