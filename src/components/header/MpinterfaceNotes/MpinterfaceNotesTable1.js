import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { DataGrid , GridToolbar} from '@mui/x-data-grid';
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
                    onClick={() => navigate(`/update-MpinterfaceNotes/${params.row.recid}`)}
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

    { field: 'interface', headerName: 'Interface', width: 150 },              

    { field: 'batchnum', headerName: 'Batch Number', width: 150 },          

    { field: 'processed', headerName: 'Processed', width: 150 },            

    { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },          

    { field: 'mpinterfaceerror', headerName: 'MP Interface Error', width: 150 },

    { field: 'mpinterfaceinstanceid', headerName: 'MP Interface Instance ID', width: 150 },

    { field: 'relationtype', headerName: 'Relation Type', width: 150 },      

    { field: 'mpnoteitem', headerName: 'MP Note Item', width: 150 },        

    { field: 'mpnotetext', headerName: 'MP Note Text', width: 150 },        

    { field: 'siteid', headerName: 'Site ID', width: 150 },                  

    { field: 'tableId', headerName: 'Table ID', width: 150 }, 
    
    

    
];

const MpinterfaceNotes = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();

    useEffect(() => {
        setType('MpinterfaceNotes');
    }, [setType]);

    return (
        <Container>
            <h2>MpinterfaceNotes Table</h2>
            <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-MpinterfaceNotes')}
            >
                Add MpinterfaceNotes
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid 
                rows={entities} columns={columns(navigate, deleteEntity)} pageSize={5} checkboxSelection getRowId={(row) => row.recid} 
                slots={{ toolbar: GridToolbar }}
                />
            </div>
        </Container>
    );
};

export default MpinterfaceNotes;
