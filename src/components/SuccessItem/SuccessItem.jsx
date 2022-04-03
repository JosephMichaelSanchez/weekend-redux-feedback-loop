import {useHistory} from 'react-router-dom';

function SuccessItem() {

    const history = useHistory();

    const restartApp = () => {
        history.push('/')
    }

    return (
        <>
            <p>Thank you!</p>
            <button onClick={restartApp}>Leave New Feedback</button>
        </>
    )
}

export default SuccessItem;