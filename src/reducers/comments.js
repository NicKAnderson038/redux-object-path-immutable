import immutable from "object-path-immutable";
function comments(state = [], action) {
  if (typeof action.postId !== "undefined") {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    };
  }
  return state;
}

function postComments(state = [], action) {
  switch (action.type) {
    case "ADD_COMMENT":
      // return [
      //   ...state,
      //   {
      //     user: action.author,
      //     text: action.comment
      //   }
      // ];
      return immutable.set(
        state,
        {},
        {
          user: action.author,
          text: action.comment
        }
      );
    case "REMOVE_COMMENT":
      console.log("removed!!!");
      return [...state.slice(0, action.i), ...state.slice(action.i + 1)];
    default:
      return state;
  }
  return state;
}

export default comments;
