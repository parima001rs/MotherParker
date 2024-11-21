import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSecondaryContext } from '../../../context/SecondaryContext';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { fetchTableDisplayName } from '../../../services/apiservice';
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
                    onClick={() => navigate(`/update-MpinforWrkCtrTables/${params.row.recid}`,{ state: { text: displayUniqueName } })}
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
    { field: 'sbRecid', headerName: 'SB Rec ID', width: 150 },
    { field: 'sb_Interface', headerName: 'SB Interface', width: 150 },
    { field: 'sbBatchnum', headerName: 'SB Batch Number', width: 200 },
    { field: 'sbCreateddatetime', headerName: 'SB Created Date Time', width: 200 },
    { field: 'sbProcessingstatus', headerName: 'SB Processing Status', width: 200 },
    { field: 'sbError', headerName: 'SB Error', width: 100, renderCell: (params) => (
      params.value === true ? (
          <Button
              color="primary"
              onClick={() => navigate(`/Mpinforerrorlog/${params.row.sbRecid}`)}
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
    { field: 'sbReftableid', headerName: 'SB Ref Table ID', width: 150 },
    { field: 'sbRefrecid', headerName: 'SB Ref Rec ID', width: 150 },
    { field: 'sbDataareaid', headerName: 'SB Data Area ID', width: 150 },
    { field: 'trxsequenceno', headerName: 'Trx Sequence No', width: 200 },
    { field: 'interfacenum', headerName: 'Interface Num', width: 150 },
    { field: 'recid', headerName: 'Rec ID', width: 150 },
    { field: 'createddatetime', headerName: 'Created Date Time', width: 200 },
    { field: 'interface', headerName: 'Interface', width: 150 },
    { field: 'tableid', headerName: 'Table ID', width: 100 },
    { field: 'batchnum', headerName: 'Batch Number', width: 200 },
    { field: 'processed', headerName: 'Processed', width: 100 },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    { field: 'routeGroupId', headerName: 'Route Group ID', width: 150 },
    { field: 'toHours', headerName: 'To Hours', width: 100 },
    { field: 'vendId', headerName: 'Vendor ID', width: 150 },
    { field: 'wrkCtrId', headerName: 'Work Center ID', width: 150 },
    { field: 'wrkCtrType', headerName: 'Work Center Type', width: 150 },
    { field: 'wkcId', headerName: 'WKC ID', width: 120 },
    { field: 'bottleneckResource', headerName: 'Bottleneck Resource', width: 200 },
    { field: 'capacity', headerName: 'Capacity', width: 120 },
    { field: 'capacityBatch', headerName: 'Capacity Batch', width: 150 },
    { field: 'capLimited', headerName: 'Capacity Limited', width: 150 },
    { field: 'effectivityPct', headerName: 'Effectivity Percentage', width: 200 },
    { field: 'errorPct', headerName: 'Error Percentage', width: 150 },
    { field: 'exclusive', headerName: 'Exclusive', width: 120 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'operationSchedPct', headerName: 'Operation Schedule Percentage', width: 250 },
    { field: 'pmfsequenceGroupId', headerName: 'PMF Sequence Group ID', width: 200 },
    { field: 'processCategoryId', headerName: 'Process Category ID', width: 250 },
    { field: 'processPerQty', headerName: 'Process Per Quantity', width: 200 },
    { field: 'processTime', headerName: 'Process Time', width: 150 },
    { field: 'propertyLimited', headerName: 'Property Limited', width: 180 },
    { field: 'qtyCategoryId', headerName: 'Quantity Category ID', width: 200 },
    { field: 'queueTimeBefore', headerName: 'Queue Time Before', width: 180 },
    { field: 'queueTimeAfter', headerName: 'Queue Time After', width: 180 },

    
];

const MpinforWrkCtrTableTable = () => {
    const { entities, setType, deleteEntity, resetEntity, pendingEntity, processEntity, triggerAdfPipeline } = useSecondaryContext();
    const navigate = useNavigate();

    const [selectedItems, setSelectedItems] = useState([]);
    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');
    const [loading, setLoading] = useState(false);

    //new display change
    const location = useLocation();

    const handleRowSelection = (itm) => {
        const selectedRows = entities.filter((row) => itm.includes(row.recid));
        const selectedSbRecids = selectedRows.map(row => row.sbRecid);    
        setSelectedItems(selectedSbRecids);
    };

    useEffect(() => {
        setType('MpinforWrkCtrTables');
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
                onClick={() => navigate('/add-MpinforWrkCtrTable')}
            >
                Add MpinforWrkCtrTable
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
                    slots={{ toolbar: GridToolbar }}                     
                />
            </div>
            
        </Container>
    );
};

export default MpinforWrkCtrTableTable;
