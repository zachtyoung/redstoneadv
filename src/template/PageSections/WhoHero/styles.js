import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 5fr;
  min-height: 100vh;
  gap: 2rem;
  padding-top: 100px;
  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr;
    margin-top: 50px;
    margin-bottom: 0px;
    gap: 0rem;
    padding-top: 0px;
  }
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30px 0 80px;
  @media screen and (max-width: 1080px) {
    padding: 0 30px;
    margin-top: 0;
    grid-row: 2;
  }
  /* padding-left: 80px; */
`;

export const Right = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 0;
`;
export const Hero = styled.div`
  width: 100%;
  position: relative;
`;
export const HeroImage = styled.img`
  width: 100%;
  position: relative;
  z-index: 1;
`;
export const HeroTexture = styled.img`
  width: 100%;
  position: absolute;
  bottom: -60px;
  right: -100px;
  z-index: 0;
  @media screen and (max-width: 1080px) {
    bottom: -30px;
    right: 0px;
  }
`;
export const Title = styled.h1`
  font-family: "PT Serif", serif;
  font-size: 60px;
  @media screen and (max-width: 600px) {
    font-size: 40px;
  }
  font-weight: 700;

  @media screen and (max-width: 1080px) {
    max-width: 100%;
    display: none;
    padding-top: 50px;
  }
  line-height: 80px;
  position: relative;
  &:after {
    content: "";
    background: #c7ae86;
    position: absolute;
    bottom: -20px;
    left: 0;
    height: 8px;
    width: 50%;
    @media screen and (max-width: 1080px) {
      width: 90%;
      height: 4px;
      bottom: -5px;
    }
  }
`;
export const Description = styled.p`
  &:first-of-type {
    margin-top: 1.4rem;
  }
  &:last-of-type {
    margin-bottom: 3rem;
  }
  font-family: "PT Serif", serif;
  font-size: 18px;
  max-width: 450px;
  strong {
    color: #4c4e56;
  }
  color: #757575;
  line-height: 40px;
  @media screen and (max-width: 1080px) {
    font-size: 16px;
  }
  display: flex;
  flex-direction: column;

  &:last-child {
    span {
      font-weight: 500;
    }
  }
`;
export const Quote = styled.p`
  position: absolute;
  top: 60%;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  font-style: italic;
  font-family: "PT Serif", serif;
  font-size: 20px;
  color: #c0c0c0;
  line-height: 20px;
  z-index: 99;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 2.5rem 3rem;
  p {
    &:first-of-type {
      width: 100%;
      padding: 0;
      margin: 0;
      margin: 0 auto;
      text-transform: uppercase;
      color: #7b4e29;
      margin-bottom: 2rem;
      font-style: normal;
      font-weight: bold;
      font-family: "PT Serif", serif;
      position: relative;
      &:after {
        content: "";
        background: #7b4e29;
        position: absolute;
        bottom: -8px;
        left: 0;
        height: 2px;
        width: 100%;
      }
    }
    &:nth-of-type(2) {
      color: #7b4e29;
      padding: 0;
      font-family: "PT Serif", serif;
      width: max-content;
      margin: 0 auto;
      @media screen and (max-width: 1080px) {
        font-size: 1rem;
      }
    }
    &:last-of-type {
      color: #7b4e29;
      margin: 0 auto !important;
      width: max-content;
      font-size: 14px;
      padding: 0;
      padding-top: 1rem;
      margin: 0;
      font-style: normal;
      font-family: "PT Serif", serif;
    }
  }
  img {
    display: block;
    padding: 0;
    margin: 0;
    height: 100%;
    max-height: 80px;
    /* width: 100%;
		max-width: 120px;
		align-self: center; */
    @media screen and (min-width: 800px) {
      display: none;
    }
  }
  @media screen and (max-width: 800px) {
    position: initial;
    transform: none;
    box-shadow: none;
    background: none;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    box-shadow: none;
    border: none;
    margin-top: 2rem;
    margin-bottom: 0;
    margin-left: auto;
    margin-right: auto;
    padding: 30px;
    padding-bottom: 0;

    p {
      width: 100%;
      text-align: left;
      margin-bottom: 0 !important;
      padding-top: 0 !important;
      margin-bottom: 1rem !important;
      &:after {
        background: #fff !important;
      }
      &:nth-of-type(1) {
        width: max-content;
        margin: 0;
        padding: 0;
        font-size: 16px;
        color: white;
      }
      &:nth-of-type(2) {
        width: 100%;
        margin: 0;
        font-style: normal;
        line-height: 1.5rem;
        color: white;
      }
      &:nth-of-type(3) {
        width: max-content;
        margin: 0 !important;
        color: white;
      }
    }
  }
`;

export const RT = styled.div`
  @media screen and (max-width: 800px) {
    height: 100%;
    /* margin-left: 25px; */
    /* position: relative;
			&:before {
				content: "";
				background: #000;
				position: absolute;
				left: -25px;
				top: 50%;
				transform: translateY(-50%);
				height: 95%;
				width: 3px;
			} */
  }
`;

