import { Item, ItemsTypes } from '@/types'

export const addItem = (title: string, description: string) => ({
  type: ItemsTypes.ADD_ITEM,
  payload: {
    title,
    description
  }
})

export const toggleItem = (uuid: string, completed: boolean) => ({
  type: ItemsTypes.TOGGLE_ITEM,
  payload: {
    uuid,
    completed
  }
})

export const toggleEditItem = (uuid: string) => ({
  type: ItemsTypes.TOGGLE_EDIT_ITEM,
  payload: {
    uuid
  }
})

export const updateItem = (uuid: string, title: string, description: string) => ({
  type: ItemsTypes.UPDATE_ITEM,
  payload: {
    uuid,
    title,
    description
  }
})

export const removeItem = (uuid: string) => ({
  type: ItemsTypes.REMOVE_ITEM,
  payload: {
    uuid
  }
})

export const loadRequest = () => ({
  type: ItemsTypes.LOAD_REQUEST
})

export const loadSuccess = (data: Item[]) => ({
  type: ItemsTypes.LOAD_SUCCESS,
  data
})

export const loadFailure = () => ({
  type: ItemsTypes.LOAD_FAILURE
})

export const insertTodoSuccess = (data: Item) => ({
  type: ItemsTypes.INSERT_SUCCESS,
  payload: data,
});
