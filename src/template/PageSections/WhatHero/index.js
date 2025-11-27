import React from "react";
import { graphql } from "gatsby";
import {
  Container,
  Left,
  Right,
  Accent,
  Title,
  Description,
  Quote,
  Layer
} from "./styles";

const WhatHero = ({ section }) => {
  return (
    <Container>
          <video muted={true}       playsInline={true} autoPlay={true} loop={true} poster={section.elements.poster?.value[0]?.url}>
            <source src={section.elements.multimedia?.value[0]?.url} type="video/mp4" />
          </video>
          <Layer>
      <Title>{section.elements.title.value}</Title>
      <Quote>{section.elements.quote.value}</Quote>
      <Description>{section.elements.author.value}</Description>
      </Layer>

    </Container>
  );
};

export default WhatHero;
export const WhatHeroFragment = graphql`
  fragment WhatHeroFragment on kontent_item_what_we_do_hero {
    id
    system {
      id
      type
      codename
    }
    elements {
      author {
        value
      }
      poster {
        value {
          description
          height
          url
          width
        }
      }
      multimedia {
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
      title {
        value
      }
    }
  }
`;
