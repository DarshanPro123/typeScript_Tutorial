import { useState } from "react";
import InputField from "./components/InputField.js";
import { Todo } from "./models.js";

const App = () => {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task)
      setTodos([
        ...todos,
        { id: Math.random().toString(), task, isCompleted: false },
      ]);
  };
  return (
    <div>
      <div className="heading">taskyFy</div>

      <InputField handleSubmit={handleSubmit} task={task} setTask={setTask} />
    </div>
  );
};

export default App;
