import { createActions, handleActions } from "redux-actions";
import { v4 as uuidv4 } from "uuid";

// actions
export const Actions = createActions(
  {
    ADD_TODO: (value, form) => ({
      id: uuidv4(),
      deadline: form.deadline,
      favorite: form.favorite,
      isCompleted: false,
      isTask: false,
      memo: "",
      priority: form.priority,
      value: value,
    }),
    REMOVE_TODO: (index) => ({ index: index }),
    COMPLETE_TODO: (id) => ({ id: id }),
    UPDATE_TODO: (id, value, form) => ({
      id: id,
      value: value,
      favorite: form.favorite,
      priority: form.priority,
      deadline: form.deadline,
      memo: form.memo,
    }),
    CHANGE_TEXTFORM: (id) => ({ id: id }),
  },
  "CANCEL_UPDATE"
);

// reducer
const INITIAL_STATE = {
  todos: [],
};

const todo = handleActions(
  {
    [Actions.addTodo]: (state, action) => ({
      ...state,
      todos: [...state.todos, action.payload],
    }),
    [Actions.removeTodo]: (state, action) => ({
      ...state,
      todos: [...state.todos.slice(0, action.payload.index), ...state.todos.slice(action.payload.index + 1)],
    }),
    [Actions.completeTodo]: (state, action) => ({
      ...state,
      todos: state.todos.map((todo) => ({
        ...todo,
        isCompleted: action.payload.id === todo.id ? !todo.isCompleted : todo.isCompleted,
      })),
    }),
    [Actions.updateTodo]: (state, action) => ({
      ...state,
      todos: state.todos.map((todo) => ({
        ...todo,
        deadline: action.payload.id === todo.id ? action.payload.deadline : todo.deadline,
        value: action.payload.id === todo.id ? action.payload.value : todo.value,
        isTask: action.payload.id === todo.id ? !todo.isTask : todo.isTask,
        favorite: action.payload.id === todo.id ? action.payload.favorite : todo.favorite,
        memo: action.payload.id === todo.id ? action.payload.memo : todo.memo,
        priority: action.payload.id === todo.id ? action.payload.priority : todo.priority,
      })),
    }),
    [Actions.changeTextform]: (state, action) => ({
      ...state,
      todos: state.todos.map((todo) => ({
        ...todo,
        isTask: action.payload.id === todo.id ? true : false,
      })),
    }),
    [Actions.cancelUpdate]: (state) => ({
      ...state,
      todos: state.todos.map((todo) => ({
        ...todo,
        isTask: false,
      })),
    }),
  },
  INITIAL_STATE
);

export default todo;
