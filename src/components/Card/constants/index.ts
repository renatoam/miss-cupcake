import { Actions, ActionStatusType } from "../types"

export const INITIAL_QUANTITY = 0
export const MAXIMUM_LIMIT_REACHED = 'Maximum quantity reached'
export const OUT_OF_STOCK = 'Out of stock'
export const MESSAGE_TIMEOUT = 5000
export const INITIAL_INDEX = -1

export const actionStatusBase: ActionStatusType = {
  add: {
    type: Actions.add,
    text: 'Add to Cart',
    loading: 'Adding...'
  },
  remove: {
    type: Actions.remove,
    text: 'Remove from Cart',
    loading: 'Removing...'
  },
  update: {
    type: Actions.update,
    text: 'Update Cart',
    loading: 'Updating...'
  },
  ignore: {
    type: Actions.ignore,
    text: 'Nothing changed',
    loading: 'Loading...'
  },
}

export const initialActionStatus = {
  type: Actions.add,
  text: 'Add to Cart'
}