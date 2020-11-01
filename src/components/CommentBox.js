import React, {useState} from 'react';
import { useDispatch } from "react-redux";

import {addComment} from "../actions";


const CommentBox = ({ postId}) => {

    const [comment,setComment] = useState("");

    const dispatch = useDispatch();

    const handleComment = (e) => {
        e.preventDefault();
        dispatch(addComment(postId,comment));
        setComment('');
    }

    return (
        <div className="container">
            <form className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                    <label htmlFor="inputComment" className="sr-only">Comment</label>
                    <input type="text" className="form-control" id="inputComment" value={comment} placeholder="Comment" onChange={ (e) => setComment(e.target.value) }/>
                </div>
                <button type="submit" className="btn btn-primary mb-2" onClick={ (e) => handleComment(e)}>Submit</button>
            </form>
        </div>
    );
}


export default CommentBox;