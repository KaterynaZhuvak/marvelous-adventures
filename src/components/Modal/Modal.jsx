import React, { useEffect } from "react";
import { StyledModal } from "./Styled";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/modalReducer";
import SimilarPartOfModals from "./SimilarPartOfModals";

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const modalData = useSelector((state) => state.modal.modalData);

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
  }, []);

  return (
    <StyledModal onClick={handleOverlayClick}>
      <div className="modal">
        <button className="close-btn" onClick={() => dispatch(closeModal())}>
          {" "}
          x{" "}
        </button>
        {modalData !== null && <SimilarPartOfModals data={modalData[0]} />}
        {children}
      </div>
    </StyledModal>
  );
};

export default Modal;
