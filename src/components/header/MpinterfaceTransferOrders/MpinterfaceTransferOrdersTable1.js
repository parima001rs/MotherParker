import React, { useEffect ,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { fetchTableDisplayName } from '../../../services/apiservice';

// Define the columns with updated key names
const columns = (navigate, deleteEntity,displayUniqueName) => [
    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-MpinterfaceTransferOrders/${params.row.recid}`,{ state: { text: displayUniqueName } })}
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
    { field: 'tableid', headerName: 'Table ID', width: 150 },
    { field: 'batchnum', headerName: 'Batch Number', width: 200 },
    { field: 'processed', headerName: 'Processed', width: 150 },
    { field: 'mptransactivity', headerName: 'MP Trans Activity', width: 150 },
    { field: 'mptranscontractnumber', headerName: 'MP Trans Contract Number', width: 150 },
    { field: 'mptransdeliveryqty', headerName: 'MP Trans Delivery Quantity', width: 150 },
    { field: 'mptransitemid', headerName: 'MP Trans Item ID', width: 150 },
    { field: 'mptranslotnumber', headerName: 'MP Trans Lot Number', width: 150 },
    { field: 'mptransorderedqty', headerName: 'MP Trans Ordered Quantity', width: 150 },
    { field: 'mptransordernumber', headerName: 'MP Trans Order Number', width: 150 },
    { field: 'mptranspocontainer', headerName: 'MP Trans PO Container', width: 150 },
    { field: 'mptranspomarks', headerName: 'MP Trans PO Marks', width: 150 },
    { field: 'mptransponumber', headerName: 'MP Trans PO Number', width: 150 },
    { field: 'mptransprobatseqno', headerName: 'MP Trans Probat Seq No', width: 150 },
    { field: 'mptransscheduleddate', headerName: 'MP Trans Scheduled Date', width: 150 },
    { field: 'mptranstransferred', headerName: 'MP Trans Transferred', width: 150 },
    { field: 'mptranszone', headerName: 'MP Trans Zone', width: 150 },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    { field: 'siteId', headerName: 'Site ID', width: 150 },
    
];

const MpinterfaceTransferOrdersTable = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();

    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');

    
    const location = useLocation();

    useEffect(() => {
        setType('MpinterfaceTransferOrders');
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
                onClick={() => navigate('/add-MpinterfaceTransferOrders',{ state: { text: displayUniqueName } })}
            >
                Add MpinterfaceTransferOrders
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={entities}
                    columns={columns(navigate, deleteEntity,displayUniqueName)}
                    pageSize={5}
                    checkboxSelection
                    getRowId={(row) => row.recid}
                    slots={{ toolbar: GridToolbar }}
                />
            </div>
        </Container>
    );
};

export default MpinterfaceTransferOrdersTable;
