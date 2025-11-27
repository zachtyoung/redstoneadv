import React from 'react'
import { graphql } from "gatsby";
import ImageAndText from '../ImageAndText';
import {Container} from './styles'
const TwoColumnSection = ({section}) => {
    console.log("y", section)
  return(
    <Container>
        {  section.elements.content.value.map((el, index) =>{
    return (
        <ImageAndText section={el} index={index} orientation="two-column"/>
     )
  })}
    </Container>

  )
  

}

export default TwoColumnSection
export const TwoColumnSectionFragment = graphql`
  fragment TwoColumnSectionFragment on kontent_item_two_column_section {
    id
    system {
      id
      type
      codename
    }
    elements {
        content {
          value {
            ... on kontent_item_section___image_and_text {
              id
              elements {
                title {
                  value
                }
                layout {
                  value {
                    codename
                  }
                }
                image {
                  value {
                    width
                    url
                    height
                    description
                    type
                  }
                }
                poster_image {
                  value {
                    description
                    height
                    url
                    width
                  }
                }
                image_dimensions {
                  value {
                    codename
                  }
                }
                description {
                  value
                }
                tagline {
                  value
                }
                cta {
                  value {
                    ... on kontent_item_call_to_action_item {
                      id
                      elements {
                        button_text {
                          value
                        }
                        external_link {
                          value
                        }
                        page_link {
                          value {
                            ... on kontent_item_page {
                              id
                              elements {
                                slug {
                                  value
                                }
                              }
                            }
                            ... on kontent_item_homepage {
                              id
                              elements {
                                slug {
                                  value
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
            }
        }
          }
        }
      }
  
  }
`;
