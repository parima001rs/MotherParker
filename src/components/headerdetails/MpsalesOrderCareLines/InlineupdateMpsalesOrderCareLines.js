import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSecondaryContext } from '../../../context/SecondaryContext';
import { useGenericContext } from '../../../context/GenericContext';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const MpsalesOrderCareLineTable = (props) => {
    const { entities, setType, updateEntity, deleteEntity } = useSecondaryContext();
    const navigate = useNavigate();
    const location = useLocation(); 

    const [lineEntities, setLineEntities] = useState([]);

    // useEffect(() => {
    //     setType('MPInterfaceBOMLineTable');
    // }, [setType]);

    useEffect(() => {
        //const { recid } = useParams();
        fetchLineData(props.parentid)
    }, [location.pathname]);

    const fetchLineData = async (recid) => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MpsalesOrderCareLine/GetByParent/' + recid);
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
    { field: 'refrecid', headerName: 'Refrecid', width: 250, editable: false },
    { field: 'createddatetime', headerName: 'Createddatetime', width: 250, editable: true },
    { field: 'scheduleNum', headerName: 'ScheduleNum', width: 250, editable: true },
    { field: 'productId', headerName: 'ProductId', width: 250, editable: true },
    { field: 'lineNumber', headerName: 'LineNumber', width: 250, editable: true },
    { field: 'description', headerName: 'Description', width: 250, editable: true },
    { field: 'packageQuantity', headerName: 'PackageQuantity', width: 250, editable: true },
    { field: 'packageType', headerName: 'PackageType', width: 250, editable: true },
    { field: 'weight', headerName: 'Weight', width: 250, editable: true },
    { field: 'netWeight', headerName: 'NetWeight', width: 250, editable: true },
    { field: 'commodity', headerName: 'Commodity', width: 250, editable: true },
    { field: 'ladingQuantity', headerName: 'LadingQuantity', width: 250, editable: true },
    { field: 'ladingType', headerName: 'LadingType', width: 250, editable: true },
    
];


    return (
        <Container>
            <h2>MpsalesOrderCareLine Table</h2>
            <Button style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-MpsalesOrderCareLine')}
            >
                Add MpsalesOrderCareLine
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

export default MpsalesOrderCareLineTable;

