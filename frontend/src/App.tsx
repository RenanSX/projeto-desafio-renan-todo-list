import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import TaskList from './containers/TaskList'
import '@/style.scss'

const App = () => (
  <Provider store={store}>
    <TaskList />
  </Provider>
)

export default App
