import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function UnderstandingItem() {

    const [undNum, setUndNum] = useState('')
    const dispatch = useDispatch();
    const history = useHistory();

    const onAddUndNum = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_UNDERSTANDING_NUMBER',
            payload: undNum
        });
        setUndNum('');
        history.push('/support');
    };

    return (
        <>
            <h2>How well are you understanding the content?</h2>
            <form onSubmit={onAddUndNum}>
                <input required onChange={event => setUndNum(event.target.value)} min={1} max={5} value={undNum} type="number" /><button>NEXT</button>
            </form>
        </>


    )





}


export default UnderstandingItem; 