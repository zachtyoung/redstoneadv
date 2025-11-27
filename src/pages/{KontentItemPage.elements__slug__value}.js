import * as React from "react";
import { graphql } from "gatsby";
import Master from "../template/Master";
import PageSections from "../template/PageSections";

const Page = ({ data: { kontentItemPage }, location }) => {
  return (
    <Master
      location={location}
      headerData={kontentItemPage}
      footerData={{ data: "replacewithrealdata" }}
    >
      {kontentItemPage.elements.sections.value.map((section, key) => {
        return <PageSections key={key} section={section} />;
      })}
    </Master>
  );
};

export default Page;

export const query = graphql`
  query ($id: String) {
    kontentItemPage(id: { eq: $id }) {
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
