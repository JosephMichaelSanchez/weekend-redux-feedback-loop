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


function FeelingItem() {

    // useState to set feelNum before it is dispatched
    const [feelNum, setFeelNum] = useState('3')
    const dispatch = useDispatch();
    const history = useHistory();

    // function to dispatch feelNum to it's reducer
    const onAddFeelNum = (e) => {
        e.preventDefault();
        dispatch({
            type: 'SET_FEELING_NUMBER',
            payload: feelNum
        });
        setFeelNum('3');
        // push user to understand page after submission
        history.push('/understand');
    };


    return (
        <>
            <FormControl>
                <FormLabel>How are you feeling today?</FormLabel>
                <RadioGroup className="radioForm" required row value={feelNum} onChange={(e) => setFeelNum(e.target.value)}>
                    <FormControlLabel control={<Radio />} value="1" label="1" />
                    <FormControlLabel control={<Radio />} value="2" label="2" />
                    <FormControlLabel control={<Radio />} value="3" label="3" />
                    <FormControlLabel control={<Radio />} value="4" label="4" />
                    <FormControlLabel control={<Radio />} value="5" label="5" />
                </RadioGroup>
                <Button onClick={onAddFeelNum} size="large" variant="contained" color="primary">NEXT</Button>
            </FormControl>

        </>
    )




}

export default FeelingItem;