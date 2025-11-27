import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
  min-height: 100vh;
  overflow: hidden;
  margin-bottom: 50px;
  img {
    width: 100%;
  }
  video {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    filter: grayscale(100%);
  }
`;

export const Title = styled.h1`
  margin-top: 100px;
  font-size: 60px;
  font-family: "PT Serif", serif;
  font-weight: bold;
  width: max-content;
  position: relative;
  z-index: 99;
  &:after {
    content: "";
    background: #c7ae86;
    position: absolute;
    bottom: -10px;
    left: 0;
    height: 6px;
    width: 100%;
  }
`;
export const Description = styled.h2`
  color: #c4c4c4;
  font-size: 14px;
  font-family: "PT Serif", serif;
  margin-bottom: 50px;
  @media screen and (max-width: 1080px) {
    font-size: 16px;
  }
`;
export const Quote = styled.p`
  padding: 25px 30px;
  max-width: 900px;
  text-align: center;
  font-size: 20px;
  font-family: "PT Serif", serif;
  color: #888888;

  line-height: 40px;
  font-weight: 100;
  @media screen and (max-width: 1080px) {
    font-size: 18px;
  }
`;

export const Accent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 30% 0, 0 100%, 0% 100%);
  background-color: #86a1c3;
`;
export const Layer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  outline: 3px solid white;
  outline-offset: 8px;
`;
