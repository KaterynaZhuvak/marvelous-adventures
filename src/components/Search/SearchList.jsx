import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { StyledSearchList } from "./Styled";
import { useSelector } from "react-redux";

import SearchForm from "./SearchForm";
import ComicsList from "./ComicsList";
import Pagination from "./Pagination";

const SearchList = () => {
  const comicsList = useSelector((state) => state.searchStore.searchData);
  const [currentPage, setCurrentPage] = useState(1);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1439px)" });
  const comicsPerPage = isTabletOrMobile ? 8 : 12;

  const lastComicIndex = currentPage * comicsPerPage;
  const firstComicIndex = lastComicIndex - comicsPerPage;

  const currentComics =
    comicsList !== null && comicsList.slice(firstComicIndex, lastComicIndex);

  return (
    <StyledSearchList className="container">
      <SearchForm />
      {comicsList !== null && (
        <ul className="search-comics-container">
          {currentComics.map((comic) => (
            <ComicsList
              key={comic.id}
              picture={
                comic.thumbnail.path +
                "/portrait_incredible" +
                "." +
                comic.thumbnail.extension
              }
              title={comic.title}
              id={comic.id}
            />
          ))}
        </ul>
      )}
      {comicsList !== null && (
        <Pagination
          totalComics={comicsList.length}
          comicsPerPage={comicsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
    </StyledSearchList>
  );
};

export default SearchList;
