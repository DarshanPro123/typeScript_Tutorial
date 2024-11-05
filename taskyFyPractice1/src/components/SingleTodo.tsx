import { MdOutlineEdit } from "react-icons/md";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDone } from "react-icons/md";
import { Todo } from "../models";

type SingleTodoProps = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: SingleTodoProps) => {
  return (
    <form className="todo_single">
      <span className="todo_single_text">{todo.task}</span>
      <span className="icon">
        <MdOutlineEdit />
      </span>
      <span className="icon">
        <FaDeleteLeft />
      </span>
      <span className="icon">
        <MdDone />
      </span>
    </form>
  );
};

export default SingleTodo;
