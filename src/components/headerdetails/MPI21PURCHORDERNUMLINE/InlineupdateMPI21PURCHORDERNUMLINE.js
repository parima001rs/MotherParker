import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSecondaryContext } from '../../../context/SecondaryContext';
import { useGenericContext } from '../../../context/GenericContext';

import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const MPI21PURCHORDERNUMLINETable = (props) => {
    const { entities, setType, updateEntity, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    const location = useLocation(); 
    const [lineEntities, setLineEntities] = useState([]);



    useEffect(() => {
        //const { recid } = useParams();
        fetchLineData(props.parentid)
    }, [location.pathname]);

    const fetchLineData = async (recid) => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MPI21PURCHORDERNUMLINE/GetByParent/' + recid);
        setLineEntities(response.data);
    };


    const processRowUpdate = async (newRow) => {
        const updatedRow = { ...newRow, isNew: false };
        await updateEntity(updatedRow);
        return updatedRow;
    };



const columns = [
    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => (
            <>
                {/* <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-MPI21PURCHORDERNUMLINE/${params.row.recid}`)}
                >
                    <Edit />
                </IconButton> */}
                <IconButton
                    color="secondary"
                    onClick={() => deleteEntity(params.row.recid)}
                >
                    <Delete />
                </IconButton>
            </>
        ),
    },
    { field: 'recid', headerName: 'Recid', width: 150, editable: false },
    { field: 'createddatetime', headerName: 'Createddatetime', width: 150, editable: true },
    { field: 'dataareaid', headerName: 'Dataareaid', width: 100, editable: true },
    { field: 'erppolineno', headerName: 'Erppolineno', width: 120, editable: true },
    { field: 'erpponumber', headerName: 'Erpponumber', width: 150, editable: true },
    { field: 'parentrecid', headerName: 'Parentrecid', width: 150, editable: false },
    { field: 'sequenceno', headerName: 'Sequenceno', width: 120, editable: true },
    
];


    return (
        <Container>
            <h2>MPI21PURCHORDERNUMLINE Table</h2>
            <Button style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-MPI21PURCHORDERNUMLINE')}
            >
                Add MPI21PURCHORDERNUMLINE
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={lineEntities}
                    columns={columns}
                    pageSize={5}
                    checkboxSelection
                    getRowId={(row) => row.recid}
                    processRowUpdate={processRowUpdate}
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </div>
        </Container>
    );
};

export default MPI21PURCHORDERNUMLINETable;

