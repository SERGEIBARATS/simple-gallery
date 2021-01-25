import fetch from "cross-fetch";

const SET_ALBUM_DATA = 'SET_ALBUM_DATA'

export function list() {
  return async (dispatch, getState) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');    
    const data = await response.json();
    dispatch({
      type: SET_ALBUM_DATA,
      payload: data.splice(0, 25),
    });
  };
}


