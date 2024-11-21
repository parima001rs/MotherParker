import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { DataGrid , GridToolbar} from '@mui/x-data-grid';
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
                    onClick={() => navigate(`/update-Mpaveinvtransferheaders/${params.row.recid}`,{ state: { text: displayUniqueName } })}
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
    { field: 'batchnum', headerName: 'Batchnum', width: 150 },
    { field: 'ground_Coffee_Item', headerName: 'Ground Coffee Item', width: 150 },
    { field: 'item_Class_Id', headerName: 'Item Class Id', width: 150 },
    { field: 'item_Desc', headerName: 'Item Description', width: 250 },
    { field: 'item_Id', headerName: 'Item Id', width: 150 },
    { field: 'mpproductstatus', headerName: 'Product Status', width: 150 },
    { field: 'uom_Id', headerName: 'UOM Id', width: 120 },
    { field: 'itemdesc1', headerName: 'Item Description 1', width: 150 },
    { field: 'itemtype', headerName: 'Item Type', width: 120 },
    { field: 'labelweightuom', headerName: 'Label Weight UOM', width: 150 },
    { field: 'scccode', headerName: 'SCC Code', width: 150 },
    { field: 'upccode', headerName: 'UPC Code', width: 150 },
    { field: 'createddatetime', headerName: 'Created DateTime', width: 200 },
    { field: 'dataareaid', headerName: 'Data Area Id', width: 150 },
    { field: 'processed', headerName: 'Processed', width: 150 },
    { field: 'tableId', headerName: 'Table Id', width: 150 },
    { field: 'interface', headerName: 'Interface', width: 150 },
    { field: 'actionid', headerName: 'Action ID', width: 120 },
    // {
    //     field: 'actions',
    //     headerName: 'Actions',
    //     width: 200,
    //     renderCell: (params) => (
    //         <>
    //             <IconButton
    //                 color="primary"
    //                 onClick={() => navigate(`/update-Mpaveitemmasterheaders/${params.row.recid}`,{ state: { text: displayUniqueName } })}
    //             >
    //                 <Edit />
    //             </IconButton>
    //             <IconButton
    //                 color="secondary"
    //                 onClick={() => deleteEntity(params.row.recid)}
    //             >
    //                 <Delete />
    //             </IconButton>
    //         </>
    //     ),
    // },
];

const MpaveitemmasterheadersTable = () => {
    const { entities, setType, rowCount, setPaginationData, fetchEntitiesWithPagination, deleteEntity, triggerAdfPipeline} = useGenericPaginationContext();
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
        setType('Mpaveitemmasterheaders');
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
                onClick={() => navigate('/add-Mpaveitemmasterheaders',{ state: { text: displayUniqueName } })}
            >
                Add Mpaveitemmasterheaders
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
                <DataGrid rows={entities} columns={columns(navigate, deleteEntity, displayUniqueName)} pageSize={5} checkboxSelection getRowId={(row) => row.recid} 
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

export default MpaveitemmasterheadersTable;
