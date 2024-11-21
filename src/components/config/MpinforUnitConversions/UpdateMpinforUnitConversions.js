import React, { useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMMpinforUnitConversion = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericContext();
    const MMpinforUnitConversion = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        setType('MpinforUnitConversions');
        if (MMpinforUnitConversion) {
            setValue('recid', MMpinforUnitConversion.recid);
            setValue('parentrecid', MMpinforUnitConversion.parentrecid); // Set the site
            setValue('createddatetime', MMpinforUnitConversion.createddatetime);
          
            
            setValue('itemId', MMpinforUnitConversion.itemId);
            setValue('toUnit', MMpinforUnitConversion.toUnit);
            setValue('fromUnit', MMpinforUnitConversion.fromUnit);
          
            setValue('factor', MMpinforUnitConversion.factor); // Set the site
           
             // Set the warehouse
        


          
        } else {
            console.error('Entity not found');
            // navigate('/');
        }
    }, [setType, MMpinforUnitConversion, setValue, navigate]);

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
                    name="parentrecid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Parentrecid"
                          
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
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
                    name="itemId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="ItemId"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

<Controller
                    name="toUnit"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="toUnit"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                                   
                                   <Controller
                    name="fromUnit"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="FromUnit"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

<Controller
                    name="factor"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Factor"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
              


              

              

                <Button type="submit" variant="contained" color="primary">
                    Update MMpinforUnitConversion
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMMpinforUnitConversion;
