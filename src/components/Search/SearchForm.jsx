import React, { useState } from "react";
import { fetchComicsBySearchData } from "../../redux/searchReducer";
import { useDispatch } from "react-redux";

import search from "../../img/search.png";

const SearchForm = () => {
  const [title, setTitle] = useState("");
  const [format, setFormat] = useState("comic");
  const [order, setOrder] = useState("FocDate");
  const [year, setYear] = useState("");

  const dispatch = useDispatch();

  const formats = [
    "comic",
    "magazine",
    "trade paperback",
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
      format,
      order,
      year,
    };
    console.log(formData);

    // console.log(formData);
    dispatch(fetchComicsBySearchData(formData));

    // handleAddProduct(productData);

    setTitle("");
    setFormat("comic");
    setOrder("FocDate");
    setYear("");
    const form = e.target;
    form.reset();
  };

  const handleInputChange = (e) => {
    const name = e.target.name; // 'price'
    const value = e.target.value;

    switch (name) {
      case "title": {
        setTitle(value);
        return;
      }
      case "format": {
        setFormat(value);
        return;
      }
      case "orderBy": {
        setOrder(value);
        return;
      }
      case "year": {
        setYear(value);
        return;
      }
      default:
        return;
    }
  };
  return (
    <div>
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title Starts With</label>
          <input
            className="search-input search-item"
            id="title"
            onChange={handleInputChange}
            type="text"
            name="title"
            placeholder="Enter name"
          />
        </div>
        <div>
          <label htmlFor="format">Format</label>
          <select
            className="search-item"
            onChange={handleInputChange}
            name="format"
            id="format"
          >
            {formats.map((item) => (
              <option key={item} className="option-names" value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="order">Order By</label>
          <select
            className="search-item"
            onChange={handleInputChange}
            name="orderBy"
            id="order"
          >
            {orders.map((item) => (
              <option key={item} className="option-names" value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="year">Start Year</label>
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
