import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';

import { useLocation } from 'react-router-dom';
import { fetchTableDisplayName } from '../../../services/apiservice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';

const columns = (navigate, deleteEntity, displayUniqueName) => [
    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-Mpaveprobatgroundcoffeestagings/${params.row.recid}`,{ state: { text: displayUniqueName } })}
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
    { field: 'sbRecid', headerName: 'SB Recid', width: 150 },
    { field: 'sbBatchnum', headerName: 'SB Batchnum', width: 150 },
    { field: 'sbCreateddatetime', headerName: 'SB Createddatetime', width: 150 },
    { field: 'sbProcessingstatus', headerName: 'SB Processingstatus', width: 100 },
    { field: 'sbError', headerName: 'SB Error', width: 90, renderCell: (params) => (
        params.value === true ? (
            <Button
                color="primary"
                onClick={() => navigate(`/Mpaveerrorlog/${params.row.sbRecid}`)}
                style={{ textTransform: 'none', padding: 0, minWidth: 0}}
            >
                True
            </Button>
        ) : (
            "False"
        )
        ), 
    },
    { field: 'sbInterface', headerName: 'SB Interface', width: 150 },
    { field: 'sbRefrecid', headerName: 'SB Refrecid', width: 150 },
    { field: 'sbReftableid', headerName: 'SB Reftableid', width: 150 },
    { field: 'sbDataareaid', headerName: 'SB Dataareaid', width: 150 },
    { field: 'sbTrxsequenceno', headerName: 'SB Trxsequenceno', width: 150 },
    { field: 'Interfacenum', headerName: 'SB Interfacenum', width: 90 },
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
    const { entities, setType,  rowCount, setPaginationData,fetchEntitiesWithPagination, deleteEntity, resetEntity, pendingEntity, processEntity, triggerAdfPipeline} = useGenericPaginationContext();
    const navigate = useNavigate();

    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');
    const [loading, setLoading] = useState(false);

    const location = useLocation();

    const [paginationModel, setPaginationModel] = useState({
        pageSize: 100,
        page: 0,
    });

    useEffect(() => {
        setPaginationData(paginationModel.page, paginationModel.pageSize);
        fetchEntitiesWithPagination(paginationModel.page, paginationModel.pageSize);
    }, [paginationModel]);

    const handlePaginationModelChange = (model) => {
        // Reset page to 0 if page size changes
        if (model.pageSize !== paginationModel.pageSize) {
            setPaginationModel({ page: 1, pageSize: model.pageSize });
        } else {
            setPaginationModel(model);
        }
    };

    const [selectedItems, setSelectedItems] = useState([]);

    const handleRowSelection = (itm) => {
        setSelectedItems(itm);
    };

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

    const handleTriggerPipelineClick = async () => {
        setLoading(true); 
        try {
            await triggerAdfPipeline(tableUniqueName); 
        } catch (error) {
            console.error("Pipeline trigger failed:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <h2>{displayUniqueName}</h2>
            {/* <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-Mpaveprobatgroundcoffeestagings')}
            >
                Add Mpaveprobatgroundcoffeestagings
            </Button> */}
            <Button //RESET
                style={{ marginBottom: 10, marginRight: 10 }}
                variant="outlined"
                color="primary"
                onClick={() => resetEntity(selectedItems)}
            >
                Reset Error
            </Button>
            <Button //PENDING
                style={{ marginBottom: 10, marginRight: 10 }}
                variant="contained"
                color="secondary"
                onClick={() => pendingEntity(selectedItems)}
            >
                Reprocess
            </Button>
            <Button //PROCESSED
                style={{ marginBottom: 10 }}
                variant="contained"
                color="success"
                onClick={() => processEntity(selectedItems)}
            >
                Hold
            </Button>

            <Button 
                style={{ marginBottom: 10, marginLeft: 10 }}
                variant="outlined"
                color="primary"
                onClick={handleTriggerPipelineClick}
                disabled={loading} 
                startIcon={loading ? <CircularProgress size={20} /> : null} 
            >
                {loading ? 'Loading...' : 'Trigger Pipeline'}
            </Button>
            
            <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={entities}
                    columns={columns(navigate, deleteEntity, displayUniqueName)}
                    pageSize={5}
                    checkboxSelection
                    getRowId={(row) => row.recid} 
                    onRowSelectionModelChange={handleRowSelection}  
                    slots={{ toolbar: GridToolbar }}
                    pagination
                    paginationMode="server" // Enable server-side pagination
                    paginationModel={paginationModel}
                    onPaginationModelChange={handlePaginationModelChange}
                    rowCount={rowCount}
                />
            </div>    
            <ToastContainer />
        </Container>
    );
};

export default MpaveprobatgroundcoffeestagingsTable;
