import { VisibilityFilters, FilterActionTypes } from '../../types'

const filterReducer = (state = VisibilityFilters.SHOW_ALL, { type, payload }: FilterActionTypes) => {
  switch (type) {
    case VisibilityFilters.UPDATE_FILTER:
      return payload.filter
    default:
      return state
  }
}

export default filterReducer
