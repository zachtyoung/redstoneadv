import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import KontentSmartLink from "@kentico/kontent-smart-link";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import styled from "styled-components";
import ThemeWrapper from "./ThemeWrapper";
import Header from "./Header";
import Footer from "./Footer";
import LogRocket from "logrocket";
const ContentWrapper = styled(motion.div)``;
const Master = ({ headerData, footerData, children, location }) => {
  React.useEffect(() => {
    const kontentSmartLink = KontentSmartLink.initialize({
      queryParam: "preview-mode",
    });
    return () => {
      kontentSmartLink.destroy();
    };
  });
  const data = useStaticQuery(graphql`
    query {
      sitePlugin(name: { eq: "@kentico/gatsby-source-kontent" }) {
        pluginOptions
      }
    }
  `);
  const [menuIsOpen, setMenuisOpen] = React.useState(false);
  React.useEffect(() => {
    if (menuIsOpen === true) {
      document.body.style.overflow = "hidden";
    }
    return () => (document.body.style.overflow = "unset");
  }, [menuIsOpen]);
  return (
    <div className="master-root">
      <Helmet
        bodyAttributes={{
          "data-kontent-project-id": data.sitePlugin.pluginOptions.projectId,
          "data-kontent-language-codename":
            data.sitePlugin.pluginOptions.languageCodenames[0],
        }}
      >
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
        <script type="application/ld+json">
          {`
						{
							"@context": "https://schema.org",
							"@type": "Organization",
							"url": "https://www.redstoneadv.com",
							"name": "Redstone Advisors",
							"description": "Redstone Advisors",
						}
					`}
        </script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="theme-color" content="#c7ae86" />
      </Helmet>
      <ThemeWrapper>
        <Header data={headerData} />
        <ContentWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.55,
          }}
        >
          {children}
        </ContentWrapper>
        <Footer data={footerData} location={location} />
      </ThemeWrapper>
    </div>
  );
};

export default Master;
