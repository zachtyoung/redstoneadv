import React from "react";
import { graphql } from "gatsby";
import { Container, AccentSqaures } from "./styles";
const SingleColumnBanner = ({ section }) => {
  return (
    <Container>
      <AccentSqaures>
        <div></div>
        <div></div>
        <div></div>
      </AccentSqaures>
      {section.elements.body.value}
    </Container>
  );
};

export default SingleColumnBanner;
export const SingleColumnBannerFragment = graphql`
  fragment SingleColumnBannerFragment on kontent_item_single_column_banner {
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
