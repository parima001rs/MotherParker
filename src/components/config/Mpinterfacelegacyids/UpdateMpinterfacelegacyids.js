
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';


const UpdateMpinterfacelegacyids = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpinterfacelegacyids = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    useEffect(() => {
        setType('Mpinterfacelegacyids');
        if (Mpinterfacelegacyids) {
            setValue('recid', Mpinterfacelegacyids.recid);
            setValue('createddatetime', Mpinterfacelegacyids.createddatetime);
            setValue('id', Mpinterfacelegacyids.id);
            setValue('value', Mpinterfacelegacyids.value);
           
        } else {
            console.error('Entity not found');
            //navigate('/');
        }
    }, [setType, Mpinterfacelegacyids, setValue, navigate]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data }, 'recid'); // Passing the primary key field 'recid'
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            {/* <Controller
                    name="recid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Recid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                /> */}
                
                <Controller
                    name="createddatetime"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Createddatetime"
                            type="datetime-local"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    )}
                />

                
                <Controller
                    name="id"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Id"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="value"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Value"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
               
            
              
                <Button type="submit" variant="contained" color="primary">
                    Update Mpinterfacelegacyids
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpinterfacelegacyids;
