import React, { useState } from "react";
import { InputContainer } from "./InputStyles";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { useSearch } from "../../hooks/UseAnddress";
import { CategoriesContext } from "../../contexts/Categories";
import { ProductContext } from "../../contexts/ProductContext";
import { getFromLocalStorage } from "../../localStorage/LocalStorage";

export const Input = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { productOverview, setProductOverview, scroll, setScroll } =
  React.useContext(ProductContext);
  const { handleSearch }=useSearch()
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const myToken = getFromLocalStorage("megaTechAuth");
  return (
    <>
      <InputContainer  myToken={myToken}>
        <div onClick={()=>handleSearch(searchTerm)}>
          <SearchSharpIcon style={{ cursor: "pointer", color: "#32357b" }} />
        </div>
        <input
          type="text"
          placeholder="Buscar Produtos..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </InputContainer>
    </>
  );
};
