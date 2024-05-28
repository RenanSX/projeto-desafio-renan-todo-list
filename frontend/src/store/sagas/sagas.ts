/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, put, takeLatest } from 'redux-saga/effects'
import api from '@/services/api'
import { InsertTodoActionTypes, ItemsTypes, TodoListActionTypes } from '@/types'
import { loadFailure, loadSuccess, insertTodoSuccess } from '@/store/actions/items'

export function* loadRequest() {
  try {
    const { data } = yield call(api.get, '/tasks')
    yield put(loadSuccess(data.body))
  } catch (error) {
    yield put(loadFailure())
  }
}

export function* insertRequest(payload: InsertTodoActionTypes) {
  try {
    const {data} = yield call(api.post, '/tasks', payload.payload)
    yield put(insertTodoSuccess(data.body));
  } catch (error) {
    yield put(loadFailure())
  }
}

export function* watchInsertRequest() {
  yield takeLatest(ItemsTypes.ADD_ITEM, insertRequest);
}

export function* markCompleteRequest({ payload }: TodoListActionTypes) {
  try {
    const dataPayload = {
      completed: payload.completed
    }
    yield call(api.post, `/tasks/${payload.uuid}/complete`, dataPayload)
  } catch (error) {
    yield put(loadFailure())
  }
}

export function* findByIdRequest({ payload }: TodoListActionTypes) {
  try {
    yield call(api.get, `/tasks/${payload.uuid}`)
  } catch (error) {
    yield put(loadFailure())
  }
}

export function* updateRequest({ payload }: TodoListActionTypes) {
  try {
    const dataPayload = {
      title: payload.title,
      description: payload.description
    }
    yield call(api.patch, `/tasks/${payload.uuid}`, dataPayload)
  } catch (error) {
    yield put(loadFailure())
  }
}

export function* deleteRequest({ payload }: TodoListActionTypes) {
  try {
    yield call(api.delete, `/tasks/${payload.uuid}`)
  } catch (error) {
    yield put(loadFailure())
  }
}
