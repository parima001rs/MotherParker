import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenericPaginationContext } from '../../../context/GenericPaginationContext';
import { TextField, Button, Container, Checkbox, FormControlLabel, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import BackButton from '../../backButton';
import { useLocation } from 'react-router-dom';

const AddMpinterfaceProbatCommand = () => {
    const { addEntity, setType } = useGenericPaginationContext();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation(); 

    const [interfaces, setinterfaces] = useState([]);

    const onSubmit = async (data) => {
        await addEntity(data);
        //navigate('/');
    };

    useEffect(() => {
        setType('MpinterfaceProbatCommands');
        fetchinterfaces();
    }, [setType]);

    const fetchinterfaces = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/Mpinterfaces');
        setinterfaces(response.data);
    };
    return (
        <Container>
            <BackButton />
            <h2>Add {location.state?.text}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="recid"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Recid"
                            fullWidth
                            margin="normal"
                            disabled
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
                    name="interface"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <FormControl fullWidth>
                            <InputLabel id="interface">Interface</InputLabel>
                            <Select {...field} labelId="interface">
                                {interfaces.map((entity, index) => (
                                    <MenuItem key={index} value={entity.interface}>
                                        {entity.interface}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />

                <Controller
                    name="tableid"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Table ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="batchnum"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Batch Number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="processed"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Processed"
                            fullWidth
                            margin="normal"
                           
                            inputProps={{ value: true }}
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
                            label="Data Area ID"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="facility"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Facility"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mpprobatCommandNr"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Probat Command Nr"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mpitemprobatseqno"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Item Probat Seq No"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mpprobatInfoOne"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Probat Info One"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mpprobatParaOne"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Probat Para One"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />

                <Controller
                    name="mpprobatParaOneName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Probat Para One Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mpprobatParaTwo"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Probat Para Two"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />

                <Controller
                    name="mpprobatParaTwoName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Probat Para Two Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mpprobatParaThree"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Probat Para Three"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />

                <Controller
                    name="mpprobatParaThreeName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Probat Para Three Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mpprobatParaFour"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Probat Para Four"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />

                <Controller
                    name="mpprobatParaFourName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Probat Para Four Name"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="mpprobatParaFive"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Probat Para Five"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />

                <Controller
                    name="mpprobatParaSwitch"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Probat Para Switch"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />

                <Controller
                    name="mpprobatTransferred"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Probat Transferred"
                            fullWidth
                            margin="normal"
                            type="number"
                        />
                    )}
                />

                <Controller
                    name="mpprobatTransferredTimeStamp"
                    control={control}
                    defaultValue={null}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="MP Probat Transferred TimeStamp"
                            fullWidth
                            margin="normal"
                            type="datetime-local"
                        />
                    )}
                />



                <Button type="submit" variant="contained" color="primary">
                    Add MpinterfaceProbatCommand
                </Button>
            </form>
        </Container>
    );
};

export default AddMpinterfaceProbatCommand;
