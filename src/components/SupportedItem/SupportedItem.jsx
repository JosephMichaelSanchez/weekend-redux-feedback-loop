import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SupportedItem() {

    const [supNum, setSupNum] = useState('')
    const dispatch = useDispatch();
    const history = useHistory();

    const onAddSupNum = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_SUPPORT_NUMBER',
            payload: supNum
        });
        setFeelNum('');
        history.push('/understand');
    };

    return (

        <>
            <h2>How well are you being supported?</h2>
            <form onSubmit={onAddSupNum}>
                <input required onChange={event => setFeelNum(event.target.value)} min={1} max={5} value={supNum} type="number" /><button>NEXT</button>
            </form>

        </>

    )

}




export default SupportedItem;