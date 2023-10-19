import {
  GET_COMMENT,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  IComment,
} from "../types/commentType";

const initialState: IComment = {
    comments: [],
}

const commentReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_COMMENT:
            return {
                ...state,
                comments: action.payload.comments
            }
        case ADD_COMMENT:
            return {
                ...state,
                comments: action.payload.comments,
            }
        case EDIT_COMMENT:
            return {
                ...state,
                comments: action.payload.comments,
            }
        case DELETE_COMMENT:
            return {
                ...state,
                comments: action.payload.comments,
            }
        default:
            return state
    }
}

export default commentReducer