import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMplogilityinterfaceexportinclitemgroups = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const Mplogilityinterfaceexportinclitemgroups = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    useEffect(() => {
        setType('Mplogilityinterfaceexportinclitemgroups');
        if (Mplogilityinterfaceexportinclitemgroups) {
            setValue('dataareaid', Mplogilityinterfaceexportinclitemgroups.dataareaid);
            setValue('createddatetime', Mplogilityinterfaceexportinclitemgroups.createddatetime);
            setValue('recid', Mplogilityinterfaceexportinclitemgroups.recid);
            setValue('itemgroupid', Mplogilityinterfaceexportinclitemgroups.itemgroupid);

        }
    }, [setType, Mplogilityinterfaceexportinclitemgroups, setValue]);

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



                <Button type="submit" variant="contained" color="primary">
                    Update Mplogilityinterfaceexportinclitemgroups
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMplogilityinterfaceexportinclitemgroups;
