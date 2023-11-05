import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { React } from "react";
import MediaQuery from "react-responsive";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CTA } from "../buttons/button";
import colors from "../styles/colors";
import { Flex } from "../styles/flex";
import spacing from "../styles/spacing";
import "../styles/style.css";
import { H4 } from "../styles/typography";
import Burger from "./burger";
import shadows from "../styles/shadows";

function NavBar() {
  const Logo = styled.div`
    padding: 24px;
  `;
  const UL = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.blue400};

    li {
      list-style-type: none;
      padding: 24px;
    }
  `;
  return (
    <div
      className="nav"
      style={{
        width: "100%",
        backgroundColor: colors.blue400,
        alignItems: "center",
        zIndex: 999,
        boxShadow: shadows.bottomHigh,
      }}
    >
      <Flex
        style={{ gap: spacing.m }}
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Logo>
          {" "}
          <NavLink
            to={`home`}
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                alignItems: "center",
                alignContent: "center",
                color: isActive ? colors.purple100 : "black",
                padding: isActive ? 8 : 8,
                borderBottom: isActive
                  ? `2 solid ${colors.blue400}`
                  : colors.darkestBlue,
                backgroundColor: isActive ? colors.blue400 : "",
                textDecoration: isActive ? "none" : "none",
              };
            }}
          >
            {" "}
            <H4 style={{ color: colors.purple300 }}>🚀 My React projects</H4>
          </NavLink>
        </Logo>
        <div>
          <MediaQuery minWidth={768}>
            <UL>
              <li>
                <NavLink
                  to={`home`}
                  style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      alignItems: "center",
                      alignContent: "center",
                      color: isActive ? colors.blue100 : colors.blue100,
                      padding: isActive ? 8 : 8,
                      borderBottom: isActive
                        ? `2 solid ${colors.action}`
                        : colors.darkestBlue,
                      backgroundColor: isActive ? colors.darkestBlue : "",
                      textDecoration: isActive ? "underline" : "none",
                    };
                  }}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`about`}
                  style={({ isActive, isPending, isHover }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      alignItems: "center",
                      alignContent: "center",
                      color: isActive ? colors.blue100 : colors.blue100,
                      padding: isActive ? 8 : 8,
                      backgroundColor: isActive
                        ? colors.blue400
                        : colors.blue400,
                      textDecoration: isActive ? "underline" : "none",
                    };
                  }}
                >
                  About
                </NavLink>
              </li>
              <li>
                <Flex alignItems={"center"} gap={spacing.s}>
                  <a
                    href="https://www.linkedin.com/in/omer-morag/"
                    target="blank"
                  >
                    <CTA variant="tertiary" buttonSize="sBmd">
                      <LinkedIn />
                    </CTA>{" "}
                  </a>
                  <a href="https://www.facebook.com/morag.omer" target="blank">
                    <CTA variant="tertiary" buttonSize="sBmd">
                      <GitHub />
                    </CTA>
                  </a>
                  <a href="https://www.instagram.com/moragos/" target="blank">
                    {" "}
                    <CTA variant="tertiary" buttonSize="sBmd">
                      <Instagram />
                    </CTA>
                  </a>
                </Flex>
              </li>
            </UL>
          </MediaQuery>
          <MediaQuery maxWidth={767}>
            <Burger />
          </MediaQuery>
        </div>
      </Flex>
    </div>
  );
}

export default NavBar;
