import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 80px 80px 50px 80px;
  align-items: center;
  background-color: #e6e6e6;
  column-gap: 6rem;
  text-align: center;
  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr;
    row-gap: 6rem;
  }
  h3 {
    font-family: "PT Serif", serif;
    font-size: 32px;
    font-weight: bold;
    color: #888888;
  }
  p {
    color: #888888;
    font-family: "PT Serif", serif;
    padding-top: 50px;
    padding-bottom: 50px;
    font-size: 1rem;
    line-height: 2.2rem;
  }
`;
export const Left = styled.div`
  @media screen and (max-width: 1080px) {
    position: relative;
    &:before {
      content: "";
      background: #888888;
      position: absolute;
      bottom: 0;
      left: -3rem;
      height: 100%;
      width: 3px;
    }
  }
`;
export const Right = styled.div`
  position: relative;
  &:before {
    content: "";
    background: #888888;
    position: absolute;
    bottom: 0;
    left: -3rem;
    height: 100%;
    width: 3px;
  }
`;
