import { Actions } from "../modules/todo";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import ListComponent from "../components/organisms/List";

const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos,
    todoListForm: state.form.todoListForm,
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (index): Record<string, number> => dispatch(Actions.removeTodo(index)),
  completedTodo: (id): Record<string, string> => dispatch(Actions.completedTodo(id)),
  updateTodo: (id, value): Record<string, string> => dispatch(Actions.updateTodo(id, value)),
  changeTextform: (id): Record<string, string> => dispatch(Actions.changeTextform(id)),
  chancelUpdate: (): Record<string, void> => dispatch(Actions.chancelUpdate()),
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
