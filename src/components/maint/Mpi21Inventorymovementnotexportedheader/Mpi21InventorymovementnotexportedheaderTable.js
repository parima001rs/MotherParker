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
                    onClick={() => navigate(`/update-Mpi21Inventorymovementnotexportedheader/${params.row.recid}`,{ state: { text: displayUniqueName } })}
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
    { field: 'createddatetime', headerName: 'Created DateTime', width: 150 },
    { field: 'actionid', headerName: 'Action ID', width: 120 },
    { field: 'batchnum', headerName: 'Batch Number', width: 180 },
    { field: 'companylocation', headerName: 'Company Location', width: 150 },
    { field: 'itemno', headerName: 'Item No', width: 120 },
    { field: 'journalid', headerName: 'Journal ID', width: 120 },
    { field: 'lotno', headerName: 'Lot No', width: 120 },
    { field: 'newstoragelocation', headerName: 'New Storage Location', width: 150 },
    { field: 'newstorageunit', headerName: 'New Storage Unit', width: 150 },
    { field: 'notes', headerName: 'Notes', width: 150 },
    { field: 'quantity', headerName: 'Quantity', width: 120 },
    { field: 'quantityuom', headerName: 'Quantity UOM', width: 120 },
    { field: 'reasoncode', headerName: 'Reason Code', width: 120 },
    { field: 'sourcestoragelocation', headerName: 'Source Storage Location', width: 150 },
    { field: 'sourcestorageunit', headerName: 'Source Storage Unit', width: 150 },
    { field: 'tolotno', headerName: 'To Lot No', width: 120 },
    { field: 'transactiontypeid', headerName: 'Transaction Type ID', width: 150 },
    { field: 'createdby', headerName: 'Created By', width: 150 },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    { field: 'journaltransrecid', headerName: 'Journal Trans Recid', width: 150 },
];

const Mpi21Inventorymovementnotexportedheader = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    const location = useLocation();
    const [displayUniqueName, setDisplayUniqueName] = useState('');

    useEffect(() => {
        setType('Mpi21Inventorymovementnotexportedheader');
    }, [setType]);

    useEffect(() => {
        const pathName = location.pathname.split('/').pop();
        fetchTableDisplayName(pathName)
            .then(setDisplayUniqueName)
            .catch(console.error);
    }, [location.pathname]);

    return (
        <Container>
            <h2>{displayUniqueName}</h2>
            <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-Mpi21Inventorymovementnotexportedheader',{ state: { text: displayUniqueName } })}
            >
                Add Mpi21Inventorymovementnotexportedheader
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

export default Mpi21Inventorymovementnotexportedheader;
