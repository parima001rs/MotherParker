import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSecondaryContext } from '../../../context/SecondaryContext';
import { useGenericContext } from '../../../context/GenericContext';

import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const Mpi21vendormasterlineTable = (props) => {
    const { entities, setType, updateEntity, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    const location = useLocation(); 
    const [lineEntities, setLineEntities] = useState([]);



    useEffect(() => {
        //const { recid } = useParams();
        fetchLineData(props.parentid)
    }, [location.pathname]);

    const fetchLineData = async (recid) => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpi21vendormasterline/GetByParent/' + recid);
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
        width: 200,
        renderCell: (params) => (
            <>
                {/* <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-Mpi21vendormasterline/${params.row.recid}`)}
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
    { field: 'dataareaid', headerName: 'Dataareaid', width: 150, editable: true },
    { field: 'actionid', headerName: 'Actionid', width: 150, editable: true },
    { field: 'address', headerName: 'Address', width: 150, editable: true },
    { field: 'city', headerName: 'City', width: 150, editable: true },
    { field: 'country', headerName: 'Country', width: 150, editable: true },
    { field: 'email', headerName: 'Email', width: 150, editable: true },
    { field: 'fax', headerName: 'Fax', width: 150, editable: true },
    { field: 'linetype', headerName: 'Linetype', width: 150, editable: true },
    { field: 'locationname', headerName: 'Locationname', width: 150, editable: true },
    { field: 'mobile', headerName: 'Mobile', width: 150, editable: true },
    { field: 'name', headerName: 'Name', width: 150, editable: true },
    { field: 'parentrecid', headerName: 'Parentrecid', width: 150, editable: false },
    { field: 'phone', headerName: 'Phone', width: 150, editable: true },
    { field: 'state', headerName: 'State', width: 150, editable: true },
    { field: 'termscode', headerName: 'Termscode', width: 150, editable: true },
    { field: 'zip', headerName: 'Zip', width: 150, editable: true },
    
];


    return (
        <Container>
            <h2>Mpi21vendormasterline Table</h2>
            <Button style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-Mpi21vendormasterline')}
            >
                Add Mpi21vendormasterline
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

export default Mpi21vendormasterlineTable;

