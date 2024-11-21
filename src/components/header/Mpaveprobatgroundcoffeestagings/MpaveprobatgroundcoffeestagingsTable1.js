import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { DataGrid , GridToolbar} from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';

import { useLocation } from 'react-router-dom';
import { fetchTableDisplayName } from '../../../services/apiservice';

const columns = (navigate, deleteEntity,displayUniqueName) => [
    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-Mpaveprobatgroundcoffeestagings/${params.row.recid}`,{ state: { text: displayUniqueName } } )}

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
    { field: 'interface', headerName: 'Interface', width: 150 },
    { field: 'tableid', headerName: 'Table ID', width: 150 },
    { field: 'batchnum', headerName: 'Batch Number', width: 150 },
    { field: 'batch_Id', headerName: 'Batch ID', width: 150 },
    { field: 'processed', headerName: 'Processed', width: 150 },
    { field: 'destination', headerName: 'Destination', width: 150 },
    { field: 'destinationinventlocationid', headerName: 'Destination Invent Location ID', width: 200 },
    { field: 'destinationinventsiteid', headerName: 'Destination Invent Site ID', width: 180 },
    { field: 'destinationwmslocationid', headerName: 'Destination WMS Location ID', width: 200 },
    { field: 'error', headerName: 'Error', width: 100 },
    { field: 'exportedbatchnum', headerName: 'Exported Batch Number', width: 200 },
    { field: 'exportedtoaveva', headerName: 'Exported to Aveva', width: 180 },
    { field: 'inventjournalid', headerName: 'Invent Journal ID', width: 180 },
    { field: 'inventlocationid', headerName: 'Invent Location ID', width: 150 },
    { field: 'inventsiteid', headerName: 'Invent Site ID', width: 150 },
    { field: 'itemid', headerName: 'Item ID', width: 150 },
    { field: 'linenum', headerName: 'Line Number', width: 120 },
    { field: 'messageshort', headerName: 'Message Short', width: 180 },
    { field: 'posted', headerName: 'Posted', width: 100 },
    { field: 'posteddatetime', headerName: 'Posted Datetime', width: 180 },
    { field: 'posteddatetimetzid', headerName: 'Posted Datetime TZ ID', width: 180 },
    { field: 'probatequipmentid', headerName: 'Probat Equipment ID', width: 180 },
    { field: 'probatexportid', headerName: 'Probat Export ID', width: 180 },
    { field: 'probatorder', headerName: 'Probat Order', width: 180 },
    { field: 'qty', headerName: 'Quantity', width: 120 },
    { field: 'receiveddatetime', headerName: 'Received Datetime', width: 180 },
    { field: 'receiveddatetimetzid', headerName: 'Received Datetime TZ ID', width: 200 },
    { field: 'sourcebatchid', headerName: 'Source Batch ID', width: 180 },
    { field: 'wmslocationid', headerName: 'WMS Location ID', width: 180 },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    
];

const MpaveprobatgroundcoffeestagingsTable = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();


    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');


    const location = useLocation();

    useEffect(() => {
        setType('Mpaveprobatgroundcoffeestagings');
    }, [setType]);

    useEffect(() => {
        var pathName = location.pathname.replace(/^\//, ''); // Remove leading slash
       
        if (pathName && pathName !== tableUniqueName) {
            setTableName(pathName);
            fetchTableDisplayName(pathName).then(setTableDisplayName).catch(console.error);
        }
    }, [location.pathname, tableUniqueName]);


    return (
        <Container>
            <h2>Mpaveprobatgroundcoffeestagings Table</h2>
            <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-Mpaveprobatgroundcoffeestagings',{ state: { text: displayUniqueName } })}
            >
                Add Mpaveprobatgroundcoffeestagings
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

export default MpaveprobatgroundcoffeestagingsTable;
