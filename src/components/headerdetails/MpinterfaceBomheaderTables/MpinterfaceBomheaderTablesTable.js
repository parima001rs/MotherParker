import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
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
                    onClick={() => navigate(`/view-MpinterfaceBomheaderTables/${params.row.recid}`)}
                >
                    <RemoveRedEyeSharp />
                </IconButton>
                
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-MpinterfaceBomheaderTables/${params.row.recid}`, { state: { text: displayUniqueName, interfaceName: currInterface  } })}
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
    { field: 'sbError', headerName: 'SB Error', width: 90 },
    { field: 'sbInterface', headerName: 'SB Interface', width: 150 },
    { field: 'sbRefrecid', headerName: 'SB Refrecid', width: 150 },
    { field: 'sbReftableid', headerName: 'SB Reftableid', width: 150 },
    { field: 'sbDataareaid', headerName: 'SB Dataareaid', width: 150 },
    { field: 'trxsequenceno', headerName: 'SB Trxsequenceno', width: 150 },
    { field: 'interfacenum', headerName: 'SB Interfacenum', width: 90 },
    { field: 'recid', headerName: 'Recid', width: 120 },
    { field: 'tableId', headerName: 'Table ID', width: 120 },
    { field: 'interface', headerName: 'Interface', width: 180 },
    { field: 'batchnum', headerName: 'Batch Number', width: 200 },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    { field: 'mpbomactivity', headerName: 'BOM Activity', width: 150 },
    { field: 'mpbomcreatedby', headerName: 'Created By', width: 150 },
    { field: 'mpbomcreatedon', headerName: 'Created On', width: 150 },
    { field: 'mpbomsiteid', headerName: 'Site ID', width: 120 },
    { field: 'mpbomitem', headerName: 'BOM Item', width: 150 },
    { field: 'mpbomitemdesc', headerName: 'Item Description', width: 200 },
    { field: 'mpbomitemname', headerName: 'Item Name', width: 200 },
    { field: 'mpbomprobatseqno', headerName: 'Probat Seq No.', width: 150 },
    { field: 'mpbomquantity1', headerName: 'Quantity 1', width: 150 },
    { field: 'mpbomquantity10', headerName: 'Quantity 10', width: 150 },
    { field: 'mpbomquantity11', headerName: 'Quantity 11', width: 150 },
    { field: 'mpbomquantity12', headerName: 'Quantity 12', width: 150 },
    { field: 'mpbomquantity13', headerName: 'Quantity 13', width: 150 },
    { field: 'mpbomquantity14', headerName: 'Quantity 14', width: 150 },
    { field: 'mpbomquantity2', headerName: 'Quantity 2', width: 150 },
    { field: 'mpbomquantity3', headerName: 'Quantity 3', width: 150 },
    { field: 'mpbomquantity4', headerName: 'Quantity 4', width: 150 },
    { field: 'mpbomquantity5', headerName: 'Quantity 5', width: 150 },
    { field: 'mpbomquantity6', headerName: 'Quantity 6', width: 150 },
    { field: 'mpbomquantity7', headerName: 'Quantity 7', width: 150 },
    { field: 'mpbomquantity8', headerName: 'Quantity 8', width: 150 },
    { field: 'mpbomquantity9', headerName: 'Quantity 9', width: 150 },
    { field: 'mpbomtransferred', headerName: 'Transferred', width: 150 },
    { field: 'mpbomzone', headerName: 'Zone', width: 120 },
    { field: 'mpcomponentitem1', headerName: 'Component Item 1', width: 200 },
    { field: 'mpcomponentitem10', headerName: 'Component Item 10', width: 200 },
    { field: 'mpcomponentitem11', headerName: 'Component Item 11', width: 200 },
    { field: 'mpcomponentitem12', headerName: 'Component Item 12', width: 200 },
    { field: 'mpcomponentitem13', headerName: 'Component Item 13', width: 200 },
    { field: 'mpcomponentitem14', headerName: 'Component Item 14', width: 200 },
    { field: 'mpcomponentitem2', headerName: 'Component Item 2', width: 200 },
    { field: 'mpcomponentitem3', headerName: 'Component Item 3', width: 200 },
    { field: 'mpcomponentitem4', headerName: 'Component Item 4', width: 200 },
    { field: 'mpcomponentitem5', headerName: 'Component Item 5', width: 200 },
    { field: 'mpcomponentitem6', headerName: 'Component Item 6', width: 200 },
    { field: 'mpcomponentitem7', headerName: 'Component Item 7', width: 200 },
    { field: 'mpcomponentitem8', headerName: 'Component Item 8', width: 200 },
    { field: 'mpcomponentitem9', headerName: 'Component Item 9', width: 200 },
    { field: 'createddatetime', headerName: 'Created Datetime', width: 150 },
    { field: 'processed', headerName: 'Processed', width: 120 },
    { field: 'bomrecid', headerName: 'BOM Recid', width: 180 },
    { field: 'mpqty', headerName: 'MP Quantity', width: 150 },

];

const MpinterfaceBomheaderTablesTable = () => {
    const { entities, setType, rowCount, setPaginationData, setInterfaceType, fetchEntitiesWithPagination, deleteEntity, resetEntity, pendingEntity, processEntity } = useGenericPaginationContext();
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
    }, [paginationModel, currInterface]);

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
        setType('MpinterfaceBomheaderTables');
       
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

    return (
        <Container>
            <h2>{displayUniqueName}</h2>
            
            {/* <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-MpinterfaceBomheaderTables')}
            >
                Add MpinterfaceBomheaderTabless
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
                    slots={{ toolbar: GridToolbar }}

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

export default MpinterfaceBomheaderTablesTable;
