import { Actions } from "../web/src/modules/todo";
import reducers from "../web/src/modules";

// actions-test
describe("todoReducer-Actions", () => {
  it("actions", () => {
    const text = "test-text";

    let expectedAction = {
      type: "ADD_TODO",
      payload: text,
    };
    expect(Actions.addTodo(text)).toEqual(expectedAction);
    expectedAction = {
      type: "REMOVE_TODO",
      payload: text,
    };
    expect(Actions.removeTodo(text)).toEqual(expectedAction);
    expectedAction = {
      type: "COMPLETED_TODO",
      payload: text,
    };
    expect(Actions.completedTodo(text)).toEqual(expectedAction);
  });
});
