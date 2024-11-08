import { Todo } from "../models";
import ComplatedTodos from "./ComplatedTodos/ComplatedTodos";
import ActiveTodos from "./ActiveTodos/ActiveTodos";
import AllTodos from "./AllTodos/AllTodos";
import { NavLink, Route, Routes } from "react-router-dom";

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
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/active">Active</NavLink>
        <div className="counter">
          <NavLink to="/complated">Completed</NavLink>
          {complatedLength > 0 && <span>{complatedLength}</span>}
        </div>
      </nav>

      <div className="dark-line"></div>

      <Routes>
        <Route
          path="/"
          element={
            <AllTodos
              todos={todos}
              setTodos={setTodos}
              setUpdateId={setUpdateId}
              setTask={setTask}
            />
          }
        />
        <Route
          path="/active"
          element={
            <ActiveTodos
              todos={todos}
              setTodos={setTodos}
              setUpdateId={setUpdateId}
              setTask={setTask}
            />
          }
        />
        <Route
          path="/complated"
          element={
            <ComplatedTodos
              todos={todos}
              setTodos={setTodos}
              setUpdateId={setUpdateId}
              setTask={setTask}
              complatedLength={complatedLength}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default TodoList;
