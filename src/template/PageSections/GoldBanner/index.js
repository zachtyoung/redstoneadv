import React from "react";
import { graphql, Link } from "gatsby";
import boat from "../../../images/boat.svg";
import {
  Wrapper,
  Container,
  Left,
  Center,
  Right,
  PageLink,
  Delimiter,
  Border,
  Background,
} from "./styles";
const GoldBanner = ({ section: { elements } }) => {
  return (
    <Wrapper>
      <Container>
        <Background src={boat} />
        <Left>
          <img src={elements.logo.value[0].url} />
        </Left>
        <Center>
          <p>{elements.description.value}</p>

          <p>
            <Delimiter />
            {elements.description_2.value}
          </p>

          <p>
            <Delimiter />
            {elements.description_3.value}
          </p>
        </Center>
        <Right></Right>
      </Container>
      <Link to="/contact-us">
        <Border>
          <span>{elements.cta_text.value}</span>
        </Border>
      </Link>
    </Wrapper>
  );
};

export default GoldBanner;

export const GoldBannerFragment = graphql`
  fragment GoldBannerFragment on kontent_item_gold_banner {
    id
    system {
      id
      type
      codename
    }
    elements {
      cta_text {
        value
      }
      logo {
        value {
          width
          url
          height
          description
        }
      }
      description {
        value
      }
      description_2 {
        value
      }
      description_3 {
        value
      }
    }
  }
`;
