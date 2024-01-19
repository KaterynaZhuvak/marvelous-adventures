import React, { useEffect } from "react";
import Modal from "../Modal";
import {
  closeModalCharacters,
  fetchCharacterById,
  fetchListOfComicsById,
} from "../../../redux/charactersModalReducer";
import { useDispatch, useSelector } from "react-redux";

const CharactersModal = () => {
  const modalData = useSelector((state) => state.charactersModal.modalData);
  console.log("modalData: ", modalData);
  const modalId = useSelector((state) => state.charactersModal.modalId);
  const comicsList = useSelector((state) => state.charactersModal.comicsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacterById(modalId));
    dispatch(fetchListOfComicsById(modalId));
  }, [dispatch, modalId]);
  return (
    <>
      {modalData !== null && (
        <Modal closeModal={closeModalCharacters}>
          <img
            className="modal-img"
            src={
              modalData.thumbnail.path +
              "/portrait_incredible" +
              "." +
              modalData.thumbnail.extension
            }
            alt={modalData.name}
          />
          <div className="description-wrapper">
            <h2 className="modal-title">{modalData.name}</h2>
            {modalData.description.length !== 0 ? (
              <p className="modal-description">{modalData.description}</p>
            ) : (
              <p className="modal-description">No description</p>
            )}

            <h2 className="modal-character-list">List of comics</h2>
            <ul className="list-of-comics-wrapper">
              {comicsList !== null &&
                comicsList.map((item) => (
                  <li key={item.id}>
                    <img
                      className="list-of-comics-img"
                      src={
                        item.thumbnail.path +
                        "/portrait_incredible" +
                        "." +
                        item.thumbnail.extension
                      }
                      loading="lazy"
                      alt={item.title}
                    />
                    <h3 className="modal-character-title">{item.title}</h3>
                  </li>
                ))}
            </ul>
          </div>
        </Modal>
      )}
    </>
  );
};

export default CharactersModal;
