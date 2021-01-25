import fetch from "cross-fetch";

const SET_PHOTOS_DATA = 'SET_PHOTOS_DATA'

export function listPhotos() {
    return async (dispatch, getState) => {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');    
      const data = await response.json();
      dispatch({
        type: SET_PHOTOS_DATA,
        payload: data,
      });
    };
  };

  export function updateList(arr) {
    return {
      type: SET_PHOTOS_DATA,
      payload: arr,
    };
  }