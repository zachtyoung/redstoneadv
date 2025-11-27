import React, { useRef, useCallback, useEffect } from "react";
import { graphql } from "gatsby";
import { RichTextElement } from "@kentico/gatsby-kontent-components";
import "../../../styles/global.css";
import arrow from "../../../images/fa/arrow-right.svg";
import {
  Container,
  Left,
  Right,
  Title,
  Description,
  Cta,
  Tagline,
  StaticImage,
  ImageContainer,
  FloatingQuote,
  Quote,
} from "./styles";
import quote from "../../../images/quote-icon.svg";
import { useLocation } from "@reach/router";
import { useInView } from "react-intersection-observer";
const ImageAndText = ({ section: { elements }, orientation, index }) => {
  const leftRef = useRef();
  const rightRef = useRef();

  const [inViewRef, inView] = useInView({ threshold: 0.9, rootMargin: "0px" });
  const location = useLocation();

  console.log(location.pathname);

  const setRefs = useCallback(
    (node) => {
      rightRef.current = node;
      inViewRef(node);
    },
    [inViewRef]
  );
  useEffect(() => {
    if (inView && location.pathname == "/") {
      if (elements.layout.value[0].codename === "left") {
        leftRef.current.style.opacity = "1";
        leftRef.current.classList.add("slide-in-bottom");
        rightRef.current.style.opacity = "1";
        rightRef.current.classList.add("slide-in-bottom");
      } else if (elements.layout.value[0].codename === "right") {
        leftRef.current.style.opacity = "1";
        leftRef.current.classList.add("slide-in-bottom");
        rightRef.current.style.opacity = "1";
        rightRef.current.classList.add("slide-in-bottom");
      } else if (elements.layout.value[0].codename === "stacked")
        if (index === 0) {
          leftRef.current.style.opacity = "1";
          leftRef.current.classList.add("slide-in-bottom");
          rightRef.current.style.opacity = "1";
          rightRef.current.classList.add("slide-in-bottom");
        } else if (index === 1) {
          leftRef.current.style.opacity = "1";
          leftRef.current.classList.add("slide-in-bottom");
          rightRef.current.style.opacity = "1";
          rightRef.current.classList.add("slide-in-bottom");
        } else {
          leftRef.current.style.opacity = "1";
          leftRef.current.classList.add("slide-in-bottom");
          rightRef.current.style.opacity = "1";
          rightRef.current.classList.add("slide-in-bottom");
        }
    } else if (window.location.pathname != "/") {
      leftRef.current.style.opacity = "1";
      rightRef.current.style.opacity = "1";
    }
  }, [inView]);

  const [bWidth, setBWidth] = React.useState(
    typeof window === "undefined" ? 0 : window.innerWidth
  );
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => setBWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    console.log(bWidth);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <Container
      location={location.pathname}
      id={location.pathname === "/" ? "see-more" : null}
    >
      <Left layout={elements.layout.value[0].codename} ref={leftRef}>
        {orientation == "two-column" ||
        elements.image_dimensions?.value[0]?.codename === "normal" ||
        elements.layout.value[0].codename === "stacked" ||
        (location.pathname === "/" && bWidth < 800) ? (
          <Title orientation={orientation}>{elements.title.value}</Title>
        ) : null}
        {elements.image.value[0]?.type === "video/mp4" ? (
          <video
            muted={false}
            autoPlay={false}
            controls
            poster={elements.poster_image.value[0]?.url}
          >
            <source src={elements.image.value[0]?.url} type="video/mp4" />
          </video>
        ) : (
          <>
            <ImageContainer>
              <StaticImage
                src={elements.image.value[0]?.url}
                dimensions={elements.image_dimensions?.value[0]?.codename}
                location={location.pathname}
              />
              {location.pathname == "/what-we-do" && (
                <FloatingQuote>
                  <img src={quote} alt="" />
                  <Quote>
                    <p>Where you stand depends on where you sit</p>
                    <span>"Miles Law" by Rufus Miles</span>
                  </Quote>
                </FloatingQuote>
              )}
            </ImageContainer>
            <Tagline>{elements.tagline.value}</Tagline>
          </>
        )}
      </Left>
      <Right
        ref={setRefs}
        layout={elements.layout.value[0].codename}
        location={location.pathname}
      >
        {(orientation == "two-column" &&
          elements.image_dimensions?.value[0]?.codename === "normal") ||
        (location.pathname === "/" && bWidth > 800) ? (
          <Title orientation={orientation} location={location.pathname}>
            {elements.title.value}
          </Title>
        ) : null}
        <Description
          orientation={orientation}
          location={location.pathname}
          background={arrow}
        >
          <RichTextElement value={elements.description.value}></RichTextElement>
        </Description>

        {elements.cta.value[0] && (
          <Cta
            to={
              "/" +
              elements.cta.value[0].elements.page_link.value[0].elements.slug
                .value
            }
          >
            <p>{elements.cta.value[0].elements.button_text.value}</p>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z" />
              </svg>
            </span>
          </Cta>
        )}
      </Right>
    </Container>
  );
};

export default ImageAndText;

export const ImageAndTextFragment = graphql`
  fragment ImageAndTextFragment on kontent_item_section___image_and_text {
    id
    system {
      id
      type
      codename
    }
    elements {
      title {
        value
      }
      layout {
        value {
          codename
        }
      }
      animation {
        value {
          codename
        }
      }
      image {
        value {
          width
          url
          height
          description
          type
        }
      }
      poster_image {
        value {
          description
          height
          url
          width
        }
      }
      image_dimensions {
        value {
          codename
        }
      }
      description {
        value
      }
      tagline {
        value
      }
      cta {
        value {
          ... on kontent_item_call_to_action_item {
            id
            elements {
              button_text {
                value
              }
              external_link {
                value
              }
              page_link {
                value {
                  ... on kontent_item_page {
                    id
                    elements {
                      slug {
                        value
                      }
                    }
                  }
                  ... on kontent_item_homepage {
                    id
                    elements {
                      slug {
                        value
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
