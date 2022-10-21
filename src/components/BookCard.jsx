import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Dialog } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogActions } from "@mui/material";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import { Card, CardMedia, CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "@mui/material";

import { useState } from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "#000",
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const BookCard = ({ book }) => {
  const [open, setOpen] = useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleAddBook = () => {
    alert("add book");
  };

  return (
    <>
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
            <Typography
              variant="subtitle"
              color="text.secondary"
              component="div"
            >
              <b>Penulis: </b>
              {book.volumeInfo.authors}
            </Typography>
            <Typography
              variant="subtitle"
              color="text.secondary"
              component="div"
            >
              <b>Penerbit: </b>
              {book.volumeInfo.publisher}
            </Typography>
            <Typography
              variant="subtitle"
              color="text.secondary"
              component="div"
            >
              <b>Tahun terbit: </b>
              {book.volumeInfo.publishedDate}
            </Typography>
            <Typography
              variant="subtitle"
              color="text.secondary"
              component="div"
            >
              <b>Jumlah halaman : </b>
              {book.volumeInfo.pageCount}
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 3 }}
              onClick={handleClickOpen}
            >
              lihat detail
            </Button>
            <BootstrapDialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleClose}
              >
                Deskripsi
              </BootstrapDialogTitle>
              <DialogContent>
                <CardMedia
                  component="img"
                  sx={{ width: 150, height: 255 }}
                  image={book.volumeInfo.imageLinks.smallThumbnail}
                  alt="book poster"
                />
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h6">
                    {book.volumeInfo.title}
                  </Typography>
                  <Typography
                    variant="subtitle"
                    color="text.secondary"
                    component="div"
                  >
                    <b>Penulis: </b>
                    {book.volumeInfo.authors}
                  </Typography>
                  <Typography
                    variant="subtitle"
                    color="text.secondary"
                    component="div"
                  >
                    <b>Deskripsi: </b>
                    {book.volumeInfo.description}
                  </Typography>
                  <Link href={book.volumeInfo.previewLink} hover="underline">
                    Book Preview
                  </Link>
                </CardContent>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleAddBook} variant="outlined">
                  + Sedang dibaca
                </Button>
              </DialogActions>
            </BootstrapDialog>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default BookCard;
