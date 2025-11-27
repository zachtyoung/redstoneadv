import React, { useState, useEffect } from "react";
import { Navbar, Contact, NavLink, NavList, Active, Debug } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import home from "../../images/house.svg";
import briefcase from "../../images/briefcase.svg";
import envelope from "../../images/phone-office.svg";
import building from "../../images/comments-question-check.svg";
import woman from "../../images/address-book.svg";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../images/redstone-header-logo.svg";
import LogoWhite from "../../images/red-long-white2.svg";
import { Drawer } from "antd";
import { Link } from "gatsby";
import redstone from "../../images/solo-red-dark.svg";
import GoogleMapReact from "google-map-react";
import { useLocation } from "@reach/router";
const Header = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  // function getWindowDimensions() {
  //   const { innerWidth: width, innerHeight: height } = window;
  //   return {
  //     width,
  //     height,
  //   };
  // }

  // function useWindowDimensions() {
  //   const [windowDimensions, setWindowDimensions] = React.useState(
  //     getWindowDimensions()
  //   );

  //   React.useEffect(() => {
  //     function handleResize() {
  //       setWindowDimensions(getWindowDimensions());
  //     }

  //     window.addEventListener("resize", handleResize);
  //     return () => window.removeEventListener("resize", handleResize);
  //   }, []);

  //   return windowDimensions;
  // }
  // const { height, width } = useWindowDimensions();
  const currentYear = new Date().getFullYear();
  const stupidFn = (component) => {
    if (location.pathname == "/") {
      if (headerColor == "white") {
        return component;
      } else {
        return "";
      }
    }
    if (
      location.pathname === "/why-us" ||
      location.pathname === "/what-we-do"
    ) {
      if (headerColor === "white") {
        return component;
      } else {
        return (
          <Link to="/">
            <img src={LogoWhite} alt="Redstone Advisors Inc." />
          </Link>
        );
      }
    } else {
      if (location.pathname === "/") {
        if (headerColor === "white") {
          return component;
        } else {
          return (
            <Link to="/">
              <img src={LogoWhite} alt="Redstone Advisors Inc." />
            </Link>
          );
        }
      }
      if (headerColor === "white") {
        return component;
      }
      if (location.pathname != "/") {
        return component;
      }
    }
  };
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const [headerColor, setHeaderColor] = useState("none");

  const listenScrollEvent = () => {
    window.scrollY > 3 ? setHeaderColor("white") : setHeaderColor("none");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  const defaultProps = {
    center: {
      lat: 37.72718000540327,
      lng: -97.24282509711466,
    },
    zoom: 20,
  };
  return (
    <>
      {/* {!process.env.NODE_ENV ||
        (process.env.NODE_ENV === "production" && (
          <Debug>{width + "px" + height + "px"}</Debug>
        ))} */}
      <Drawer
        placement="left"
        onClose={onClose}
        visible={visible}
        style={{ zIndex: "999999999" }}
      >
        <img
          src={redstone}
          style={{ width: "200px", margin: "0 auto", display: "block" }}
        />
        <span
          style={{
            display: "block",
            width: "max-content",
            margin: "0 auto",
            paddingTop: "10px",
            fontFamily: ' "PT Serif", serif',
            fontWeight: "50",
            color: "#4d4e56",
          }}
        >
          EST. 1991
        </span>
        <NavList>
          <NavLink to="/">
            <li>
              <img src={home} className="nav-icon" />
              <span>Home</span>
            </li>
            {location.pathname === "/" && <Active />}
          </NavLink>
          <NavLink to="/who-we-are">
            <li>
              <img src={woman} className="nav-icon" />
              <span>Who We Are</span>
            </li>
            {location.pathname === "/who-we-are" && <Active />}
          </NavLink>
          <NavLink to="/what-we-do">
            <li>
              <img src={briefcase} className="nav-icon" />
              <span>What We Do</span>
            </li>
            {location.pathname === "/what-we-do" && <Active />}
          </NavLink>
          <NavLink to="/why-us">
            <li>
              <img src={building} className="nav-icon" />
              <span>Why Us</span>
            </li>
            {location.pathname === "/why-us" && <Active />}
          </NavLink>
          <NavLink to="/contact-us">
            <li>
              <img src={envelope} className="nav-icon" />
              <span>Contact Us</span>
            </li>
            {location.pathname === "/contact-us" && <Active />}
          </NavLink>
          {/* <div style={{ height: '300px', width: '100%', gridColumn:'1/3'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div> */}
        </NavList>
        <span
          style={{
            display: "block",
            position: "absolute",
            bottom: "10px",
            fontSize: "12px",
            color: "rgb(77, 78, 86)",
            left: "50%",
            transform: "translateX(-50%)",
            opacity: ".6",
            width: "max-content",
          }}
        >
          © {currentYear} Redstone Advisors, Inc. All Rights Reserved.
        </span>
      </Drawer>
      <Navbar background={headerColor}>
        <ul>
          <li>
            <FontAwesomeIcon
              icon={faBars}
              style={
                headerColor === "white" ||
                (location.pathname != "/" &&
                  location.pathname != "/what-we-do" &&
                  location.pathname != "/why-us")
                  ? { color: "#C7AE86", cursor: "pointer", fontSize: "1.2rem" }
                  : { color: "#fff", cursor: "pointer", fontSize: "1.2rem" }
              }
              onClick={showDrawer}
            />
          </li>
          <li>
            {stupidFn(
              <Link to="/">
                <img src={Logo} alt="Redstone Advisors Inc." />
              </Link>
            )}
          </li>
          <li>
            <Contact
              location={location.pathname}
              headerColor={headerColor}
              to="/contact-us"
            >
              Contact Us
            </Contact>
          </li>
        </ul>
      </Navbar>
    </>
  );
};

export default Header;
