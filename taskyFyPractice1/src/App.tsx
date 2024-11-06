import { useState } from "react";
import InputField from "./components/InputField.js";
import { Todo } from "./models.js";
import TodoList from "./components/TodoList";

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
      setUpdateId(null);
      setTask("");
      return;
    }

    if (task)
      setTodos([...todos, { id: Date.now(), task, isCompleted: false }]);
    console.log(todos);
    setTask("");
  };
  return (
    <div>
      <div className="heading">taskyFy</div>

      <InputField handleSubmit={handleSubmit} task={task} setTask={setTask} />

      <TodoList
        setTask={setTask}
        setUpdateId={setUpdateId}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
};

export default App;
