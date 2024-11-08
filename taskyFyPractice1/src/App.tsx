import { useState } from "react";
import InputField from "./components/InputField.js";
import { Todo } from "./models.js";
import TodoList from "./components/TodoList";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";

const App = () => {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [updateId, setUpdateId] = useState<number | null>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (updateId) {
      setTodos(
        todos.map((todo) => (todo.id === updateId ? { ...todo, task } : todo))
      );
      toast.success("Task Updated Successfully");
      setUpdateId(null);
      setTask("");
      return;
    }

    if (task) {
      setTodos([...todos, { id: Date.now(), task, isCompleted: false }]);
      toast.success("Task Added Successfully");
      setTask("");
      return;
    }

    if (!task) {
      toast.warning("Please enter a task");
    }
  };
  return (
    <Router>
      {" "}
      <div>
        <div className="heading">
          tasky<span>fy</span>
        </div>

        <InputField
          updateId={updateId}
          handleSubmit={handleSubmit}
          task={task}
          setTask={setTask}
        />

        <TodoList
          setTask={setTask}
          setUpdateId={setUpdateId}
          todos={todos}
          setTodos={setTodos}
        />
        <ToastContainer
          position="bottom-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </div>
    </Router>
  );
};

export default App;
