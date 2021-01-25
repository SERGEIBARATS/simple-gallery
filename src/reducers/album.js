import { handleActions } from "redux-actions";

const initialState = [];

export const albumReducer = handleActions({
   SET_ALBUM_DATA: (state, action) => action.payload,
  }, initialState);
