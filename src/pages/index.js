import * as React from "react";
import { graphql } from "gatsby";
import Master from "../template/Master";
import PageSections from "../template/PageSections";
const HomePage = ({ data: { kontentItemHomepage }, location }) => {
  return (
    <Master
      location={location}
      headerData={{ data: "replacewithrealdata" }}
      footerData={{ data: "replacewithrealdata" }}
    >
      {kontentItemHomepage.elements.sections.value.map((section, key) => {
        return <PageSections key={key} section={section} location={location}/>;
      })}
    </Master>
  );
};

export default HomePage;

export const EnglishHomeQuery = graphql`
  query EnglishHomeQuery {
    kontentItemHomepage {
      elements {
        meta_description {
          value
        }
        title {
          value
        }
        slug {
          value
        }
        sections {
          value {
            ...PageSectionFragment
          }
        }
      }
      system {
        id
        type
        language
      }
    }
  }
`;
