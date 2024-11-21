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
                    onClick={() => navigate(`/update-MpinterfaceMatConsTables/${params.row.recid}`,{ state: { text: displayUniqueName } })}
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
    { field: 'createddatetime', headerName: 'Created Datetime', width: 150 },
    { field: 'interface', headerName: 'Interface', width: 150 },
    { field: 'tableId', headerName: 'Table ID', width: 150 },
    { field: 'batchnum', headerName: 'Batch Number', width: 200 },
    { field: 'processed', headerName: 'Processed', width: 150 },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    { field: 'itemno', headerName: 'Item No', width: 150 },
    { field: 'actionid', headerName: 'Action ID', width: 150 },
    { field: 'companylocation', headerName: 'Company Location', width: 150 },
    { field: 'mpmatconsbatchid', headerName: 'Batch ID', width: 150 },
    { field: 'mpmatconsbatchorderno', headerName: 'Order No', width: 150 },
    { field: 'mpmatconscustomercode', headerName: 'Customer Code', width: 150 },
    { field: 'mpmatconsdestination', headerName: 'Destination', width: 150 },
    { field: 'mpmatconsendflag', headerName: 'End Flag', width: 150 },
    { field: 'mpmatconslocation', headerName: 'Location', width: 150 },
    { field: 'mpmatconsmasterid', headerName: 'Master ID', width: 150 },
    { field: 'mpmatconsnumberseq', headerName: 'Number Sequence', width: 150 },
    { field: 'mpmatconsordertype', headerName: 'Order Type', width: 150 },
    { field: 'mpmatconspalletid', headerName: 'Pallet ID', width: 150 },
    { field: 'mpmatconsrecordingdate', headerName: 'Recording Date', width: 150 },
    { field: 'mpmatconsscustomercode', headerName: 'Customer Code', width: 150 },
    { field: 'mpmatconssempty', headerName: 'Empty', width: 150 },
    { field: 'mpmatconsslotname', headerName: 'Slot Name', width: 150 },
    { field: 'mpmatconssource', headerName: 'Source', width: 150 },
    { field: 'mpmatconssproductid', headerName: 'Product ID', width: 150 },
    { field: 'mpmatconsstartflag', headerName: 'Start Flag', width: 150 },
    { field: 'mpmatconsstypecell', headerName: 'Type Cell', width: 150 },
    { field: 'mpmatconstransfered', headerName: 'Transfered', width: 150 },
    { field: 'mpmatconstranstime', headerName: 'Transfer Time', width: 150 },
    { field: 'mpmatconsweight', headerName: 'Weight', width: 150 },
    { field: 'mpmatConsFacility', headerName: 'Facility', width: 150 },
    { field: 'mpinterfacelegacyid', headerName: 'Legacy ID', width: 150 },
    
];

const MpinterfaceMatConsTablesTable = () => {
    const { entities, setType,rowCount, setPaginationData, fetchEntitiesWithPagination, deleteEntity, resetEntity, pendingEntity, processEntity, triggerAdfPipeline } = useGenericPaginationContext();
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
        setType('MpinterfaceMatConsTables');
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
                onClick={() => navigate('/add-MpinterfaceMatConsTables')}
            >
                Add MpinterfaceMatConsTables
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

export default MpinterfaceMatConsTablesTable;
