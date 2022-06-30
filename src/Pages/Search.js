import React, { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "../Styles/Pages/SearchIssue.css";
import { AiOutlineFileSearch } from "react-icons/ai";
import { useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Book from "../Components/Book";

function Search({ user, setUser, isAdmin, setIsAdmin }) {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get("https://library-management-web-app.herokuapp.com/search")
      .then((res) => {
        setBooks(res.data.bookArray);
      })
      .catch(() => {
        alert("Error retrieving data!!!");
      });
  }, []);

  useEffect(() => {
    const filteredResults = books.filter(
      (book) =>
        book.id.toLowerCase().includes(search.toLowerCase()) ||
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase()) ||
        book.publisher.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [books, search]);

  if (!Object.keys(user).length || isAdmin) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="search-page">
      <Header
        user={user}
        setUser={setUser}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
      />
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Posts</label>
        <AiOutlineFileSearch className="search-icon" />
        <input
          id="search"
          type="text"
          placeholder="Search Book"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoComplete="off"
        />
      </form>
      <div className="books">
        {searchResults.length > 0 ? (
          searchResults.map((book, key) => (
            <Book
              key={key}
              id={book.id}
              title={book.title}
              author={book.author}
              publisher={book.publisher}
              copies={book.copies}
              user={user}
              setUser={setUser}
              isAdmin={isAdmin}
            />
          ))
        ) : (
          <h1 style={{ textAlign: "center" }}>No book found.</h1>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Search;
