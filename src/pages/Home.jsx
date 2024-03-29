import React, { useEffect } from "react";
import GeneralHero from "../components/Hero/GeneralHero/GeneralHero";
import LastComics from "../components/LastComics/LastComics";
import { useDispatch, useSelector } from "react-redux";
import { fetchLastComics } from "../redux/homeReducer";
import GeneralModal from "../components/Modal/GeneralModal/GeneralModal";
import CharactersModal from "../components/Modal/CharactersModal/CharactersModal";

const Home = () => {
  const dispatch = useDispatch();
  const openModal = useSelector((state) => state.generalModal.isOpenModal);
  const openModalCharacters = useSelector(
    (state) => state.charactersModal.isOpenModal
  );

  useEffect(() => {
    dispatch(fetchLastComics());
  }, [dispatch]);

  return (
    <div>
      <GeneralHero />
      <LastComics />
      {openModal && <GeneralModal />}
      {openModalCharacters && <CharactersModal />}
    </div>
  );
};

export default Home;

// Your public key

// c87027ae7e999f1d55f30abb6cd8640a
// Your private key

// 84bb77010864f3e923dd3f8bbce57da4742981d3

// ts 1703971264910

// 712a7599fd843937834094326912e8ec
