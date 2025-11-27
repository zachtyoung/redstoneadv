import React from "react";
import { graphql } from "gatsby";
import {
  Container,
  Overlay,
  Right,
  Intro,
  SubIntro,
  Tagline,
  Topo,
  LogoOverlay,
  CTA,
  Content,
  Debug,
  Delimiter,
  MobileLogo,
  CTAContainer,
  DesktopLogo,
} from "./styles";
import caret from "../../../images/computer-mouse-scrollwheel.svg";
import video from "../../../images/car3.mp4";
import Logo from "../../../images/logo-w.svg";
import NavLogo from "../../../images/redstone-header-logo.svg";
import Top from "../../../images/top.svg";
import bg from "../../../images/sq-topo-g.svg";
import MobileLogoWhite from "../../../images/red-drop.svg";
import fallback from "../../../images/fallback.png";
const HomeHero = ({ section: { elements } }) => {
  const videoRef = React.useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.9;
  };

  // const appHeight = () => {
  //   const doc = document.documentElement;
  //   doc.style.setProperty(" — app-height", `${window.innerHeight}px`);
  // };
  // window.addEventListener("resize", appHeight);
  // appHeight();

  return (
    <Container>
      <Topo src={bg} />
      <video
        poster={fallback}
        ref={videoRef}
        onCanPlay={() => setPlayBack()}
        height="100%"
        controls={false}
        autoPlay={true}
        playsInline={true}
        muted={true}
        loop={true}
      >
        <source src={video} type="video/mp4" autoPlay={true} />
      </video>
      <Overlay background={Top}>
        <div></div>
      </Overlay>
      <Right>
        <LogoOverlay className="slide-in-left">
          <img src={Logo} />
        </LogoOverlay>
        <Content>
          <MobileLogo src={MobileLogoWhite} />
          <DesktopLogo src={NavLogo} alt="Redstone Advisors Inc." />

          <Intro className="text-focus-in">{elements.intro.value}</Intro>
          <SubIntro className="text-focus-in-1">
            {elements.sub_intro.value}
          </SubIntro>

          <CTAContainer>
            <div className="inner">
              <Tagline className="text-focus-in-5">
                {elements.tagline.value}
              </Tagline>

              <img
                src={caret}
                height="30px"
                width={"auto"}
                className="mouse-icon"
              />
            </div>
            <CTA href="#see-more" className="text-focus-in-6">
              <p>Learn More</p>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z" />
                </svg>
              </span>
            </CTA>
          </CTAContainer>
        </Content>
      </Right>
    </Container>
  );
};

export default HomeHero;

export const HomeHeroFragment = graphql`
  fragment HomeHeroFragment on kontent_item_section___home_hero {
    id
    system {
      id
      type
      codename
    }
    elements {
      intro {
        value
      }
      sub_intro {
        value
      }
      tagline {
        value
      }
      graphic {
        value {
          height
          description
          width
          url
        }
      }
    }
  }
`;
