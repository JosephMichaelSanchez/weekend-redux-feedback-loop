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

function SupportedItem() {

    // useState to set supNum before it is dispatched
    const [supNum, setSupNum] = useState('3')
    const dispatch = useDispatch();
    const history = useHistory();

    // function to dispatch supNum to it's reducer
    const onAddSupNum = (e) => {
        e.preventDefault();
        dispatch({
            type: 'SET_SUPPORT_NUMBER',
            payload: supNum
        });
        setSupNum('3');
        // push user to comment page after submission
        history.push('/comment');
    };

    return (

        <>

            <FormControl >
                <FormLabel>How well are you being supported?</FormLabel>
                <RadioGroup className="radioForm" required row value={supNum} onChange={(e) => setSupNum(e.target.value)}>
                    <FormControlLabel control={<Radio />} value="1" label="1" />
                    <FormControlLabel control={<Radio />} value="2" label="2" />
                    <FormControlLabel control={<Radio />} value="3" label="3" />
                    <FormControlLabel control={<Radio />} value="4" label="4" />
                    <FormControlLabel control={<Radio />} value="5" label="5" />
                </RadioGroup>
                <Button onClick={onAddSupNum} size="large" variant="contained" color="primary">NEXT</Button>
            </FormControl>


        </>

    )

}




export default SupportedItem;