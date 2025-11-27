import React from "react";
import { Container, Title, Description, Wrapper } from "./styles";
import { Tabs } from "antd";
import { graphql } from "gatsby";
import { RichTextElement } from "@kentico/gatsby-kontent-components";
const { TabPane } = Tabs;
const TabNav = ({ section }) => {
  console.log(section);
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
      <Title>{section.elements.title.value}</Title>
      <Description>{section.elements.description.value}</Description>
      <Container>
        <Tabs defaultActiveKey="0" onChange={onChange} tabPosition={"left"}>
          {section.elements.tab?.value.map((item, index) => {
            return (
              <TabPane tab={item.elements.tab_title.value} key={index}>
                <Wrapper>
                  <RichTextElement
                    value={item.elements.tab_content_intro.value}
                  />
                </Wrapper>
                <RichTextElement value={item.elements.tab_content.value} />
              </TabPane>
            );
          })}
        </Tabs>
      </Container>
    </>
  );
};

export default TabNav;
export const TabsFragment = graphql`
  fragment TabsFragment on kontent_item_tabs {
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
      description {
        value
      }
      tab {
        value {
          ... on kontent_item_tab {
            id
            elements {
              tab_title {
                value
              }
              tab_content_intro {
                value
              }
              tab_content {
                value
              }
            }
          }
        }
      }
    }
  }
`;
