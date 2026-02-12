import { selector } from "recoil";
import { todoListState, filterState } from "./todoState";

export const filteredTodoList = selector({
  key: "filteredTodoList",
  get: ({ get }) => { 
    const filter = get(filterState);
    const todos = get(todoListState);

    switch (filter) { 
      case "active":
        return todos.filter(todo => !todo.completed);
      case "completed":
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }
});

export const remainingTodoCount = selector({
  key: "remainingTodoCount",
  get: ({ get }) => {
    const todos = get(todoListState);
    return todos.filter((t) => !t.completed).length;
  },
});