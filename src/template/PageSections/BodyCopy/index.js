import React from "react";
import { graphql } from "gatsby";
import { RichTextElement } from "@kentico/gatsby-kontent-components";
import { Container } from "./styles";
const BodyCopy = ({ section }) => {
  return (
    <Container>
      <RichTextElement value={section.elements.body.value}></RichTextElement>
    </Container>
  );
};

export default BodyCopy;

export const BodyCopyFragment = graphql`
  fragment BodyCopyFragment on kontent_item_section___body_copy {
    id
    system {
      id
      type
      codename
    }
    elements {
      body {
        value
      }
    }
  }
`;
