import * as React from "react";
import { Field } from "redux-form";
// import * as moment from "moment";
import Calendar from "react-calendar";

import InputField from "@component/molecules/InputField";
import * as Validate from "../../utils/Validate";

interface Props {
  onClick: Function;
  reset: Function;
  value: any;
}

const TextField: React.FC<Props> = ({ onClick, reset, value }) => {
  const [date, setDate] = React.useState(new Date());
  const [favorite, setFavorite] = React.useState(false);
  const [priority, setPriority] = React.useState("black");
  const handleClick = (): void => {
    const deadline = (date.getTime() - new Date().getTime()) / 86400000 + 1;
    if (value.values.todoForm) {
      const form = { favorite: favorite, priority: priority, deadline: deadline };
      onClick(value.values.todoForm, form);
      reset();
      setDate(new Date());
      setPriority("black");
      setFavorite(false);
    }
  };
  return (
    <>
      <div>
        <label htmlFor="favorite">お気に入り: </label>
        <input type="checkbox" id="favorite" onChange={(): void => setFavorite(!favorite)} checked={favorite} />
      </div>
      <div>
        <label htmlFor="priority">優先度: </label>
        <select name="priority" id="priority" onChange={(e): void => setPriority(e.target.value)} value={priority}>
          <option value="black">0</option>
          <option value="blue">1</option>
          <option value="orange">2</option>
          <option value="red">3</option>
        </select>
      </div>
      <div>
        <label htmlFor="calendar">期限:{date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate()}</label>
        <Calendar
          onChange={(date): void => setDate(date)}
          value={date}
          minDate={new Date()}
          maxDate={new Date(2100, 1, 1)}
        />
      </div>
      <Field name="todoForm" type="text" onClick={handleClick} validate={[Validate.required]} component={InputField} />
    </>
  );
};

export default TextField;
