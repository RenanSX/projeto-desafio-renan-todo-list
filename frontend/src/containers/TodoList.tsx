import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Header from '../components/Header';
import TodoFilters from '../components/TodoFilters';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';
import * as itemsActions from '../store/actions/items';
import { ApplicationState, Item, VisibilityFilters } from '../types';
import TodoMessage from '../components/TodoMessage';

interface StateProps {
  items: Item[],
  filterState: string
}

interface DispatchProps {
  addItem(title: string, description: string): void,
  toggleItem(uuid: string, completed: boolean): void,
  toggleEditItem(uuid: string): void,
  updateItem(uuid: string, title: string, description: string): void,
  removeItem(uuid: string): void,
  loadRequest(): void
}

type Props = StateProps & DispatchProps;

const TodoList = ({
  items,
  addItem,
  toggleItem,
  toggleEditItem,
  updateItem,
  removeItem,
  filterState,
  loadRequest,
}: Props) => {
  useEffect(() => {
    loadRequest();
  }, [loadRequest]);

  const getTaskCounter = () => (filterState === VisibilityFilters.SHOW_COMPLETED
    ? {
      counter: items.filter((item) => item.completed).length,
      text: 'Tarefas completas',
    } : {
      counter: items.filter((item) => !item.completed).length,
      text: 'tarefas restantes',
    });

  return (
    <div className="todo-list">
      <Header title="Lista de tarefas" />

      <div className="content">
        <TodoForm
          emptyList={!items.length}
          addItem={addItem}
        />

        {items.length === 0
          ? (
            <TodoMessage
              filterState={filterState}
              getTaskCounter={getTaskCounter}
            />
          ) : (
            <>
              <ul className="items">
                {items.map((item) => (
                  <TodoItem
                    key={item.uuid}
                    item={item}
                    toggleItem={toggleItem}
                    toggleEditItem={toggleEditItem}
                    updateItem={updateItem}
                    removeItem={removeItem}
                  />
                ))}
              </ul>

              <TodoFilters taskCounter={getTaskCounter()} />
            </>
          )}
      </div>
    </div>
  );
};

const filterItems = (items: Item[], filter: string) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ACTIVE:
      return items.filter((item) => !item.completed);
    case VisibilityFilters.SHOW_COMPLETED:
      return items.filter((item) => item.completed);
    default:
      return items;
  }
};

const mapStateToProps = (state: ApplicationState) => ({
  items: filterItems(state.items.data, state.filterState),
  filterState: state.filterState,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(itemsActions, dispatch);

const ConnectedTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default ConnectedTodoList;
