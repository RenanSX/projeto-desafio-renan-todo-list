import { ItemsState, ItemsTypes, TodoListActionTypes } from '../../types';

const initialState: ItemsState = {
  data: [],
};

export default function itemsReducer(state = initialState, action: TodoListActionTypes): ItemsState {
  switch (action.type) {
    case ItemsTypes.ADD_ITEM:
      return {
        data: [
          ...state.data,
          {
            uuid: action.payload.uuid,
            title: action.payload.title,
            description: action.payload.description,
            editing: action.payload.editing,
            completed: action.payload.completed
          },
        ],
      };

    case ItemsTypes.TOGGLE_ITEM:
      return {
        data: state.data.map((item) => ((item.uuid === action.payload.uuid)
          ? { ...item, completed: !item.completed }
          : item)),
      };

    case ItemsTypes.TOGGLE_EDIT_ITEM:
      return {
        data: state.data.map((item) => ((item.uuid === action.payload.uuid)
          ? { ...item, editing: !item.editing }
          : item)),
      };

    case ItemsTypes.UPDATE_ITEM:
      return {
        data: state.data.map((item) => ((item.uuid === action.payload.uuid)
          ? { ...item, title: action.payload.title, description: action.payload.description }
          : item)),
      };

    case ItemsTypes.REMOVE_ITEM:
      return {
        data: state.data.filter((item) => item.uuid !== action.payload.uuid),
      };

    case ItemsTypes.LOAD_REQUEST:
      return { ...state };

    case ItemsTypes.LOAD_SUCCESS:
      return {
        data: action.data,
      };

    case ItemsTypes.LOAD_FAILURE:
      return {
        data: [],
      };

    default:
      return state;
  }
}
