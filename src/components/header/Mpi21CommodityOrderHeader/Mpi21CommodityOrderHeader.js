import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { DataGrid } from '@mui/x-data-grid';
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
                    onClick={() => navigate(`/update-Mpi21CommodityOrderHeader/${params.row.recid}`, { state: { text: displayUniqueName  } })}
                >
                    <Edit />
                </IconButton>
                <IconButton
                    color="secondary"
                    onClick={() => {
                        if (window.confirm("Are you sure you want to delete this item?")) {
                            deleteEntity(params.row.recid);
                        }
                    }}
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
                onClick={() => navigate(`/Mpi21errorlog/${params.row.sbRecid}`)}
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
    { field: 'trxsequenceno', headerName: 'SB Trxsequenceno', width: 150 },
    { field: 'recid', headerName: 'Recid', width: 150 },
    { field: 'createddatetime', headerName: 'Created Datetime', width: 200 },
    { field: 'interface', headerName: 'Interface', width: 150 },
    { field: 'tableid', headerName: 'Table ID', width: 150 },
    { field: 'batchnum', headerName: 'Batch Number', width: 200 },
    { field: 'processed', headerName: 'Processed', width: 150, type: 'boolean' },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    { field: 'book', headerName: 'Book', width: 150 },
    { field: 'companyLocation', headerName: 'Company Location', width: 150 },
    { field: 'contractDate', headerName: 'Contract Date', width: 200 },
    { field: 'customerPrefix', headerName: 'Customer Prefix', width: 150 },
    { field: 'endDate', headerName: 'End Date', width: 200 },
    { field: 'erpconumber', headerName: 'ERPCO Number', width: 200 },
    { field: 'futuresMarket', headerName: 'Futures Market', width: 200 },
    { field: 'futuresMonth', headerName: 'Futures Month', width: 150 },
    { field: 'futuresPrice', headerName: 'Futures Price', width: 150, type: 'number' },
    { field: 'fxCurrency', headerName: 'FX Currency', width: 150 },
    { field: 'fxrate', headerName: 'FX Rate', width: 150, type: 'number' },
    { field: 'interfaceNum', headerName: 'Interface Num', width: 150 },
    { field: 'lots', headerName: 'Lots', width: 150, type: 'number' },
    { field: 'mpcommOrdBuyConfirmNum', headerName: 'MP Comm Ord Buy Confirm Num', width: 200 },
    { field: 'priceCurrency', headerName: 'Price Currency', width: 150 },
    { field: 'priceUom', headerName: 'Price UOM', width: 150 },
    { field: 'quantity', headerName: 'Quantity', width: 150, type: 'number' },
    { field: 'quantityPerLot', headerName: 'Quantity Per Lot', width: 150, type: 'number' },
    { field: 'quantityPerLotUom', headerName: 'Quantity Per Lot UOM', width: 150 },
    { field: 'quantityUom', headerName: 'Quantity UOM', width: 150 },
    { field: 'referenceFutureMarket', headerName: 'Reference Future Market', width: 200 },
    { field: 'referenceFutureMonth', headerName: 'Reference Future Month', width: 150 },
    { field: 'referenceFuturesPrice', headerName: 'Reference Futures Price', width: 200, type: 'number' },
    { field: 'referencePriceCurrency', headerName: 'Reference Price Currency', width: 150 },
    { field: 'referencePriceUom', headerName: 'Reference Price UOM', width: 150 },
    { field: 'startDate', headerName: 'Start Date', width: 200 },
    { field: 'subBook', headerName: 'Sub Book', width: 200 },
    { field: 'termsCode', headerName: 'Terms Code', width: 150 },
    { field: 'trxSequenceNo', headerName: 'Trx Sequence No', width: 150 },
    { field: 'contractNo', headerName: 'Contract No', width: 150 },  
];

const Mpi21CommodityOrderHeader = () => {
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
        setType('Mpi21CommodityOrderHeader');
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
            
            {/* <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-Mpi21CommodityOrderHeader')}
            >
                Add Mpi21CommodityOrderHeaders
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

export default Mpi21CommodityOrderHeader;
