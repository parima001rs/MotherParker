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
                    onClick={() => navigate(`/update-MpinterfaceLocationInventory/${params.row.recid}`,{ state: { text: displayUniqueName } })}
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
                onClick={() => navigate(`/MPProbatErrorLog/${params.row.sbRecid}`)}
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
    { field: 'createddatetime', headerName: 'Created Date Time', width: 250 },
    { field: 'interface', headerName: 'Interface', width: 200 },
    { field: 'batchnum', headerName: 'Batch Number', width: 250 },
    { field: 'processed', headerName: 'Processed', width: 120 },
    { field: 'mplocinvloccreatedby', headerName: 'MP Loc Inv Loc Created By', width: 200 },
    { field: 'mplocinvloccreateddate', headerName: 'MP Loc Inv Loc Created Date', width: 250 },
    { field: 'mplocinvloccreatedtime', headerName: 'MP Loc Inv Loc Created Time', width: 250 },
    { field: 'mplocinvlocfacility', headerName: 'MP Loc Inv Loc Facility', width: 200 },
    { field: 'mplocinvlocitemnumber', headerName: 'MP Loc Inv Loc Item Number', width: 200 },
    { field: 'mplocinvloclocation', headerName: 'MP Loc Inv Loc Location', width: 200 },
    { field: 'mplocinvloclotnumber', headerName: 'MP Loc Inv Loc Lot Number', width: 200 },
    { field: 'mplocinvlocquantity', headerName: 'MP Loc Inv Loc Quantity', width: 200 },
    { field: 'mplocinvlocsequenceno', headerName: 'MP Loc Inv Loc Sequence No', width: 250 },
    { field: 'mplocinvlocuserid', headerName: 'MP Loc Inv Loc User ID', width: 200 },
    { field: 'mplocinvlocwarehouse', headerName: 'MP Loc Inv Loc Warehouse', width: 200 },
    { field: 'mplocinvloczone', headerName: 'MP Loc Inv Loc Zone', width: 200 },
    { field: 'mplocinvlotname', headerName: 'MP Loc Inv Lot Name', width: 200 },
    { field: 'mplocinvloctransferred', headerName: 'MP Loc Inv Loc Transferred', width: 200 },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    { field: 'tableId', headerName: 'Table ID', width: 100 },

    
];

const MpinterfaceLocationInventoryTable = () => {
    const { entities, setType, rowCount, setPaginationData, fetchEntitiesWithPagination, deleteEntity, resetEntity, pendingEntity, processEntity, triggerAdfPipeline } = useGenericPaginationContext();
    const navigate = useNavigate();

    const [selectedItems, setSelectedItems] = useState([]);
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

    const handleRowSelection = (itm) => {
        const selectedRows = entities.filter((row) => itm.includes(row.recid));
        const selectedSbRecids = selectedRows.map(row => row.sbRecid);    
        setSelectedItems(selectedSbRecids);
    };

    useEffect(() => {
        setType('MpinterfaceLocationInventorys');
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
                onClick={() => navigate('/add-MpinterfaceLocationInventory')}
            >
                Add MpinterfaceLocationInventory
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

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={entities}
                    columns={columns(navigate, deleteEntity, displayUniqueName)}
                    pageSize={5}
                    checkboxSelection
                    getRowId={(row) => row.recid} 
                    onRowSelectionModelChange={handleRowSelection}   
                    
                    pagination
                    paginationMode="server" // Enable server-side pagination
                    paginationModel={paginationModel}
                    onPaginationModelChange={handlePaginationModelChange}
                    rowCount={rowCount}
                    slots={{ toolbar: GridToolbar }}
                />
            </div>
            <ToastContainer />
            
        </Container>
    );
};

export default MpinterfaceLocationInventoryTable;
