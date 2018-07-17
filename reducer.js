import {
  	ADD_COMMENT,
  	REMOVE_COMMENT,
  	EDIT_COMMENT,
  	THUMB_UP_COMMENT,
	THUMB_DOWN_COMMENT,
} 	from './actions';

import {combineReducers} from 'redux';
import comments from './comments';
//import users from './users';

export const app = combineReducers({
	comments,
  	users
});


















/*
const initialState = {
    comments: [],
    users: []
};
//
//function reducer(state, action) {
//    if (!state) {
//        return initialState;
//}
//    return state;
//}
//// to samo co w ES6
//function reducer(state = initialState, action) {
//    return state;
//}
//

function reducer (state = initialState, action) {
  switch(action.type) {
    case ADD_COMMENT:
        return Object.assign({}, state, {
          comments: [
            {
                id: action.id,
                text: action.text,
                votes: 0
            }
          , ...state]
        });
  case REMOVE_COMMENT:
      return Object.assign({}, state, {
          comments: state.comments.filter(comment => comment.id !== action.id)
      });
  case EDIT_COMMENT:
      return Object.assign({}, state, {
          comments: state.comments.map(comment => {
              if(comment.id === action.id) {
                  comment.text = action.text;
              }
                return comment;
          })
        });
  case THUMB_UP_COMMENT:
      return Object.assign({}, state, {
          comments: state.comments.map(comment => {
              if(comment.id === action.id) {
               comment.votes++;
              }
                return comment;
          })
        });
  case THUMB_DOWN_COMMENT:
      return Object.assign({}, state, {
          comments: state.comments.map(comment => {
              if(comment.id === action.id) {
               comment.votes--;
              }
                return comment;
              })
          });
  default:
      return state;
  }
}
*/