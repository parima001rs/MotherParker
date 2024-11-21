import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import { fetchTableDisplayName } from '../../../services/apiservice';

const columns = (navigate, deleteEntity, displayUniqueName) => [
    {
        field: 'actions',
        headerName: 'Actions',
        width: 120,
        renderCell: (params) => (
            <>
                <IconButton
                    color="primary"
                    onClick={() => navigate(`/update-MpinforAPSerrorlog/${params.row.recid}`, { state: { text: displayUniqueName } })}
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
    { field: 'recid', headerName: 'Recid', width: 120 },
    { field: 'baserecid', headerName: 'Baserecid', width: 150 },
    { field: 'messagelong', headerName: 'Messagelong', width: 150 },
    { field: 'messageshort', headerName: 'Messageshort', width: 150 },
    { field: 'dataareaid', headerName: 'Dataareaid', width: 150 },
    { field: 'createddatetime', headerName: 'Createddatetime', width: 150 },
    { field: 'batchnum', headerName: 'Batchnum', width: 150 },
    { field: 'interfacenum', headerName: 'Interfacenum', width: 150 },
];

const MpinforAPSerrorlog = () => {
    const { entities, setType, rowCount, setPaginationData, fetchEntitiesWithPagination, deleteEntity } = useGenericPaginationContext();
    const navigate = useNavigate();
    const location = useLocation();
    
    const [displayUniqueName, setTableDisplayName] = useState('');
    const [tableUniqueName, setTableName] = useState('');

    const [filteredEntities, setFilteredEntities] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        setType('MpinforAPSerrorlog');
    }, [setType]);

    const [paginationModel, setPaginationModel] = useState({
        pageSize: 100,
        page: 0,
    });

    useEffect(() => {
        setPaginationData(paginationModel.page, paginationModel.pageSize);
        fetchEntitiesWithPagination(paginationModel.page, paginationModel.pageSize);
    }, [paginationModel]);

    const handlePaginationModelChange = (model) => {
        // Reset page to 0 if page size changes
        if (model.pageSize !== paginationModel.pageSize) {
            setPaginationModel({ page: 1, pageSize: model.pageSize });
        } else {
            setPaginationModel(model);
        }
    };

    useEffect(() => {
        const pathName = location.pathname.replace(/^\//, '');
        
        if (pathName && pathName !== tableUniqueName) {
            setTableName(pathName);
            fetchTableDisplayName(pathName)
                .then(setTableDisplayName)
                .catch(console.error);
        }
    }, [location.pathname, tableUniqueName]);

    useEffect(() => {
        if (entities && id) {
            const filtered = entities.filter(entity => entity.baserecid === Number(id));
            setFilteredEntities(filtered);
        } else {
            setFilteredEntities(entities);
        }
    }, [entities, id]);

    return (
        <Container>
            <h2>{displayUniqueName || 'MpinforAPSerrorlog Table'}</h2>
            <Button
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-MpinforAPSerrorlog', { state: { text: displayUniqueName } })}
                style={{ marginBottom: 10 }}
            >
                Add MpinforAPSerrorlog
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={filteredEntities}
                    columns={columns(navigate, deleteEntity, displayUniqueName)}
                    pageSize={5}
                    checkboxSelection
                    getRowId={(row) => row.recid}

                    pagination
                    paginationMode="server" // Enable server-side pagination
                    paginationModel={paginationModel}
                    onPaginationModelChange={handlePaginationModelChange}
                    rowCount={rowCount}
                />
            </div>
        </Container>
    );
};

export default MpinforAPSerrorlog;
