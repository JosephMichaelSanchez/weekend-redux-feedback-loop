import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function CommentItem() {

    const [newComment, setNewComment] = useState('')
    const dispatch = useDispatch();
    const history = useHistory();

    const onAddNewComment = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_COMMENT',
            payload: newComment
        });
        setNewComment('');
        history.push('/review');
    };

    return (

        <>
            <h2>Any comments you want to leave?</h2>
            <form onSubmit={onAddNewComment}>
            <input type="text" placeholder="Comments" onChange={event => setNewComment(event.target.value)} value={newComment}/><button>NEXT</button>
            </form>
        </>



    )


}

export default CommentItem;