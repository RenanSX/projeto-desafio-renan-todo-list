/**
 * Action types
 */
export enum ItemsTypes {
  ADD_ITEM = 'ADD_ITEM',
  TOGGLE_ITEM = 'TOGGLE_ITEM',
  TOGGLE_EDIT_ITEM = 'TOGGLE_EDIT_ITEM',
  UPDATE_ITEM = 'UPDATE_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  LOAD_REQUEST = 'LOAD_REQUEST',
  LOAD_SUCCESS = 'LOAD_SUCCESS',
  LOAD_FAILURE = 'LOAD_FAILURE',
  INSERT_SUCCESS = 'INSERT_SUCCESS'
}

/**
 * Filter options
 */
export enum VisibilityFilters {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_ACTIVE = 'SHOW_ACTIVE',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
  UPDATE_FILTER = 'UPDATE_FILTER'
}

export interface TaskListActionTypes {
  type: string
  payload: Item
  data: Item[]
}

export interface FilterActionTypes {
  type: string
  payload: {
    filter: string
  }
}

export interface InsertTaskActionTypes {
  type: string
  payload: InsertItem
}

/**
 * Data types
 */
export interface Item {
  uuid: string
  title: string
  description?: string
  editing?: boolean
  completed: boolean
}

export interface InsertItem {
  title: string
  description: string
}

/**
 * State types
 */
export interface ApplicationState {
  items: ItemsState
  filterState: string
}

export interface ItemsState {
  readonly data: Item[]
}
