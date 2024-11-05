import { useState } from "react";
import InputField from "./components/InputField.js";
import { Todo } from "./models.js";
import TodoList from "./components/TodoList";

const App = () => {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task)
      setTodos([...todos, { id: Date.now(), task, isCompleted: false }]);
    console.log(todos);
    setTask("");
  };
  return (
    <div>
      <div className="heading">taskyFy</div>

      <InputField handleSubmit={handleSubmit} task={task} setTask={setTask} />

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
