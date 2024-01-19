import React, { useEffect } from "react";
import { StyledModal } from "./Styled";
import { useDispatch } from "react-redux";

const Modal = ({ children, closeModal }) => {
  const dispatch = useDispatch();

  const handleOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      dispatch(closeModal());
    }
  };

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      dispatch(closeModal());
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [handleKeyDown]);

  return (
    <StyledModal onClick={handleOverlayClick}>
      <div className="modal">
        <button
          className="close-btn"
          onClick={() => dispatch(closeModal())}
        ></button>

        {children}
      </div>
    </StyledModal>
  );
};

export default Modal;
