import {useDispatch} from 'react-redux';
import {useState} from 'react';

function FeelingItem() {

    const [feelNum, setFeelNum] = useState('') 
    const dispatch = useDispatch();

    const onAddFeelNum = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_FEELING_NUMBER',
            payload: feelNum
        });
    };
    

    return (
        <>
            <h2>How are you feeling today?</h2>
            <form onSubmit={onAddFeelNum}>
            <input required onChange={evt => setFeelNum(event.target.value)}min={1} max={5} value={feelNum} type="number"/><button>NEXT</button>
            </form>
        </>
    )




}

export default FeelingItem;