export const TitleMobile = styled(Title)`
  @media screen and (max-width: 1080px) {
    display: block;
    margin-bottom: 4rem;
    &:after {
      width: 100%;
    }
  }
  @media screen and (min-width: 1080px) {
    display: none;
  }
`;
export const Inner = styled.div`
  @media screen and (max-width: 800px) {
    .quote {
      max-width: 100%;
      font-family: serif;
      font-size: 24px;
      line-height: 1.2;
      color: #dadada;
      padding: 40px 40px 40px 50px;
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      box-shadow: inset 0 0 0 7px rgba(255, 255, 255, 0.07),
        4px 4px 4px rgba(0, 0, 0, 0.15);
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAALElEQVQIW2N0cHD4z8PDw/DlyxcGEGD08fH5D+OABUAqwFIMDAwglXABmDYAVnIQJU/kBYMAAAAASUVORK5CYII=);
    }
    .quote:before {
      width: 30px;
      height: 20px;
      position: absolute;
      left: 10px;
      top: 10px;
      content: "";
      background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAAWCAYAAACSYoFNAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wkIDBIR/EbngQAAAq5JREFUWMPtmD9oFFEQxn93XmGhCVFBQiQiCSYo2AiSxKAgsfAPH4IiFlYp1MYmiMGAhQgRRCSlCrEQIaYQwjQptBJMVLQSYxRBTNSQoBGNgoXhLHwH5/Le3u7hFcJ+cNyyM/vNzLcz7+1ujgqQtBU4DOwA6sxsFwkgCTMrHfcA+4DtwGszO0FKSLoBbAaeAeNmdj8aJwHHA+Ab8AS4a2Yv4vwLoaIkHQOuAE1l5rdJi3Ec54DBiOkr1WE9sNv9+iQBDJjZpRQcG4BNwAHggqQPwBkzu+MTOe8haJA0DYxEhEnULe6/Q1LRI8y/xqCkoqSO8vgp0ASMuHobosZ8pLh2YBFoqyZT1y29wGSMW64GIk1K6k06Xh60AYuu/r/FkYSkemAqhuAH8KhC5+wEhmNcPgIPqyzgubs+hGEXPw5PXR0hTEmqL3Vgrqyw6UDHLANXzexshXFa7RY7H74AvWY2lmYBDayFh4CbvjFwqAOW4mJIugz0ASs85ldm1l7eOUdiRqkF6K80TsBQwLxgZmuAsTLfqkbWYczxLQRchxLE6Hd1eUfM6fGncyS9A5o9jqeA6xXuAsBa4FOgqFqsMaXYxYBpHfA5Qd4ngWse84yZbcxJ2gL49vtlMyskTPIoMBoKUkNxQjd1v5mNJ+T4FRivljzQE7jucYo8TwfO36rxVh7iH0jBEarzYB7oDBhfxj3LRNAd4BitsTgh/u6EeQfrBDpzkiYCAr0BZiLn5szseCRo3C51z9OyE2Z2vooRugh0eXbSvaFdy8yWIhy3gcaIXzPQ6nt2KnicS2j1XOR7fVgVU5Mv8e9Vdsk2YE8K/1XAUuRcl3t9SILGPBmCyMTJxMnEycTJxMnEycT5r1EAZoFiQv/ZwPeeOeBnQo75KnOdJ/k37JUuryT5h/D+N8Px49h3fiJsAAAAAElFTkSuQmCC")
        no-repeat;
    }
    .quote:after {
      width: 30px;
      height: 20px;
      position: absolute;
      right: 10px;
      bottom: 10px;

      content: "";
      background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAAWCAYAAACSYoFNAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wkIDBIR/EbngQAAAq5JREFUWMPtmD9oFFEQxn93XmGhCVFBQiQiCSYo2AiSxKAgsfAPH4IiFlYp1MYmiMGAhQgRRCSlCrEQIaYQwjQptBJMVLQSYxRBTNSQoBGNgoXhLHwH5/Le3u7hFcJ+cNyyM/vNzLcz7+1ujgqQtBU4DOwA6sxsFwkgCTMrHfcA+4DtwGszO0FKSLoBbAaeAeNmdj8aJwHHA+Ab8AS4a2Yv4vwLoaIkHQOuAE1l5rdJi3Ec54DBiOkr1WE9sNv9+iQBDJjZpRQcG4BNwAHggqQPwBkzu+MTOe8haJA0DYxEhEnULe6/Q1LRI8y/xqCkoqSO8vgp0ASMuHobosZ8pLh2YBFoqyZT1y29wGSMW64GIk1K6k06Xh60AYuu/r/FkYSkemAqhuAH8KhC5+wEhmNcPgIPqyzgubs+hGEXPw5PXR0hTEmqL3Vgrqyw6UDHLANXzexshXFa7RY7H74AvWY2lmYBDayFh4CbvjFwqAOW4mJIugz0ASs85ldm1l7eOUdiRqkF6K80TsBQwLxgZmuAsTLfqkbWYczxLQRchxLE6Hd1eUfM6fGncyS9A5o9jqeA6xXuAsBa4FOgqFqsMaXYxYBpHfA5Qd4ngWse84yZbcxJ2gL49vtlMyskTPIoMBoKUkNxQjd1v5mNJ+T4FRivljzQE7jucYo8TwfO36rxVh7iH0jBEarzYB7oDBhfxj3LRNAd4BitsTgh/u6EeQfrBDpzkiYCAr0BZiLn5szseCRo3C51z9OyE2Z2vooRugh0eXbSvaFdy8yWIhy3gcaIXzPQ6nt2KnicS2j1XOR7fVgVU5Mv8e9Vdsk2YE8K/1XAUuRcl3t9SILGPBmCyMTJxMnEycTJxMnEycT5r1EAZoFiQv/ZwPeeOeBnQo75KnOdJ/k37JUuryT5h/D+N8Px49h3fiJsAAAAAElFTkSuQmCC") -40px
        0px no-repeat;
    }
    .quote > a {
      font-family: sans-serif;
      font-size: 14px;
      color: #dadada;
      text-decoration: none;
      float: right;
    }
    .quote > a:hover {
      color: #ace;
    }
  }
`;
