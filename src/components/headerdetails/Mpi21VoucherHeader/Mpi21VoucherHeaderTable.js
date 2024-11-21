import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { fetchTableDisplayName } from '../../../services/apiservice';
import { RemoveRedEyeSharp } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const columns = (navigate, deleteEntity, displayUniqueName) => [
    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/view-Mpi21VoucherHeader/${params.row.recid}`)}
                >
                    <RemoveRedEyeSharp />
                </IconButton>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-Mpi21VoucherHeader/${params.row.recid}`, { state: { text: displayUniqueName  } })}
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
    { field: 'sbtrxsequenceno', headerName: 'SB Trxsequenceno', width: 150 },
    { field: 'interfacenum', headerName: 'SB Interfacenum', width: 90 },
    { field: 'recid', headerName: 'Recid', width: 150 },
    { field: 'createddatetime', headerName: 'Created DateTime', width: 200 },
    { field: 'interface', headerName: 'Interface', width: 150 },
    { field: 'tableid', headerName: 'Table ID', width: 150 },
    { field: 'batchnum', headerName: 'Batch Number', width: 250 },
    { field: 'processed', headerName: 'Processed', width: 150 },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    { field: 'trxSequenceNo', headerName: 'Transaction Sequence No', width: 200 },
    { field: 'companyLocation', headerName: 'Company Location', width: 200 },
    { field: 'actionId', headerName: 'Action ID', width: 150 },
    { field: 'voucherTypeId', headerName: 'Voucher Type ID', width: 200 },
    { field: 'voucherNo', headerName: 'Voucher No', width: 150 },
    { field: 'voucherDate', headerName: 'Voucher Date', width: 200 },
    { field: 'vendorAccountNo', headerName: 'Vendor Account No', width: 200 },
    { field: 'book', headerName: 'Book', width: 150 },
    { field: 'invoiceNo', headerName: 'Invoice No', width: 200 },
    { field: 'invoiceDate', headerName: 'Invoice Date', width: 200 },
    { field: 'termCode', headerName: 'Term Code', width: 150 },
    { field: 'dueDate', headerName: 'Due Date', width: 200 },
    { field: 'referenceNo', headerName: 'Reference No', width: 200 },
    { field: 'currency', headerName: 'Currency', width: 150 },
    { field: 'totalDiscount', headerName: 'Total Discount', width: 150 },
    { field: 'totalTax', headerName: 'Total Tax', width: 150 },
    { field: 'voucherTotal', headerName: 'Voucher Total', width: 200 },
    { field: 'remarks', headerName: 'Remarks', width: 250 },
    { field: 'erpvoucherNo', headerName: 'ERP Voucher No', width: 200 },
    { field: 'createdDate', headerName: 'Created Date', width: 200 },
    { field: 'createdByUser', headerName: 'Created By User', width: 200 },
        
];

const Mpi21VoucherHeaderTable = () => {
    const { entities, setType, rowCount, setPaginationData, fetchEntitiesWithPagination, setInterfaceType, deleteEntity, resetEntity, pendingEntity, processEntity } = useGenericPaginationContext();
    const navigate = useNavigate();

    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');
    const location = useLocation();
    const [selectedItems, setSelectedItems] = useState([]);

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
        setType('Mpi21VoucherHeader');
    }, [setType]);

    useEffect(() => {
        var pathName = location.pathname.replace(/^\//, '');

        if (pathName && pathName !== tableUniqueName) {
            setTableName(pathName);
            fetchTableDisplayName(pathName).then(setTableDisplayName).catch(console.error);
        }

    }, [location.pathname, tableUniqueName]);

    return (
        <Container>
            <h2>{displayUniqueName}</h2>
            
            {/* <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-Mpi21VoucherHeader')}
            >
                Add Mpi21VoucherHeaders
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

export default Mpi21VoucherHeaderTable;
