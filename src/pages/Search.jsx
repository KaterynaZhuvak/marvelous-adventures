import React from "react";
import SearchHero from "../components/Hero/SearchHero/SearchHero";
import SearchList from "../components/Search/SearchList";
import GeneralModal from "../components/Modal/GeneralModal/GeneralModal";
import CharactersModal from "../components/Modal/CharactersModal/CharactersModal";
import { useSelector } from "react-redux";

const Search = () => {
  const openModal = useSelector((state) => state.generalModal.isOpenModal);
  const openModalCharacters = useSelector(
    (state) => state.charactersModal.isOpenModal
  );

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
