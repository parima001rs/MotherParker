import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSecondaryContext } from '../../context/SecondaryContext';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';

const columns = (navigate, deleteEntity) => [
    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-MpinterfaceBomheaderTables/${params.row.recid}`)}
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
    
    { field: 'sbProcessingstatus', headerName: 'SB Processingstatus', width: 100, editable: true  },
    { field: 'sbError', headerName: 'SB Error', width: 90 },
    { field: 'sbInterface', headerName: 'SB Interface', width: 150 },
    
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

    { field: 'sbCreateddatetime', headerName: 'SB Createddatetime', width: 150 },
    { field: 'sbRefrecid', headerName: 'SB Refrecid', width: 150 },
    { field: 'sbReftableid', headerName: 'SB Reftableid', width: 150 },
    { field: 'sbDataareaid', headerName: 'SB Dataareaid', width: 150 },
    { field: 'sbTrxsequenceno', headerName: 'SB Trxsequenceno', width: 150 },
    { field: 'Interfacenum', headerName: 'SB Interfacenum', width: 90 },
    
    
];

const ProbatStagingbaseTable = () => {
    const { entities, setType, deleteEntity } = useSecondaryContext();
    const navigate = useNavigate();

    useEffect(() => {
        setType('Stagingbase');
    }, [setType]);

    return (
        <div>
            {/* <h2> Stagingbase </h2> */}
            {/* <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-MpinterfaceBomheaderTables')}
            >
                Add MpinterfaceBomheaderTables
            </Button> */}
            <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={entities}
                    columns={columns(navigate, deleteEntity)}
                    pageSize={5}
                    checkboxSelection
                    getRowId={(row) => row.recid}
                />
            </div>
        </div>
        
    );
};

export default ProbatStagingbaseTable;
