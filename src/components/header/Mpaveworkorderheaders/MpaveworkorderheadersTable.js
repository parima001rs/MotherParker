import React, { useEffect,useState } from 'react';
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

const columns = (navigate, deleteEntity,displayUniqueName) => [
    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-Mpaveworkorderheaders/${params.row.recid}`,{ state: { text: displayUniqueName } })}
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
    { field: 'est_Prod_Rate', headerName: 'Estimated Production Rate', width: 150 },
    { field: 'item_Id', headerName: 'Item ID', width: 150 },
    { field: 'notes', headerName: 'Notes', width: 150 },
    { field: 'process_Id', headerName: 'Process ID', width: 150 },
    { field: 'release_Time', headerName: 'Release Time', width: 150 },
    { field: 'release_Timetzid', headerName: 'Release Time TZID', width: 150 },
    { field: 'req_Finish_Time', headerName: 'Required Finish Time', width: 150 },
    { field: 'req_Finish_Timetzid', headerName: 'Required Finish Time TZID', width: 150 },
    { field: 'req_Quantity', headerName: 'Required Quantity', width: 150 },
    { field: 'start_Quantity', headerName: 'Start Quantity', width: 150 },
    { field: 'wo_Desc', headerName: 'Work Order Description', width: 150 },
    { field: 'wo_Id', headerName: 'Work Order ID', width: 150 },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    { field: 'processed', headerName: 'Processed', width: 150 },
    { field: 'modifiedAt', headerName: 'Modified At', width: 150 },
    { field: 'prodStatus', headerName: 'Production Status', width: 150 },
    { field: 'prodActivity', headerName: 'Production Activity', width: 150 },
    { field: 'error', headerName: 'Error', width: 150 },
    { field: 'error_Message', headerName: 'Error Message', width: 150 },
    
];

const MpaveworkorderheadersTable = () => {
    const { entities, setType, rowCount, setPaginationData,fetchEntitiesWithPagination, deleteEntity, triggerAdfPipeline } = useGenericPaginationContext();
    const navigate = useNavigate();
    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');
    const [loading, setLoading] = useState(false);

    //new display change
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

    useEffect(() => {
        setType('Mpaveworkorderheaders');
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
            <h2>Mpaveworkorderheaders Table</h2>
            <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-Mpaveworkorderheaders',{ state: { text: displayUniqueName } })}
            >
                Add Mpaveworkorderheaders
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
                    columns={columns(navigate, deleteEntity,displayUniqueName)}
                    pageSize={10}
                    checkboxSelection
                    getRowId={(row) => row.recid}
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

export default MpaveworkorderheadersTable;
