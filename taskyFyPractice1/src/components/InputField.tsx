import { useRef } from "react";

interface Props {
  task: string;
  setTask: (task: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}
const InputField = ({ task, setTask, handleSubmit }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleSubmit(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter Task.."
        className="input_box"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="submitBtn">
        Add
      </button>
    </form>
  );
};

export default InputField;
