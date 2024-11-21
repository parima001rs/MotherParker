import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';
import { useLocation } from 'react-router-dom';
import { fetchTableDisplayName } from '../../../services/apiservice';

const columns = (navigate, deleteEntity, displayUniqueName) => [
    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-MpinterfaceAaforecast/${params.row.recid}`,{ state: { text: displayUniqueName } })}
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
                onClick={() => navigate(`/MPProbatErrorLog/${params.row.sbRecid}`)}
                style={{ textTransform: 'none', padding: 0, minWidth: 0}}
            >
                True
            </Button>
        ) : (
            params.value === false ? "False" : (params.value)
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
    { field: 'tableid', headerName: 'Table ID', width: 150 },
    { field: 'batchnum', headerName: 'Batch Number', width: 200 },
    { field: 'processed', headerName: 'Processed', width: 150 },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    { field: 'mpaaitemlvl1', headerName: 'MP AA Item Level 1', width: 180 },
    { field: 'mpaaotherattribute', headerName: 'MP AA Other Attribute', width: 200 },
    { field: 'mpaapyramid', headerName: 'MP AA Pyramid', width: 150 },
    { field: 'mpalt1', headerName: 'MP Alt 1', width: 120 },
    { field: 'mpalt2', headerName: 'MP Alt 2', width: 120 },
    { field: 'mpalternateabc1', headerName: 'MP Alternate ABC 1', width: 180 },
    { field: 'mpalternateabc3', headerName: 'MP Alternate ABC 3', width: 180 },
    { field: 'mpcasequantity', headerName: 'MP Case Quantity', width: 150 },
    { field: 'mpconvfactor', headerName: 'MP Conv Factor', width: 150 },
    { field: 'mpconvoption', headerName: 'MP Conv Option', width: 150 },
    { field: 'mpcubeuom', headerName: 'MP Cube UOM', width: 150 },
    { field: 'mpcustextnumber', headerName: 'MP Cust Ext Number', width: 180 },
    { field: 'mpdescription', headerName: 'MP Description', width: 250 },
    { field: 'mpfield1', headerName: 'MP Field 1', width: 150 },
    { field: 'mpfield10', headerName: 'MP Field 10', width: 120 },
    { field: 'mpfield11', headerName: 'MP Field 11', width: 120 },
    { field: 'mpfield12', headerName: 'MP Field 12', width: 120 },
    { field: 'mpfield13', headerName: 'MP Field 13', width: 120 },
    { field: 'mpfield14', headerName: 'MP Field 14', width: 120 },
    { field: 'mpfield15', headerName: 'MP Field 15', width: 120 },
    { field: 'mpfield16', headerName: 'MP Field 16', width: 120 },
    { field: 'mpfield17', headerName: 'MP Field 17', width: 120 },
    { field: 'mpfield18', headerName: 'MP Field 18', width: 120 },
    { field: 'mpfield19', headerName: 'MP Field 19', width: 120 },
    { field: 'mpfield2', headerName: 'MP Field 2', width: 150 },
    { field: 'mpfield20', headerName: 'MP Field 20', width: 150 },
    { field: 'mpfield21', headerName: 'MP Field 21', width: 150 },
    { field: 'mpfield22', headerName: 'MP Field 22', width: 150 },
    { field: 'mpfield23', headerName: 'MP Field 23', width: 250 },
    { field: 'mpfield24', headerName: 'MP Field 24', width: 150 },
    { field: 'mpfield25', headerName: 'MP Field 25', width: 150 },
    { field: 'mpfield26', headerName: 'MP Field 26', width: 150 },
    { field: 'mpfield27', headerName: 'MP Field 27', width: 150 },
    { field: 'mpfield28', headerName: 'MP Field 28', width: 150 },
    { field: 'mpfield29', headerName: 'MP Field 29', width: 150 },
    { field: 'mpfield3', headerName: 'MP Field 3', width: 150 },
    { field: 'mpfield30', headerName: 'MP Field 30', width: 150 },
    { field: 'mpunitcost', headerName: 'MP Unit Cost', width: 150 },
    { field: 'mpunitcube', headerName: 'MP Unit Cube', width: 150 },
    { field: 'mpunitprice', headerName: 'MP Unit Price', width: 150 },
    { field: 'mpunitsperpallet', headerName: 'MP Units Per Pallet', width: 180 },
    { field: 'mpunitweight', headerName: 'MP Unit Weight', width: 150 },
    { field: 'mpupccode', headerName: 'MP UPC Code', width: 150 },
    { field: 'mpvolume', headerName: 'MP Volume', width: 150 },
    { field: 'mpwtuom', headerName: 'MP WT UOM', width: 150 },
    { field: 'mppalletsperunit', headerName: 'MP Pallets Per Unit', width: 180 },
    { field: 'mpprimaryabcs', headerName: 'MP Primary ABCs', width: 150 },
    { field: 'mpfd40itemsalesdivision', headerName: 'MP FD40 Item Sales Division', width: 150 },
    { field: 'mpsalesrepuserid', headerName: 'MP Sales Rep User ID', width: 150 },

    
];

const MpinterfaceAaforecastTable = () => {
    const { entities, setType, rowCount, setPaginationData, fetchEntitiesWithPagination, deleteEntity, resetEntity, pendingEntity, processEntity, triggerAdfPipeline } = useGenericPaginationContext();
    const navigate = useNavigate();
    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');
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
    }, [paginationModel]);

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
        setType('MpinterfaceAaforecast');
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
        <Container>
            <h2>{displayUniqueName}</h2>
            {/* <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-MpinterfaceAaforecast')}
            >
                Add MpinterfaceAaforecast
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

            <div style={{ height: 400, width: '100%' }}>
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
                    slots={{ toolbar: GridToolbar }}
                />
            </div>
            <ToastContainer />
            
        </Container>
    );
};

export default MpinterfaceAaforecastTable;
