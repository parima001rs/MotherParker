import React, { useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { fetchTableDisplayName } from '../../../services/apiservice';

const columns = (navigate, deleteEntity,displayUniqueName) => [

    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => (


            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-MpinterfaceItemReceipt/${params.row.recid}`,{ state: { text: displayUniqueName } } )}
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
    { field: 'createddatetime', headerName: 'Created DateTime', width: 150 },
    { field: 'interface', headerName: 'Interface', width: 120 },
    { field: 'tableid', headerName: 'Table ID', width: 120 },
    { field: 'batchnum', headerName: 'Batch Number', width: 180 },
    { field: 'processed', headerName: 'Processed', width: 100 },
    { field: 'siteId', headerName: 'Site ID', width: 100 },
    { field: 'mptobagmarks', headerName: 'Bag Marks', width: 150 },
    { field: 'mptobatchnumber', headerName: 'Batch Number', width: 180 },
    { field: 'mptocontainerno', headerName: 'Container No', width: 150 },
    { field: 'mptocontractno', headerName: 'Contract No', width: 150 },
    { field: 'mptodata13', headerName: 'Data 13', width: 150 },
    { field: 'mptodata2', headerName: 'Data 2', width: 150 },
    { field: 'mptodata3', headerName: 'Data 3', width: 150 },
    { field: 'mptodestination', headerName: 'Destination', width: 150 },
    { field: 'mptoitemnumber', headerName: 'Item Number', width: 150 },
    { field: 'mptoproexportid', headerName: 'Pro Export ID', width: 150 },
    { field: 'mptopurchnumber', headerName: 'Purchase Number', width: 150 },
    { field: 'mptoquantity', headerName: 'Quantity', width: 100 },
    { field: 'mptorecorddate', headerName: 'Record Date', width: 150 },
    { field: 'mptotransferorderno', headerName: 'Transfer Order No', width: 180 },
    { field: 'mptotransferred', headerName: 'Transferred', width: 100 },
    { field: 'mptozone', headerName: 'Zone', width: 100 },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    

    
];

const MpinterfaceItemReceipt = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');

    //new display change
    const location = useLocation();

    useEffect(() => {
        setType('MpinterfaceItemReceipt');
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
                onClick={() => navigate('/add-MpinterfaceItemReceipt',{ state: { text: displayUniqueName } } )}
            >
                Add MpinterfaceItemReceipt
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={entities} columns={columns(navigate, deleteEntity,displayUniqueName)} pageSize={5} checkboxSelection getRowId={(row) => row.recid} 
                slots={{ toolbar: GridToolbar }}
                    />
            </div>
        </Container>
    );
};

export default MpinterfaceItemReceipt;
