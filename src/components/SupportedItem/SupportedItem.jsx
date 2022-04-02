import { useDispatch } from 'react-redux';

function SupportedItem() {

    return (

        <>
            <h2>How well are you being supported?</h2>
            <input min={1} max={5} required type="number"/><button>NEXT</button>

        </>

    )

}




export default SupportedItem;