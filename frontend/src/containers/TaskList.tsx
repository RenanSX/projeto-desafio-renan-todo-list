import { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import * as itemsActions from '@/store/actions/items'
import { ApplicationState, Item, VisibilityFilters } from '@/types'
import { Header, TaskFilters, TaskForm, TaskItem, TaskMessage } from '@/components'

interface StateProps {
  items: Item[]
  filterState: string
}

interface DispatchProps {
  addItem(title: string, description: string): void
  toggleItem(uuid: string, completed: boolean): void
  toggleEditItem(uuid: string): void
  updateItem(uuid: string, title: string, description: string): void
  removeItem(uuid: string): void
  loadRequest(): void
}

type Props = StateProps & DispatchProps

const TaskList = ({
  items,
  addItem,
  toggleItem,
  toggleEditItem,
  updateItem,
  removeItem,
  filterState,
  loadRequest
}: Props) => {
  useEffect(() => {
    loadRequest()
  }, [loadRequest])

  const getTaskCounter = () =>
    filterState === VisibilityFilters.SHOW_COMPLETED
      ? {
          counter: items.filter((item) => item.completed).length,
          text: 'Tarefas completas'
        }
      : {
          counter: items.filter((item) => !item.completed).length,
          text: 'tarefas restantes'
        }

  return (
    <div className="task-list">
      <Header title="Lista de tarefas" />

      <div className="content">
        <TaskForm emptyList={!items.length} addItem={addItem} />

        {items.length === 0 ? (
          <TaskMessage filterState={filterState} getTaskCounter={getTaskCounter} />
        ) : (
          <>
            <ul className="items">
              {items.map((item) => (
                <TaskItem
                  key={item.uuid}
                  item={item}
                  toggleItem={toggleItem}
                  toggleEditItem={toggleEditItem}
                  updateItem={updateItem}
                  removeItem={removeItem}
                />
              ))}
            </ul>

            <TaskFilters taskCounter={getTaskCounter()} />
          </>
        )}
      </div>
    </div>
  )
}

const filterItems = (items: Item[], filter: string) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ACTIVE:
      return items.filter((item) => !item.completed)
    case VisibilityFilters.SHOW_COMPLETED:
      return items.filter((item) => item.completed)
    default:
      return items
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  items: filterItems(state.items.data, state.filterState),
  filterState: state.filterState
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(itemsActions, dispatch)

const ConnectedTaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList)

export default ConnectedTaskList
