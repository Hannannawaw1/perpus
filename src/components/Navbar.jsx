import * as React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { Tabs } from "@mui/material";
import { Tab } from "@mui/material";
import { Typography } from "@mui/material";
import { useState } from "react";
import BookLists from "../container/BookLists";
import "./Navbar.css";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function allyProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Navbar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="navbar">
        <h2 sx={{ textAlign: "center" }}>Perpustakaan Sumber Ilmu</h2>
        <Box sx={{ width: "100%" }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Koleksi" {...allyProps(0)} />
            <Tab label="Sedang dibaca" {...allyProps(1)} />
            <Tab label="Selesai dibaca" {...allyProps(2)} />
          </Tabs>
        </Box>
      </div>

      <TabPanel value={value} index={0}>
        <BookLists></BookLists>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Sedang dibaca
      </TabPanel>
      <TabPanel value={value} index={2}>
        Selesai dibaca
      </TabPanel>
    </>
  );
};

export default Navbar;
