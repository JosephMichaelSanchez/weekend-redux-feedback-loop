import { useSelector } from 'react-redux';
import { axios } from 'axios';
import { useHistory } from 'react-router-dom';
import { HashRouter as Router, Route, Link} from 'react-router';

function ReviewItem() {

    const feeling = useSelector(store => store.feelingReducer)

    const understanding = useSelector(store => store.understandingReducer)

    const support = useSelector(store => store.supportedReducer)

    const comments = useSelector(store => store.commentReducer)

    const handleSubmit = () => {

        const feedback = {
            feeling: 2,
            understanding: 2,
            support: 2,
            comments: 'thanks'

        };
        console.log(feedback);

        axios.post('/feedback', feedback )
        .then(response => {
            // history.push('/success')
        }).catch(err => {
            console.log(err);
        })

    }






    return (
        <>
            <h2>Review Your Feedback</h2>
            <p>Feelings: {feeling}</p>
            <p>Understanding: {understanding}</p>
            <p>Support: {support}</p>
            <p>Comments: {comments}</p>
            <button onClick={handleSubmit}>SUBMIT</button>
        </>

    )



}

export default ReviewItem;