import React, { useEffect } from "react";
import Modal from "./Modal";
import ComicPartOfModal from "./ComicPartOfModal";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCharactersById,
  fetchComicsById,
  fetchCreatorsById,
} from "../../redux/modalReducer";

const GeneralModal = () => {
  const creators = useSelector((state) => state.modal.creators);
  const characters = useSelector((state) => state.modal.characters);
  const modalData = useSelector((state) => state.modal.modalData);
  const modalId = useSelector((state) => state.modal.modalId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComicsById(modalId));
    dispatch(fetchCharactersById(modalId));
    dispatch(fetchCreatorsById(modalId));
  }, [dispatch]);

  return (
    <Modal>
      {modalData !== null && (
        <ComicPartOfModal
          data={modalData}
          creators={creators}
          characters={characters}
        />
      )}
    </Modal>
  );
};

export default GeneralModal;
