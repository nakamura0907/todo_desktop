import * as React from "react";
import styled from "styled-components";
import axios from "axios";

import TodoItem from "@component/molecules/TodoItem";

interface TodosObject {
  deadline: number;
  favorite: boolean;
  id: string;
  isCompleted: boolean;
  isTask: boolean;
  memo: string;
  priority: string;
  value: string;
}

interface Props {
  cancelUpdate: Function;
  changeTextform: Function;
  completeTodo: Function;
  initialize: Function;
  removeTodo: Function;
  reset: Function;
  todos: TodosObject[];
  todoListForm: any;
  updateTodo: Function;
}

const List: React.FC<Props> = ({
  cancelUpdate,
  changeTextform,
  completeTodo,
  initialize,
  removeTodo,
  reset,
  todoListForm,
  todos,
  updateTodo,
}) => {
  const [date, setDate] = React.useState(new Date());
  const [d, setD] = React.useState(
    axios.get("/read").then(function (response) {
      return response.data.logs;
    })
  );
  d.then((res) => console.log(res));
  return (
    <>
      <ListStyled>
        {todos.map((todo, index) => (
          <TodoItem
            date={date}
            setDate={setDate}
            cancelUpdate={cancelUpdate}
            changeTextform={changeTextform}
            completeTodo={completeTodo}
            index={index}
            initialize={initialize}
            key={index}
            removeTodo={removeTodo}
            reset={reset}
            todo={todo}
            todoListForm={todoListForm}
            updateTodo={updateTodo}
          />
        ))}
      </ListStyled>
    </>
  );
};

const ListStyled = styled.ul`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
`;

export default List;
