import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { RichTextElement } from "@kentico/gatsby-kontent-components";
import { Container, Top, Middle, Bottom, MidLeft, MidRight } from "./styles";
import Logo from "../../images/redstone-footer-logo.svg";
import location from "../../images/location.svg";
import phone from "../../images/phone-alt.svg";
import email from "../../images/email.svg";
import fax from "../../images/fax.svg";
const Footer = () => {
  const footerData = useStaticQuery(graphql`
    query FooterQuery {
      kontentItemFooter {
        elements {
          about {
            value
          }
          address {
            value
          }
          disclosure {
            value
          }
          fax {
            value
          }
          phone {
            value
          }
          email {
            value
          }
          legal_links {
            value {
              ... on kontent_item_legal_link {
                id
                elements {
                  label {
                    value
                  }
                  pdf {
                    value {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Container>
      <Top>
        <img src={Logo} alt="Redstone Advisors Inc." />
      </Top>
      <Middle>
        <MidLeft>
          <div>
            <h2>Navigation</h2>
            <ul>
              <li>
                <Link to="/who-we-are">Who We Are</Link>
              </li>
              <li>
                <Link to="/what-we-do">What We Do</Link>
              </li>
              <li>
                <Link to="/why-us">Why Us</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Resources</h2>
            <ul>
              <li>
                <a
                  href="/pdfs/Privacy Policy April 2025.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="resources"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/pdfs/ADV Part II March 2025.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="resources"
                >
                  ADV IIA
                </a>
              </li>
              <li>
                <a
                  href="/pdfs/ADV Part IIB March 2025.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="resources"
                >
                  ADV IIB
                </a>
              </li>
              <li>
                <a
                  href="/pdfs/Form CRS March 2025.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="resources"
                >
                  CRS
                </a>
              </li>
            </ul>
          </div>
        </MidLeft>
        <MidRight>
          <h2>Contact</h2>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
            >
              <path
                id="location-circle"
                d="M15.512,15.006,6.341,19.24a1.857,1.857,0,0,0-1.054,2.119A1.832,1.832,0,0,0,7.1,22.823h3.073v3.072a1.83,1.83,0,0,0,1.463,1.818,2,2,0,0,0,.425.047,1.856,1.856,0,0,0,1.695-1.1l4.233-9.168.013-.028a1.906,1.906,0,0,0-2.495-2.453ZM12.3,25.977a.247.247,0,0,1-.308.16.229.229,0,0,1-.2-.242V21.21H7.105a.229.229,0,0,1-.242-.2A.25.25,0,0,1,7.02,20.7l9.139-4.22a.189.189,0,0,1,.076-.015.309.309,0,0,1,.2.1.272.272,0,0,1,.085.265ZM12.5,8A12.5,12.5,0,1,0,25,20.5,12.5,12.5,0,0,0,12.5,8Zm0,23.387A10.887,10.887,0,1,1,23.387,20.5,10.9,10.9,0,0,1,12.5,31.387Z"
                transform="translate(0 -8)"
                fill="#f4f6ff"
              />
            </svg>
            <a href="https://www.google.com/maps/place/Redstone+Advisors+Inc/@37.7271708,-97.2428227,15z/data=!4m6!3m5!1s0x87bafd16310a4a7d:0xed9d4c38b13390e!8m2!3d37.7271708!4d-97.2428227!16s%2Fg%2F1tg79kff?entry=ttu">
              {footerData.kontentItemFooter.elements.address.value}
            </a>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="18.75"
              viewBox="0 0 25 18.75"
            >
              <path
                id="envelope"
                d="M22.656,64H2.344A2.344,2.344,0,0,0,0,66.344V80.406A2.344,2.344,0,0,0,2.344,82.75H22.656A2.344,2.344,0,0,0,25,80.406V66.344A2.344,2.344,0,0,0,22.656,64ZM2.344,65.563H22.656a.784.784,0,0,1,.781.781v2.021c-1.069.9-2.6,2.148-7.354,5.923-.825.654-2.451,2.231-3.584,2.212-1.133.02-2.764-1.558-3.584-2.212-4.756-3.774-6.284-5.02-7.354-5.923V66.344A.784.784,0,0,1,2.344,65.563ZM22.656,81.188H2.344a.784.784,0,0,1-.781-.781V70.4c1.113.913,2.871,2.324,6.382,5.112,1,.8,2.769,2.563,4.556,2.554,1.777.015,3.53-1.733,4.556-2.554,3.511-2.788,5.269-4.2,6.382-5.112v10.01A.784.784,0,0,1,22.656,81.188Z"
                transform="translate(0 -64)"
                fill="#f4f6ff"
              />
            </svg>
            <a
              href={`mailto: ${footerData.kontentItemFooter.elements.email.value}`}
            >
              {footerData.kontentItemFooter.elements.email.value}
            </a>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
            >
              <path
                id="phone-alt"
                d="M24.077,17.158l-5.293-2.271A1.531,1.531,0,0,0,17,15.322l-2.153,2.632a17.09,17.09,0,0,1-7.793-7.793L9.687,8.008a1.531,1.531,0,0,0,.435-1.782L7.851.928A1.53,1.53,0,0,0,6.1.044L1.181,1.182A1.516,1.516,0,0,0,0,2.666,22.334,22.334,0,0,0,22.338,25.005a1.525,1.525,0,0,0,1.49-1.187L24.961,18.9a1.524,1.524,0,0,0-.884-1.743Zm-1.768,6.284A20.765,20.765,0,0,1,1.567,2.7L6.431,1.577,8.677,6.821,5.122,9.727A18.868,18.868,0,0,0,15.283,19.888l2.905-3.555,5.244,2.246Z"
                transform="translate(0 -0.005)"
                fill="#f4f6ff"
              />
            </svg>
            <a href={`Tel: 3166872143`}>
              {footerData.kontentItemFooter.elements.phone.value}
            </a>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
            >
              <path
                id="fax"
                d="M19.141,14.844h.781a.391.391,0,0,0,.391-.391v-.781a.391.391,0,0,0-.391-.391h-.781a.391.391,0,0,0-.391.391v.781A.391.391,0,0,0,19.141,14.844Zm0,6.25h.781a.391.391,0,0,0,.391-.391v-.781a.391.391,0,0,0-.391-.391h-.781a.391.391,0,0,0-.391.391V20.7A.391.391,0,0,0,19.141,21.094ZM3.906,6.25H2.344A2.344,2.344,0,0,0,0,8.594V22.656A2.344,2.344,0,0,0,2.344,25H3.906A2.344,2.344,0,0,0,6.25,22.656V8.594A2.344,2.344,0,0,0,3.906,6.25Zm.781,16.406a.781.781,0,0,1-.781.781H2.344a.781.781,0,0,1-.781-.781V8.594a.781.781,0,0,1,.781-.781H3.906a.781.781,0,0,1,.781.781Zm14.453-4.687h.781a.391.391,0,0,0,.391-.391V16.8a.391.391,0,0,0-.391-.391h-.781a.391.391,0,0,0-.391.391v.781A.391.391,0,0,0,19.141,17.969Zm-6.25,3.125h.781a.391.391,0,0,0,.391-.391v-.781a.391.391,0,0,0-.391-.391h-.781a.391.391,0,0,0-.391.391V20.7A.391.391,0,0,0,12.891,21.094Zm0-3.125h.781a.391.391,0,0,0,.391-.391V16.8a.391.391,0,0,0-.391-.391h-.781a.391.391,0,0,0-.391.391v.781A.391.391,0,0,0,12.891,17.969ZM23.438,7.956V5.334a1.562,1.562,0,0,0-.458-1.1L19.208.458A1.563,1.563,0,0,0,18.1,0H10.156A2.344,2.344,0,0,0,7.813,2.344V22.656A2.344,2.344,0,0,0,10.156,25h12.5A2.344,2.344,0,0,0,25,22.656v-12.5a2.337,2.337,0,0,0-1.563-2.2ZM18.75,2.209l2.478,2.478H18.75Zm-9.375.134a.781.781,0,0,1,.781-.781h7.031V4.687A1.562,1.562,0,0,0,18.75,6.25h3.125V9.375H9.375ZM23.438,22.656a.781.781,0,0,1-.781.781h-12.5a.781.781,0,0,1-.781-.781V10.937H23.438Zm-7.422-1.562H16.8a.391.391,0,0,0,.391-.391v-.781a.391.391,0,0,0-.391-.391h-.781a.391.391,0,0,0-.391.391V20.7A.391.391,0,0,0,16.016,21.094Zm0-3.125H16.8a.391.391,0,0,0,.391-.391V16.8a.391.391,0,0,0-.391-.391h-.781a.391.391,0,0,0-.391.391v.781A.391.391,0,0,0,16.016,17.969Zm0-3.125H16.8a.391.391,0,0,0,.391-.391v-.781a.391.391,0,0,0-.391-.391h-.781a.391.391,0,0,0-.391.391v.781A.391.391,0,0,0,16.016,14.844Zm-3.125,0h.781a.391.391,0,0,0,.391-.391v-.781a.391.391,0,0,0-.391-.391h-.781a.391.391,0,0,0-.391.391v.781A.391.391,0,0,0,12.891,14.844Z"
                fill="#fff"
              />
            </svg>
            <a href={`Tel: 3166872146`}>
              {footerData.kontentItemFooter.elements.fax.value}
            </a>
          </div>
        </MidRight>
      </Middle>
      <Bottom>
        <h2>Disclosure</h2>
        <RichTextElement
          value={footerData.kontentItemFooter.elements.disclosure.value}
        />

        <span>© {new Date().getFullYear()} Redstone Advisors, Inc. All Rights Reserved.</span>
      </Bottom>
    </Container>
  );
};

export default Footer;
