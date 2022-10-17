import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

import BookCard from "../components/BookCard";

const BookLists = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const fetchedBooks = await axios.get(
        "https://www.googleapis.com/books/v1/users/117747846995901374173/bookshelves/1001/volumes?key=AIzaSyDPFQM7bM54uQMvVGaodHubHgid0VrNJc0"
      );
      setBooks(fetchedBooks.data.items);
    };
    fetchBooks();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        mt: "4em",
      }}
    >
      {books.map((book) => (
        <BookCard book={book}></BookCard>
      ))}
    </Box>
  );
};

export default BookLists;
