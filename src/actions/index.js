import { ADD_POST, ADD_COMMENT, UPVOTE, DOWNVOTE } from '../constants';

// import your constants into your actions

/**
 *    Create your action creators here:
 *    > Should return an object with at least a 'type' attribute
 *    > Don't forget to export your functions
 */

// You can use this function to generate unique IDs for posts
const ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  export const addPost = (userPost) => {
    userPost.id = ID();
    userPost.timeOfPost = new Date();
    return { type: ADD_POST, payload: userPost }
  }

  export const upVote = (Postid) => {
    return { type: UPVOTE, payload: Postid }
  }

  export const downVote = (Postid) => {
    return { type: DOWNVOTE, payload: Postid }
  }

export const addComment = (PostId,comment) => {
  return {type: ADD_COMMENT, payload: {PostId, comment} }
} 

