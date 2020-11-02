import { ImageType } from "../types";

export const SET_IMAGES = 'get-images';
export const CLEAR_LIST = 'clear-list';
export const SWITCH_LOADING = 'switch-loading';
export const SWITCH_ERROR_TEXT = 'switch-error-text';
export const SET_REQUEST = 'set-request';
export const CLEAR_REQ_LIST = 'clear-req-list';

type SetImagesType = {
  type: typeof SET_IMAGES,
  payload: ImageType
}

type ClearListType = {
  type: typeof CLEAR_LIST
}

type SwitchLoadingType = {
  type: typeof SWITCH_LOADING,
  payload: boolean
}

type SwitchErrorText = {
  type: typeof SWITCH_ERROR_TEXT,
  payload: string
}

type SetRequesType = {
  type: typeof SET_REQUEST,
  payload: string
}

type ClearReqList = {
  type: typeof CLEAR_REQ_LIST
}

export type ActionTypes = SetImagesType | ClearListType | SwitchLoadingType | SwitchErrorText | SetRequesType | ClearReqList;