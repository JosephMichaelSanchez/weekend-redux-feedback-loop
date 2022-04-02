import {useDispatch} from 'react-redux';

function FeelingItem() {

    

    return (
        <>
            <h2>How are you feeling today?</h2>
            <input min={1} max={5} required type="number"/><button>NEXT</button>
        </>
    )




}

export default FeelingItem;