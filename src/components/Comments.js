import React from 'react';

const Comments = props => {
    return props.comments.length ? 
        <ol>
            {props.comments.map((comment, i) => (
                <li key={i}>{comment}</li>
            ))}
        </ol>
        :
        <h5>No comments yet</h5>
}

export default Comments;