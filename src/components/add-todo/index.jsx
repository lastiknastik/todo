import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/actions/creators/todo";
import * as S from "./styles";

export const AddTodo = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onInputChange = (evt) => {
    setValue(evt.target.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo(value));
    setValue("");
  };

  return (
    <S.AddToDo>
      <S.Input type="text" value={value} onChange={onInputChange} />
      <S.Button className="add-todo" onClick={handleAddTodo}>
        Add todo
      </S.Button>
    </S.AddToDo>
  );
};
