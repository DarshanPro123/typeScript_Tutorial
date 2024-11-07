import { Todo } from "../models";
import SingleTodo from "./SingleTodo";

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setUpdateId: React.Dispatch<React.SetStateAction<number | null>>;
  setTask: React.Dispatch<React.SetStateAction<string>>;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  setTodos,
  setUpdateId,
  setTask,
}) => {
  const complatedLength: number = todos.filter(
    (todo) => todo.isCompleted
  ).length;
  return (
    <div className="container">
      <div className="todos">
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
      <div className="todos remove">
        <span className="todos__heading">
          Completed Tasks {complatedLength}
        </span>
        {todos
          .filter((todo) => todo.isCompleted) // Show only completed tasks
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
    </div>
  );
};

export default TodoList;
