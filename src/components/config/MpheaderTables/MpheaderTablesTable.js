import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
//new display change
import { useLocation } from 'react-router-dom';
import { fetchTableDisplayName } from '../../../services/apiservice';

//new display change
const columns = (navigate, deleteEntity, displayUniqueName) => [

    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-MpheaderTables/${params.row.tableId}`, { state: { text: displayUniqueName } } )}
                >
                    <Edit />
                </IconButton>
                <IconButton
                    color="secondary"
                    onClick={() => deleteEntity(params.row.tableId)}
                >
                    <Delete />
                </IconButton>
            </>
        ),
    },
    { field: 'tableId', headerName: 'TableId', width: 150 },
    { field: 'tableName', headerName: 'TableName', width: 250 },

];

const MpheaderTablesTable = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();

    //new display change
    const [displayUniqueName, setTableDisplayName] = useState([]);
    const [tableUniqueName, setTableName] = useState('');

    //new display change
    const location = useLocation();
    console.log(location);

    useEffect(() => {
        setType('MpheaderTables');
    }, [setType]);

    //new display change
    useEffect(() => {
        var pathName = location.pathname.replace(/^\//, ''); // Remove leading slash
        if(pathName == "")
        {
            pathName = "MpheaderTables";
        }
        if (pathName && pathName !== tableUniqueName) {
            setTableName(pathName);
            fetchTableDisplayName(pathName).then(setTableDisplayName).catch(console.error);
        }
    }, [location.pathname, tableUniqueName]);


    // useEffect(() => {
    //     console.log(entities);
    //     const pathName = location.pathname.replace(/^\//, ''); // Remove leading slash
    //     console.log(pathName);
    //     if (pathName && pathName !== tableName) {
    //         setTableName(pathName);
    //         fetchTableDisplayName(pathName).then(setTableDisplayName).catch(console.error);
    //     }
    //     setType('MpheaderTables');
    // }, [location.pathname, tableName, setType]);

    return (
        <Container>
            {/* <h2>MpheaderTables Table</h2> */}

            {/* new display change */}
            <h2> {displayUniqueName} </h2>
             <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-MpheaderTables', { state: { text: displayUniqueName } })}
            >
                Add MpheaderTables
            </Button> 
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={entities} columns={columns(navigate, deleteEntity, displayUniqueName)} pageSize={5} checkboxSelection getRowId={(row) => row.recid} />
            </div>
        </Container>
    );
};

export default MpheaderTablesTable;
