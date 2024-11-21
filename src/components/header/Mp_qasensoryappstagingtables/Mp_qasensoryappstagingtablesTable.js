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
                    onClick={() => navigate(`/update-Mp_qasensoryappstagingtable/${params.row.recid}`, { state: { text: displayUniqueName  } })}>
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


    { field: 'sbRecid', headerName: 'SB Recid', width: 150 },
    { field: 'sbBatchnum', headerName: 'SB Batchnum', width: 150 },
    { field: 'sbCreateddatetime', headerName: 'SB Createddatetime', width: 150 },
    { field: 'sbProcessingstatus', headerName: 'SB Processingstatus', width: 100 },
    { field: 'sbError', headerName: 'SB Error', width: 90, renderCell: (params) => (
        params.value === true ? (
            <Button
                color="primary"
                onClick={() => navigate(`/Mp_qasensoryappstagingtable/${params.row.sbRecid}`)}
                style={{ textTransform: 'none', padding: 0, minWidth: 0 }}
            >
                True
            </Button>
        ) : (
            "False"
        )
    )},
    { field: 'sbInterface', headerName: 'SB Interface', width: 150 },
    { field: 'sbRefrecid', headerName: 'SB Refrecid', width: 150 },
    { field: 'sbReftableid', headerName: 'SB Reftableid', width: 150 },
    { field: 'sbDataareaid', headerName: 'SB Dataareaid', width: 150 },
    { field: 'sbTrxsequenceno', headerName: 'SB Trxsequenceno', width: 150 },
    { field: 'interfacenum', headerName: 'SB Interfacenum', width: 90 },
    
    { field: 'recid', headerName: 'Recid', width: 150 },
    { field: 'createdDatetime', headerName: 'Created Datetime', width: 200 },
    { field: 'interface', headerName: 'Interface', width: 150 },
    { field: 'batchNum', headerName: 'Batch Number', width: 200 },
    { field: 'processed', headerName: 'Processed', width: 150, type: 'boolean' },
    { field: 'dataAreaId', headerName: 'Data Area ID', width: 150 },
    { field: 'blendItemId', headerName: 'Blend Item ID', width: 150 },
    { field: 'blendItemName', headerName: 'Blend Item Name', width: 200 },
    { field: 'ecoResProductName', headerName: 'Eco Res Product Name', width: 200 },
    { field: 'fd46ItemBrand', headerName: 'FD46 Item Brand', width: 150 },
    { field: 'fgItemId', headerName: 'FG Item ID', width: 150 },
    { field: 'fgItemType', headerName: 'FG Item Type', width: 150 },
    { field: 'inventRefId', headerName: 'Invent Ref ID', width: 150 },
    { field: 'inventSiteId', headerName: 'Invent Site ID', width: 150 },
    { field: 'qualityOrderId', headerName: 'Quality Order ID', width: 150 },
    { field: 'sampleId', headerName: 'Sample ID', width: 150 },
    { field: 'wrkCtrId', headerName: 'Work Center ID', width: 150 },
    { field: 'createdBy', headerName: 'Created By', width: 150 },
    { field: 'color', headerName: 'Color', width: 150 },
    { field: 'moisture', headerName: 'Moisture', width: 100 },
    { field: 'recCreatedDatetime', headerName: 'Rec Created Datetime', width: 200 },
 
];

const Mp_qasensoryappstagingtable = () => {
    const { entities, setType, rowCount, setPaginationData, fetchEntitiesWithPagination, setInterfaceType, deleteEntity, resetEntity, pendingEntity, processEntity, triggerAdfPipeline} = useGenericPaginationContext();
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
        setType('Mp_qasensoryappstagingtables');
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

export default Mp_qasensoryappstagingtable;
