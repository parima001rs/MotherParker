import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMpheaderTable = () => {
    const { tableId } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const MpheaderTable = entities.find((u) => u.tableId === parseInt(tableId));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setType('MpheaderTables');
        if (MpheaderTable) {
            setValue('tableId', MpheaderTable.tableId);
            setValue('tableName', MpheaderTable.tableName);
        }   
    }, [setType, MpheaderTable, setValue]);

    const onSubmit = async (data) => {
        await updateEntity({ tableId: parseInt(tableId), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>


                <Controller
                    name="tableId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="TableId"
                            
                            fullWidth
                            margin="normal"
                            
                        />
                    )}
                />

                <Controller
                    name="tableName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="TableName"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
              

                <Button type="submit" variant="contained" color="primary">
                    Update MpheaderTable
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpheaderTable;
