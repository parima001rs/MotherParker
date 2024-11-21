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


const columns = (navigate, deleteEntity, displayUniqueName, currInterface) => [
    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => (
            <>

                <IconButton
                    color="primary"
                    onClick={() => navigate(`/view-Mpi21servicepoinheader/${params.row.recid}`)}
                >
                    <RemoveRedEyeSharp />
                </IconButton>
                
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-Mpi21servicepoinheader/${params.row.recid}`, { state: { text: displayUniqueName, interfaceName: currInterface  } })}
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
    { field: 'interfacenum', headerName: 'SB Interfacenum', width: 90 },
    { field: 'recid', headerName: 'Recid', width: 150 },
    { field: 'createddatetime', headerName: 'Created DateTime', width: 200 },
    { field: 'interface', headerName: 'Interface', width: 150 },
    { field: 'tableid', headerName: 'Table ID', width: 150 },
    { field: 'batchnum', headerName: 'Batch Number', width: 150 },
    { field: 'processed', headerName: 'Processed', width: 150 },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    { field: 'actionid', headerName: 'Action ID', width: 150 },
    { field: 'companylocation', headerName: 'Company Location', width: 200 },
    { field: 'currency', headerName: 'Currency', width: 150 },
    { field: 'erpserviceponumber', headerName: 'ERP Service PO Number', width: 200 },
    { field: 'erpshoporderno', headerName: 'ERP Shop Order Number', width: 200 },
    { field: 'itemno', headerName: 'Item Number', width: 150 },
    { field: 'locationid', headerName: 'Location ID', width: 150 },
    { field: 'mpi21exportedtoi21', headerName: 'MPI21 Exported to I21', width: 200 },
    { field: 'processname', headerName: 'Process Name', width: 200 },
    { field: 'quantity', headerName: 'Quantity', width: 150 },
    { field: 'quantityuom', headerName: 'Quantity UOM', width: 150 },
    { field: 'servicecontractno', headerName: 'Service Contract Number', width: 200 },
    { field: 'siteid', headerName: 'Site ID', width: 150 },
    { field: 'storagelocation', headerName: 'Storage Location', width: 200 },
    { field: 'vendoraccountno', headerName: 'Vendor Account Number', width: 200 },
    { field: 'workorderno', headerName: 'Work Order Number', width: 200 },
    { field: 'createdby', headerName: 'Created By', width: 150 },
    { field: 'book', headerName: 'Book', width: 150 },
    { field: 'trxsequenceno', headerName: 'Transaction Sequence Number', width: 200 },
    { field: 'vendaccount', headerName: 'Vendor Account', width: 150 }

];

const Mpi21servicepoinheaderTable = () => {
    const { entities, setType, rowCount, setPaginationData, fetchEntitiesWithPagination, setInterfaceType, deleteEntity, resetEntity, pendingEntity, processEntity } = useGenericPaginationContext();
    const navigate = useNavigate();

    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');
    const [currInterface, setInterface] = useState('');
    const location = useLocation();
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
        setType('Mpi21servicepoinheader');
       
    }, [setType]);

    useEffect(() => {
        var pathName = location.pathname.replace(/^\//, '');

        if (pathName && pathName !== tableUniqueName) {
            setTableName(pathName);
            fetchTableDisplayName(pathName).then(setTableDisplayName).catch(console.error);
        }

        const searchParams = new URLSearchParams(location.search);
        const interfaceParam = searchParams.get('interface');
        setInterfaceType(interfaceParam);
        setInterface(interfaceParam);

    }, [location.pathname, tableUniqueName]);

    return (
        <Container>
            <h2>{displayUniqueName}</h2>
            
            {/* <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-Mpi21servicepoinheader')}
            >
                Add Mpi21servicepoinheaders
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
                />
            </div>
            <ToastContainer />

        </Container>
    );
};

export default Mpi21servicepoinheaderTable;
