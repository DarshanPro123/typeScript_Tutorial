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
  return (
    <div className="todos">
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

export default TodoList;
