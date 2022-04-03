import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import React from 'react';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { FormControlLabel } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function UnderstandingItem() {

    const [undNum, setUndNum] = useState('3')
    const dispatch = useDispatch();
    const history = useHistory();

    const onAddUndNum = (e) => {
        e.preventDefault();
        dispatch({
            type: 'SET_UNDERSTANDING_NUMBER',
            payload: undNum
        });
        setUndNum('3');
        history.push('/support');
    };

    return (
        <>
            
                <FormControl >
                    <FormLabel>How well are you understanding the content?</FormLabel>
                    <RadioGroup className="radioForm" required row value={undNum} onChange={(e) => setUndNum(e.target.value)}>
                        <FormControlLabel control={<Radio />} value="1" label="1" />
                        <FormControlLabel control={<Radio />} value="2" label="2" />
                        <FormControlLabel control={<Radio />} value="3" label="3" />
                        <FormControlLabel control={<Radio />} value="4" label="4" />
                        <FormControlLabel control={<Radio />} value="5" label="5" />
                    </RadioGroup>
                    <Button onClick={onAddUndNum} size="large" variant="contained" color="primary">NEXT</Button>
                </FormControl>
            

        </>

    )





}


export default UnderstandingItem; 