import styled from "styled-components";
import { Link } from "gatsby";
export const Container = styled.div`
  --app-height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100vh;
  @media screen and (max-width: 500px) {
    border-bottom: none;
  }
  @media screen and (max-width: 499px) {
    min-height: fill-available;
    border-bottom: none;
  }
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));

  overflow: hidden;
  video {
    position: absolute;
    z-index: -1;
    width: 100%;
    object-fit: cover;
  }
`;
export const Topo = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  z-index: 0;

  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
`;

export const Right = styled.div`
  display: grid;
  height: fill-available;
  grid-template-columns: minmax(0, 437px) 1fr;
  text-align: center;
  padding: 0 20px 0 0;
  position: relative;
  @media screen and (max-width: 1350px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;
export const Intro = styled.h2`
  font-family: "EB Garamond", serif;
  text-transform: uppercase;
  margin: 0;

  /* opacity: .7 !important; */
  font-size: 40px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  margin-bottom: 0.7rem;
  line-height: 1.1;
  @media screen and (max-width: 700px) {
    font-size: 21px;
    margin-bottom: 1rem;
    margin-top: 2rem;
  }
`;
export const SubIntro = styled.h3`
  margin: 0;
  font-family: "EB Garamond", serif;
  text-transform: uppercase;
  /* opacity: .7 !important; */
  font-size: 35.5px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  @media screen and (max-width: 700px) {
    font-size: 19px;
    margin-bottom: 0.5rem;
  }
`;
export const Tagline = styled.h3`
  font-family: "EB Garamond", serif;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 500;
  border-bottom: 2px solid #c7ae86;
  border-top: 2px solid #c7ae86;
  padding: 15px 0px;
  width: max-content;
  margin: 0 auto;
  word-spacing: 3px;
  margin-top: 40px;
  @media screen and (max-width: 1000px) {
    padding-left: 2rem;
    padding-right: 2rem;
    font-size: 20px;
    width: 100%;
  }
  @media screen and (max-width: 700px) {
    font-size: 12px;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    margin-top: 0;
    border: none;
    color: rgba(255, 255, 255, 1);
    padding: 0;
  }
`;

export const CTA = styled(Link)`
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
  margin: 0 auto;
  margin-top: 50px;
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

  &:hover {
    color: #fff;
    background-color: #c7ae86;
    transition: all ease-in-out 0.2s;
  }
  &:hover svg {
    fill: white;
  }
  &:hover p {
  }
  svg {
    height: 20px;
    fill: #c7ae86;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;

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
    display: none;
  }
`;

export const LogoOverlay = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  z-index: -1;
  height: 100%;
  width: 100%;
  background: rgba(10, 10, 10, 1);
  border-right: 2px solid #c7ae86;
  border-image: linear-gradient(90deg, #a1887f, #c7ae86) 1;
  opacity: 0.9;
  @media screen and (max-width: 1350px) {
    display: none;
  }
`;
export const Content = styled.div`
  align-self: center;
  justify-self: center;
  grid-column: 2;
  padding: 0 60px;
  @media screen and (max-width: 1350px) {
    grid-column: 1;
    padding: 0 20px;
  }
`;

export const MobileLogo = styled.img`
  @media screen and (min-width: 800px) {
    display: none;
  }
  margin-top: -3rem;
  margin-bottom: 3rem;
  width: 80%;
  opacity: 0.8;
  animation: scale-up-center 1s ease-in-out;
`;

export const CTAContainer = styled.div`
  img {
    display: none;
  }
  @media screen and (max-width: 800px) {
    position: absolute;
    bottom: 0;
    border-radius: 5px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: max-content;
    border-radius: 1px;

    .inner {
      width: 100%;

      transform: translateY(300px);

      padding: 25px 20px 15px 20px;
      background: rgb(193, 162, 108);
      background: rgb(199, 174, 134);
      background: linear-gradient(
        180deg,
        rgba(199, 174, 134, 1) 0%,
        rgba(204, 168, 109, 1) 100%
      );
      --shadow-color: 0deg 0% 0%;
      --shadow-elevation-high: 0.2px -0.3px 0.5px hsl(var(--shadow-color) / 0),
        1.5px -2.1px 3.9px hsl(var(--shadow-color) / 0.02),
        2.6px -3.7px 6.8px hsl(var(--shadow-color) / 0.03),
        3.7px -5.3px 9.7px hsl(var(--shadow-color) / 0.05),
        5.2px -7.4px 13.6px hsl(var(--shadow-color) / 0.07),
        7.2px -10.3px 18.9px hsl(var(--shadow-color) / 0.08),
        9.9px -14.2px 26px hsl(var(--shadow-color) / 0.1),
        13.7px -19.6px 35.9px hsl(var(--shadow-color) / 0.12);
      box-shadow: var(--shadow-elevation-high);
      animation: slide-in-bottom 1s ease-in-out;
      animation-delay: 5s;
      animation-fill-mode: forwards;
    }
    img {
      display: initial;
      opacity: 0;
      margin-top: 15px;
      animation: bounce 2s infinite, fade-in-bck-2 2s;
      /* animation-fill-mode: forwards; */
      animation-delay: 7s;
    }
  }
`;

export const DesktopLogo = styled.img`
  animation: fade-in-bck-2 2s;
  width: 60%;
  margin-bottom: 50px;
  @media screen and (max-width: 800px) {
    display: none;
    //newsssss
  }
`;
