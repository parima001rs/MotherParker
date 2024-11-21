import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container ,FormControlLabel,Checkbox} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const AddMpprobaterrorlog = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();


    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('Mpprobaterrorlog');
    }, [setType]);

    return (
        <Container>
            <BackButton />
            <h2>Add {location.state?.text} </h2>
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
    name="operations"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="Operations"
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
    name="probatOrderType"
    control={control}
    defaultValue=""
    render={({ field }) => (
        <TextField
            {...field}
            label="ProbatOrderType"
            fullWidth
            margin="normal"
        />
    )}
/>



                <Button type="submit" variant="contained" color="primary">
                    Update Powerplantcustomtable
                </Button>
            </form>
        </Container>
    );
};

export default AddMpprobaterrorlog;