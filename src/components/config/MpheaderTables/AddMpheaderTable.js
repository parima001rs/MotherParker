import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';

import { useLocation } from 'react-router-dom';  //new display change

const AddMpheaderTable = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); //new display change

    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('MpheaderTables');
    }, [setType]);

    return (
        <Container>
            <BackButton />
            {/* new display change */}
            <h2> Add {location.state?.text}</h2>  
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
                    Add MpheaderTable
                </Button>
            </form>
        </Container>
    );
};

export default AddMpheaderTable;
