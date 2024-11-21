import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../context/GenericContext';
import { TextField, Button, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';




const UpdateMplogilityinterfaceexportexclcustomer = () => {
    const { recid } = useParams();
    const { entities, updateEntity, setType } = useGenericContext();
    const Mplogilityinterfaceexportexclcustomer = entities.find((u) => u.recid === parseInt(recid));
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 


    useEffect(() => {
        setType('Mplogilityinterfaceexportexclcustomers');
        if (Mplogilityinterfaceexportexclcustomer) {
            setValue('dataareaid', Mplogilityinterfaceexportexclcustomer.dataareaid);
            setValue('mplogilityexportindirectcustomer', Mplogilityinterfaceexportexclcustomer.mplogilityexportindirectcustomer);
            setValue('createddatetime', Mplogilityinterfaceexportexclcustomer.createddatetime);
            setValue('warehouseAlign', Mplogilityinterfaceexportexclcustomer.warehouseAlign);

        }
    }, [setType, Mplogilityinterfaceexportexclcustomer, setValue]);

    const onSubmit = async (data) => {
        await updateEntity({ recid: parseInt(recid), ...data });
        //navigate('/');
    };

    return (
        <Container>
            <BackButton />
            <h2>Update {location.state?.text} </h2>
            <form onSubmit={handleSubmit(onSubmit)}>


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
                    name="mplogilityexportindirectcustomer"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mplogilityexportindirectcustomer"
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

                <Controller
                    name="warehouseAlign"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="WarehouseAlign"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />


                <Button type="submit" variant="contained" color="primary">
                    Update Mplogilityinterfaceexportexclcustomer
                </Button>
            </form>
        </Container>
    );
};

export default UpdateMplogilityinterfaceexportexclcustomer;
