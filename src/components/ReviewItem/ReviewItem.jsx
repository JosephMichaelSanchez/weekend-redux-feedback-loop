import { useSelector } from 'react-redux';

function ReviewItem() {

    const feelings = useSelector(store => store.feelingReducer)

    const understanding = useSelector(store => store.understandingReducer)

    const support = useSelector(store => store.supportedReducer)

    const comment = useSelector(store => store.commentReducer)




    return (
        <>
            <h2>Review Your Feedback</h2>
            <p>Feelings: {feelings}</p>
            <p>Understanding: {understanding}</p>
            <p>Support: {support}</p>
            <p>Comments: {comment}</p>
        </>

    )



}

export default ReviewItem;