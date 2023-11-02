import { React } from "react";
import { NavLink } from "react-router-dom";
import colors from "../styles/colors";
import { Flex } from "../styles/flex";
import spacing from "../styles/spacing";
import "../styles/style.css";
import { H4 } from "../styles/typography";
import { Links } from "./links";
import styled from "styled-components";

function NavBar() {
  const Logo = styled.div`
    padding: 24px;
  `;
  return (
    <div
      className="nav"
      style={{
        width: "100%",
        backgroundColor: colors.darkestBlue,
        alignItems: "center",
        zIndex: 999,
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
        </Logo>
        <Links />
      </Flex>
    </div>
  );
}

export default NavBar;
