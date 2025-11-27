import React from "react";
import { graphql } from "gatsby";
import {
  Container,
  Left,
  Right,
  Hero,
  HeroImage,
  HeroTexture,
  Title,
  Description,
  Quote,
} from "./styles";
import { RichTextElement } from "@kentico/gatsby-kontent-components";

const WhoHero = ({ section }) => {
  console.log(section);
  return (
    <Container>
      <Left>
        <Title>{section.elements.title.value}</Title>
        <Description>
          <p>You created the wealth.</p>
          <p>We can help you keep it.</p>
          <p>Why not consider the road less traveled?</p>
          <p>
            We invite you to begin a conversation with us and explore the
            possibilities.
          </p>
        </Description>
      </Left>
      <Right>
        <Hero>
          <HeroImage src={section.elements.image.value[0].url} />
          <HeroTexture src={section.elements.texture.value[0].url} />
        </Hero>
      </Right>
    </Container>
  );
};

export default WhoHero;
export const ContactHeroFragment = graphql`
  fragment ContactHeroFragment on kontent_item_contact_hero {
    system {
      id
      type
      codename
    }
    elements {
      description {
        value
      }
      description_2 {
        value
      }
      description_3 {
        value
      }
      image {
        value {
          width
          url
          height
          description
        }
      }
      title {
        value
      }
      texture {
        value {
          url
          description
          height
          width
        }
      }
    }
  }
`;
