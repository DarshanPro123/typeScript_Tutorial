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
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Active Tasks</span>
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
      <div className="todos remove">
        <span className="todos__heading">Complated Tasks</span>
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
    </div>
  );
};

export default TodoList;

{
  /* <div className="todos">
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
    </div> */
}
