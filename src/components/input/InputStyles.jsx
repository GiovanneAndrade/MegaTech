import styled from "styled-components";

export const InputContainer = styled.nav`
  display: flex;
  align-items: center;
  text-align: left;
  gap: 0.8em;
  border-radius: 0.1rem;
  border: 1px solid #fff;
  width: 500px;
  height: 40px;
  background: #fff;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom:10px;
    margin-top:-10px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 100%;
    background-color: #f5ebeb;
  }
  input {
    border: none;
    width: 100%;
    height: 100%;
  }
  input:focus {
    outline: none;
  }
`;
