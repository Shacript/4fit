import Modal from "../Modal/Modal";

import { useDispatch } from "react-redux";

import { updateUserInfomation } from "../../state/auth/authReducer";
import { useState } from "react";

const HeightModal = ({ defaultHeight = 0, triggerClose }) => {
  const [height, setHeight] = useState(defaultHeight);

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(updateUserInfomation({ height })).then((res) => {
      if (!res.error) triggerClose();
    });
  };

  const onChangeHandler = (e) => {
    setHeight(e.target.value);
  };

  return (
    <Modal triggerClose={triggerClose}>
      <form onSubmit={onSubmitHandler}>
        <div className="Modal-header">Edit your height.</div>
        <hr />
        <div className="Modal-body">
          <input
            type="number"
            placeholder="Enter your height"
            value={height}
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

export default HeightModal;
