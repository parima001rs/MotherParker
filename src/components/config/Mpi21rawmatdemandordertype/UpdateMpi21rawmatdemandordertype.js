
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';

import { useLocation } from 'react-router-dom';


const UpdateMpi21rawmatdemandordertype = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpi21rawmatdemandordertype = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    
 const location = useLocation(); 

    useEffect(() => {
        setType('Mpi21rawmatdemandordertype');
        if (Mpi21rawmatdemandordertype) {
            setValue('recid', Mpi21rawmatdemandordertype.recid);
            setValue('createddatetime', Mpi21rawmatdemandordertype.createddatetime);
            setValue('dataareaid', Mpi21rawmatdemandordertype.dataareaid);
            setValue('mpi21rawmatdemandsetup', Mpi21rawmatdemandordertype.blenddemandsetup);
            setValue('reqpostatus', Mpi21rawmatdemandordertype.reqpostatus);
            setValue('reqreftype', Mpi21rawmatdemandordertype.reqreftype);
        } else {
            console.error('Entity not found');
            //navigate('/');
        }
    }, [setType, Mpi21rawmatdemandordertype, setValue, navigate]);

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
                    name="mpi21rawmatdemandsetup"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mpi21rawmatdemandsetup"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="reqpostatus"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Reqpostatus"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />



                <Controller
                    name="reqreftype"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Reqreftype"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />



                <Button type="submit" variant="contained" color="primary">
                    Update Mpi21rawmatdemandordertype
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21rawmatdemandordertype;
