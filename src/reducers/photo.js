import { handleActions } from "redux-actions";

const initialState = [];

export const photoReducer = handleActions({
    SET_PHOTOS_DATA: (state, action) => action.payload,
   }, initialState);
