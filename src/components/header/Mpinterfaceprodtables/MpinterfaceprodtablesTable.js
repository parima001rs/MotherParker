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

const columns = (navigate, deleteEntity, displayUniqueName, currInterface) => [
    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-Mpinterfaceprodtables/${params.row.recid}`,{ state: { text: displayUniqueName, interfaceName: currInterface   } })}
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
                onClick={() => {
                    const errorLogPath = currInterface === 'Probat' ? `/MPProbatErrorLog/${params.row.sbRecid}` : `/MPpowerplanterrorlog/${params.row.sbRecid}`;
                    navigate(errorLogPath);
                }}
                style={{ textTransform: 'none', padding: 0, minWidth: 0 }}
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
    { field: 'tableId', headerName: 'Table ID', width: 150 }, // Note the camelCase here
    { field: 'batchnum', headerName: 'Batch Number', width: 200 },
    { field: 'processed', headerName: 'Processed', width: 150 },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    { field: 'mpprodenddate', headerName: 'End Date', width: 150 },
    { field: 'mpprodendtime', headerName: 'End Time', width: 150 },
    { field: 'mpprodfacility', headerName: 'Facility', width: 150 },
    { field: 'mpprodfinishedqty', headerName: 'Finished Qty', width: 150 },
    { field: 'mpprodflavoredcoffee', headerName: 'Flavored Coffee', width: 150 },
    { field: 'mpproditemnumber', headerName: 'Item Number', width: 150 },
    { field: 'mpprodlinecontrol', headerName: 'Line Control', width: 150 },
    { field: 'mpprodlineno', headerName: 'Line Number', width: 150 },
    { field: 'mpprodordername', headerName: 'Order Name', width: 150 },
    { field: 'mpprodorderqty', headerName: 'Order Qty', width: 150 },
    { field: 'mpprodordertype', headerName: 'Order Type', width: 150 },
    { field: 'mpprodpkgrate', headerName: 'Pkg Rate', width: 150 },
    { field: 'mpprodprobatseqno', headerName: 'Probat Seq No', width: 150 },
    { field: 'mpprodquantity1', headerName: 'Quantity 1', width: 150 },
    // Add other quantity fields if needed
    { field: 'mpprodresourceid', headerName: 'Resource ID', width: 150 },
    { field: 'mpprodshoporder', headerName: 'Shop Order', width: 150 },
    { field: 'mpprodstartdate', headerName: 'Start Date', width: 150 },
    { field: 'mpprodstarttime', headerName: 'Start Time', width: 150 },
    { field: 'mpprodtargetgroup', headerName: 'Target Group', width: 150 },
    { field: 'mpprodtransferred', headerName: 'Transferred', width: 150 },
    
];

const MpinterfaceprodtablesTable = () => {
    const { entities, setType, rowCount, setPaginationData, setInterfaceType, fetchEntitiesWithPagination, deleteEntity, resetEntity, pendingEntity, processEntity, triggerAdfPipeline } = useGenericPaginationContext();
    const navigate = useNavigate();
    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');
    const [currInterface, setInterface] = useState('');
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
    }, [paginationModel, currInterface]);

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
        setType('Mpinterfaceprodtables');
    }, [setType]);

    useEffect(() => {
        var pathName = location.pathname.replace(/^\//, ''); // Remove leading slash
       
        const searchParams = new URLSearchParams(location.search);
        const interfaceParam = searchParams.get('interface');
        setInterfaceType(interfaceParam);
        setInterface(interfaceParam);

        if (pathName && pathName !== tableUniqueName) {
            setTableName(pathName);
            fetchTableDisplayName(pathName, interfaceParam).then(setTableDisplayName).catch(console.error);
        }

    }, [location.pathname, tableUniqueName]);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const interfaceParam = searchParams.get('interface');
    
        // Update the interface type and fetch data if it changes
        if (interfaceParam && interfaceParam !== currInterface) {
            setInterfaceType(interfaceParam);
            setInterface(interfaceParam);
    
            // Fetch new data based on the interface parameter
            fetchEntitiesWithPagination(paginationModel.page, paginationModel.pageSize);
        }
    }, [location.search, currInterface, paginationModel.page, paginationModel.pageSize]);

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
            <h2>{displayUniqueName}</h2>
            {/* <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-Mpinterfaceprodtables')}
            >
                Add Mpinterfaceprodtables
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
            
            <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={entities}
                    columns={columns(navigate, deleteEntity, displayUniqueName , currInterface)}
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

export default MpinterfaceprodtablesTable;
