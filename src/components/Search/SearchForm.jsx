import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchComicsBySearchData } from "../../redux/searchReducer";
import search from "../../img/search.png";

const SearchForm = () => {
  const [selectedFormat, setSelectedFormat] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("");
  const [openFormat, setOpenFormat] = useState(false);
  const [openOrder, setOpenOrder] = useState(false);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const dispatch = useDispatch();

  const formats = [
    "comic",
    "magazine",
    "hardcover",
    "digest",
    "graphic novel",
    "digital comic",
    "infinite comic",
  ];

  const orders = ["FocDate", "onsaleDate", "title", "issueNumber", "modified"];

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title,
      format: selectedFormat || "comic",
      order: selectedOrder || "FocDate",
      year,
    };

    dispatch(fetchComicsBySearchData(formData));
    console.log(formData);

    setTitle("");
    setSelectedFormat("");
    setSelectedOrder("");
    setYear("");
    const form = e.target;
    form.reset();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "year":
        setYear(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <div>
          <input
            className="search-input search-item"
            id="title"
            onChange={handleInputChange}
            type="text"
            name="title"
            placeholder="Enter name"
          />
        </div>

        <div onClick={() => setOpenFormat(!openFormat)}>
          <div className="search-item">
            {selectedFormat ? selectedFormat : "Format"}
          </div>

          <ul className={`formDrop ${openFormat ? "block" : "hidden"}`}>
            {formats.map((format) => (
              <li
                key={format}
                onClick={() => {
                  setSelectedFormat(format);
                  setOpenFormat(false);
                }}
              >
                {format}
              </li>
            ))}
          </ul>
        </div>

        <div onClick={() => setOpenOrder(!openOrder)}>
          <div className="search-item">
            {selectedOrder ? selectedOrder : "Order"}
          </div>

          <ul className={`formDropOrder ${openOrder ? "block" : "hidden"}`}>
            {orders.map((order) => (
              <li
                key={order}
                onClick={() => {
                  setSelectedOrder(order);
                  setOpenOrder(false);
                }}
              >
                {order}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <input
            className="search-item"
            onChange={handleInputChange}
            type="text"
            name="year"
            placeholder="Enter year"
          />
        </div>
        <button className="search-btn" type="submit">
          <img width="18" height="18" src={search} alt="search" />
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
