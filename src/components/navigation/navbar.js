import React from "react";
import { NavLink } from "react-router-dom";
import { H4 } from "../styles/typography";
import { Flex } from "../styles/flex";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import "../styles/style.css";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { CTA } from "../buttons/button";

function NavBar() {
  return (
    <Flex
      className="title"
      style={{
        backgroundColor: colors.darkestBlue,
        justifyContent: "space-between",
        width: "100%",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.200691",
        padding: "24px",
        zIndex: 1,
        paddingLeft: "40px",
        alignItems: "center",
      }}
    >
      <Flex style={{ gap: spacing.m }} alignItems={"center"}>
        <NavLink
          to={`home`}
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              alignItems: "center",
              alignContent: "center",
              color: isActive ? colors.purple : "black",
              padding: isActive ? 8 : 8,
              borderBottom: isActive
                ? `2 solid ${colors.darkestBlue}`
                : colors.darkestBlue,
              backgroundColor: isActive ? colors.darkestBlue : "",
              textDecoration: isActive ? "none" : "none",
            };
          }}
        >
          {" "}
          <H4 style={{ color: colors.purple }}>🚀 My React projects</H4>
        </NavLink>
        <NavLink
          to={`home`}
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              alignItems: "center",
              alignContent: "center",
              color: isActive ? colors.lightBlue : colors.lightBlue,
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

        <NavLink
          to={`about`}
          style={({ isActive, isPending, isHover }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              alignItems: "center",
              alignContent: "center",
              color: isActive ? colors.lightBlue : colors.lightBlue,
              padding: isActive ? 8 : 8,
              backgroundColor: isActive
                ? colors.darkestBlue
                : colors.darkestBlue,
              textDecoration: isActive ? "underline" : "none",
            };
          }}
        >
          About
        </NavLink>
      </Flex>

      <Flex alignItems={"center"} gap={spacing.s}>
        <a href="https://www.linkedin.com/in/omer-morag/" target="blank">
          <CTA variant="tertiary" buttonSize="sBmd">
            <LinkedIn />
          </CTA>{" "}
        </a>
        <a href="https://www.facebook.com/morag.omer" target="blank">
          <CTA variant="tertiary" buttonSize="sBmd">
            <Facebook />
          </CTA>
        </a>
        <a href="https://www.instagram.com/moragos/" target="blank">
          {" "}
          <CTA variant="tertiary" buttonSize="sBmd">
            <Instagram />
          </CTA>
        </a>
      </Flex>
    </Flex>
  );
}

export default NavBar;
