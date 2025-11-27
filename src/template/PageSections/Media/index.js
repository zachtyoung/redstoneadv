import React from "react";
import { graphql } from "gatsby";
import { Container } from "./styles";
const Media = ({ section }) => {
  return (
    <Container>
      <img src={section.elements.media?.value[0]?.url} />
    </Container>
  );
};

export default Media;

export const MediaFragment = graphql`
  fragment MediaFragment on kontent_item_section___media {
    id
    system {
      id
      type
      codename
    }
    elements {
      media {
        value {
          height
          width
          url
          description
        }
      }
    }
  }
`;
