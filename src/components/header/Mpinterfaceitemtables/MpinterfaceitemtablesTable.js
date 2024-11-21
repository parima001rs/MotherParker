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
                    onClick={() => navigate(`/update-Mpinterfaceitemtables/${params.row.recid}`, { state: { text: displayUniqueName, interfaceName: currInterface } })}
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
    { field: 'recid', headerName: 'Recid', width: 120 },
    { field: 'createddatetime', headerName: 'Created Datetime', width: 150 },
    { field: 'interface', headerName: 'Interface', width: 150 },
    { field: 'batchnum', headerName: 'Batch Number', width: 200 },
    { field: 'dataareaid', headerName: 'Dataareaid', width: 150 },
    { field: 'processed', headerName: 'Processed', width: 120 },
    { field: 'mpitemprobatseqno', headerName: 'Probat Seq No', width: 180 },
    { field: 'relationtype', headerName: 'Relation Type', width: 180 },
    { field: 'mpitemabccode', headerName: 'ABC Code', width: 150 },
    { field: 'mpitemactivity', headerName: 'Activity', width: 180 },
    { field: 'mpitemclass', headerName: 'Class', width: 150 },
    { field: 'mpitemconditionstatuscode', headerName: 'Condition Status', width: 180 },
    { field: 'mpitemcostingfacility', headerName: 'Costing Facility', width: 180 },
    { field: 'mpitemcreatedon', headerName: 'Created On', width: 150 },
    { field: 'mpitemdefaultwarehouse', headerName: 'Default Warehouse', width: 200 },
    { field: 'mpitemdesc1', headerName: 'Description 1', width: 180 },
    { field: 'mpitemfacility', headerName: 'Facility', width: 150 },
    { field: 'mpitemfairtradecompliance', headerName: 'Fair Trade Compliance', width: 180 },
    { field: 'mpitemflavorgrind', headerName: 'Flavor Grind', width: 150 },
    { field: 'mpitemgrossweight', headerName: 'Gross Weight', width: 150 },
    { field: 'mpitemgroupcode', headerName: 'Group Code', width: 150 },
    { field: 'mpitemgroupsalesanalysisfield2', headerName: 'Group Sales Analysis Field 2', width: 220 },
    { field: 'mpitemitemnumber', headerName: 'Item Number', width: 150 },
    { field: 'mpitemlabelweightuom', headerName: 'Label Weight UOM', width: 180 },
    { field: 'mpitemlastmaintaindate', headerName: 'Last Maintain Date', width: 150 },
    { field: 'mpitemlastmaintaintime', headerName: 'Last Maintain Time', width: 150 },
    { field: 'mpitemmajorclass', headerName: 'Major Class', width: 150 },
    { field: 'mpitemmaterialcontrol', headerName: 'Material Control', width: 180 },
    { field: 'mpitemmonthtodateadj', headerName: 'Month to Date Adjustment', width: 200 },
    { field: 'mpitemmonthtodateissues', headerName: 'Month to Date Issues', width: 200 },
    { field: 'mpitemmonthtodaterec', headerName: 'Month to Date Received', width: 200 },
    { field: 'mpitemnetnetweight', headerName: 'Net Net Weight', width: 180 },
    { field: 'mpitemnetweight', headerName: 'Net Weight', width: 150 },
    { field: 'mpitemopeningbalance', headerName: 'Opening Balance', width: 180 },
    { field: 'mpitemorganicitem', headerName: 'Organic Item', width: 150 },
    { field: 'mpitempackagespersaleableunit', headerName: 'Packages per Saleable Unit', width: 220 },
    { field: 'mpitempackagingdesccode', headerName: 'Packaging Desc Code', width: 180 },
    { field: 'mpitempacksize', headerName: 'Pack Size', width: 150 },
    { field: 'mpitempallettie', headerName: 'Pallet Tie', width: 150 },
    { field: 'mpitempallettier', headerName: 'Pallet Tier', width: 150 },
    { field: 'mpitemperpalletqty', headerName: 'Per Pallet Qty', width: 150 },
    { field: 'mpitemproductfamily', headerName: 'Product Family', width: 150 },
    { field: 'mpitemproductionshelflifedays', headerName: 'Production Shelf Life Days', width: 220 },
    { field: 'mpitempurchunitofmeasure', headerName: 'Purch Unit of Measure', width: 180 },
    { field: 'mpitemsaleableunitpercase', headerName: 'Saleable Unit per Case', width: 180 },
    { field: 'mpitemsalesanalysis', headerName: 'Sales Analysis', width: 150 },
    { field: 'mpitemscccode', headerName: 'SCC Code', width: 150 },
    { field: 'mpitemshipshelflifedays', headerName: 'Ship Shelf Life Days', width: 180 },
    { field: 'mpitemstdcost', headerName: 'Standard Cost', width: 150 },
    { field: 'mpitemstockinguom', headerName: 'Stocking UOM', width: 150 },
    { field: 'mpitemtransferred', headerName: 'Transferred', width: 120 },
    { field: 'mpitemtype', headerName: 'Type', width: 120 },
    { field: 'mpitemupccode', headerName: 'UPC Code', width: 150 },
    { field: 'mpitemworkcenter', headerName: 'Work Center', width: 150 },
    { field: 'mpitemzone', headerName: 'Zone', width: 120 },
    { field: 'mpitemnetnetweightuom', headerName: 'Net Net Weight UOM', width: 180 },
    { field: 'mpitemgrouptechcode', headerName: 'Group Tech Code', width: 180 },
    { field: 'mpitemitemgroupcode', headerName: 'Item Group Code', width: 180 },
    { field: 'mpitemnetweightanduom', headerName: 'Net Weight and UOM', width: 200 },
    { field: 'mpitemgrossdepth', headerName: 'Gross Depth', width: 150 },
    { field: 'mpitemgrossheight', headerName: 'Gross Height', width: 150 },
    { field: 'mpitemgrosswidth', headerName: 'Gross Width', width: 150 },

];

const MpinterfaceitemtablesTable = () => {
    const { entities, setType, rowCount, setPaginationData, fetchEntitiesWithPagination, setInterfaceType, deleteEntity, resetEntity, pendingEntity, processEntity, triggerAdfPipeline } = useGenericPaginationContext();
    const navigate = useNavigate();

    const [selectedItems, setSelectedItems] = useState([]);
    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');
    const [currInterface, setInterface] = useState('');

    
    const [loading, setLoading] = useState(false);
    const [paginationModel, setPaginationModel] = useState({
        pageSize: 100,
        page: 0,
    });

    useEffect(() => {
        //setType('Mpinterfaceitemtables');
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
    //new display change
    const location = useLocation();

    useEffect(() => {
        setType('Mpinterfaceitemtables');
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
                onClick={() => navigate('/add-Mpinterfaceitemtables')}
            >
                Add Mpinterfaceitemtables
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

export default MpinterfaceitemtablesTable;
