import React, { useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const UpdateMPInforOrderTypeTable = () => {
    const { recid } = useParams(); // Assuming 'recid' is the primary key for this entity type
    const { entities, updateEntity, setType } = useGenericContext();
    const MPInforOrderTypeTable = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
        setType('MPInforOrderTypeTables');
        if (MPInforOrderTypeTable) {
            setValue('recid', MPInforOrderTypeTable.recid);
            setValue('createddatetime', MPInforOrderTypeTable.createddatetime);
          
            setValue('dataareaid', MPInforOrderTypeTable.dataareaid); // Set the site
            setValue('reference', MPInforOrderTypeTable.reference);
             // Set the warehouse
        


          
        } else {
            console.error('Entity not found');
            // navigate('/');
        }
    }, [setType, MPInforOrderTypeTable, setValue, navigate]);

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
                    name="reference"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Reference"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
              


              

              

                <Button type="submit" variant="contained" color="primary">
                    Update MPInforOrderTypeTable
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMPInforOrderTypeTable;
