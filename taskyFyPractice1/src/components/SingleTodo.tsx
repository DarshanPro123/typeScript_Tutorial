import { MdOutlineEdit } from "react-icons/md";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDone } from "react-icons/md";
import { Todo } from "../models";
import { toast } from "react-toastify";

type SingleTodoProps = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setUpdateId: React.Dispatch<React.SetStateAction<number | null>>;
  setTask: React.Dispatch<React.SetStateAction<string>>;
};

const SingleTodo = ({
  todo,
  todos,
  setTodos,
  setUpdateId,
  setTask,
}: SingleTodoProps) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirm) {
      setTodos(todos.filter((t) => t.id !== id));
      toast.error("Task Delete Successfully");
    } else {
      toast.warning("Task Not Deleted");
    }
  };
  const handleUpdate = (id: number, task: string) => {
    setTask(task);
    setUpdateId(id);
  };
  return (
    <form className="todo_single">
      {todo.isCompleted ? (
        <s className="todo_single_text">{todo.task}</s>
      ) : (
        <span className="todo_single_text">{todo.task}</span>
      )}
      {!todo.isCompleted ? (
        <span className="icon" onClick={() => handleUpdate(todo.id, todo.task)}>
          <MdOutlineEdit />
        </span>
      ) : (
        ""
      )}
      {todo.isCompleted ? (
        <span className="icon done" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      ) : (
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      )}
      {/* <span className="icon" onClick={() => handleDone(todo.id)}>
        <MdDone />
      </span> */}
      {todo.isCompleted ? (
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <FaDeleteLeft />
        </span>
      ) : (
        ""
      )}
    </form>
  );
};

export default SingleTodo;
