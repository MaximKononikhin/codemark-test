import Axios from "axios";
import { ImageType, ThunkActionType } from "../types";
import { ActionTypes, CLEAR_LIST, CLEAR_REQ_LIST, SET_IMAGES, SET_REQUEST, SWITCH_ERROR_TEXT, SWITCH_LOADING } from "./actionTypes";

export const getImages = (tag: string): ThunkActionType => {
  return async (dispatch, getState) => {
    dispatch(switchLoading(true));
    const result = await Axios.get(`https://api.giphy.com/v1/gifs/random?api_key=JFSRx1CFLGEhilmQQWCmXKURUArFuSdS&tag=${tag}`);
    if (result.data.meta.status !== 200) {
      dispatch(switchLoading(false));
      dispatch(switchErrorText(`Произошла ошибка ${result.data.met.status }`));
    } else if (result.data.data.length === 0) {
      dispatch(switchLoading(false));
      dispatch(switchErrorText('По тегу ничего не найдено'));
    }
    else {
      dispatch(setImages({
        image: result.data.data.image_url,
        title:result.data.data.title
      }));
      dispatch(switchLoading(false));
      dispatch(switchErrorText(''))
    }

    console.log(result.data)
  }
}

export const setImages = (images: ImageType): ActionTypes => {
  return {
    type: SET_IMAGES,
    payload: images
  }
};

export const clearList = (): ActionTypes => {
  return {
    type: CLEAR_LIST
  }
};

export const switchLoading = (flag: boolean): ActionTypes => {
  return {
    type: SWITCH_LOADING,
    payload: flag
  }
};

export const switchErrorText = (text: string): ActionTypes => {
  return {
    type: SWITCH_ERROR_TEXT,
    payload: text
  }
};

export const setRequest = (request: string): ActionTypes => {
  return {
    type: SET_REQUEST,
    payload: request
  }
}

export const clearReqList = (): ActionTypes => {
  return {
    type: CLEAR_REQ_LIST
  }
};