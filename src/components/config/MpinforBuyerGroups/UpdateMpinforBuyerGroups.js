import React, { useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMpinforBuyerGroup = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericContext();
    const MpinforBuyerGroup = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        setType('MpinforBuyerGroups');
        if (MpinforBuyerGroup) {
            setValue('recid', MpinforBuyerGroup.recid);
            setValue('createddatetime', MpinforBuyerGroup.createddatetime);
          
            setValue('dataareaid', MpinforBuyerGroup.dataareaid); // Set the site
            setValue('inventBuyerGroup', MpinforBuyerGroup.inventBuyerGroup);
           

             // Set the warehouse
        


          
        } else {
            console.error('Entity not found');
            // navigate('/');
        }
    }, [setType, MpinforBuyerGroup, setValue, navigate]);

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
                    name="inventBuyerGroup"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="InventBuyerGroup"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />




              

              

                <Button type="submit" variant="contained" color="primary">
                    Add MpinforBuyerGroup
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMpinforBuyerGroup;
