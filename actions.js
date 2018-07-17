import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
  return {
    type: ADD_COMMENT,
    text: 'content',
    id: uuid.v4(),
	votes: 0
  }
}

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id: comment.id
  }
}

function editComment(id, text) {
  return {
    type: EDIT_COMMENT,
    text: '',
    id: comment.id
  }
}

function thumbUpComment(id, votes) {
  return {
    type: THUMB_UP_COMMENT,
    votes: +1,
    id: comment.id
  }
}

function thumbDownComment(id, votes) {
  return {
    type: THUMB_DOWN_COMMENT,
    votes: -1,
    id: comment.id
  }
}
