const reducer = (state, action) => {
  switch (action.type) {
    case "add": {
      const newCounter = state.counter + 1;
      const newTodo = {
        id: newCounter,
        text: action.text,
        done: false
      };
      return {
        counter: newCounter,
        todos: [...state.todos, newTodo]
      };
    }
    case "edit": {
      const id = state.todos.findIndex(t => t.id === action.id);
      const todo = state.todos[id];
      todo.text = action.text;
      const todos = [...state.todos];
      todos.splice(id, 1, todo);
      return {
        counter: state.counter,
        todos: todos
      };
    }
    case "remove": {
      const id = state.todos.findIndex(t => t.id === action.id);
      const todos = [...state.todos];
      todos.splice(id, 1);
      return {
        counter: state.counter,
        todos: todos
      };
    }
    case "done": {
      const id = state.todos.findIndex(t => t.id === action.id);
      const todo = state.todos[id];
      todo.done = !todo.done;
      const todos = [...state.todos];
      todos.splice(id, 1, todo);
      return {
        counter: state.counter,
        todos: todos
      };
    }
    default:
      return state;
  }
};

export default reducer;
