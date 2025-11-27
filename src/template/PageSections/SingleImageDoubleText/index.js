import React from "react";
import { graphql } from "gatsby";
import { RichTextElement } from "@kentico/gatsby-kontent-components";
import { Container, Left, Right, Title, Description } from "./styles";

const SingleImageDoubleText = ({ section }) => {
  const position = section.elements.layout.value[0]?.codename;
  return (
    <Container>
      <Left layout={position}>
        <img src={section.elements.hero.value[0]?.url} />
      </Left>
      <Right layout={position}>
        <div>
          <Title layout={position} order={1}>
            {section.elements.title.value}
          </Title>
          <Description layout={position} order={1}>
            {section.elements.description.value}
          </Description>
        </div>
        <div>
          <Title layout={position} order={2}>
            {section.elements.second_title.value}
          </Title>
          <Description layout={position} order={2}>
            <RichTextElement
              value={section.elements.second_description_rt.value}
            />
          </Description>
        </div>
      </Right>
    </Container>
  );
};

export default SingleImageDoubleText;

export const SingleImageDoubleTextFragment = graphql`
  fragment SingleImageDoubleTextFragment on kontent_item_single_image_double_text {
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
      second_description_rt {
        value
      }
      hero {
        value {
          description
          height
          url
          width
        }
      }
      layout {
        value {
          codename
        }
      }
      accent {
        value {
          description
          height
          url
          width
        }
      }
    }
  }
`;
