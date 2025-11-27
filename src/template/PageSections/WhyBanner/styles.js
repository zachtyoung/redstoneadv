import styled from "styled-components";
export const Container = styled.div`
  h2 {
    text-align: center;
    width: 100%;
    margin: 0 auto;
    color: #c7ae86;

    font-weight: 600;
    font-style: italic;
    font-size: 28px;
    position: relative;
    top: 50px;
    padding: 0 30px;
    position: relative;
    font-family: "Cinzel", serif;
    max-width: 60%;
    @media screen and (max-width: 600px) {
max-width: 100%;
    }
    margin: 0 auto;
    &:before {
      content: "";
      background: #131315;
      position: absolute;
      top: -55px;
      left: 50%;
      transform: translateX(-50%);
      height: 3px;
      width: 80%;
    }
    &:after {
      content: "";
      background: #131315;
      position: absolute;
      bottom: -55px;
      left: 50%;
      transform: translateX(-50%);
      height: 3px;
      width: 80%;
    }
  }
  margin-bottom: 50px;
  img {
    width: 100%;
    filter: sepia(100);
  }
`;
