import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSecondaryContext } from '../../../context/SecondaryContext';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { fetchTableDisplayName } from '../../../services/apiservice';
import { RemoveRedEyeSharp } from '@mui/icons-material';


const columns = (navigate, deleteEntity, displayUniqueName, currInterface) => [
    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => (
            <>

                <IconButton
                    color="primary"
                    onClick={() => navigate(`/view-MpinforBomheader/${params.row.recid}`)}
                >
                    <RemoveRedEyeSharp />
                </IconButton>
                
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-MpinforBomheader/${params.row.recid}`, { state: { text: displayUniqueName, interfaceName: currInterface  } })}
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
    { field: 'active', headerName: 'Active', width: 100 },
    { field: 'approved', headerName: 'Approved', width: 100 },
    { field: 'approver', headerName: 'Approver', width: 150 },
    { field: 'pmfBatchSize', headerName: 'PMF Batch Size', width: 150 },
    { field: 'bomid', headerName: 'BOM ID', width: 120 },
    { field: 'pmfBulkParent', headerName: 'PMF Bulk Parent', width: 180 },
    { field: 'pmfCoByVarAllow', headerName: 'PMF Co-By Var Allow', width: 200 },
    { field: 'construction', headerName: 'Construction', width: 150 },
    { field: 'pmfFormulaChangeDate', headerName: 'PMF Formula Change Date', width: 200 },
    { field: 'pmfFormulaMultiple', headerName: 'PMF Formula Multiple', width: 180 },
    { field: 'pmfformulaversioncalculation', headerName: 'PMF Formula Version Calculation', width: 250 },
    { field: 'fromdate', headerName: 'From Date', width: 150 },
    { field: 'fromQty', headerName: 'From Quantity', width: 130 },
    { field: 'inventDimId', headerName: 'Invent Dim ID', width: 150 },
    { field: 'itemId', headerName: 'Item ID', width: 100 },
    { field: 'itemname', headerName: 'Item Name', width: 180 },
    { field: 'inventsiteId', headerName: 'Invent Site ID', width: 150 },
    { field: 'toDate', headerName: 'To Date', width: 150 },
    { field: 'pmfTotalCostAllocation', headerName: 'PMF Total Cost Allocation', width: 230 },
    { field: 'pmfTypeId', headerName: 'PMF Type ID', width: 120 },
    { field: 'pmfYieldPct', headerName: 'PMF Yield Percentage', width: 180 },
    { field: 'name', headerName: 'Name', width: 150 }
  


];

const MpinforBomheaderTable = () => {
    const { entities, setType, setInterfaceType, deleteEntity, resetEntity, pendingEntity, processEntity } = useSecondaryContext();
    const navigate = useNavigate();

    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');
    const [currInterface, setInterface] = useState('');
    const location = useLocation();
    const [selectedItems, setSelectedItems] = useState([]);

    const handleRowSelection = (itm) => {
        const selectedRows = entities.filter((row) => itm.includes(row.recid));
        const selectedSbRecids = selectedRows.map(row => row.sbRecid);    
        setSelectedItems(selectedSbRecids);
    };

    useEffect(() => {
        setType('MpinforBomheader');
       
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
                onClick={() => navigate('/add-MpinforBomheader')}
            >
                Add MpinforBomheaders
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
                />
            </div>

        </Container>
    );
};

export default MpinforBomheaderTable;
