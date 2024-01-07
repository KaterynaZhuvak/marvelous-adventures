import React from "react";

const SimilarPartOfModals = ({ data }) => {
  console.log("data: ", data);

  return (
    <div>
      <img
        className="modal-img"
        src={
          data.thumbnail.path +
          "/portrait_incredible" +
          "." +
          data.thumbnail.extension
        }
        alt={data.title}
      />

      <h2 className="modal-title">{data.title}</h2>
      <p className="modal-year">
        Year of release | {parseInt(data.dates[0].date)}
      </p>
      {data.description.length !== 0 ? (
        <p className="modal-description">{data.description}</p>
      ) : (
        <p className="modal-description">No description</p>
      )}
    </div>
  );
};

export default SimilarPartOfModals;
