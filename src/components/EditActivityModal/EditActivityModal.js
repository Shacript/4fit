import Modal from "../Modal/Modal";

import { useState } from "react";

const EditActivityModal = ({ activity, triggerClose, onEdited }) => {
  const [activityName, setActivityName] = useState(activity.name);
  const [activityTime, setActivityTime] = useState(activity.duration);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onEdited({
      name: activityName,
      duration: parseInt(activityTime),
    });
    triggerClose();
  };

  const onNameChangeHandler = (e) => {
    setActivityName(e.target.value);
  };

  const onTimeChangeHandler = (e) => {
    setActivityTime(e.target.value);
  };

  const convertSecond = (seconds) => {
    return new Date(seconds * 1000).toISOString().substring(11, 19);
  };

  return (
    <Modal triggerClose={triggerClose}>
      <form onSubmit={onSubmitHandler}>
        <div className="Modal-header">
          <p>Edit your activity ( {activityName} ).</p>
        </div>
        <hr />
        <div className="Modal-body">
          <p>Activity Name :</p>
          <input
            type="text"
            placeholder="Enter your activity name"
            value={activityName}
            onChange={onNameChangeHandler}
            autoFocus
            required
          />
          <p>Preview Time : {convertSecond(activityTime)}</p>
          <input
            type="number"
            placeholder="Enter your activity time (seconds)"
            value={activityTime}
            onChange={onTimeChangeHandler}
            autoFocus
            required
          />
        </div>
        <hr />
        <div className="Modal-footer">
          <button type="button" onClick={triggerClose}>
            Close
          </button>
          <button type="submit">Update</button>
        </div>
      </form>
    </Modal>
  );
};

export default EditActivityModal;
