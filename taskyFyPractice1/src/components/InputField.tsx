interface Props {
  task: string;
  setTask: (task: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}
const InputField = ({ task, setTask, handleSubmit }: Props) => {
  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
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
