/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, put, takeLatest } from 'redux-saga/effects'
import api from '@/services/api'
import { InsertTaskActionTypes, ItemsTypes, TaskListActionTypes } from '@/types'
import { loadFailure, loadSuccess, insertTaskSuccess } from '@/store/actions/items'

export function* loadRequest() {
  try {
    const { data } = yield call(api.get, '/tasks')
    yield put(loadSuccess(data.body))
  } catch (error) {
    yield put(loadFailure())
  }
}

export function* insertRequest(payload: InsertTaskActionTypes) {
  try {
    const {data} = yield call(api.post, '/tasks', payload.payload)
    yield put(insertTaskSuccess(data.body));
  } catch (error) {
    yield put(loadFailure())
  }
}

export function* watchInsertRequest() {
  yield takeLatest(ItemsTypes.ADD_ITEM, insertRequest);
}

export function* markCompleteRequest({ payload }: TaskListActionTypes) {
  try {
    const dataPayload = {
      completed: payload.completed
    }
    yield call(api.post, `/tasks/${payload.uuid}/complete`, dataPayload)
  } catch (error) {
    yield put(loadFailure())
  }
}

export function* findByIdRequest({ payload }: TaskListActionTypes) {
  try {
    yield call(api.get, `/tasks/${payload.uuid}`)
  } catch (error) {
    yield put(loadFailure())
  }
}

export function* updateRequest({ payload }: TaskListActionTypes) {
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

export function* deleteRequest({ payload }: TaskListActionTypes) {
  try {
    yield call(api.delete, `/tasks/${payload.uuid}`)
  } catch (error) {
    yield put(loadFailure())
  }
}
