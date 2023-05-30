import React, { useState } from "react";
import { ContainerLeftInternal } from "./ContainerLeftStyles";
import styled from "styled-components";

const FilterContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
 // background-color: #f5f5f5;
  padding: 10px;
  gap: 20px;
`;

const FilterHeader = styled.h2`
  margin: 0;
  padding-bottom: 10px;
`;

const FilterOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const FilterCheckbox = styled.input`
  margin-right: 5px;
`;

const FilterLabel = styled.label`
  display: flex;
  gap: 20px;
  flex-direction: column;
  font-size: 14px;
`;

const FilterInput = styled.input`
  margin-left: 10px;
  width: 100px;
`;

const ApplyButton = styled.button`
  margin-top: 10px;
`;

export const ContainerLeft = () => {
  const [priceFilter, setPriceFilter] = useState("");
  const [priceOrder, setPriceOrder] = useState("");
  const [showPriceOptions, setShowPriceOptions] = useState(false);

  const handlePriceFilterChange = (event) => {
    setPriceFilter(event.target.value);
  };

  const handlePriceOrderChange = (event) => {
    setPriceOrder(event.target.value);
  };

  const handlePriceCheckboxChange = (event) => {
    setShowPriceOptions(event.target.checked);
  };

  const handleApplyFilter = () => {
    // Implementar a lógica para aplicar o filtro aqui
    console.log("Filtro aplicado!");
  };

  return (
    <ContainerLeftInternal>
      <FilterContainer>
        <FilterHeader>Filter</FilterHeader>

        <FilterOption>
          <FilterCheckbox
            type="checkbox"
            id="price"
            onChange={handlePriceCheckboxChange}
          />
          <FilterLabel htmlFor="price">Price</FilterLabel>
          
        </FilterOption>
        <FilterOption>
          <FilterCheckbox type="checkbox" id="bestSellers" />
          <FilterLabel htmlFor="bestSellers">Mais vendidos</FilterLabel>
        </FilterOption>
        <FilterOption>
          <FilterCheckbox type="checkbox" id="rating" />
          <FilterLabel htmlFor="rating">Avaliação</FilterLabel>
        </FilterOption>
        <FilterOption>
          <FilterCheckbox type="checkbox" id="availability" />
          <FilterLabel htmlFor="availability">Disponibilidade</FilterLabel>
        </FilterOption>
        <FilterOption>
          <FilterCheckbox type="checkbox" id="brand" />
          <FilterLabel htmlFor="brand">Marca</FilterLabel>
        </FilterOption>
      </FilterContainer>
    </ContainerLeftInternal>
  );
};
