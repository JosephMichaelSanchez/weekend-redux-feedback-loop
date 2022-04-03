import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function SuccessItem() {

    const history = useHistory();
    const dispatch = useDispatch();

    const restartApp = () => {
        history.push('/')
        dispatch({
            type: 'RESET_ALL'
        });
    }

    return (
        <>
            <p>Thank you!</p>
            <button onClick={restartApp}>Leave New Feedback</button>
        </>
    )
}

export default SuccessItem;