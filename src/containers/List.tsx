import { Actions } from "@module/todo";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import ListComponent from "@component/organisms/List";

const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos,
    todoListForm: state.form.todoListForm,
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (index): Record<string, number> => dispatch(Actions.removeTodo(index)),
  completeTodo: (id): Record<string, string> => dispatch(Actions.completeTodo(id)),
  updateTodo: (id, value, form): Record<string, string> => dispatch(Actions.updateTodo(id, value, form)),
  changeTextform: (id): Record<string, string> => dispatch(Actions.changeTextform(id)),
  cancelUpdate: (): Record<string, void> => dispatch(Actions.cancelUpdate()),
});

const List = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "todoListForm",
    enableReinitialize: true,
    initialValues: { todoListForm: "" },
  })(ListComponent)
);

export default List;
