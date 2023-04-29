import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export function Categories() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const allCategories = [
    "Categoria 1",
    "Categoria 2",
    "Categoria 3",
    "Categoria 4",
    "Categoria 5",
    "Categoria 6",
  ];
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "category-popover" : undefined;

  return (
    <Box>
      <p aria-describedby={id} onClick={handleClick}>
        Categoria
      </p>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <List>
          {allCategories.map((category) => (
            <ListItemButton
              key={category}
              selected={selectedCategory === category}
              onClick={() => handleCategoryClick(category)}
            >
              <ListItemText primary={category} />
            </ListItemButton>
          ))}
        </List>
      </Popover>
    </Box>
  );
}
