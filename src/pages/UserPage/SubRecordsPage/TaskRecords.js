const TaskRecords = () => {
  return (
    <div className="TaskRecords">
      <div className="table">
        <div className="row">
          <div className="column-left">Task name</div>
          <div className="column-right">Task time used</div>
        </div>
        <div className="row">
          <div className="column-detail">Note</div>
          <div className="column-left">Activity name</div>
          <div className="column-right">Activity time used</div>
        </div>
      </div>
    </div>
  );
};

export default TaskRecords;
