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
                    onClick={() => navigate(`/update-MpinterfaceRafadjustTable/${params.row.recid}`,{ state: { text: displayUniqueName, interfaceName: currInterface } })}
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
    { field: 'createddatetime', headerName: 'Created Date Time', width: 250 },
    { field: 'interface', headerName: 'Interface', width: 200 },
    { field: 'batchnum', headerName: 'Batch Number', width: 250 },
    { field: 'processed', headerName: 'Processed', width: 120 },
    { field: 'mprafactivity', headerName: 'MP RAF Activity', width: 200 },
    { field: 'mprafbatchid', headerName: 'MP RAF Batch ID', width: 200 },
    { field: 'mprafbatchnumber', headerName: 'MP RAF Batch Number', width: 200 },
    { field: 'mprafbatchorder', headerName: 'MP RAF Batch Order', width: 200 },
    { field: 'mprafcreationdate', headerName: 'MP RAF Creation Date', width: 250 },
    { field: 'mprafcreationtime', headerName: 'MP RAF Creation Time', width: 250 },
    { field: 'mprafdefaultresource', headerName: 'MP RAF Default Resource', width: 200 },
    { field: 'mprafdestname', headerName: 'MP RAF Dest Name', width: 200 },
    { field: 'mprafdmasterid', headerName: 'MP RAF D Master ID', width: 200 },
    { field: 'mprafexpirydate', headerName: 'MP RAF Expiry Date', width: 250 },
    { field: 'mprafexportgeneralid', headerName: 'MP RAF Export General ID', width: 200 },
    { field: 'mpraffacility', headerName: 'MP RAF Facility', width: 150 },
    { field: 'mpraffinalitem', headerName: 'MP RAF Final Item', width: 200 },
    { field: 'mpraflicenseplate', headerName: 'MP RAF License Plate', width: 200 },
    { field: 'mpraflocation', headerName: 'MP RAF Location', width: 200 },
    { field: 'mpraflotname', headerName: 'MP RAF Lot Name', width: 200 },
    { field: 'mprafmobatchnumber1', headerName: 'MP RAF MO Batch Number 1', width: 200 },
    { field: 'mprafoperator', headerName: 'MP RAF Operator', width: 200 },
    { field: 'mprafordercomplete', headerName: 'MP RAF Order Complete', width: 200 },
    { field: 'mpraforiginalitem', headerName: 'MP RAF Original Item', width: 200 },
    { field: 'mprafprobatseqno', headerName: 'MP RAF Probat Seq No', width: 200 },
    { field: 'mprafproductiondate', headerName: 'MP RAF Production Date', width: 250 },
    { field: 'mprafquantity', headerName: 'MP RAF Quantity', width: 200 },
    { field: 'mprafreasoncode', headerName: 'MP RAF Reason Code', width: 200 },
    { field: 'mprafrecordingdate', headerName: 'MP RAF Recording Date', width: 250 },
    { field: 'mprafsmasterid', headerName: 'MP RAF S Master ID', width: 200 },
    { field: 'mprafsourcename', headerName: 'MP RAF Source Name', width: 200 },
    { field: 'mpraftransfererd', headerName: 'MP RAF Transfererd', width: 200 },
    { field: 'mpraftranstime', headerName: 'MP RAF Trans Time', width: 250 },
    { field: 'mprafzone', headerName: 'MP RAF Zone', width: 200 },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    { field: 'tableId', headerName: 'Table ID', width: 100 },
    { field: 'mpinterfacelegacyid', headerName: 'Mpinterface Legacy Id', width: 250 },
    
];

const MpinterfaceRafadjustTableTable = () => {
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
        setType('MpinterfaceRafadjustTables');
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
                onClick={() => navigate('/add-MpinterfaceRafadjustTable')}
            >
                Add MpinterfaceRafadjustTable
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

export default MpinterfaceRafadjustTableTable;
