import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { fetchTableDisplayName } from '../../../services/apiservice';
import { ToastContainer } from 'react-toastify';
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
                    onClick={() => navigate(`/update-MPTmpHaviExportTable/${params.row.recid}`, { state: { text: displayUniqueName } })}>
                    <Edit />
                </IconButton>
                <IconButton
                    color="secondary"
                    onClick={() => {
                        if (window.confirm("Are you sure you want to delete this item?")) {
                            deleteEntity(params.row.recid);
                        }
                    }}>
                    <Delete />
                </IconButton>
            </>
        ),
    },
    { field: 'recid', headerName: 'Recid', width: 150 },
    { field: 'createdDatetime', headerName: 'Created Datetime', width: 200 },
    { field: 'interface', headerName: 'Interface', width: 150 },
    { field: 'batchNum', headerName: 'Batch Number', width: 200 },
    { field: 'processed', headerName: 'Processed', width: 150, type: 'boolean' },
    { field: 'dataAreaId', headerName: 'Data Area ID', width: 150 },
    { field: 'transactionDate', headerName: 'Transaction Date', width: 150 },
    { field: 'transactionTime', headerName: 'Transaction Time', width: 150 },
    { field: 'inventoryDate', headerName: 'Inventory Date', width: 150 },
    { field: 'inventoryTime', headerName: 'Inventory Time', width: 150 },
    { field: 'locationId', headerName: 'Location ID', width: 150 },
    { field: 'gln', headerName: 'GLN', width: 200 },
    { field: 'customerItemId', headerName: 'Customer Item ID', width: 150 },
    { field: 'itemId', headerName: 'Item ID', width: 150 },
    { field: 'itemDescription', headerName: 'Item Description', width: 250 },
    { field: 'gtin', headerName: 'GTIN', width: 200 },
    { field: 'quantityTypeCode', headerName: 'Quantity Type Code', width: 200 },
    { field: 'quantity', headerName: 'Quantity', width: 150 },
    { field: 'uom', headerName: 'UOM', width: 150 },
    { field: 'lotNumber', headerName: 'Lot Number', width: 200 },
    { field: 'expirationDate', headerName: 'Expiration Date', width: 200 },
    { field: 'manufacturerLocationId', headerName: 'Manufacturer Location ID', width: 200 },
    { field: 'manufacturerGln', headerName: 'Manufacturer GLN', width: 200 },
    { field: 'sbRecid', headerName: 'SB Recid', width: 150 },
    { field: 'sbBatchnum', headerName: 'SB Batch Number', width: 200 },
    { field: 'sbCreateddatetime', headerName: 'SB Created Datetime', width: 200 },
    { field: 'sbProcessingstatus', headerName: 'SB Processing Status', width: 200 },
    { field: 'sbError', headerName: 'SB Error', width: 90, renderCell: (params) => (
        params.value === true ? (
            <Button
                color="primary"
                onClick={() => navigate(`/Mpi21errorlog/${params.row.sbRecid}`)}
                style={{ textTransform: 'none', padding: 0, minWidth: 0 }}
            >
                True
            </Button>
        ) : (
            "False"
        )
    )},
    { field: 'sbInterface', headerName: 'SB Interface', width: 150 },
    { field: 'sbReftableid', headerName: 'SB Reftable ID', width: 150 },
    { field: 'sbRefrecid', headerName: 'SB Refrec ID', width: 150 },
    { field: 'sbDataareaid', headerName: 'SB Data Area ID', width: 150 },
    { field: 'sbTrxsequenceno', headerName: 'SB Trx Sequence No', width: 150 },
    { field: 'interfaceNum', headerName: 'Interface Num', width: 150 }
];

const MPTmpHaviExportTable = () => {
    const { entities, setType, rowCount, setPaginationData, fetchEntitiesWithPagination, setInterfaceType, deleteEntity, resetEntity, pendingEntity, processEntity, triggerAdfPipeline } = useGenericPaginationContext();
    const navigate = useNavigate();

    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');
    const location = useLocation();
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
        setType('MPTmpHaviExportTables');
    }, [setType]);

    useEffect(() => {
        var pathName = location.pathname.replace(/^\//, '');
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
                style={{ marginBottom: 10, marginRight: 10 }}
                variant="outlined"
                color="primary"
                onClick={() => resetEntity(selectedItems)}
            >
                Reset Error
            </Button>
            <Button
                style={{ marginBottom: 10, marginRight: 10 }}
                variant="contained"
                color="secondary"
                onClick={() => pendingEntity(selectedItems)}
            >
                Reprocess
            </Button>
            <Button
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
                />
            </div>
            <ToastContainer />
        </Container>
    );
};

export default MPTmpHaviExportTable;
