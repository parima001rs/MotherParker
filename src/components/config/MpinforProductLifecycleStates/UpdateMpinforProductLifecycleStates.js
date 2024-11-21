import React, { useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMpinforProductLifecycleState = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericContext();
    const MpinforProductLifecycleState = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        setType('MpinforProductLifecycleStates');
        if (MpinforProductLifecycleState) {
            setValue('recid', MpinforProductLifecycleState.recid);
            setValue('createddatetime', MpinforProductLifecycleState.createddatetime);
          
            setValue('dataareaid', MpinforProductLifecycleState.dataareaid); // Set the site
            setValue('productLifecycleState', MpinforProductLifecycleState.productLifecycleState);
             // Set the warehouse
        


          
        } else {
            console.error('Entity not found');
            // navigate('/');
        }
    }, [setType, MpinforProductLifecycleState, setValue, navigate]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data }, 'recid'); // Passing the primary key field 'recid'
        // navigate('/');
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
                    name="productLifecycleState"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="ProductLifecycleState"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
              


              

              

                <Button type="submit" variant="contained" color="primary">
                    Update MpinforProductLifecycleState
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpinforProductLifecycleState;
