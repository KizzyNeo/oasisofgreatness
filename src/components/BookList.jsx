import { ArrowUpRight } from "lucide-react";
import { siteContent } from "../data/siteContent";
import "./BooksList.css";

function BooksList() {
  const books = siteContent.books || [];

  if (books.length === 0) {
    return null;
  }

  return (
    <section className="books-section">
      <div className="books-heading">
        <span className="section-label">LITERARY WORKS</span>
        <h2>Published Books</h2>
        <p>
          Explore a collection of published works, ideas and expressions
          that reflect the author's passion for writing.
        </p>
      </div>

      <ol className="books-list">
        {books.map((book) => (
          <li className="book-item" key={book.id}>
            <div className="book-cover">
              <img
                src={book.cover}
                alt={`${book.title} book cover`}
                loading="lazy"
              />
            </div>

            <div className="book-details">
              <h3>{book.title}</h3>

              {book.year && (
                <span className="book-year">{book.year}</span>
              )}

              <p>{book.description}</p>
              {book.purchaseLink && (
                <a href={book.purchaseLink}
                className="buy-book-btn"
                target="_blank"
                rel="noopener noreferrer">
                  Buy This Book
                  <span aria-hidden="true">
                    <ArrowUpRight size={23} />
                  </span>
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default BooksList;
