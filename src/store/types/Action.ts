import { Action as ReduxAction } from 'redux';

export type Action<T = string, P = any> = ReduxAction<T> & {
  payload: P;
  error?: Error;
};
