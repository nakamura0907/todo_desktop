import * as React from "react";
import styled from "styled-components";

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

  const [sortResult, setSortResult] = React.useState(todos);
  const handleChange = (e): void => {
    switch (e.target.value) {
      case "default":
        break;
      case "complete":
        break;
      case "priority":
        break;
      case "favorite":
        break;
      case "date":
        break;
    }
    const result = todos;
    setSortResult(result);
  };
  return (
    <>
      <div style={{ marginTop: "30px" }}>
        <label htmlFor="sort">並び順(未実装): </label>
        <select name="sort" id="sort" defaultValue="default" onChange={handleChange}>
          <option value="default">デフォルト</option>
          <option value="complete">達成済み</option>
          <option value="priority">優先度順</option>
          <option value="favorite">お気に入り</option>
          <option value="date">期限</option>
        </select>
      </div>
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
