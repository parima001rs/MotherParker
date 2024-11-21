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
                    onClick={() => navigate(`/update-MPConcurExpensesReimbursed/${params.row.recid}`, { state: { text: displayUniqueName } })}
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
    { field: 'sbCreateddatetime', headerName: 'SB Created Datetime', width: 150 },
    { field: 'sbProcessingstatus', headerName: 'SB Processing Status', width: 150 },
    { field: 'sbError', headerName: 'SB Error', width: 100, renderCell: (params) => (
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
    { field: 'sbReftableid', headerName: 'SB Reftableid', width: 150 },
    { field: 'sbRefrecid', headerName: 'SB Refrecid', width: 150 },
    { field: 'sbDataareaid', headerName: 'SB Dataareaid', width: 150 },
    { field: 'sbTrxsequenceno', headerName: 'SB Trxsequenceno', width: 150 },
    { field: 'interfacenum', headerName: 'SB Interfacenum', width: 150 },
    { field: 'recid', headerName: 'Recid', width: 150 },
    { field: 'createdDatetime', headerName: 'Created Datetime', width: 150 },
    { field: 'interface', headerName: 'Interface', width: 150 },
    { field: 'tableId', headerName: 'Table ID', width: 150 },
    { field: 'batchNum', headerName: 'Batch Num', width: 150 },
    { field: 'processed', headerName: 'Processed', width: 150 },
    { field: 'dataAreaId', headerName: 'Data Area ID', width: 150 },
    { field: 'batchDate', headerName: 'Batch Date', width: 150 },
    { field: 'employeeId', headerName: 'Employee ID', width: 150 },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
    { field: 'firstName', headerName: 'First Name', width: 150 },
    { field: 'middleName', headerName: 'Middle Name', width: 150 },
    { field: 'journalNet', headerName: 'Journal Net', width: 150 },
    { field: 'concurReportId', headerName: 'Concur Report ID', width: 200 },
    { field: 'currencyCode', headerName: 'Currency Code', width: 150 },
    { field: 'reportName', headerName: 'Report Name', width: 250 },
    { field: 'reportPolicyName', headerName: 'Report Policy Name', width: 250 },
    { field: 'containsVat', headerName: 'Contains VAT', width: 150 },
    { field: 'reportEntryDescription', headerName: 'Report Entry Description', width: 200 },
    { field: 'reportVendDesc', headerName: 'Vendor Description', width: 200 },
    { field: 'journalAccountCode', headerName: 'Journal Account Code', width: 150 },
    { field: 'orgUnit1', headerName: 'Org Unit 1', width: 150 },
    { field: 'orgUnit2', headerName: 'Org Unit 2', width: 150 },
    { field: 'orgUnit3', headerName: 'Org Unit 3', width: 150 },
    { field: 'paymentTypeCode', headerName: 'Payment Type Code', width: 200 },
    { field: 'journalAmount', headerName: 'Journal Amount', width: 150 },
    { field: 'journalKey', headerName: 'Journal Key', width: 150 },
    { field: 'amountCurDebit', headerName: 'Amount Cur Debit', width: 150 },
    { field: 'vatAmount', headerName: 'VAT Amount', width: 150 },
    { field: 'taxRecliamPosted', headerName: 'Tax Reclaim Posted', width: 150 },
    { field: 'filename', headerName: 'Filename', width: 300 }
   
];

const MPConcurExpensesReimbursedTable = () => {
    const { entities, setType, rowCount, setPaginationData, fetchEntitiesWithPagination, setInterfaceType, deleteEntity, resetEntity, pendingEntity, processEntity, triggerAdfPipeline} = useGenericPaginationContext();
    const navigate = useNavigate();
    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
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
        setType('MPConcurExpensesReimbursedS');
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
                    paginationMode="server"
                    paginationModel={paginationModel}
                    onPaginationModelChange={handlePaginationModelChange}
                    rowCount={rowCount}
                />
            </div>
            <ToastContainer />
        </Container>
    );
};

export default MPConcurExpensesReimbursedTable
