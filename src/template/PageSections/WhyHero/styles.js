import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 100vh;

  @media screen and (max-width: 1025px) {
    grid-template-columns: 1fr;
    position: relative;
  }
`;

export const Left = styled.div`
  background-color: rgba(134, 166, 195, 0.45);
  width: 100%;

  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0;
  padding-left: 80px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 99;
  @media screen and (max-width: 1025px) {
    justify-content: flex-start;
    padding: 50px 0;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
    padding-bottom: 300px;
    text-align: center;
  }
  @media screen and (max-width: 600px) {
    justify-content: flex-start;
    padding-top: 100px;
  }
`;
export const Right = styled.div`
  height: 100%;
  width: 100%;
  grid-column: 1/3;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 1025px) {
    grid-row: 1;
  }
  img {
    height: 100%;
    @media screen and (max-width: 1025px) {
      object-fit: cover;
    }
    object-fit: contain;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const Title = styled.h1`
  font-size: 60px;
  font-family: "PT Serif", serif;
  font-weight: 700;
  color: white;
  position: relative;
  width: max-content;

  &:after {
    content: "";
    background: #465569;
    position: absolute;
    bottom: -10px;
    left: 0;
    height: 8px;
    width: 100%;
  }
`;
export const Description = styled.div`
  padding-top: 1rem;
  color: white;
  font-size: 20px;
  font-family: "PT Serif", serif;
  p {
    margin-bottom: 10px;
  }
`;

export const Quote2 = styled.p`
  max-width: 800px;
  @media screen and (max-width: 1025px) {
    display: none;
    &:first-of-type {
      display: block;
      rotate: initial;
      width: 90%;
      margin: 0 auto;
      height: max-content;
      font-size: 16px;
      padding: 2rem;
      right: initial;
      position: absolute;
      z-index: 999;
      bottom: 20px;
      top: initial;
      left: 50%;
      transform: translate(-50%, -10%);
    }
  }
  position: absolute;
  top: ${({ order }) =>
    order === "3" ? "50%" : order === "2" ? "51%" : "50%"};
  right: ${({ order }) =>
    order === "3" ? "70px" : order === "2" ? "85px" : "75px"};
  width: 55%;
  border-radius: 3px;
  transform: translateY(-50%);
  font-family: "PT Serif", serif;
  text-align: center;
  font-style: italic;
  line-height: 1.75rem;
  font-size: 18px;
  color: #465569;
  z-index: 99;
  background: ${({ order }) =>
    order === "3"
      ? "rgba( 255, 255, 255, 0.5 )"
      : order === "2"
      ? "rgba( 255, 255, 255, 0.7 )"
      : "rgba( 255, 255, 255, 0.9 )"};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 8rem 5rem;
  span {
    display: block;
    color: #465569;
    font-size: 14px;
    text-align: center;
    padding-top: 2rem;
    font-style: normal;
    opacity: 0.7;
  }
  rotate: ${({ order }) =>
    order === 3 ? 0 : order === 2 ? "2deg" : "-1.5deg"};
`;
