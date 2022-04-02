import { useDispatch } from 'react-redux';

function UnderstandingItem() {

    return (
        <>
            <h2>How well are you understanding the content?</h2>
            <input min={1} max={5} required type="number"/><button>NEXT</button>
        </>


    )





}


export default UnderstandingItem; 