import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import { fetchTableDisplayName } from '../../../services/apiservice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';

const columns = (navigate, deleteEntity, displayUniqueName, currInterface) => [
    {
        field: 'actions',
        headerName: 'Actions',
        width: 120,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-Mpinterfacerafadjbatchorders/${params.row.recid}`, { state: { text: displayUniqueName , interfaceName: currInterface } })}
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
                onClick={() => navigate(`/MPpowerplanterrorlog/${params.row.sbRecid}`)}
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
    { field: 'recid', headerName: 'Recid', width: 90 },
    { field: 'createddatetime', headerName: 'Created DateTime', width: 150 },
    { field: 'interface', headerName: 'Interface', width: 120 },
    { field: 'batchnum', headerName: 'Batch Number', width: 180 },
    { field: 'processed', headerName: 'Processed', width: 100 },
    { field: 'mprafadjbatchadjqty', headerName: 'Adjustment Quantity', width: 150 },
    { field: 'mprafadjbatchcurrentopr', headerName: 'Current Operation', width: 150 },
    { field: 'mprafadjbatchduedate', headerName: 'Due Date', width: 150 },
    { field: 'mprafadjbatchendtime', headerName: 'End Time', width: 150 },
    { field: 'mprafadjbatchfacility', headerName: 'Facility', width: 150 },
    { field: 'mprafadjbatchhourremrun', headerName: 'Hours Remaining Run', width: 150 },
    { field: 'mprafadjbatchhourremsetup', headerName: 'Hours Remaining Setup', width: 150 },
    { field: 'mprafadjbatchitemdid', headerName: 'Item DID', width: 150 },
    { field: 'mprafadjbatchlicensenum', headerName: 'License Number', width: 150 },
    { field: 'mprafadjbatchlotnum', headerName: 'Lot Number', width: 150 },
    { field: 'mprafadjbatchoperator', headerName: 'Operator', width: 150 },
    { field: 'mprafadjbatchordernum', headerName: 'Order Number', width: 150 },
    { field: 'mprafadjbatchorderstatus', headerName: 'Order Status', width: 150 },
    { field: 'mprafadjbatchordertype', headerName: 'Order Type', width: 150 },
    { field: 'mprafadjbatchplannercode', headerName: 'Planner Code', width: 150 },
    { field: 'mprafadjbatchprioritycode', headerName: 'Priority Code', width: 150 },
    { field: 'mprafadjbatchqtyfinished', headerName: 'Quantity Finished', width: 150 },
    { field: 'mprafadjbatchqtyrequired', headerName: 'Quantity Required', width: 150 },
    { field: 'mprafadjbatchrafreasoncode', headerName: 'RAF Reason Code', width: 150 },
    { field: 'mprafadjbatchreleasedate', headerName: 'Release Date', width: 150 },
    { field: 'mprafadjbatchresourceid', headerName: 'Resource ID', width: 150 },
    { field: 'mprafadjbatchruntime', headerName: 'Run Time', width: 150 },
    { field: 'mprafadjbatchstarttime', headerName: 'Start Time', width: 150 },
    { field: 'mprafadjbatchtransdate', headerName: 'Transaction Date', width: 150 },
    { field: 'mprafadjbatchwarehouse', headerName: 'Warehouse', width: 150 },
    { field: 'mprafadjbatchworkctr', headerName: 'Work Center', width: 150 },
    { field: 'mprafadjbatchrefnum', headerName: 'Reference Number', width: 150 },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    { field: 'tableid', headerName: 'Table ID', width: 150 },
];

const Mpinterfacerafadjbatchorders = () => {
    const { entities, setType, rowCount, setPaginationData, setInterfaceType, fetchEntitiesWithPagination, deleteEntity, resetEntity, pendingEntity, processEntity, triggerAdfPipeline } = useGenericPaginationContext();
    const navigate = useNavigate();
    const location = useLocation();
    
    const [displayUniqueName, setTableDisplayName] = useState('');
    const [tableUniqueName, setTableName] = useState('');
    const [currInterface, setInterface] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);
    const [loading, setLoading] = useState(false);

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
        setType('Mpinterfacerafadjbatchorders');
    }, [setType]);

    useEffect(() => {
        const pathName = location.pathname.replace(/^\//, '');
        
        if (pathName && pathName !== tableUniqueName) {
            setTableName(pathName);
            fetchTableDisplayName(pathName)
                .then(setTableDisplayName)
                .catch(console.error);
        }

        const searchParams = new URLSearchParams(location.search);
        const interfaceParam = searchParams.get('interface');
        setInterfaceType(interfaceParam);
        setInterface(interfaceParam);

    }, [location.pathname, tableUniqueName]);

    const handleTriggerPipelineClick = async () => {
        setLoading(true); 
        try {
            await triggerAdfPipeline(tableUniqueName, currInterface); 
        } catch (error) {
            console.error("Pipeline trigger failed:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <h2>{displayUniqueName }</h2>
            {/*<Button
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-Mpinterfacerafadjbatchorders', { state: { text: displayUniqueName } })}
                style={{ marginBottom: 10 }}
            >
                Add Mpinterfacerafadjbatchorders
            </Button>*/}
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
                    columns={columns(navigate, deleteEntity, displayUniqueName, currInterface)}
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

export default Mpinterfacerafadjbatchorders;
