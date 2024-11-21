import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSecondaryContext } from '../../../context/SecondaryContext';
import { useGenericContext } from '../../../context/GenericContext';

import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { lime } from '@mui/material/colors';

const MPi21CommitementPricingBGNLineExportTable = (props) => {
    const { entities, setType, updateEntity, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    const location = useLocation(); 
    const [lineEntities, setLineEntities] = useState([]);



    useEffect(() => {
        //const { recid } = useParams();
        fetchLineData(props.parentid)
    }, [location.pathname]);

    const fetchLineData = async (recid) => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/MPi21CommitementPricingBGNLineExport/GetByParent/' + recid);
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
                    onClick={() => navigate(`/update-MPi21CommitementPricingBGNLineExport/${params.row.recid}`)}
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
    { field: 'recid', headerName: 'Recid', width: 90, editable: false },
    { field: 'createddatetime', headerName: 'Created Datetime', width: 200, editable: true },
    { field: 'dataareaid', headerName: 'Data Area ID', width: 150, editable: true },
    { field: 'actualBlend', headerName: 'Actual Blend', width: 150, editable: true },
    { field: 'erpBlend', headerName: 'ERP Blend', width: 150, editable: true },
    { field: 'parentrecid', headerName: 'Parent Recid', width: 150, editable: true }
    
];


    return (
        <Container>
            <h2>MPi21CommitementPricingBGNLineExport Table</h2>
            <Button style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-MPi21CommitementPricingBGNLineExport')}
            >
                Add MPi21CommitementPricingBGNLineExport
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

export default MPi21CommitementPricingBGNLineExportTable;

