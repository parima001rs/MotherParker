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
                    onClick={() => navigate(`/update-MpinforRouteVersions/${params.row.recid}`,{ state: { text: displayUniqueName } })}
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
    { field: 'sbRecid', headerName: 'SB Rec ID', width: 150 },
    { field: 'sb_Interface', headerName: 'SB Interface', width: 150 },
    { field: 'sbBatchnum', headerName: 'SB Batch Number', width: 200 },
    { field: 'sbCreateddatetime', headerName: 'SB Created Date Time', width: 200 },
    { field: 'sbProcessingstatus', headerName: 'SB Processing Status', width: 200 },
    { field: 'sbError', headerName: 'SB Error', width: 100, renderCell: (params) => (
      params.value === true ? (
          <Button
              color="primary"
              onClick={() => navigate(`/Mpinforerrorlog/${params.row.sbRecid}`)}
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
    { field: 'sbReftableid', headerName: 'SB Ref Table ID', width: 150 },
    { field: 'sbRefrecid', headerName: 'SB Ref Rec ID', width: 150 },
    { field: 'sbDataareaid', headerName: 'SB Data Area ID', width: 150 },
    { field: 'trxsequenceno', headerName: 'Trx Sequence No', width: 200 },
    { field: 'interfacenum', headerName: 'Interface Num', width: 150 },
    { field: 'recid', headerName: 'Rec ID', width: 150 },
    { field: 'createddatetime', headerName: 'Created Date Time', width: 200 },
    { field: 'interface', headerName: 'Interface', width: 150 },
    { field: 'tableid', headerName: 'Table ID', width: 100 },
    { field: 'batchnum', headerName: 'Batch Number', width: 200 },
    { field: 'processed', headerName: 'Processed', width: 100 },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    { field: 'active', headerName: 'Active', width: 100 },
    { field: 'approved', headerName: 'Approved', width: 100 },
    { field: 'approver', headerName: 'Approver', width: 150 },
    { field: 'construction', headerName: 'Construction', width: 150 },
    { field: 'fromDate', headerName: 'From Date', width: 200 },
    { field: 'fromQty', headerName: 'From Quantity', width: 150 },
    { field: 'inventDimId', headerName: 'Invent Dim ID', width: 200 },
    { field: 'itemId', headerName: 'Item ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'routeId', headerName: 'Route ID', width: 150 },
    { field: 'site', headerName: 'Site', width: 100 },
    { field: 'toDate', headerName: 'To Date', width: 200 },

    
];

const MpinforRouteVersionTable = () => {
    const { entities, setType, rowCount, setPaginationData, fetchEntitiesWithPagination, setInterfaceType, deleteEntity, resetEntity, pendingEntity, processEntity, triggerAdfPipeline } = useGenericPaginationContext();
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
        //setType('Mpinterfaceitemtables');
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
        setType('MpinforRouteVersions');
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
                onClick={() => navigate('/add-MpinforRouteVersion')}
            >
                Add MpinforRouteVersion
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

export default MpinforRouteVersionTable;
