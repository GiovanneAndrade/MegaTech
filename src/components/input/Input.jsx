import React from "react";
import { InputContainer } from "./InputStyles";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
export const Input = () => {
  return (
    <>
      <InputContainer>
        <div>
          <SearchSharpIcon style={{ cursor: "pointer", color:'#32357b' }} />
        </div>
        <input type="text" placeholder="Buscar Produtos..." />
      </InputContainer>
    </>
  );
};
