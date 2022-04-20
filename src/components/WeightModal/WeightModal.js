import Modal from "../Modal/Modal";

import { useDispatch } from "react-redux";

import { updateUserInfomation } from "../../state/auth/authReducer";
import { useState } from "react";

import RecordService from "../../services/record.service";

const WeightModal = ({ defaultWeight = 0, triggerClose }) => {
  const [weight, setWeight] = useState(defaultWeight);

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(updateUserInfomation({ weight })).then((res) => {
      if (!res.error) {
        RecordService.addUserRecord({
          date: new Date().toLocaleDateString(),
          timestamp: new Date().toISOString(),
          name: "อัพเดทน้ำหนัก",
          record_type: "weight_record",
          note: `${weight} kg.`,
          type: "hike",
        }).then(() => {
          triggerClose();
        });
      }
    });
  };

  const onChangeHandler = (e) => {
    setWeight(e.target.value);
  };

  return (
    <Modal triggerClose={triggerClose}>
      <form onSubmit={onSubmitHandler}>
        <div className="Modal-header">
          <p>Edit your weight.</p>
        </div>
        <hr />
        <div className="Modal-body">
          <input
            type="number"
            placeholder="Enter your weight"
            value={weight}
            onChange={onChangeHandler}
            autoFocus
          />
        </div>
        <hr />
        <div className="Modal-footer">
          <button type="button" onClick={triggerClose}>
            Close
          </button>
          <button type="submit">Save</button>
        </div>
      </form>
    </Modal>
  );
};

export default WeightModal;
