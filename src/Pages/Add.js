import React, { useState } from "react";
import "../Styles/Pages/Add.css";
import axios from "axios";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Navigate } from "react-router-dom";

function Add({ user, setUser, isAdmin, setIsAdmin }) {
  const [book, setBook] = useState({
    id: "",
    title: "",
    author: "",
    publisher: "",
    copies: "",
  });

  if (!Object.keys(user).length || !isAdmin) {
    return <Navigate to="/" replace />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value,
    });
  };
  const doAdd = () => {
    axios
      .post("https://library-management-web-app.herokuapp.com/add", book)
      .then((res) => {
        alert(res.data.message);
        setBook({
          id: "",
          title: "",
          author: "",
          publisher: "",
          copies: "",
        });
      });
  };

  return (
    <div className="add-page">
      <Header
        user={user}
        setUser={setUser}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
      />
      <div className="new-book-container">
        <form
          className="new-book"
          onSubmit={(e) => e.preventDefault()}
          encType="multiport/form-data"
        >
          <i className="fa fa-book"></i>
          <span>Add a new book</span>
          <input
            type="text"
            name="id"
            value={book.id}
            placeholder="Book ID"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="title"
            value={book.title}
            placeholder="Title"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="author"
            value={book.author}
            placeholder="Author"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="publisher"
            value={book.publisher}
            placeholder="Publisher"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="copies"
            value={book.copies}
            placeholder="Available copies"
            onChange={handleChange}
          ></input>
          <button type="submit" onClick={doAdd}>
            Add
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Add;
