import { useState } from "react";

import { useNavigate } from "react-router-dom";

import Modal from "../Modal/Modal";

import RecordService from "../../services/record.service";

function ComfirmSaveRecordModal({ task, activitys, triggerClose }) {
  const [note, setNote] = useState("");

  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let activities = [];
    for (let activity of activitys) {
      if (activity.usedTime > 0) {
        activities.push({ name: activity.name, duration: activity.usedTime });
      }
    }

    RecordService.addUserRecord({
      date: new Date().toLocaleDateString(),
      timestamp: new Date().toISOString(),
      name: task.name,
      record_type: "task_record",
      type: task.type,
      description: task.description,
      note: note !== "" ? note : undefined,
      activities,
    }).then(() => {
      navigate("/dashboard");
      triggerClose();
    });
  };

  return (
    <Modal triggerClose={triggerClose}>
      <form onSubmit={onSubmitHandler}>
        <div className="Modal-header">
          <p>You want to save your record?</p>
        </div>
        <hr />
        <div className="Modal-body">
          <textarea
            placeholder="Enter your note (Optional)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            autoFocus
          />
        </div>
        <hr />
        <div className="Modal-footer">
          <button type="button" onClick={triggerClose}>
            Close
          </button>
          <button type="submit">Confirm Save</button>
        </div>
      </form>
    </Modal>
  );
}

export default ComfirmSaveRecordModal;
