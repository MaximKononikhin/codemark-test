import { AxiosInstance } from "axios";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { ActionTypes } from "./Store/actionTypes";

export type IAppState = {
  images: ImageType[],
  isLoading: boolean,
  errorText: string,
  requests: string[]
};

export type ImageType = {
  image: string,
  title: string
};

export type ThunkActionType = ThunkAction<Promise<void>, IAppState, AxiosInstance, ActionTypes>;
export type ThunkDispatchType = ThunkDispatch<IAppState, AxiosInstance, ActionTypes>;