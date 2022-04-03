import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function CommentItem() {

    // useState to set comment before it is dispatched
    const [newComment, setNewComment] = useState('')
    const dispatch = useDispatch();
    const history = useHistory();

    // function to dispatch newComment to it's reducer
    const onAddNewComment = (e) => {
        e.preventDefault();
        dispatch({
            type: 'SET_COMMENT',
            payload: newComment
        });
        setNewComment('');
        // push user to review page after submission
        history.push('/review');
    };

    return (

        <>
            <h2>Any comments you want to leave?</h2>

            <TextField style={{ width: 500 }} label="Comments" type="text" onChange={(e) => setNewComment(e.target.value)} value={newComment} />
            <Button onClick={onAddNewComment} size="large" variant="contained" color="primary">NEXT</Button>

        </>



    )


}

export default CommentItem;