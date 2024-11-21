import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSecondaryContext } from '../../../context/SecondaryContext';
import { useGenericContext } from '../../../context/GenericContext';

import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const Mpi21transferreceiptlineTable = (props) => {
    const { entities, setType, updateEntity, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    const location = useLocation(); 
    const [lineEntities, setLineEntities] = useState([]);



    useEffect(() => {
        //const { recid } = useParams();
        fetchLineData(props.parentid)
    }, [location.pathname]);

    const fetchLineData = async (recid) => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpi21transferreceiptlines/GetByParent/' + recid);
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
                    onClick={() => navigate(`/update-Mpi21transferreceiptline/${params.row.recid}`)}
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
    { field: 'createddatetime', headerName: 'Createddatetime', width: 250, editable: true },
    { field: 'batchnum', headerName: 'Batchnum', width: 300, editable: true },
    { field: 'containerno', headerName: 'Containerno', width: 150, editable: true },
    { field: 'cost', headerName: 'Cost', width: 90, editable: true },
    { field: 'currency', headerName: 'Currency', width: 90, editable: true },
    { field: 'grossweight', headerName: 'Grossweight', width: 150, editable: true },
    { field: 'itemno', headerName: 'Itemno', width: 150, editable: true },
    { field: 'netweight', headerName: 'Netweight', width: 90, editable: true },
    { field: 'parentrecid', headerName: 'Parentrecid', width: 90, editable: false },
    { field: 'receiptqty', headerName: 'Receiptqty', width: 90, editable: true },
    { field: 'receiptqtyuom', headerName: 'Receiptqtyuom', width: 90, editable: true },
    { field: 'siteid', headerName: 'Siteid', width: 90, editable: true },
    { field: 'storagelocation', headerName: 'Storagelocation', width: 90, editable: true },
    { field: 'storageunit', headerName: 'Storageunit', width: 90, editable: true },
    { field: 'tareweight', headerName: 'Tareweight', width: 90, editable: true },
    { field: 'trxsequenceno', headerName: 'Trxsequenceno', width: 90, editable: true },
    { field: 'warehouseid', headerName: 'Warehouseid', width: 90, editable: true },
    { field: 'dataareaid', headerName: 'Dataareaid', width: 90, editable: true },
    
];


    return (
        <Container>
            <h2>Mpi21transferreceiptline Table</h2>
            <Button style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-Mpi21transferreceiptline')}
            >
                Add Mpi21transferreceiptline
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

export default Mpi21transferreceiptlineTable;

