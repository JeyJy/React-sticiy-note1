import { Comment } from "../../comment/types/comment";

export const GET_COMMENT = 'GET_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const GET_ERRORS = 'GET_ERRORS'

export interface IComment {
    comments: Comment | string[]
}