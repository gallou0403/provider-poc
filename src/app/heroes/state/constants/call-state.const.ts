export enum LoadingState {
  Init = 'INIT',
  Loading = 'LOADING',
  Loaded = 'LOADED'
}

export interface ErrorState {
  error: string;
}

export type CallState = LoadingState | ErrorState;

export function getError(callState: CallState): string | null {
  if ((callState as ErrorState).error !== undefined) {
    return (callState as ErrorState).error;
  }
  return null;
}
