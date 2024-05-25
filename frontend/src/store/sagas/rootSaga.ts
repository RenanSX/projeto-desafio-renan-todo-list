import { all, takeLatest } from 'redux-saga/effects'
import { ItemsTypes } from '../../types'
import { deleteRequest, loadRequest, insertRequest, markCompleteRequest, findByIdRequest, updateRequest } from './sagas'

export default function* rootSaga(): Generator {
  return yield all([
    takeLatest(ItemsTypes.ADD_ITEM, insertRequest),
    takeLatest(ItemsTypes.TOGGLE_ITEM, markCompleteRequest),
    takeLatest(ItemsTypes.TOGGLE_EDIT_ITEM, findByIdRequest),
    takeLatest(ItemsTypes.UPDATE_ITEM, updateRequest),
    takeLatest(ItemsTypes.REMOVE_ITEM, deleteRequest),
    takeLatest(ItemsTypes.LOAD_REQUEST, loadRequest)
  ])
}
