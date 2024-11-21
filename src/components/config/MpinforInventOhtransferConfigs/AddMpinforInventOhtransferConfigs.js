import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const AddMpinforInventOhtransferConfig = () => {
    const { addEntity, setType } = useGenericContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('MpinforInventOhtransferConfigs');
    }, [setType]);

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
                        label="Created Datetime"
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
                name="inventSiteId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="InventSiteId"
                        fullWidth
                        margin="normal"
                    />
                )}
            />


<Controller
                name="inventLocationid"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="InventLocationid"
                        fullWidth
                        margin="normal"
                    />
                )}
            />



          

          

            <Button type="submit" variant="contained" color="primary">
                Add MpinforInventOhtransferConfig
            </Button>
        </form>
    </Container>
    );
};

export default AddMpinforInventOhtransferConfig;
