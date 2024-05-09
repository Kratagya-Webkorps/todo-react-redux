
export const AddTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  const hasTodos = todos.find((i) => i.todo === todo);


  if (todo !== "" && !hasTodos && todo !== undefined) {
    dispatch({
      type: "ADD_TODO",
      payload: [...todos, { id: todo, todo }],
    });
  }
};

export const RemoveTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  dispatch({
    type: "REMOVE_TODO",
    payload: todos.filter((t) => t.id !== todo.id),
  });
};
