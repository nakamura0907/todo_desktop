import * as React from "react";
import styled from "styled-components";

import Item from "../molecules/Item";

interface TodosObject {
  id: string;
  isCompleted: boolean;
  isForm: boolean;
  value: string;
}

interface Props {
  chancelUpdate: Function;
  changeTextform: Function;
  completedTodo: Function;
  initialize: Function;
  removeTodo: Function;
  reset: Function;
  todos: TodosObject[];
  todoListForm: any;
  updateTodo: Function;
}

const List: React.FC<Props> = ({
  chancelUpdate,
  changeTextform,
  completedTodo,
  initialize,
  removeTodo,
  reset,
  todoListForm,
  todos,
  updateTodo,
}) => {
  return (
    <ListStyled>
      {todos.map((todo, index) => (
        <Item
          chancelUpdate={chancelUpdate}
          changeTextform={changeTextform}
          completedTodo={completedTodo}
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
