import React from "react";
import { graphql } from "gatsby";
import {
  Container,
  Left,
  Right,
  Title,
  Description,
  Quote,
  Quote2,
} from "./styles";
import { RichTextElement } from "@kentico/gatsby-kontent-components";

const WhyHero = ({ section }) => {
  return (
    <Container>
      <Left>
        <Title>{section.elements.title.value}</Title>
        <Description>
          <RichTextElement
            value={section.elements.description_rt.value}
          ></RichTextElement>
        </Description>
      </Left>
      <Right>
        <video muted={true} autoPlay={true} loop={true} playsInline={true}>
          <source src={section.elements.hero.value[0].url} type="video/mp4" />
        </video>
        <Quote2 order={1}>
          {section.elements.quote.value}
          <span>-{section.elements.author.value}-</span>
        </Quote2>
        <Quote2 order={2}>
          {section.elements.quote.value}
          <span>-{section.elements.author.value}-</span>
        </Quote2>
        <Quote2 order={3}>
          {section.elements.quote.value}
          <span>-{section.elements.author.value}-</span>
        </Quote2>
      </Right>
    </Container>
  );
};

export default WhyHero;
export const WhyHeroFragment = graphql`
  fragment WhyHeroFragment on kontent_item_why_us_hero {
    id
    system {
      id
      type
      codename
    }
    elements {
      accent_color {
        value
      }
      description {
        value
      }
      description_rt {
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
      quote {
        value
      }
      author {
        value
      }
      title {
        value
      }
    }
  }
`;
