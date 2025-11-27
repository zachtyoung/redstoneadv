import styled from "styled-components";

export const Container = styled.footer`
  background-color: #c4c4c4;
  margin: 0;
  padding: 80px;
  width: 100%;
  @media screen and (max-width: 800px) {
    padding: 80px 20px;
  }
  color: #707070;
  h2 {
    color: rgb(77, 78, 86);
    font-family: "PT Serif", serif;
    font-size: 20px;
    font-weight: bold;
  }
`;
export const Top = styled.div`
  img {
    max-width: 100%;
  }
  margin-bottom: 25px;
  @media screen and (max-width: 800px) {
    margin-bottom: 55px;
    img {
      max-width: 80%;
    }
  }
`;
export const Middle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 1rem;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    margin-bottom: 25px;
  }
`;
export const MidLeft = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  a {
    color: inherit;
    &:hover {
      color: inherit;
      text-decoration: underline;
    }
  }
  p {
    margin-bottom: 25px;
  }
  div {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 25px;
  }
  ul {
    .resources {
      font-weight: 400;
    }
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
    gap: 0.5rem;
    li {
      white-space: nowrap;
      font-weight: 600;
      a {
        color: inherit;
        &:hover {
          color: inherit;
          text-decoration: underline;
        }
      }
    }
  }
`;
export const MidRight = styled.div`
  justify-self: center;
  @media screen and (max-width: 800px) {
    justify-self: flex-start;
    margin-bottom: 25px;
  }
  div {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
  }
  svg {
    margin-right: 25px;
    path {
      fill: #707070;
    }
  }
  a {
    color: inherit;
    &:hover {
      color: inherit;
      text-decoration: underline;
    }
  }
`;
export const Bottom = styled.div`
  border-top: 1px solid #707070;
  padding: 1rem 0 0 0;
  a {
    color: #707070;
    text-decoration: underline;
    margin-right: 10px;
    &:hover {
      color: black;
      text-decoration: underline;
    }
  }
  div {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    a {
      margin-bottom: 6px;
      font-weight: 600;
    }
  }
`;
