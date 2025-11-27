import React from "react";
import { graphql } from "gatsby";
import { Container, Left, Right } from "./styles";
import { RichTextElement } from "@kentico/gatsby-kontent-components";
const GrayBanner = ({ section: { elements } }) => {
  return (
    <Container>
      <Left>
        <h3>{elements.title.value}</h3>
        <RichTextElement value={elements.description.value}></RichTextElement>
      </Left>
      <Right>
        <h3>{elements.second_title.value}</h3>
        <RichTextElement
          value={elements.second_description.value}
        ></RichTextElement>
      </Right>
    </Container>
  );
};

export default GrayBanner;

export const GrayBannerFragment = graphql`
  fragment GrayBannerFragment on kontent_item_gray_banner {
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
      second_title {
        value
      }
      description {
        value
      }
      second_description {
        value
      }
    }
  }
`;
