import styled from "styled-components";

export const Container = styled.div`
  max-width: 1475px;

  margin: 60px auto 0 auto;
  padding: 0 40px;
  text-align: center;
  color: #888888;
  font-family: "PT Serif", serif;
  font-size: 22px;
  line-height: 40px;
  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;
export const AccentSqaures = styled.div`
  @media screen and (max-width: 800px) {
    display: none;
  }
  height: 100%;
  width: 60%;
  margin: 0 auto;
  display: flex;
  gap: 1.5rem;
  &:first-of-type {
    margin-bottom: 9rem;
  }
  div {
    width: 15px;
    height: 3px;
    background-color: rgba(0, 0, 0, 0.35);
    &:nth-of-type(2) {
      width: 30px;
    }
    &:nth-of-type(3) {
      background-color: rgba(0, 0, 0, 0.35);
      width: 100%;
    }
  }
`;
