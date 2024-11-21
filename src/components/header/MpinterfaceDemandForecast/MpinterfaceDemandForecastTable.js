import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';
import { useLocation } from 'react-router-dom';
import { fetchTableDisplayName } from '../../../services/apiservice';

const columns = (navigate, deleteEntity, displayUniqueName) => [
    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-MpinterfaceDemandForecast/${params.row.recid}`,{ state: { text: displayUniqueName } })}
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
            params.value === false ? "False" : (params.value)
        )
        ),
    },
    { field: 'sbInterface', headerName: 'SB Interface', width: 150 },
    { field: 'sbRefrecid', headerName: 'SB Refrecid', width: 150 },
    { field: 'sbReftableid', headerName: 'SB Reftableid', width: 150 },
    { field: 'sbDataareaid', headerName: 'SB Dataareaid', width: 150 },
    { field: 'sbTrxsequenceno', headerName: 'SB Trxsequenceno', width: 150 },
    { field: 'Interfacenum', headerName: 'SB Interfacenum', width: 90 },
    { field: 'recid', headerName: 'Recid', width: 150, value: 6000000000 },
    { field: 'createddatetime', headerName: 'Created DateTime', width: 150, value: '2024-03-14T14:56:22.467' },
    { field: 'interface', headerName: 'Interface', width: 150, value: 'Logility' },
    { field: 'tableid', headerName: 'Table ID', width: 150, value: 10 },
    { field: 'batchnum', headerName: 'Batch Number', width: 150, value: 'Demo' },
    { field: 'processed', headerName: 'Processed', width: 150, value: true },
    { field: 'mpforecastmodel', headerName: 'MP Forecast Model', width: 150, value: 'CDN LOG' },
    { field: 'mpperiodkey', headerName: 'MP Period Key', width: 150, value: '7day' },
    { field: 'mpasofmonth', headerName: 'MP As Of Month', width: 150, value: 3 },
    { field: 'mpasofyear', headerName: 'MP As Of Year', width: 150, value: 2024 },
    { field: 'mpcustomerindirectconsolidation', headerName: 'MP Customer Indirect Consolidation', width: 150, value: null },
    { field: 'mpforecastlevel', headerName: 'MP Forecast Level', width: 150, value: 2 },
    { field: 'mpitemlevel', headerName: 'MP Item Level', width: 150, value: '1011128' },
    { field: 'mpresultfc01', headerName: 'MP Result FC01', width: 150, value: 597 },
    { field: 'mpresultfc02', headerName: 'MP Result FC02', width: 150, value: 94 },
    { field: 'mpresultfc03', headerName: 'MP Result FC03', width: 150, value: 280 },
    { field: 'mpresultfc04', headerName: 'MP Result FC04', width: 150, value: 370 },
    { field: 'mpresultfc05', headerName: 'MP Result FC05', width: 150, value: 116 },
    { field: 'mpresultfc06', headerName: 'MP Result FC06', width: 150, value: 969 },
    { field: 'mpresultfc07', headerName: 'MP Result FC07', width: 150, value: 181 },
    { field: 'mpresultfc08', headerName: 'MP Result FC08', width: 150, value: 466 },
    { field: 'mpresultfc09', headerName: 'MP Result FC09', width: 150, value: 321 },
    { field: 'mpresultfc10', headerName: 'MP Result FC10', width: 150, value: 634 },
    { field: 'mpresultfc11', headerName: 'MP Result FC11', width: 150, value: 899 },
    { field: 'mpresultfc12', headerName: 'MP Result FC12', width: 150, value: 238 },
    { field: 'mpresultfc13', headerName: 'MP Result FC13', width: 150, value: 325 },
    { field: 'mpresultfc14', headerName: 'MP Result FC14', width: 150, value: 232 },
    { field: 'mpresultfc15', headerName: 'MP Result FC15', width: 150, value: 632 },
    { field: 'mpresultfc16', headerName: 'MP Result FC16', width: 150, value: 142 },
    { field: 'mpresultfc17', headerName: 'MP Result FC17', width: 150, value: 427 },
    { field: 'mpresultfc18', headerName: 'MP Result FC18', width: 150, value: 754 },
    { field: 'mpresultfc19', headerName: 'MP Result FC19', width: 150, value: 401 },
    { field: 'mpresultfc20', headerName: 'MP Result FC20', width: 150, value: 649 },
    { field: 'mpresultfc21', headerName: 'MP Result FC21', width: 150, value: 114 },
    { field: 'mpresultfc22', headerName: 'MP Result FC22', width: 150, value: 928 },
    { field: 'mpresultfc23', headerName: 'MP Result FC23', width: 150, value: 383 },
    { field: 'mpresultfc24', headerName: 'MP Result FC24', width: 150, value: 115 },
    { field: 'mpsite', headerName: 'MP Site', width: 150, value: '01' },
    { field: 'mpwhse', headerName: 'MP Warehouse', width: 150, value: 'MD' },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150, value: '10' },
    { field: 'status', headerName: 'Status', width: 150, value: '1' }, 

    
];

const MpinterfaceDemandForecastTable = () => {
    const { entities, setType, rowCount, setPaginationData, fetchEntitiesWithPagination, deleteEntity, resetEntity, pendingEntity, processEntity, triggerAdfPipeline } = useGenericPaginationContext();
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

    const [selectedItems, setSelectedItems] = useState([]);

    const handleRowSelection = (itm) => {
        const selectedRows = entities.filter((row) => itm.includes(row.recid));
        const selectedSbRecids = selectedRows.map(row => row.sbRecid);    
        setSelectedItems(selectedSbRecids);
    };

    useEffect(() => {
        setType('MpinterfaceDemandForecast');
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
                onClick={() => navigate('/add-MpinterfaceDemandForecast')}
            >
                Add MpinterfaceDemandForecast
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

export default MpinterfaceDemandForecastTable;
