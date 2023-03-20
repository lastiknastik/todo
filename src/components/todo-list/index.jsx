import { useSelector } from "react-redux";
import { todosSelector } from "../../store/selectors/todo";
import { Todo } from "../todo";
import React, { useState } from "react";
import styles from "./index.module.css";
import cx from "classnames";

export const TodoList = () => {
  const [selectdFilter, setFilter] = useState();
  const filtersRef = React.createRef();

  function filterSelectHandler(e) {
    const target = e.target;

    if (target.dataset.filterBy) {
      if (target.classList.contains(styles.selected)) {
        //clicked already selected filter -> deselect, update filter state
        setFilter();
      } else {
        if (target.dataset.filterBy === "👌") {
          setFilter("completed");
        } else if (target.dataset.filterBy === "👋") {
          setFilter("not_completed");
        } else {
          setFilter();
        }
      }
    }
  }

  const todos = useSelector(todosSelector(selectdFilter));

  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <span>Filter by: </span>
        <span onClick={filterSelectHandler} ref={filtersRef}>
          <span
            data-filter-by="👌"
            className={cx({
              [styles.selected]: selectdFilter === "completed",
            })}
          >
            👌{" "}
          </span>
          <span
            data-filter-by="👋"
            className={cx({
              [styles.selected]: selectdFilter === "not_completed",
            })}
          >
            👋
          </span>
        </span>
      </div>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </React.Fragment>
  );
};
