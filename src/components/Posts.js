import React from 'react';
import CommentBox from './CommentBox';
import Comments from './Comments';
import {upVote, downVote} from '../actions'

import { useSelector, useDispatch, deepEqual } from 'react-redux';

const diff_hours = time =>
 {
  let diff =(new Date().getTime() - new Date(time).getTime()) / 1000;
  diff /= (60 * 60);
  return Math.abs(Math.round(diff));
 }


const Posts = props => {

    //const posts = useSelector(state => state);
    //weird interaction with store...
    const [posts] = useSelector(state => [state]);
    // const posts = useSelector(state => state, deepEqual);
    console.log(posts);

    const dispatch = useDispatch(); 
        
    // const handleUpvote = (id) => {dispatch(upVote(id))};


    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <h5>Submitted {diff_hours(post.timeOfPost)} hours ago by {post.poster} to r/{post.subReddit}</h5>
                    <img alt="Reddit post" src={post.src}/>
                    <h4>Votes: {post.upvotes - post.downvotes}</h4>
                    <button onClick={() => dispatch(upVote(post.id))}><span role="img" aria-label="Up"> ⬆️ </span></button>
                    <button onClick={() => dispatch(downVote(post.id))}><span role="img" aria-label="Down"> ⬇️ </span></button>
                    <br /><br />
                    <CommentBox postId={post.id} />
                    <Comments comments={post.comments} />
                    <hr />
                </div >
            ))}
            {/* {props.posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <h3>r/{post.subReddit}</h3>
                    <h3>u/{post.poster}</h3>
                    <h3>Posted {diff_hours(post.time)} hours ago</h3>
                    <img alt="Reddit post" src={post.src}/>
                    <h4>Votes: {post.upvotes - post.downvotes}</h4>
                    <button><span role="img" aria-label="Up"> ⬆️ </span></button>
                    <button><span role="img" aria-label="Down"> ⬇️ </span></button>
                    <br /><br />
                    <CommentBox postId={post.id} />
                    <Comments comments={post.comments} />
                    <hr />
                </div >
            ))} */}
        </div>

    )
}

export default Posts;