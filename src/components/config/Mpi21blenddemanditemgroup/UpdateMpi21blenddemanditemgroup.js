
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';


const UpdateMpi21blenddemanditemgroup = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericContext();
    const Mpi21blenddemanditemgroup = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        setType('Mpi21blenddemanditemgroup');
        if (Mpi21blenddemanditemgroup) {
            setValue('recid', Mpi21blenddemanditemgroup.recid);
            setValue('createddatetime', Mpi21blenddemanditemgroup.createddatetime);
            setValue('blenddemandsetup', Mpi21blenddemanditemgroup.blenddemandsetup);
            setValue('dataareaid', Mpi21blenddemanditemgroup.dataareaid);
            setValue('itemgroupid', Mpi21blenddemanditemgroup.itemgroupid);
        } else {
            console.error('Entity not found');
            //navigate('/');
        }
    }, [setType, Mpi21blenddemanditemgroup, setValue, navigate]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data }, 'recid'); // Passing the primary key field 'recid'
        //navigate('/');
    };

    return (
        <Container>
            <BackButton/>
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
                    name="blenddemandsetup"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Blenddemandsetup"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />


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

                <Button type="submit" variant="contained" color="primary">
                    Update Mpi21blenddemanditemgroup
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpi21blenddemanditemgroup;
