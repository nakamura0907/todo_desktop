import * as React from "react";
import styled from "styled-components";
import { Field } from "redux-form";
import Calendar from "react-calendar";

import Button from "@atom/Button";
import ButtonIcon from "@atom/ButtonIcon";
import Input from "@atom/Input";

const TaskMenu = ({
  date,
  favorite,
  memo,
  priority,
  handleClickCancel,
  handleClickUpdate,
  handleChangeFavorite,
  handleChangeMemo,
  handleChangePriority,
  handleChangeDate,
}) => {
  return (
    <Task>
      <Heading>TASK</Heading>
      <div style={{ display: "flex" }}>
        <Field name="todoListForm" type="text" component={Input} />
        <Button color="blue" background="#eff3f6" text="Cancel" onClick={handleClickCancel} />
        <ButtonIcon color="white" background="blue" iconClass="far fa-edit" onClick={handleClickUpdate} />
      </div>
      <div>
        <div>
          <label htmlFor="favorite">お気に入り: </label>
          <input type="checkbox" id="favorite" checked={favorite} onChange={handleChangeFavorite} />
        </div>
        <div>
          <label htmlFor="priority">優先度: </label>
          <select name="priority" id="priority" value={priority} onChange={handleChangePriority}>
            <option value="black">0</option>
            <option value="blue">1</option>
            <option value="orange">2</option>
            <option value="red">3</option>
          </select>
        </div>
        <div>
          <label htmlFor="calendar">期限:{date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate()}</label>
          <Calendar onChange={handleChangeDate} value={date} minDate={new Date()} maxDate={new Date(2100, 1, 1)} />
        </div>
      </div>
      {/* form-end */}
      <div>
        <label htmlFor="memo">Memo</label>
        <textarea
          name="memo"
          id="memo"
          cols={30}
          rows={10}
          style={{ width: "100%" }}
          value={memo}
          onChange={handleChangeMemo}
        ></textarea>
      </div>
    </Task>
  );
};

const Task = styled.div`
  background: white;
  bottom: 0;
  box-shadow: 0 8px 7px rgba(0, 0, 0, 0.6);
  overflow-y: auto;
  padding: 15px;
  position: fixed;
  top: 0;
  width: 80vw;
  z-index: 10;

  & > div {
    margin-top: 30px;
  }
`;

const Heading = styled.h1`
  color: #1890ff;
  font-family: "YuMincho", "Yu Mincho", serif;
`;

export default TaskMenu;
