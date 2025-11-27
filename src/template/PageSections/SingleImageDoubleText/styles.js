import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 300px;
  font-family: "Cinzel",serif;
  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr;
    margin-bottom: 100px;
  }
  @media screen and (max-width: 600px) {
margin-bottom: 40px;
  }
`;

export const Left = styled.div`
width: 100%;
  grid-column: ${({ layout }) => (layout === "left" ? 1 : 2)};

  grid-row: 1;
  @media screen and (max-width: 1080px) {
    grid-column: 1;
  }
  img {
    display: block;
    width: 100%;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.4) !important;
  }
`;
export const Right = styled.div`
width: 100%;
  grid-column: ${({ layout }) => (layout === "left" ? 2 : 1)};
  grid-row: 1;
  @media screen and (max-width: 1080px) {
    grid-row: 2;
    grid-column: 1;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 100px 50px 100px;
  @media screen and (max-width: 1080px) {
    padding: 50px 40px;
  }
  @media screen and (max-width: 600px) {
padding-bottom: 0px;
  }
`;

export const Title = styled.h2`
  font-size: 50px;
  font-family: "PT Serif", serif;
  color: #c7ae86;
  font-weight: bold;
  font-style: italic;
  @media screen and (max-width: 800px) {
   font-size: 30px;
  }
  margin-left: ${(props) =>
    props.layout === "left" && props.order === 1
      ? "auto"
      : props.layout === "right" && props.order === 2
      ? "auto"
      : 0};
`;
export const Description = styled.p`
  font-size: 18px;
  color: #757575;
  font-weight: 500;
  line-height: 2.5rem;
  a{
  color: inherit;
  text-decoration: underline;
  &:hover, &:focus{
    color: black;
   
  }
}
  @media screen and (max-width: 600px) {
font-size:16px;

  }
`;
