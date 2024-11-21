import React, { useEffect,useState } from 'react';
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
                    onClick={() => navigate(`/update-MpinterfaceLocationInventory/${params.row.recid}`,{ state: { text: displayUniqueName } })}
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
    { field: 'batchnum', headerName: 'Batch Number', width: 180 },
    { field: 'processed', headerName: 'Processed', width: 100 },
    { field: 'mplocinvloccreatedby', headerName: 'Created By', width: 150 },
    { field: 'mplocinvloccreateddate', headerName: 'Created Date', width: 150 },
    { field: 'mplocinvloccreatedtime', headerName: 'Created Time', width: 150 },
    { field: 'mplocinvlocfacility', headerName: 'Facility', width: 150 },
    { field: 'mplocinvlocitemnumber', headerName: 'Item Number', width: 150 },
    { field: 'mplocinvloclocation', headerName: 'Location', width: 150 },
    { field: 'mplocinvloclotnumber', headerName: 'Lot Number', width: 150 },
    { field: 'mplocinvlocquantity', headerName: 'Quantity', width: 150 },
    { field: 'mplocinvlocsequenceno', headerName: 'Sequence No', width: 150 },
    { field: 'mplocinvlocuserid', headerName: 'User ID', width: 150 },
    { field: 'mplocinvlocwarehouse', headerName: 'Warehouse', width: 150 },
    { field: 'mplocinvloczone', headerName: 'Zone', width: 150 },
    { field: 'mplocinvlotname', headerName: 'Lot Name', width: 150 },
    { field: 'mplocinvloctransferred', headerName: 'Transferred', width: 150 },
    { field: 'dataareaid', headerName: 'Dataarea Id', width: 150 },
    { field: 'tableid', headerName: 'Table Id', width: 150 },





];

const MpinterfaceLocationInventory = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();

    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');

    //new display change
    const location = useLocation();

    useEffect(() => {
        setType('MpinterfaceLocationInventory');
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
                onClick={() => navigate('/add-MpinterfaceLocationInventory',{ state: { text: displayUniqueName } })}
            >
                Add MpinterfaceLocationInventory
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={entities} columns={columns(navigate, deleteEntity,displayUniqueName)} pageSize={5} checkboxSelection getRowId={(row) => row.recid} 
                    slots={{ toolbar: GridToolbar }}
                />
            </div>
        </Container>
    );
};

export default MpinterfaceLocationInventory;
