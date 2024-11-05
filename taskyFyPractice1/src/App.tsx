import { useState } from "react";
import InputField from "./components/InputField.js";

const App = () => {
  const [task, setTask] = useState<string>("");
  return (
    <div>
      <div className="heading">taskyFy</div>

      <InputField task={task} setTask={setTask} />
    </div>
  );
};

export default App;
