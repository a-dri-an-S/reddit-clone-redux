import { ADD_POST, ADD_COMMENT, UPVOTE, DOWNVOTE } from '../constants';



const initialState = [
  {
    id: '0',
    subReddit: 'pugs',
    poster: 'DukeOfWindsor',
    timeOfPost: 'Sat Sep 14 2019 19:03:20 GMT-0700 (Pacific Daylight Time)',
    title: 'Angry pug',
    src: 'https://static-cdn.jtvnw.net/jtv_user_pictures/4376924f-8207-49a6-85a4-60f2fe20ce91-profile_image-300x300.png',
    upvotes: 10000,
    downvotes: 300,
    comments: []
  },
  {
    id: '1',
    subReddit: 'pugs',
    poster: 'DukeOfWindsor',
    timeOfPost: 'Sat Sep 14 2019 19:03:20 GMT-0700 (Pacific Daylight Time)',
    title: 'Angry pug',
    src: 'https://static-cdn.jtvnw.net/jtv_user_pictures/4376924f-8207-49a6-85a4-60f2fe20ce91-profile_image-300x300.png',
    upvotes: 10000,
    downvotes: 300,
    comments: []
  }
]



/**
 *    You will add different action logic here by creating
 *    case statements
 */
const rootReducer = (state = initialState, action) => {

  let arrCopy = [];
  let index;

  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];
    case UPVOTE:
      //make a copy of state
      //find index of obj
      //update upvote at that index
      //return modified copy
      arrCopy = state;
      //index = arrCopy.map(p => p.id).indexOf(action.payload);
      arrCopy.forEach( (v, i) => {
        if(v.id === action.payload) index = i;
      });
      arrCopy[index].upvotes++;
      return arrCopy;
    case DOWNVOTE:
      arrCopy = state;
      index = arrCopy.map(p => p.id).indexOf(action.payload);
      arrCopy[index].downvotes++;
      return arrCopy;
    case ADD_COMMENT:
      arrCopy = state;
      index = arrCopy.map(p => p.id).indexOf(action.payload.PostId);
      console.log(action.payload);
      arrCopy[index].comments.push(action.payload.comment);
      return arrCopy;       
    default:
      return state;
  }
}

export default rootReducer;