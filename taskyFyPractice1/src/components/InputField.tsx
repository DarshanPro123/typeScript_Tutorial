const InputField = () => {
  return (
    <form className="input">
      <input type="text" placeholder="Enter Task.." className="input_box" />
      <button type="submit" className="submitBtn">
        Add
      </button>
    </form>
  );
};

export default InputField;
