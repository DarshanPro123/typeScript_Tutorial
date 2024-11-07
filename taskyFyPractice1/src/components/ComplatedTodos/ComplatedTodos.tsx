import { Todo } from "../../models";
import SingleTodo from "../SingleTodo";

interface ComplatedTodosProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<any>>;
  setUpdateId: React.Dispatch<React.SetStateAction<number | null>>;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  complatedLength: number;
}

const ComplatedTodos: React.FC<ComplatedTodosProps> = ({
  todos,
  setTodos,
  setUpdateId,
  setTask,
  complatedLength,
}) => {
  return (
    <div className="todos remove">
      <span className="todos__heading">
        {complatedLength > 0
          ? ` Completed Tasks ${complatedLength}`
          : "No Completed Tasks"}
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
  );
};

export default ComplatedTodos;
