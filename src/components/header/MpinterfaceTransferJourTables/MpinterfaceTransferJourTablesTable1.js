import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
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
                    onClick={() => navigate(`/update-MpinterfaceTransferJourTable/${params.row.recid}`)}
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
    { field: 'createddatetime', headerName: 'Created Date Time', width: 250 },
    { field: 'interface', headerName: 'Interface', width: 200 },
    { field: 'batchnum', headerName: 'Batch Number', width: 250 },
    { field: 'processed', headerName: 'Processed', width: 120 },
    { field: 'mptransjourbatchid', headerName: 'MP Trans Jour Batch ID', width: 250 },
    { field: 'mptransjourdestination', headerName: 'MP Trans Jour Destination', width: 250 },
    { field: 'mptransjouritem', headerName: 'MP Trans Jour Item', width: 200 },
    { field: 'mptransjourmasterid', headerName: 'MP Trans Jour Master ID', width: 250 },
    { field: 'mptransjourrecordingdate', headerName: 'MP Trans Jour Recording Date', width: 250 },
    { field: 'mptransjoursequenceno', headerName: 'MP Trans Jour Sequence No', width: 250 },
    { field: 'mptransjoursource', headerName: 'MP Trans Jour Source', width: 200 },
    { field: 'mptransjourtransferred', headerName: 'MP Trans Jour Transferred', width: 250 },
    { field: 'mptransjourtranstime', headerName: 'MP Trans Jour Trans Time', width: 250 },
    { field: 'mptransjourweight', headerName: 'MP Trans Jour Weight', width: 200 },
    { field: 'mptransjourzoneid', headerName: 'MP Trans Jour Zone ID', width: 200 },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    { field: 'tableId', headerName: 'Table ID', width: 100 },
    { field: 'mptransJourFacility', headerName: 'MP Trans Jour Facility', width: 200 },

    
];

const MpinterfaceTransferJourTableTable = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();

    useEffect(() => {
        setType('MpinterfaceTransferJourTables');
    }, [setType]);

    return (
        <Container>
            <h2>MpinterfaceTransferJourTable Table</h2>
            <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-MpinterfaceTransferJourTable')}
            >
                Add MpinterfaceTransferJourTable
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={entities} columns={columns(navigate, deleteEntity)} pageSize={5} checkboxSelection getRowId={(row) => row.recid} 
                slots={{ toolbar: GridToolbar }}
                    />
            </div>
        </Container>
    );
};

export default MpinterfaceTransferJourTableTable;
