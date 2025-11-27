import styled from "styled-components";

export const Container = styled.div`
  /* padding: 100px 80px; */
  /* background-color: #c7ae86; */
  max-width: 1690px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  margin: 0 80px;
  margin-bottom: 150px;
  p {
    color: #909090;
    font-family: "PT Serif", serif;
    font-size: 1.1rem;
  }
`;
export const Title = styled.h2`
  font-size: 36px;
  font-weight: 600;
  font-family: "PT Serif", serif;
  margin: 180px 80px 0 80px;
  position: relative;
  width: max-content;
  color: #131315;
  &:after {
    content: "";
    background: #c7ae86;
    position: absolute;
    bottom: -10px;
    left: 0;
    height: 3px;
    width: 100%;
  }
`;
export const Description = styled.p`
  margin: 50px 80px 100px 80px;
  color: #c4c4c4;
  font-size: 19px;
  line-height: 36px;
  font-weight: 300;
`;
export const Wrapper = styled.div`
  margin-bottom: 50px;
  p {
    &:first-of-type {
      color: #c4c4c4;
      font-style: italic;
      font-family: "PT Serif", serif;
      font-size: 24px;
      position: relative;
      &:after {
        content: "";
        background: #86a1c3;
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        height: 3px;
        width: 250px;
      }
    }
  }
`;
