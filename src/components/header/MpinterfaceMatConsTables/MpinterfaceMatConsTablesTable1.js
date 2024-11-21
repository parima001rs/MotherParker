import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { fetchTableDisplayName } from '../../../services/apiservice';


// Updated columns with new fields
const columns = (navigate, deleteEntity,displayUniqueName) => [
    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-MpinterfaceMatConsTables/${params.row.recid}`,{ state: { text: displayUniqueName } })}
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
    { field: 'recid', headerName: 'Recid', width: 150 },
    { field: 'createddatetime', headerName: 'Created Datetime', width: 150 },
    { field: 'interface', headerName: 'Interface', width: 150 },
    { field: 'tableId', headerName: 'Table ID', width: 150 },
    { field: 'batchnum', headerName: 'Batch Number', width: 200 },
    { field: 'processed', headerName: 'Processed', width: 150 },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    { field: 'itemno', headerName: 'Item No', width: 150 },
    { field: 'actionid', headerName: 'Action ID', width: 150 },
    { field: 'companylocation', headerName: 'Company Location', width: 150 },
    { field: 'mpmatconsbatchid', headerName: 'Batch ID', width: 150 },
    { field: 'mpmatconsbatchorderno', headerName: 'Order No', width: 150 },
    { field: 'mpmatconscustomercode', headerName: 'Customer Code', width: 150 },
    { field: 'mpmatconsdestination', headerName: 'Destination', width: 150 },
    { field: 'mpmatconsendflag', headerName: 'End Flag', width: 150 },
    { field: 'mpmatconslocation', headerName: 'Location', width: 150 },
    { field: 'mpmatconsmasterid', headerName: 'Master ID', width: 150 },
    { field: 'mpmatconsnumberseq', headerName: 'Number Sequence', width: 150 },
    { field: 'mpmatconsordertype', headerName: 'Order Type', width: 150 },
    { field: 'mpmatconspalletid', headerName: 'Pallet ID', width: 150 },
    { field: 'mpmatconsrecordingdate', headerName: 'Recording Date', width: 150 },
    { field: 'mpmatconsscustomercode', headerName: 'Customer Code', width: 150 },
    { field: 'mpmatconssempty', headerName: 'Empty', width: 150 },
    { field: 'mpmatconsslotname', headerName: 'Slot Name', width: 150 },
    { field: 'mpmatconssource', headerName: 'Source', width: 150 },
    { field: 'mpmatconssproductid', headerName: 'Product ID', width: 150 },
    { field: 'mpmatconsstartflag', headerName: 'Start Flag', width: 150 },
    { field: 'mpmatconsstypecell', headerName: 'Type Cell', width: 150 },
    { field: 'mpmatconstransfered', headerName: 'Transfered', width: 150 },
    { field: 'mpmatconstranstime', headerName: 'Transfer Time', width: 150 },
    { field: 'mpmatconsweight', headerName: 'Weight', width: 150 },
    { field: 'mpmatConsFacility', headerName: 'Facility', width: 150 },
    { field: 'mpinterfacelegacyid', headerName: 'Legacy ID', width: 150 },
    
];

const MpinterfaceMatConsTablesTable = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();

    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');

    //new display change
    const location = useLocation();

    useEffect(() => {
        setType('MpinterfaceMatConsTables');
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
                onClick={() => navigate('/add-MpinterfaceMatConsTables',{ state: { text: displayUniqueName } })}
            >
                Add MpinterfaceMatConsTables
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={entities}
                    columns={columns(navigate, deleteEntity,displayUniqueName)}
                    pageSize={5}
                    checkboxSelection
                    getRowId={(row) => row.recid} // Adjust as needed
                    slots={{ toolbar: GridToolbar }}
                />
            </div>
        </Container>
    );
};

export default MpinterfaceMatConsTablesTable;
