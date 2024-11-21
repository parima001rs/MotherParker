import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { fetchTableDisplayName } from '../../../services/apiservice';
import ProbatStagingbaseTable from '../../stagingbase/ProbatStagingbaseTable';
import { grey } from '@mui/material/colors';

// Define columns with the updated keys
const columns = (navigate, deleteEntity, displayUniqueName) => [
    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-MpinterfaceBomheaderTables/${params.row.recid}`, { state: { text: displayUniqueName } })}
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
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();

    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');

    //new display change
    const location = useLocation();

    useEffect(() => {
        setType('MpinterfaceBomheaderTables');
    }, [setType]);

    useEffect(() => {
        var pathName = location.pathname.replace(/^\//, ''); // Remove leading slash

        if (pathName && pathName !== tableUniqueName) {
            setTableName(pathName);
            fetchTableDisplayName(pathName).then(setTableDisplayName).catch(console.error);
        }
    }, [location.pathname, tableUniqueName]);


    return (
        <Container>
            <h2>{displayUniqueName}</h2>
            <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-MpinterfaceBomheaderTables', { state: { text: displayUniqueName } })}
            >
                Add
            </Button>

            

            <Button
                style={{ marginBottom: 10, marginLeft: 20 }}
                variant="outlined"
                
                
                onClick={() => navigate('/add-MpinterfaceBomheaderTables', { state: { text: displayUniqueName } })}
            >
                Reset
            </Button>

            <Button
                style={{ marginBottom: 10, marginLeft: 10 }}
                variant="contained"
                color="secondary"
                
                
                onClick={() => navigate('/add-MpinterfaceBomheaderTables', { state: { text: displayUniqueName } })}
            >
                Pending
            </Button>

            <Button
                style={{ marginBottom: 10, marginLeft: 10 }}
                variant="contained"
                color="success"
                
                
                onClick={() => navigate('/add-MpinterfaceBomheaderTables', { state: { text: displayUniqueName } })}
            >
                Processed
            </Button>
            {/* <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={entities}
                    columns={columns(navigate, deleteEntity, displayUniqueName)}
                    pageSize={5}
                    checkboxSelection
                    getRowId={(row) => row.recid}
                />
            </div> */}
            <ProbatStagingbaseTable />
        </Container>
    );
};

export default MpinterfaceBomheaderTablesTable;
