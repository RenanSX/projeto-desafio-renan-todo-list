import { call, put } from 'redux-saga/effects'
import { loadFailure, loadSuccess } from '../actions/items'
import { loadRequest, insertRequest } from './sagas'
import api from '../../services/api'

const action = {
  title: 'test',
  description: 'test'
}

jest.mock('../../services/api')

describe('Sagas', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should handle loadRequest success', () => {
    const gen = loadRequest()
    expect(gen.next().value).toEqual(call(api.get, '/tasks'))
    expect(gen.next({ data: { body: [{ id: 1, title: 'test' }] } }).value).toEqual(
      put(
        loadSuccess([
          {
            uuid: 'uuid_test',
            title: 'test',
            description: 'test',
            completed: true,
            editing: true
          }
        ])
      )
    )
    expect(gen.next().done).toBe(true)
  })

  it('should handle loadRequest failure', () => {
    const gen = loadRequest()
    expect(gen.next().value).toEqual(call(api.get, '/tasks'))
    expect(gen.throw(new Error('error')).value).toEqual(put(loadFailure()))
    expect(gen.next().done).toBe(true)
  })

  it('should handle insertRequest success', () => {
    const gen = insertRequest({ type: 'INSERT_TODO', payload: action })
    expect(gen.next().value).toEqual(call(api.post, '/tasks', 'test'))
    expect(gen.next().done).toBe(true)
  })

  it('should handle insertRequest failure', () => {
    const gen = insertRequest({ type: 'INSERT_TODO', payload: action })
    expect(gen.next().value).toEqual(call(api.post, '/tasks', 'test'))
    expect(gen.throw(new Error('error')).value).toEqual(put(loadFailure()))
    expect(gen.next().done).toBe(true)
  })
})
