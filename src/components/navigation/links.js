import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { React, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CTA } from "../buttons/button";
import colors from "../styles/colors";
import { Flex } from "../styles/flex";
import spacing from "../styles/spacing";
import "../styles/style.css";
import Burger from "./burger";

export const Links = () => {
  const UL = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.darkestBlue};

    li {
      list-style-type: none;
      padding: 24px;
    }
  `;
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  if (!isMobile) {
    return (
      <div>
        {" "}
        <UL>
          <li>
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
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
        </UL>
      </div>
    );
  }
  if (isMobile) {
    return <Burger />;
  }
};
