import styled from "styled-components";
import { Link } from "gatsby";
import arrow from "../../../images/red-bar-3.svg";
import ellipsis from "../../../images/fa/ellipsis.svg";
export const Container = styled.div`
  scroll-snap-align: start;
  padding: 50px 80px;
  padding: ${({ location }) => (location === "/" ? "150px 80px" : "50px 80px")};
  max-width: 1525px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ location }) => (location === "/" ? "8vw" : "2rem")};
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    padding: 0 0 2rem 0;
    gap: 0;
  }
`;
export const Left = styled.div`
  display: grid;
  grid-template-rows: 1fr max-content;
  opacity: 0;
  grid-column: ${({ layout }) =>
    layout === "left" ? 1 : layout === "stacked" ? "1 / 3" : 2};
  grid-row: ${({ layout }) =>
    layout === "left" ? 1 : layout === "stacked" ? 1 : 1};

  video {
    display: block;
    border-radius: 3px;
    width: 100%;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  @media screen and (max-width: 800px) {
    grid-column: 1;
    grid-row: 1;
    padding: 0 30px 2rem 30px;
    height: max-content;
  }
`;
export const StaticImage = styled.img`
  max-width: ${({ dimensions }) =>
    dimensions === "normal" ? "none" : "690px"};
  margin: 0 auto;
  width: 100%;
  /* max-width: 690px; */
  /* border-radius: 0 100px 0 100px; */
  height: 100%;
  height: ${({ location }) =>
    location == "/who-we-are" || location === "/what-we-do" ? "auto" : "100%"};
  min-height: 300px;
  max-height: ${({ location }) => location == "/who-we-are" && "500px"};
  object-fit: cover;
  object-position: 0 30%;
  border-radius: 4px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 800px) {
    object-position: center;
  }
`;
export const Right = styled.div`
  opacity: 0;
  grid-column: ${({ layout }) =>
    layout === "left" ? 2 : layout === "stacked" ? "1 / 3" : 1};
  grid-row: ${({ layout }) =>
    layout === "left" ? 1 : layout === "stacked" ? 2 : 1};
  padding: ${({ location }) => (location === "/" ? "0 0 0 0" : "none")};

  @media screen and (max-width: 800px) {
    grid-row: 2;
    grid-column: 1;
    padding: 20px 30px;
    padding-top: 0;
  }
  strong {
    color: #4c4e56;
  }
  p {
    &:first-of-type {
      initial-letter: 3;
      &::first-letter {
        /* color:#c7ae86; */
        /* font-weight: 900;
        font-size: 20px; */
        /* text-shadow: 0px 2px 5px rgba(0,0,0,0.3); */
      }
    }
  }
`;

