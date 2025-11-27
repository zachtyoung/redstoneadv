import styled from "styled-components";

export const Container = styled.div`
  margin: 0 80px;
  margin-top: 200px;
  margin-bottom: 200px;
  @media screen and (max-width: 1080px) {
    margin: 0;
  }
`;
export const Background = styled.div`
  background-color: #4c4e56;

  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 2rem;
  padding: 125px 100px;
  @media screen and (max-width: 600px) {
    padding: 40px;
  }
  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr;
    row-gap: 74px;
  }
`;
export const Intro = styled.div`
  text-align: center;
`;
export const Accent = styled.div`
  width: 3px;
  height: 100%;
  background-color: white;
  @media screen and (max-width: 1080px) {
    width: 100%;
    height: 3px;
  }
`;
export const Title = styled.div`
  font-family: "PT Serif", serif;
  font-size: 59px;
  font-weight: bold;
  padding: 0 30px;
  @media screen and (max-width: 1080px) {
    font-size: 50px;
  }
`;
export const Description = styled.div`
  color: #888888;
  font-family: "PT Serif", serif;
  font-size: 24px;
  margin-bottom: 80px;
  @media screen and (max-width: 1080px) {
    font-size: 18px;
  }
`;
export const Left = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }
  input::placeholder,
  textarea::placeholder {
    color: rgba(255, 255, 255, 0.5);

    font-weight: 500;
  }
  input,
  textarea {
    color: white;
    border: 1px solid white;
    box-sizing: content-box;
    padding: 8px 15px;
    max-width: 595px;
    background: none;
    border-radius: 3px;
    margin-bottom: 2rem;
    &:hover,
    &:focus {
      outline: none;
    }
    &:focus {
      position: relative;
      transform: scale(1.02);
      border-width: 2px;
      transition: all ease-in-out 0.16s;
    }
  }
  textarea {
    height: 160px;
    resize: none;
  }
`;
export const Right = styled.div`
margin-left: 2rem ;
  h3 {
    color: #c7ae86;
    font-family: "PT Serif", serif;
    font-size: 30px;
    font-weight: 600;
  }
  h4 {
    padding-top: 30px;
    color: #c7ae86;
    font-family: "PT Serif", serif;
    font-size: 30px;
    font-weight: bold;
  }
  span {
    color: white;
    font-weight: 300;
    font-size: 16px;
    font-weight: 400;
    display: flex;
    margin-bottom: 1rem;
  }
  div {
    display: flex;
    width: 100%;
    max-width: 400px;
    justify-content: space-between;
  }
  img {
    width: 25px;
    margin-right: 25px;
  }
  justify-self: center;
  @media screen and (max-width: 1080px) {
  }
  justify-self: flex-start;
  }
`;
export const Submit = styled.button`
  background: none;
  border: none;
  color: white;
  position: relative;
  width: max-content;
  margin-top: 1rem;
  cursor: pointer;
  &:before {
    content: "";
    background: #c7ae86;
    position: absolute;
    bottom: -10px;
    left: 0;
    height: 3px;
    width: 100%;
  }
  &:hover {
    color: #c7ae86;
  }
`;
