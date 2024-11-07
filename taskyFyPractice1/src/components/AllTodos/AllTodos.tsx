import React from "react";
import SingleTodo from "../SingleTodo";
import { Todo } from "../../models";

interface AllTodosProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setUpdateId: React.Dispatch<React.SetStateAction<number | null>>;
  setTask: React.Dispatch<React.SetStateAction<string>>;
}

const AllTodos: React.FC<AllTodosProps> = ({
  todos,
  setTodos,
  setUpdateId,
  setTask,
}) => {
  return (
    <div className="todos">
      <span className="todos__heading">All Tasks</span>
      {todos.map((todo) => (
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

export default AllTodos;

// const AllTodos = () => {
//   return <div></div>;
// };

// export default AllTodos;
