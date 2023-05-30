import styled from "styled-components";

export const SlideshowContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    position: absolute;
    object-fit: cover;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 100%;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  img.active {
    opacity: 1;
  }

  .btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 2em;
  }

  .prev {
    left: 10px;
  }

  .next {
    right: 10px;
  }
`;
export const ImageBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
 
  img {
    max-width: 15%;
  }
`;
export const ContainerSlide = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
 
`;
