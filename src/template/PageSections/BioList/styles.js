import styled from "styled-components";

export const Container = styled.div`
  max-width: 1170px;
  padding: 0 80px;
  margin: 0 auto;
  position: relative;
  @media screen and (max-width: 800px) {
    padding: 0 40px;
  }
`;
export const Title = styled.h2`
  font-family: "PT Serif", serif;
  font-weight: bold;
  font-size: 47px;
  margin-bottom: 175px;
  margin-top: 175px;
  text-align: center;
`;

export const Bios = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 65px;
  margin-bottom: 100px;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
export const Left = styled.div``;

export const Right = styled.div`
  padding-top: 100px;
  @media screen and (max-width: 800px) {
    padding-top: 0;
  }
`;

export const AccentLines = styled.div`
  width: 50px;
  display: flex;
  height: 100%;
  flex-direction: row;
  position: absolute;
  gap: 15px;
  top: 0;
  left: 0;
  margin-left: -10vw;
  div {
    width: 2px;
    height: 90%;

    background-color: rgba(0, 0, 0, 0.5);
    &:nth-of-type(1) {
      margin-top: 50px;
    }
    &:nth-of-type(3) {
      margin-top: 100px;
    }
  }
`;
