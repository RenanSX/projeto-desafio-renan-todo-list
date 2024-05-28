import { call, put } from 'redux-saga/effects'
import { loadFailure, loadSuccess } from '@/store/actions/items'
import { loadRequest, insertRequest } from '@/store/sagas/sagas'
import api from '@/services/api'

const action = {
  title: 'test',
  description: 'test'
}

jest.mock('@/services/api')

describe('Sagas', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should handle loadRequest success', () => {
    const gen = loadRequest()
    expect(gen.next().value).toEqual(call(api.get, '/tasks'))
    expect(gen.next({ data: { body: [{
      uuid: 'uuid_test',
      title: 'test',
      description: 'test',
      completed: true,
      editing: true
    }]} }).value).toEqual(
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
    expect(gen.next().value).toEqual(call(api.post, '/tasks', {
      title: 'test',
      description: 'test'
    }))
    expect(gen.next().done).toBe(true)
  })

  it('should handle insertRequest failure', () => {
    const gen = insertRequest({ type: 'INSERT_TODO', payload: action })
    expect(gen.next().value).toEqual(call(api.post, '/tasks', {
      title: 'test',
      description: 'test'
    }))
    expect(gen.throw(new Error('error')).value).toEqual(put(loadFailure()))
    expect(gen.next().done).toBe(true)
  })
})
