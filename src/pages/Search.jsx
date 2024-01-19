import React, { useEffect } from "react";
import SearchHero from "../components/Hero/SearchHero/SearchHero";
import SearchList from "../components/Search/SearchList";
import GeneralModal from "../components/Modal/GeneralModal/GeneralModal";
import CharactersModal from "../components/Modal/CharactersModal/CharactersModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchLastComics } from "../redux/searchReducer";

const Search = () => {
  const dispatch = useDispatch();
  const openModal = useSelector((state) => state.generalModal.isOpenModal);
  const openModalCharacters = useSelector(
    (state) => state.charactersModal.isOpenModal
  );

  useEffect(() => {
    dispatch(fetchLastComics());
  }, []);

  return (
    <div>
      <SearchHero />
      <SearchList />
      {openModal && <GeneralModal />}
      {openModalCharacters && <CharactersModal />}
    </div>
  );
};

export default Search;
