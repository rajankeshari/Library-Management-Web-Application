import React from "react";
import Book from "../Components/Book";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "../Styles/Pages/Issued.css";

function Issued({ user, setUser, isAdmin, setIsAdmin }) {
  return (
    <div className="issued-page">
      <Header
        user={user}
        setUser={setUser}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
      />
      {user.issued.length === 0 ? (
        <div className="no-book-issued">No book issued</div>
      ) : (
        <div className="books">
          {user.issued.map((book, key) => (
            <Book
              key={key}
              id={book.id}
              title={book.title}
              author={book.author}
              publisher={book.publisher}
              copies={book.copies}
            />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Issued;
