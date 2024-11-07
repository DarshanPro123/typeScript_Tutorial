import React from "react";
import SingleTodo from "../SingleTodo";
import { Todo } from "../../models";

interface ActiveTodosProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setUpdateId: React.Dispatch<React.SetStateAction<number | null>>;
  setTask: React.Dispatch<React.SetStateAction<string>>;
}

const ActiveTodos: React.FC<ActiveTodosProps> = ({
  todos,
  setTodos,
  setUpdateId,
  setTask,
}) => {
  return (
    <div className="todos activeTask">
      <span className="todos__heading">Active Tasks</span>
      {todos
        .filter((todo) => !todo.isCompleted) // Show only active tasks
        .map((todo) => (
          <SingleTodo
            setTask={setTask}
            setUpdateId={setUpdateId}
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
    </div>
  );
};

export default ActiveTodos;
