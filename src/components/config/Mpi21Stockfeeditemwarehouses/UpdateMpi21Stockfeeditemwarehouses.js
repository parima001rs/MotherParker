import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMpi21Stockfeeditemwarehouse = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpi21Stockfeeditemwarehouse = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    useEffect(() => {
        setType('Mpi21Stockfeeditemwarehouses');
        if (Mpi21Stockfeeditemwarehouse) {
            setValue('itemgroupid', Mpi21Stockfeeditemwarehouse.itemgroupid);
            setValue('name', Mpi21Stockfeeditemwarehouse.name);
            setValue('dataareaid', Mpi21Stockfeeditemwarehouse.dataareaid);
            
        }
    }, [setType, Mpi21Stockfeeditemwarehouse, setValue]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Controller
                    name="itemgroupid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Itemgroupid"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Name"
                            fullWidth
                            margin="normal"
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


                <Button type="submit" variant="contained" color="primary">
                    Update Mpi21Stockfeeditemwarehouse
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21Stockfeeditemwarehouse;
