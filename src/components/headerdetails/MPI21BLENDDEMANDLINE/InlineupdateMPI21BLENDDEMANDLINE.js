import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSecondaryContext } from '../../../context/SecondaryContext';
import { useGenericContext } from '../../../context/GenericContext';

import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const MPI21BLENDDEMANDLINETable = (props) => {
    const { entities, setType, updateEntity, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    const location = useLocation(); 
    const [lineEntities, setLineEntities] = useState([]);



    useEffect(() => {
        //const { recid } = useParams();
        fetchLineData(props.parentid)
    }, [location.pathname]);

    const fetchLineData = async (recid) => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MPI21BLENDDEMANDLINE/GetByParent/' + recid);
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
                    onClick={() => navigate(`/update-MPI21BLENDDEMANDLINE/${params.row.recid}`)}
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
    { field: 'demandtype', headerName: 'Demandtype', width: 120, editable: true },
    { field: 'duedate', headerName: 'Duedate', width: 150, editable: true },
    { field: 'inventlocationid', headerName: 'Inventlocationid', width: 150, editable: true },
    { field: 'inventsiteid', headerName: 'Inventsiteid', width: 120, editable: true },
    { field: 'ireply', headerName: 'Ireply', width: 100, editable: true },
    { field: 'itemno', headerName: 'Itemno', width: 120, editable: true },
    { field: 'machine', headerName: 'Machine', width: 100, editable: true },
    { field: 'orderno', headerName: 'Orderno', width: 150, editable: true },
    { field: 'parentrecid', headerName: 'Parentrecid', width: 150, editable: false },
    { field: 'productname', headerName: 'Productname', width: 200, editable: true },
    { field: 'quantity', headerName: 'Quantity', width: 120, editable: true },
    { field: 'quantityuom', headerName: 'Quantityuom', width: 120, editable: true },
    { field: 'storagelocation', headerName: 'Storagelocation', width: 150, editable: true },
    { field: 'workcenter', headerName: 'Workcenter', width: 120, editable: true },
    
];


    return (
        <Container>
            <h2>MPI21BLENDDEMANDLINE Table</h2>
            <Button style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-MPI21BLENDDEMANDLINE')}
            >
                Add MPI21BLENDDEMANDLINE
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

export default MPI21BLENDDEMANDLINETable;

