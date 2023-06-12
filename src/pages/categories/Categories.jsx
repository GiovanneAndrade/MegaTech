import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useCategorySelection, usePopover } from "../../hooks/UseCategory";
import { CategoriesContext } from "../../contexts/Categories";

export function Categories() {
  const [selectedCategory, handleCategoryClick] = useCategorySelection("");
  const { category, showCategory} = React.useContext(CategoriesContext);

  const { anchorEl, handleClick, handleClose } = usePopover();

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
          {category?.map((category) => (
            <ListItemButton
              key={category?.id}
              selected={selectedCategory === category?.name}
              onClick={() => handleCategoryClick(category)}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px 20px",
                alignItems: "inherit",
              }}
            >
              <ListItemText primary={category?.name} />
            </ListItemButton>
          ))}
        </List>
      </Popover>
    </Box>
  );
}
