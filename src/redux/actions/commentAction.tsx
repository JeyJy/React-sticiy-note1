import {
  GET_COMMENT,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  GET_ERRORS
} from "../types/commentType";
import { Comment } from "../../comment/types/comment";
import { getAPI, postAPI, putAPI, deleteAPI } from "../../utils/FetchData";

export const getComment = () => async (dispatch: React.Dispatch<any>) => {
  try {
    const res = await getAPI("comment");

    dispatch({
      type: GET_COMMENT,
      payload: {
        comments: res.data,
      },
    });
  } catch (err: any) {
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  }
};

export const addComment =
  (formData: Comment) => async (dispatch: React.Dispatch<any>) => {
    try {
      const res = await postAPI("comment", formData);

      dispatch({
        type: ADD_COMMENT,
        payload: {
          comments: res.data.comments,
        }
      });
      
    } catch (err: any) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    }
};

export const updateComment =
  (formData: Comment) => async (dispatch: React.Dispatch<any>) => {
    try {
      const res = await putAPI(`comment/${formData.id}`, formData);

      dispatch({
        type: EDIT_COMMENT,
        payload: {
          comments: res.data.comments,
        }
      });
    } catch (err: any) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    }
};

export const deleteComment =
  (formData: Comment) => async (dispatch: React.Dispatch<any>) => {
    try {
      const res = await deleteAPI(`comment/${formData}`);

      dispatch({
        type: DELETE_COMMENT,
        payload: {
          comments: res.data.comments,
        }
      });
    } catch (err: any) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    }
};


