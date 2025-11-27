import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-bottom: 150px;
  &:after {
    content: "";
    background: #c7ae86;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    height: 3px;
    width: 50%;
  }
  img {
    display: block;
    margin: 0 auto;
    position: relative;
    padding-bottom: 150px;
    width: 100%;
    max-width: 1000px;
  }
`;
