import { IAppState } from "../types";
import { CLEAR_LIST, CLEAR_REQ_LIST, SET_IMAGES, SET_REQUEST, SWITCH_ERROR_TEXT, SWITCH_LOADING } from "./actionTypes";
import { ActionTypes } from "./actionTypes";

const initialState: IAppState = {
  images: [],
  isLoading: false,
  errorText: '',
  requests: []
}


export const reducer = (state = initialState, action: ActionTypes): IAppState => {
  switch (action.type) {
    case SET_IMAGES:
      return {
        ...state,
        images: [...state.images, action.payload]
      }

    case CLEAR_LIST:
      return {
        ...state,
        images: []
      }

    case SWITCH_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    case SWITCH_ERROR_TEXT:
      return {
        ...state,
        errorText: action.payload
      }

    case SET_REQUEST:
      return {
        ...state,
        requests: state.requests.includes(action.payload)? state.requests : [...state.requests, action.payload]
      }

    case CLEAR_REQ_LIST: {
      return {
        ...state,
        requests: []
      }
    }

    default: return state;
  }
}