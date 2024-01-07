import React from "react";
import Creators from "./Creators";
import Characters from "./Characters";

const ComicPartOfModal = ({ data, creators, characters }) => {
  console.log("characters: ", characters);
  console.log("creators: ", creators);
  return (
    <div>
      <ul className="modal-items">
        <li>
          <h4 className="modal-title-item">Format</h4>
          <p className="modal-description">{data[0].format}</p>
        </li>
        <li>
          <h4 className="modal-title-item">Pages</h4>
          <p className="modal-description">{data[0].pageCount}</p>
        </li>
        <li>
          <h4 className="modal-title-item">Price</h4>
          <p className="modal-description">${data[0].prices[0].price}</p>
        </li>
      </ul>
      <h3 className="modal-title title-margin">Creators</h3>
      <ul className="creators-wrapper">
        {creators !== null && creators.length >= 1 ? (
          creators.map((item) => (
            <Creators
              key={item.id}
              picture={
                item.thumbnail.path +
                "/portrait_incredible" +
                "." +
                item.thumbnail.extension
              }
              name={item.fullName}
            />
          ))
        ) : (
          <p className="modal-description">No creators</p>
        )}
      </ul>
      <h3 className="modal-title title-margin">Characters</h3>
      <ul className="creators-wrapper">
        {characters !== null && characters.length >= 1 ? (
          characters.map((item) => (
            <Characters
              key={item.id}
              picture={
                item.thumbnail.path +
                "/portrait_incredible" +
                "." +
                item.thumbnail.extension
              }
              name={item.name}
            />
          ))
        ) : (
          <p className="modal-description">No characters</p>
        )}
      </ul>
    </div>
  );
};

export default ComicPartOfModal;
