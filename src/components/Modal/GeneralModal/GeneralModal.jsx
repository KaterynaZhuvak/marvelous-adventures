import React, { useEffect } from "react";
import Modal from "../Modal";
import ComicPartOfModal from "./ComicPartOfModal";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCharactersById,
  fetchComicsById,
  fetchCreatorsById,
} from "../../../redux/generalModalReducer";
import { closeModal } from "../../../redux/generalModalReducer";

const GeneralModal = () => {
  const creators = useSelector((state) => state.generalModal.creators);
  const characters = useSelector((state) => state.generalModal.characters);
  const modalData = useSelector((state) => state.generalModal.modalData);
  const modalId = useSelector((state) => state.generalModal.modalId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComicsById(modalId));
    dispatch(fetchCharactersById(modalId));
    dispatch(fetchCreatorsById(modalId));
  }, [dispatch]);

  return (
    <>
      {modalData !== null && (
        <Modal closeModal={closeModal}>
          <img
            className="modal-img"
            src={
              modalData[0].thumbnail.path +
              "/portrait_incredible" +
              "." +
              modalData[0].thumbnail.extension
            }
            alt={modalData[0].title}
          />
          <div className="description-wrapper">
            <h2 className="modal-title">{modalData[0].title}</h2>
            <p className="modal-year">
              Year of release | {parseInt(modalData[0].dates[0].date)}
            </p>
            {modalData[0].description.length !== 0 ? (
              <p className="modal-description">{modalData[0].description}</p>
            ) : (
              <p className="modal-description">No description</p>
            )}
            <ComicPartOfModal
              data={modalData}
              creators={creators}
              characters={characters}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default GeneralModal;
