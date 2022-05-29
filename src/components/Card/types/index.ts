export enum Actions {
  add = 'add',
  remove = 'remove',
  update = 'update',
  ignore = 'ignore',
}

export type ActionType = 'add' | 'remove' | 'update' | 'ignore'

export interface handleChangeCartProps<T> {
  statusLoading: ActionType
  statusText: ActionType
  action?: T
  timeout?: number
}

export type ActionStatusType = {
  [key in ActionType]: {
    type: Actions,
    text: string,
    loading: string
  }
}
