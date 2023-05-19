import styled from "styled-components";
export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const BannerCarrossel = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 300px;
  background-color: #f6ae2d;
  gap: 60px;

  div {
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    z-index: -1;
  }

  .slide.active {
    opacity: 1;
    z-index: 0;
  }

  .slide.prev {
    z-index: 1;
  }

  .slide.next {
    z-index: -1;
  }
  .passar {
    width: 8.06px;
    height: 8px;
    border: none;
    border-radius: 55px;
    background: #fff;
  }
  width: 170vh;
  height: 50vh;
  @media screen and (max-width: 768px) {
    height: 25vh;
  }
`;

export const BannerPromotion = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 5%;
  padding: 20px;

  img {
    width: 163.04px;
    height: 185px;
  }
  button {
    width: 98.72px;
    height: 27px;
    margin-top: 10px;
  }
  h1 {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
    color: #212529;
  }
  p {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #212529;
  }
  @media screen and (max-width: 768px) {
    p {
      font-size: 15px;
      line-height: 15px;
    }
    h1 {
      font-size: 20px;
      line-height: 30px;
    }
    img {
      width: 123.04px;
      height: 155px;
    }
    button {
      width: 78.72px;
      height: 27px;
    }
  }
`;
export const Next = styled.div`
  width: 150px;
  height: 100%;
  background-color: #f6ae2d;
  background-color: ${(props) => props.bgColor};
  position: absolute;
  right: 0;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
    background-color: transparent;
    width: 50px;
    height: 30%;
  }
`;
export const Prev = styled.div`
  width: 150px;
  height: 100%;
  background-color: #f6ae2d;
  background-color: ${(props) => props.prevBgColor};
  position: absolute;
  left: 0;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
    background-color: transparent;
    width: 50px;
    height: 30%;
  }
`;
