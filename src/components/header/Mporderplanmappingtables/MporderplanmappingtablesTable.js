import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button, Container, IconButton, Box } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { fetchTableDisplayName } from '../../../services/apiservice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';

// Define columns with the updated fields
const columns = (navigate, deleteEntity,displayUniqueName) => [
    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-Mporderplanmappingtables/${params.row.recid}`,{ state: { text: displayUniqueName } })}
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
                onClick={() => navigate(`/Mpblujayerrorlog/${params.row.sbRecid}`)}
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
    { field: 'batchnum', headerName: 'Batch Number', width: 200 },
    { field: 'processed', headerName: 'Processed', width: 150, type: 'boolean' },
    { field: 'chargecodecategory', headerName: 'Charge Code Category', width: 200 },
    { field: 'chargedetail_Chargecodeid', headerName: 'Charge Code ID', width: 200 },
    { field: 'deliverylocationname', headerName: 'Delivery Location Name', width: 250 },
    { field: 'deliverylocationref', headerName: 'Delivery Location Ref', width: 200 },
    { field: 'filename', headerName: 'Filename', width: 200 },
    { field: 'loadnumber', headerName: 'Load Number', width: 200 },
    { field: 'mode_', headerName: 'Mode', width: 150 },
    { field: 'net', headerName: 'Net', width: 150, type: 'number' },
    { field: 'ordernumber', headerName: 'Order Number', width: 200 },
    { field: 'ordertype', headerName: 'Order Type', width: 200 },
    { field: 'originlocationname', headerName: 'Origin Location Name', width: 250 },
    { field: 'originlocationref', headerName: 'Origin Location Ref', width: 200 },
    { field: 'pallets', headerName: 'Pallets', width: 150, type: 'number' },
    { field: 'pickupstartduedate', headerName: 'Pickup Start Due Date', width: 200 },
    { field: 'pickupstartduedatetzid', headerName: 'Pickup Start Due Date TZID', width: 200 },
    { field: 'pieces', headerName: 'Pieces', width: 150, type: 'number' },
    { field: 'pronumber', headerName: 'Pro Number', width: 200 },
    { field: 'scac', headerName: 'SCAC', width: 150 },
    { field: 'scheduleintgkey', headerName: 'Schedule Intg Key', width: 200 },
    { field: 'shipperref', headerName: 'Shipper Ref', width: 200 },
    { field: 'status', headerName: 'Status', width: 150, type: 'number' },
    { field: 'weight', headerName: 'Weight', width: 150, type: 'number' },
    { field: 'weight_Uom', headerName: 'Weight UOM', width: 150 },
    { field: 'companyid', headerName: 'Company ID', width: 200 },
    { field: 'errormessage', headerName: 'Error Message', width: 200 },
    { field: 'inventtranstype', headerName: 'Invent Trans Type', width: 200 },
    { field: 'shipperorderplan_Executioneventid', headerName: 'Execution Event ID', width: 200 },
    { field: 'skipeventid', headerName: 'Skip Event ID', width: 200 },
    { field: 'dlvmodeid', headerName: 'DLV Mode ID', width: 200 },
    { field: 'refrecid', headerName: 'Ref Rec ID', width: 150, type: 'number' },
    { field: 'reftableid', headerName: 'Ref Table ID', width: 150, type: 'number' },
    { field: 'valid', headerName: 'Valid', width: 150, type: 'number' },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    { field: 'tableId', headerName: 'Table ID', width: 150 },
    
];

const MporderplanmappingtablesTable = () => {
    const { entities, setType, rowCount, setPaginationData, fetchEntitiesWithPagination, deleteEntity, resetEntity, pendingEntity, processEntity, triggerAdfPipeline } = useGenericPaginationContext();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');
    const [pipelineLoading, setPipelineLoading] = useState(false);

    //new display change
    const location = useLocation();
    // Manage loading state
    const [selectedItems, setSelectedItems] = useState([]);
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

    const handleRowSelection = (itm) => {
        const selectedRows = entities.filter((row) => itm.includes(row.recid));
        const selectedSbRecids = selectedRows.map(row => row.sbRecid);    
        setSelectedItems(selectedSbRecids);
    };

    useEffect(() => {
        setType('Mporderplanmappingtables');
        setLoading(false); // Set loading to false once data is set
    }, [setType]);

    useEffect(() => {
        var pathName = location.pathname.replace(/^\//, ''); // Remove leading slash
      
        if (pathName && pathName !== tableUniqueName) {
            setTableName(pathName);
            fetchTableDisplayName(pathName).then(setTableDisplayName).catch(console.error);
        }
    }, [location.pathname, tableUniqueName]);

    const handleTriggerPipelineClick = async () => {
        setPipelineLoading(true); 
        try {
            await triggerAdfPipeline(tableUniqueName); 
        } catch (error) {
            console.error("Pipeline trigger failed:", error);
        } finally {
            setPipelineLoading(false);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                width: '100%', 
                padding: '20px',
            }}
        >
            <h2>{displayUniqueName}</h2>
            
            {/* <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-MpinterfaceEndProductions')}
            >
                Add MpinterfaceEndProductionss
            </Button> */}
            <Box>
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
                    disabled={pipelineLoading} 
                    startIcon={pipelineLoading ? <CircularProgress size={20} /> : null} 
                >
                    {pipelineLoading ? 'Loading...' : 'Trigger Pipeline'}
                </Button>

            </Box>
            <Box
                sx={{
                    flexGrow: 1,  
                    minHeight: 0, 
                }}
            >
                <DataGrid
                    rows={entities}
                    columns={columns(navigate, deleteEntity, displayUniqueName)}
                    pageSize={5}
                    checkboxSelection
                    getRowId={(row) => row.recid}
                    onRowSelectionModelChange={handleRowSelection}
                    sx={{
                        '& .MuiDataGrid-root': {
                            minHeight: '100%',  
                        },
                        width: '100%', 
                    }}

                    pagination
                    paginationMode="server" // Enable server-side pagination
                    paginationModel={paginationModel}
                    onPaginationModelChange={handlePaginationModelChange}
                    rowCount={rowCount}
                    slots={{ toolbar: GridToolbar }}
                />
            </Box>
            <ToastContainer />

        </Box>
    );
};

export default MporderplanmappingtablesTable;
