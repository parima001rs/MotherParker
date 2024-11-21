
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';



const UpdateMpvendorsubgrouptables = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpvendorsubgrouptables = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    useEffect(() => {
        setType('Mpvendorsubgrouptables');
        if (Mpvendorsubgrouptables) {
            setValue('recid', Mpvendorsubgrouptables.recid);
            setValue('createddatetime', Mpvendorsubgrouptables.createddatetime);
            setValue('mpimakevendor', Mpvendorsubgrouptables.mpimakevendor);
            setValue('mpvendorsubgroup', Mpvendorsubgrouptables.mpvendorsubgroup);
            setValue('mpvendorsubgroupdesc', Mpvendorsubgrouptables.mpvendorsubgroupdesc);
            setValue('mpirelyvendor', Mpvendorsubgrouptables.mpirelyvendor);
        } else {
            console.error('Entity not found');
            //navigate('/');
        }
    }, [setType, Mpvendorsubgrouptables, setValue, navigate]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data }, 'recid'); // Passing the primary key field 'recid'
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
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
                />
                
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
                    name="dataareaid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Dataareaid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="mpimakevendor"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpimakevendor"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
               
            
                <Controller
                    name="mpvendorsubgroup"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpvendorsubgroup"
                            fullWidth
                            margin="normal"
                        />

                        
                    )}
                />
                
                <Controller
                    name="mpvendorsubgroupdesc"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpvendorsubgroupdesc"
                            fullWidth
                            margin="normal"
                        />

                        
                    )}
                />


<Controller
                    name="mpirelyvendor"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpirelyvendor"
                            fullWidth
                            margin="normal"
                        />

                        
                    )}
                />
                <Button type="submit" variant="contained" color="primary">
                    Update Mpvendorsubgrouptables
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpvendorsubgrouptables;
