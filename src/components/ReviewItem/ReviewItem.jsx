import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function ReviewItem() {

    const feeling = useSelector(store => store.feelingReducer)

    const understanding = useSelector(store => store.understandingReducer)

    const support = useSelector(store => store.supportedReducer)

    const comments = useSelector(store => store.commentReducer)

    const history = useHistory();

    const handleSubmit = () => {
        

        const feedback = {
            feeling: feeling,
            understanding: understanding,
            support: support,
            comments: comments

        };
        console.log(feedback);

        axios.post(`/feedback`, feedback )
        .then(response => {
            history.push('/success')
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