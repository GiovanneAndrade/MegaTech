import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { toast } from "react-toastify";
import { ProductContext } from "../../contexts/ProductContext";
import { getPageCategories } from "../../services/Services";
import { CategoriesContext } from "../../contexts/Categories";

export default function CustomIcons() {
  const notify = () => toast("Em Breve!");

  const { page, setPage } = React.useContext(ProductContext);
  const { isCategory, setIsCategory } = React.useContext(CategoriesContext);
  console.log(isCategory)
  function showPage(value) {
    setPage(value);
    const Pagcategories = getPageCategories(value, isCategory?.id);
    Pagcategories.then((response) => {
      setIsCategory(response?.data);
      setPage(1);
    }).catch(() => {
      console.log("error");
    });
  }
  return (
    <Stack spacing={2}>
      <Pagination
        count={10}
        page={page}
        onChange={(event, value) => {
          showPage(value);
        }}
        renderItem={(item) => (
          <PaginationItem
            sx={{
              color: "#000",
              backgroundColor: "#fff",
            }}
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
