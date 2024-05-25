/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { InsertTodoActionTypes, TodoListActionTypes } from '../../types';
import { loadFailure, loadSuccess } from '../actions/items';

export function* loadRequest() {
  try {
    const { data } = yield call(api.get, '/tasks');
    yield put(loadSuccess(data.body));
  } catch (error) {
    yield put(loadFailure());
  }
}

export function* insertRequest(payload: InsertTodoActionTypes) {
  try {
    yield call(api.post, '/tasks', payload.payload);
  } catch (error) {
    yield put(loadFailure());
  }
}

export function* markCompleteRequest({ payload }: TodoListActionTypes) {
  console.log('toggle item', payload)
  try {
    const dataPayload = {
      completed: payload.completed
    }
    yield call(api.post, `/tasks/${payload.uuid}/complete`, dataPayload);
  } catch (error) {
    yield put(loadFailure());
  }
}


export function* findByIdRequest({ payload }: TodoListActionTypes) {
  console.log('toggle edit item', payload)
  try {
    yield call(api.get, `/tasks/${payload.uuid}`);
  } catch (error) {
    yield put(loadFailure());
  }
}


export function* updateRequest({ payload }: TodoListActionTypes) {
  try {
    const dataPayload = {
      title: payload.title,
      description: payload.description
    }
    yield call(api.patch, `/tasks/${payload.uuid}`, dataPayload);
  } catch (error) {
    yield put(loadFailure());
  }
}


export function* deleteRequest({ payload }: TodoListActionTypes) {
  try {
    console.log
    yield call(api.delete, `/tasks/${payload.uuid}`);
  } catch (error) {
    yield put(loadFailure());
  }
}
