import { Actions } from "../modules/todo";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import TextFieldComponent from "../components/organisms/TextField";

const mapStateToProps = (state) => ({
  value: state.form.todoForm,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (value): Record<string, string> => dispatch(Actions.addTodo(value)),
});

const TextField = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "todoForm",
    enableReinitialize: true,
    initialValues: { todoForm: "" },
  })(TextFieldComponent)
);

export default TextField;
