import React from "react";
import { StyledSearchList } from "./Styled";
import SearchForm from "./SearchForm";
import ComicsList from "./ComicsList";
import { useSelector } from "react-redux";

const SearchList = () => {
  const comicsList = useSelector((state) => state.searchStore.searchData);
  return (
    <StyledSearchList className="container">
      <SearchForm />
      {comicsList !== null && (
        <ul>
          {comicsList.map((comic) => (
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
    </StyledSearchList>
  );
};

export default SearchList;
