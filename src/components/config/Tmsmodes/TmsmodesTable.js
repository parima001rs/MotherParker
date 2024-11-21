import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, IconButton } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import { useLocation } from 'react-router-dom'; 
import { fetchTableDisplayName } from '../../../services/apiservice';

const TmsmodeDataGrid = () => {
    const { entities, setType, deleteEntity } = useGenericContext();
    const navigate = useNavigate();
    const [displayUniqueName, setTableDisplayName] = useState('');
    const [tableUniqueName, setTableName] = useState('');
    const location = useLocation(); 

    useEffect(() => {
        setType('Tmsmodes');
    }, [setType]);

    useEffect(() => {
        const fetchDisplayName = async (pathName) => {
            try {
                const name = await fetchTableDisplayName(pathName);
                setTableDisplayName(name);
            } catch (error) {
                console.error('Error fetching table display name:', error);
                setTableDisplayName('Error loading display name'); // Optional user feedback
            }
        };

        const pathName = location.pathname.replace(/^\//, ''); // Remove leading slash
        if (pathName && pathName !== tableUniqueName) {
            setTableName(pathName);
            fetchDisplayName(pathName);
        }
    }, [location.pathname, tableUniqueName]);

    const columns = useMemo(() => [
        {
            field: 'actions',
            headerName: 'Actions',
            width: 200,
            renderCell: (params) => (
                <>
                    <IconButton
                        color="primary"
                        onClick={() => navigate(`/update-Tmsmode/${params.row.recid}`, { state: { text: displayUniqueName }})}
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
        { field: 'Tmsmodecode', headerName: 'Tmsmode Code', width: 150 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'modifieddatetime', headerName: 'Modified Datetime', width: 150 },
        { field: 'modifiedby', headerName: 'Modified By', width: 150 },
        { field: 'createddatetime', headerName: 'Created Datetime', width: 150 },
        { field: 'createdby', headerName: 'Created By', width: 150 },
        { field: 'dataareaid', headerName: 'Data Area ID', width: 150 },
    ], [navigate, deleteEntity, displayUniqueName]);

    return (
        <Container>
            <h2>{displayUniqueName}</h2>
            <Button
                style={{ marginBottom: 10 }}
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => navigate('/add-Tmsmode', { state: { text: displayUniqueName } })}
            >
                Add Tmsmode
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid 
                    rows={entities} 
                    columns={columns} 
                    pageSize={5} 
                    checkboxSelection 
                    getRowId={(row) => row.recid} 
                />
            </div>
        </Container>
    );
};

export default TmsmodeDataGrid;
