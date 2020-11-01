import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { addPost } from '../actions'

const AddPost = ({ newPost }) => {

  const [post, setPost] = useState(  
    {
      id: '',
      subReddit: '',
      poster: '',
      timeOfPost: '',
      title: '',
      src: '',
      upvotes: 0,
      downvotes: 0,
      comments: []
    }
  )

const [redirect, setRedirect] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(post));
    setPost({
      id: '',
      subReddit: '',
      poster: '',
      timeOfPost: '',
      title: '',
      src: '',
      upvotes: 0,
      downvotes: 0,
      comments: []
    });
    setRedirect(true);
  }

  return redirect? <Redirect to='/' /> : (
    <div className="container-fluid">
      <h2>Add a Post</h2>
      <form>
        <div className="form-group col-md-6">
          <label>subReddit</label>
          <input
            type="text"
            name="subReddit"
            className="form-control"
            value={post.subReddit}
            onChange={(e) => setPost({...post, subReddit: e.target.value})}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Poster</label>
          <input
            type="text"
            name="poster"
            className="form-control"
            value={post.poster}
            onChange={(e) => setPost({...post, poster: e.target.value})}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={post.title}
            onChange={(e) => setPost({...post, title: e.target.value})}
          />
        </div>
        <div className="form-group col-md-6">
          <label>URL</label>
          <input
            type="text"
            name="src"
            className="form-control"
            value={post.src}
            onChange={(e) => setPost({...post, src: e.target.value})}
          />
        </div>
        <button type="submit" className="btn btn-primary push-right" onClick={ (e) => handleSubmit(e) }>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPost;
