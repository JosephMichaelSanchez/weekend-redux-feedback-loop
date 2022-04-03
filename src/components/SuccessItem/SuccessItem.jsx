import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

function SuccessItem() {

    const history = useHistory();
    const dispatch = useDispatch();

    // function to restart the feedback, pushes user to 1st page and resets the reducers
    const restartApp = () => {
        history.push('/')
        dispatch({
            type: 'RESET_ALL'
        });
    }

    return (
        <>
            <p>Thank you!</p>
            <Button onClick={restartApp} size="large" variant="contained" color="primary">Leave New Feedback</Button>
        </>
    )
}

export default SuccessItem;