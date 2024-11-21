import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSecondaryContext } from '../../../context/SecondaryContext';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button, Container, IconButton, Box } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { fetchTableDisplayName } from '../../../services/apiservice';
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
                    onClick={() => navigate(`/update-MpinforInventTransferTable/${params.row.recid}`,{ state: { text: displayUniqueName } })}
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
    { field: 'sbRefrecid', headerName: 'SB Refrecid', width: 150 },
    { field: 'sbReftableid', headerName: 'SB Reftableid', width: 150 },
    { field: 'sbDataareaid', headerName: 'SB Dataareaid', width: 150 },
    { field: 'sbTrxsequenceno', headerName: 'SB Trxsequenceno', width: 150 },
    { field: 'Interfacenum', headerName: 'SB Interfacenum', width: 90 },
    { field: 'recid', headerName: 'Recid', width: 150 },
    { field: 'createddatetime', headerName: 'Created DateTime', width: 150 },
    { field: 'interface', headerName: 'Interface', width: 150 },
    { field: 'tableid', headerName: 'Table ID', width: 150 },
    { field: 'batchnum', headerName: 'Batch Number', width: 150 },
    { field: 'processed', headerName: 'Processed', width: 150 },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    { field: 'transferId', headerName: 'Transfer ID', width: 150 },
    { field: 'inventLocationIdFrom', headerName: 'Inventory Location ID From', width: 150 },
    { field: 'inventLocationIdTo', headerName: 'Inventory Location ID To', width: 150 },
    { field: 'transferStatus', headerName: 'Transfer Status', width: 150 },    
];

const MpinforInventTransferTable = () => {
    const { entities, setType, deleteEntity, resetEntity, pendingEntity, processEntity, triggerAdfPipeline} = useSecondaryContext();
    const navigate = useNavigate();
    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');
    const [loading, setLoading] = useState(false);

    //new display change
    const location = useLocation();
    const [selectedItems, setSelectedItems] = useState([]);

    const handleRowSelection = (itm) => {
        const selectedRows = entities.filter((row) => itm.includes(row.recid));
        const selectedSbRecids = selectedRows.map(row => row.sbRecid);    
        setSelectedItems(selectedSbRecids);
    };

    useEffect(() => {
        setType('MpinforInventTransferTable');
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
                    disabled={loading} 
                    startIcon={loading ? <CircularProgress size={20} /> : null} 
                >
                    {loading ? 'Loading...' : 'Trigger Pipeline'}
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
                    slots={{ toolbar: GridToolbar }}
                />
            </Box>

        </Box>
    );
};

export default MpinforInventTransferTable;
