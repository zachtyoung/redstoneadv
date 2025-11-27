import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 470px;
  @media screen and (max-width: 800px) {
    max-width: 600px;
  }
  background-color: #c7ae86;
  margin-bottom: 115px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: 0.1s all ease-in-out;
  }

  /* background-image: repeating-linear-gradient(
    #c7ae86 0px,
    #c7ae86 24px,
    rgba(124, 78, 41, 0.2) 25px
  ); */
`;
export const Headshot = styled.img`
  display: block;
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  object-position: 0 10%;
`;
export const Name = styled.h3`
  color: rgba(255, 255, 255, 0.9);
  font-family: "PT Serif", serif;
  font-weight: 7s00;
  font-size: 20px;
  padding: 2rem 1rem 0rem 2rem;
  margin: 0;
  text-transform: uppercase;
`;
export const Position = styled.h4`
  padding: 0 1rem 3rem 2rem;

  font-weight: 500;
  font-size: 13px;
  color: rgba(124, 78, 41, 0.7);
  text-transform: uppercase;
`;
export const ModalBody = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 500px) 2fr;
  font-family: "PT Serif", serif;
  overflow: scroll;
  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    max-height: 80vh;
  }
`;
export const Left = styled.div`
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-position: 0 10%;
    object-fit: cover;
    margin: 0 auto;
    @media screen and (max-width: 1080px) {
      max-height: 400px;
    }
  }
`;
export const Right = styled.div`
  padding: 50px 95px 50px 95px;
  max-height: 75vh;

  h1 {
    width: max-content;
    font-size: 31px;
    font-weight: bold;
    position: relative;
    @media screen and (max-width: 1080px) {
      font-size: 24px;
      margin-left: auto;
      margin-right: auto;
    }
    &:after {
      content: "";
      background: #c7ae86;
      position: absolute;
      bottom: -10px;
      left: 0;
      height: 3px;
      width: 100%;
    }
  }
  h2 {
    font-size: 20px;
    @media screen and (max-width: 1080px) {
      font-size: 14px;
      margin-top: 0.5rem;
      text-align: center;
    }
    font-weight: 600;
    color: #4c4e56;
    margin-bottom: 30px;
    font-family: "Cinzel", serif;
  }
  p {
    color: #707070;

    font-size: 16px;
    line-height: 2.4rem;
    @media screen and (max-width: 1080px) {
      font-size: 14px;
      padding-bottom: 2rem;
    }
  }
  strong {
    font-size: 24px;
    font-weight: 600;
    color: #4c4e56;
  }
  @media screen and (max-width: 1080px) {
    padding: 20px 35px;
  }
`;
export const Border = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: -15px;
  left: -15px;
  border: 5px solid black;
`;
