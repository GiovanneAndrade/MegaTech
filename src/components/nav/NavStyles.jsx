import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  height: 117px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #32357b;
  color: #fff;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    min-height: 205px;
  }
`;

export const MenuLeft = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    //justify-content: center;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    margin-top: -20px;
    gap: 0;
    width: 100%;
    font-size: 13px;
  }
`;

export const MenuList = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-around;
  /* margin: 0 15rem; */
  align-items: flex-end;

  ul {
    display: flex;
    gap: 1rem;
  }
  li {
    list-style: none;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }
`;

export const MenuCentral = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
    display: none;
  }
`;
export const NewMenuCentral = styled(MenuCentral)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Logo = styled.img`
  width: 200px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  @media screen and (max-width: 768px) {
    align-items: end;
    width: 100%;
    margin-top: -55px;
    ul {
      margin-top: -20px;
    }
  }
`;

export const MenuItem = styled.li`
  //margin-left: 1rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
