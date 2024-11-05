interface Props {
  task: string;
  setTask: (task: string) => void;
}
const InputField = ({ task, setTask }: Props) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(task);
    setTask("");
  };
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
