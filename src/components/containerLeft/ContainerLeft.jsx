import React, { useState } from "react";
import { ContainerLeftInternal } from "./ContainerLeftStyles";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  .icon{
    cursor: pointer;
  }
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
  const [type, setType] = useState(false);
  const [priceOrder, setPriceOrder] = useState(false);
  const [showPriceOptions, setShowPriceOptions] = useState(false);
  const [assessment, setAssessment] = useState(false);
  const [available, setAvailable] = useState(false);
  React.useEffect(() => {
    if (showPriceOptions || priceOrder || assessment || available || type) {
      toast.info("Em Breve!", {
        className: "custom-toast",
      });
    }
  }, [showPriceOptions, priceOrder, assessment, available, type]);

  const typeCheckboxChange = (event) => {
    setType(event.target.checked);
  };

  const handlePriceOrderChange = (event) => {
    setPriceOrder(event.target.checked);
  };

  const handlePriceCheckboxChange = (event) => {
    setShowPriceOptions(event.target.checked);
  };

  const assessmentCheckboxChange = (event) => {
    setAssessment(event.target.checked);
  };
  const availableCheckboxChange = (event) => {
    setAvailable(event.target.checked);
  };

  return (
    <ContainerLeftInternal>
      <FilterContainer>
        <FilterHeader>Filter</FilterHeader>

        <FilterOption>
          <FilterCheckbox
            className="icon"
            type="checkbox"
            id="price"
            onChange={handlePriceCheckboxChange}
          />
          <FilterLabel htmlFor="price">Price</FilterLabel>
        </FilterOption>
        <FilterOption>
          <FilterCheckbox className="icon" type="checkbox" id="bestSellers" onChange={handlePriceOrderChange}/>
          <FilterLabel htmlFor="bestSellers">Mais vendidos</FilterLabel>
        </FilterOption>
        <FilterOption>
          <FilterCheckbox className="icon" type="checkbox" id="rating" onChange={assessmentCheckboxChange}/>
          <FilterLabel htmlFor="rating">Avaliação</FilterLabel>
        </FilterOption>
        <FilterOption>
          <FilterCheckbox className="icon" type="checkbox" id="availability" onChange={availableCheckboxChange}/>
          <FilterLabel htmlFor="availability">Disponibilidade</FilterLabel>
        </FilterOption>
        <FilterOption>
          <FilterCheckbox className="icon" type="checkbox" id="brand" onChange={typeCheckboxChange}/>
          <FilterLabel htmlFor="brand">Marca</FilterLabel>
        </FilterOption>
      </FilterContainer>
    </ContainerLeftInternal>
  );
};
