import React from "react";
import { graphql } from "gatsby";
import { Container } from "./styles";
const WhyBanner = ({ section }) => {
  return (
    <Container>
      <h2>{section.elements.copy.value}</h2>
      <img src={section.elements.watermark.value[0].url} />
    </Container>
  );
};

export default WhyBanner;

export const WhyBannerFragment = graphql`
  fragment WhyBannerFragment on kontent_item_why_us_banner {
    id
    system {
      id
      type
      codename
    }
    elements {
      copy {
        value
      }
      watermark {
        value {
          name
          height
          description
          url
          width
        }
      }
    }
  }
`;
