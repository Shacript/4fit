const Modal = ({ children, triggerClose }) => {
  return (
    <div className="Modal" onClick={triggerClose}>
      <div className="Modal-form" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
