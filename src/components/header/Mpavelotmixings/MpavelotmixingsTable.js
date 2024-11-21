import React, { useEffect ,useState} from 'react';
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
                    onClick={() => navigate(`/update-Mpavelotmixings/${params.row.recid}`,{ state: { text: displayUniqueName } })}
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
    { field: 'interface', headerName: 'Interface', width: 150 },
    { field: 'tableid', headerName: 'Tableid', width: 150 },
    { field: 'processed', headerName: 'Processed', width: 150 },
    { field: 'dataareaid', headerName: 'Dataareaid', width: 150 },
    { field: 'inventjournalid', headerName: 'Inventjournalid', width: 150 },
    { field: 'inventlocationid', headerName: 'Inventlocationid', width: 150 },
    { field: 'inventsiteid', headerName: 'Inventsiteid', width: 150 },
    { field: 'item_Id', headerName: 'Item_Id', width: 150 },
    { field: 'linenum', headerName: 'Linenum', width: 150 },
    { field: 'location', headerName: 'Location', width: 150 },
    { field: 'lot_No', headerName: 'Lot_No', width: 150 },
    { field: 'new_Lot_No', headerName: 'New_Lot_No', width: 150 },
    { field: 'posted', headerName: 'Posted', width: 150 },
    { field: 'posteddatetime', headerName: 'Posteddatetime', width: 200 },
    { field: 'posteddatetimetzid', headerName: 'Posteddatetimetzid', width: 150 },
    { field: 'qty', headerName: 'Qty', width: 150 },
    { field: 'sequence_Id', headerName: 'Sequence_Id', width: 150 },
    { field: 'batchnum', headerName: 'Batchnum', width: 150 },
    
];

const MpavelotmixingsTable = () => {
    const { entities, setType, rowCount, setPaginationData, fetchEntitiesWithPagination, deleteEntity, triggerAdfPipeline } = useGenericPaginationContext();
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
        setType('Mpavelotmixings');
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
            <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-Mpavelotmixings',{ state: { text: displayUniqueName } })}
            >
                Add Mpavelotmixings
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

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={entities} columns={columns(navigate, deleteEntity,displayUniqueName)} pageSize={5} checkboxSelection getRowId={(row) => row.recid}  
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

export default MpavelotmixingsTable;