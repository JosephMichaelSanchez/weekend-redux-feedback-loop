import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';



function ReviewItem() {

    // create variables from the current states of the reducers
    const feeling = useSelector(store => store.feelingReducer)

    const understanding = useSelector(store => store.understandingReducer)

    const support = useSelector(store => store.supportedReducer)

    const comments = useSelector(store => store.commentReducer)

    const history = useHistory();

    // function to submit the form values to the database
    const handleSubmit = () => {

        // create an object using the variables
        const feedback = {
            feeling: feeling,
            understanding: understanding,
            support: support,
            comments: comments

        };
        console.log(feedback);

        // post the object, display a Sweet Alert, push user to success page
        axios.post(`/feedback`, feedback)
            .then(response => {
                swal({
                    title: "Feedback Submitted!",
                    text: "Thank you!!",
                    icon: "success",
                    button: "OK",
                });
                history.push('/success')
            }).catch(err => {
                console.log(err);
            })

    }






    return (
        <>
            {/* summary of form values - current states of the reducers */}
            <h2>Review Your Feedback</h2>
            <p>Feelings: {feeling}</p>
            <p>Understanding: {understanding}</p>
            <p>Support: {support}</p>
            <p>Comments: {comments}</p>
            <Button onClick={handleSubmit} size="large" variant="contained" color="primary">SUBMIT</Button>
        </>

    )



}

export default ReviewItem;