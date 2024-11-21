import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSecondaryContext } from '../../../context/SecondaryContext';
import { useGenericContext } from '../../../context/GenericContext';

import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Mpi21servicepoinlineTable = (props) => {
    const { entities, setType, updateEntity, deleteEntity } = useSecondaryContext();
    const navigate = useNavigate();
    const location = useLocation(); 
    const [lineEntities, setLineEntities] = useState([]);



    useEffect(() => {
        //const { recid } = useParams();
        fetchLineData(props.parentid)
    }, [location.pathname]);

    const fetchLineData = async (recid) => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpi21servicepoinline/GetByParent/' + recid);
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
                    onClick={() => navigate(`/update-Mpi21servicepoinline/${params.row.recid}`)}
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
    { field: 'createddatetime', headerName: 'Createddatetime', width: 200, editable: true },
    { field: 'actionid', headerName: 'actionid', width: 200, editable: true },
    { field: 'amount', headerName: 'amount', width: 150, editable: true },
    { field: 'erpservicepolineno', headerName: 'erpservicepolineno', width: 90, editable: true },
    { field: 'parentrecid', headerName: 'parentrecid', width: 90, editable: false },
    { field: 'quantity', headerName: 'quantity', width: 150, editable: true },
    { field: 'quantityuom', headerName: 'quantityuom', width: 150, editable: true },
    { field: 'rate', headerName: 'rate', width: 90, editable: true },
    { field: 'rateuom', headerName: 'rateuom', width: 90, editable: true },
    { field: 'dataareaid', headerName: 'dataareaid', width: 90, editable: true },
    { field: 'trxsequenceno', headerName: 'trxsequenceno', width: 90, editable: true },
    { field: 'instruction', headerName: 'instruction', width: 90, editable: true },
    
];


    return (
        <Container>
            <h2>Mpi21servicepoinline Table</h2>
            <Button style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-Mpi21servicepoinline')}
            >
                Add Mpi21servicepoinline
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

export default Mpi21servicepoinlineTable;

