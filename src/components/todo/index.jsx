import React from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";

import { toggleTodo, removeTodo } from "../../store/actions/creators/todo";

import styles from "./index.module.css";

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleTodoItem = (e) => {
    if (e.target.classList.contains(styles.remove)) {
      dispatch(removeTodo(todo.id));
    } else {
      dispatch(toggleTodo(todo.id));
    }
  };

  return (
    <li className={styles.item} onClick={toggleTodoItem}>
      {todo.completed ? "👌" : "👋"}{" "}
      <span
        className={cx({
          [styles.completed]: todo.completed,
        })}
      >
        {todo.content}
      </span>
      <span className={styles.remove}> ❌</span>
    </li>
  );
};
