// Name -> Input type text
// Description -> Input type text
// Activity Type -> Select [run, bicycle ride, swim, walk and hike]
// Duration -> Integer - minutes, Integer - seconds, Integer - milliseconds
// Date -> Input type text [dd/mm/yyyy]

const CreateTaskFrom = () => {
  return (
    <div className="CreateTaskFrom">
      <h2>Create Activity Task</h2>
      <form>
        <label>Name</label>
        <input type="text" />
        <label>Description</label>
        <input type="text" />
        <label>Activity Type</label>
        <select>
          <option value="Running">Running</option>
          <option value="Swimming">Swimming</option>
          <option value="Cycling">Cycling</option>
        </select>
        <label>Duration</label>
        <input type="time" />
        <label>Date</label>
        <input type="date" />
        <button>Create Task</button>
      </form>
    </div>
  );
};

export default CreateTaskFrom;
