import * as React from "react";
import { Box } from "@mui/material";
import { Card, CardMedia, CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

const BookCard = ({ book }) => {
  return (
    <Card
      id={book.id}
      sx={{
        display: "flex",
        width: 400,
        margin: 5,
        textAlign: "left",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 150, height: 255 }}
        image={book.volumeInfo.imageLinks.smallThumbnail}
        alt="book poster"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6">
            {book.volumeInfo.title}
          </Typography>
          <Typography variant="subtitle" color="text.secondary" component="div">
            <b>Penulis: </b>
            {book.volumeInfo.authors}
          </Typography>
          <Typography variant="subtitle" color="text.secondary" component="div">
            <b>Penerbit: </b>
            {book.volumeInfo.publisher}
          </Typography>
          <Typography variant="subtitle" color="text.secondary" component="div">
            <b>Tahun terbit: </b>
            {book.volumeInfo.publishedDate}
          </Typography>
          <Typography variant="subtitle" color="text.secondary" component="div">
            <b>Jumlah halaman : </b>
            {book.volumeInfo.pageCount}
          </Typography>
          <Button variant="contained" sx={{ mt: 3 }}>
            + Sedang dibaca
          </Button>
        </CardContent>
      </Box>
    </Card>
  );
};

export default BookCard;