export const Title = styled.h2`
  font-family: "Cinzel", serif;
  text-transform: uppercase;
  font-size: 48px;
  margin: 0;
  padding: 0;
  width: auto;

  font-size: ${({ orientation }) =>
    orientation === "two-column" ? "32px" : "48px"};
  @media screen and (max-width: 1080px) {
    font-size: ${({ orientation }) =>
      orientation === "two-column" ? "32px" : "32px"};
    margin: ${({ location }) =>
      location === "/" ? "0 0 2rem 0" : " 0 auto 3rem auto;"};
  }
  font-weight: bold;
  position: relative;
  width: ${({ orientation }) =>
    orientation === "two-column" ? "auto" : "max-content"};
  margin: ${({ location }) =>
    location === "/" ? "0 0 2rem 0" : " 0 auto 5rem auto;"};

  &:after {
    content: "";
    background: #c7ae86;
    position: absolute;
    bottom: -20px;
    left: 0;
    height: 5px;
    width: 100%;
    border-radius: 1px;
  }
  @media screen and (max-width: 500px) {
    margin: ${({ location }) =>
      location === "/" ? "0 auto 2rem auto" : " 3rem auto 3rem auto;"};
    line-height: 1.3;
  }
`;
export const Description = styled.div`
  color: #7f7f7f;
  font-family: "PT Serif", serif;
  line-height: 35px;
  padding: ${({ orientation, location }) =>
    orientation === "two-column"
      ? "2rem 2rem"
      : location == "/"
      ? "0rem"
      : "0 4rem"};
  @media screen and (max-width: 800px) {
    padding: ${({ orientation, location }) =>
      orientation === "two-column" ? "0" : location == "/" ? "0rem" : "0rem"};
  }
  ul {
    padding-inline-start: 0px;
    @media screen and (max-width: 800px) {
      padding-inline-start: 20px;
      padding-top: 0;
    }
    list-style: none;

    padding: 50px 0;
    border-radius: 5px;
    li {
      /* background-color: #f8f8f8; */
      /* border: 1px solid #e8e8e8; */
      /* padding: 15px 20px; */
      position: relative;
      margin-bottom: 1rem;
      &:last-of-type {
        margin-bottom: 0;
      }
      &:before {
        content: url("${arrow}");
        position: absolute;

        left: -25px;
        height: max-content;
      }
    }
  }
`;
export const Cta = styled(Link)`
  --shadow-elevation-low: -0.3px 0.4px 0.4px hsl(var(--shadow-color) / 0.08),
    -0.3px 0.4px 0.4px -0.6px hsl(var(--shadow-color) / 0.07),
    -0.4px 0.6px 0.5px -1.1px hsl(var(--shadow-color) / 0.06),
    -0.7px 1.1px 1px -1.7px hsl(var(--shadow-color) / 0.05),
    -1.4px 2px 1.8px -2.2px hsl(var(--shadow-color) / 0.05),
    -2.4px 3.6px 3.2px -2.8px hsl(var(--shadow-color) / 0.04),
    -4px 6px 5.4px -3.3px hsl(var(--shadow-color) / 0.03),
    -6.2px 9.2px 8.3px -3.9px hsl(var(--shadow-color) / 0.02),
    -9.2px 13.6px 12.3px -4.4px hsl(var(--shadow-color) / 0.02),
    -13px 19.2px 17.4px -5px hsl(var(--shadow-color) / 0.01);
  box-shadow: var(--shadow-elevation-low);
  font-family: "Cinzel", serif;
  width: max-content;
  /* color: #fff;
  background-color: #c7ae86; */
  text-decoration: none;
  height: 50px;
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  justify-content: center;
  /* padding: 0 2rem; */
  border: 2px solid #c7ae86;
  border-radius: 50px;
  font-weight: 700;
  letter-spacing: 0.02rem;
  text-transform: uppercase;
  color: #c7ae86;
  background-color: #fff;
  &:hover {
    color: #fff;
    background-color: #c7ae86;
    transition: all 0.2s ease-in-out;
  }
  &:hover svg {
    /* fill: white; */
    transition: all 0.2s ease-in-out;
  }
  &:hover p {
    transition: all 0.2s ease-in-out;
    padding-right: 2rem;
  }
  svg {
    height: 20px;
    fill: #c7ae86;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    height: 46px;
    width: 46px;
    border-radius: 100px;
    padding: 0 1rem;
    /* transform: scale(1.01); */
  }
  p {
    margin: 0;
    padding: 0 0 0 2rem;
  }
  @media screen and (max-width: 800px) {
    margin: 0 auto;
    /* background-color: #c7ae86;
    color: white; */
    margin-top: 1rem;
  }
`;
export const Tagline = styled.h4`
  white-space: pre-wrap;
  width: 100%;
  text-align: center;
  color: #c7ae86;
  font-family: "Cinzel", serif;
  line-height: 45px;
  font-weight: 500;
  font-size: 30px;
  margin: 35px 0 35px 0;
  @media screen and (max-width: 800px) {
    font-size: 22px;
    line-height: 35px;
    font-weight: 700;
    max-width: 100%;
    margin-top: 50px;
    text-align: center;
    position: relative;
    &:before {
      content: url("${ellipsis}");
      position: absolute;

      left: 50%;
      top: -35px;
      transform: translate(-50%, -50%);
      height: 0px;
      width: 30px;
      background-color: red;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
`;

export const FloatingQuote = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  text-align: center;
  color: white;
  font-size: 1.5rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  p {
    font-family: "Cinzel", serif;
  }
  span {
    font-family: "Cinzel", serif;
    font-size: 1rem;
    color: #c7ae86;
    font-weight: 600;
  }
  p,
  div,
  span {
    padding: 0 !important;
    margin: 0 !important;
    line-height: 1.5;
  }
`;

export const Quote = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 800px) {
    width: 70%;
    top: 55%;
    bottom: initial;
    p {
      font-size: 20px;
    }
    span {
      font-size: 14px;
    }
  }
`;
