import React from "react";
import "../Styles/Components/Book.css";

function Book({
  id,
  title,
  author,
  publisher,
  copies,
  user,
  setUser,
  isAdmin,
}) {
  const doIssue = () => {
    console.log("Clicked");
  };

  return (
    <div className="book">
      <div className="book-image-div">
        <img src="https://images-na.ssl-images-amazon.com/images/I/41VndKVtiXL._SX442_BO1,204,203,200_.jpg" />
      </div>
      <div className="book-content-div">
        <div className="book-content">
          <p>Book ID: {id}</p>
          <p>Title: {title}</p>
          <p>Author: {author}</p>
          <p>Publisher: {publisher}</p>
          <p>Available copies: {copies}</p>
          {isAdmin && (
            <div className="issue-container" onClick={doIssue}>
              <div className="issue-button">Issue</div>
            </div>
          )}
          {!isAdmin &&
            (copies <= 10 ? (
              <p>Few copies left in Library.</p>
            ) : (
              <p>Enough copies are in Library.</p>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Book;
