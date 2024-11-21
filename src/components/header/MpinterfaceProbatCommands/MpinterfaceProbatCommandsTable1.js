import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
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
                    onClick={() => navigate(`/update-MpinterfaceProbatCommand/${params.row.recid}`)}
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
    { field: 'interface', headerName: 'Interface', width: 200 },
    { field: 'tableid', headerName: 'Table ID', width: 100 },
    { field: 'batchnum', headerName: 'Batch Number', width: 250 },
    { field: 'processed', headerName: 'Processed', width: 120 },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    { field: 'facility', headerName: 'Facility', width: 150 },
    { field: 'mpprobatCommandNr', headerName: 'MP Probat Command Nr', width: 200 },
    { field: 'mpitemprobatseqno', headerName: 'MP Item Probat Seq No', width: 200 },
    { field: 'mpprobatInfoOne', headerName: 'MP Probat Info One', width: 200 },
    { field: 'mpprobatParaOne', headerName: 'MP Probat Para One', width: 200 },
    { field: 'mpprobatParaOneName', headerName: 'MP Probat Para One Name', width: 200 },
    { field: 'mpprobatParaTwo', headerName: 'MP Probat Para Two', width: 200 },
    { field: 'mpprobatParaTwoName', headerName: 'MP Probat Para Two Name', width: 200 },
    { field: 'mpprobatParaThree', headerName: 'MP Probat Para Three', width: 200 },
    { field: 'mpprobatParaThreeName', headerName: 'MP Probat Para Three Name', width: 200 },
    { field: 'mpprobatParaFour', headerName: 'MP Probat Para Four', width: 200 },
    { field: 'mpprobatParaFourName', headerName: 'MP Probat Para Four Name', width: 200 },
    { field: 'mpprobatParaFive', headerName: 'MP Probat Para Five', width: 200 },
    { field: 'mpprobatParaSwitch', headerName: 'MP Probat Para Switch', width: 200 },
    { field: 'mpprobatTransferred', headerName: 'MP Probat Transferred', width: 200 },
    { field: 'mpprobatTransferredTimeStamp', headerName: 'MP Probat Transferred TimeStamp', width: 250 },
    
];

const MpinterfaceProbatCommandTable = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();

    useEffect(() => {
        setType('MpinterfaceProbatCommands');
    }, [setType]);

    return (
        <Container>
            <h2>MpinterfaceProbatCommand Table</h2>
            <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-MpinterfaceProbatCommand')}
            >
                Add MpinterfaceProbatCommand
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={entities} columns={columns(navigate, deleteEntity, displayUniqueName)} pageSize={5} checkboxSelection getRowId={(row) => row.recid} 
                    slots={{ toolbar: GridToolbar }}
                />
            </div>
        </Container>
    );
};

export default MpinterfaceProbatCommandTable;
