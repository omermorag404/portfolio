/* eslint-disable no-undef */
import {
  Menu,
  Close,
  Facebook,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { CTA } from "../buttons/button";
import colors from "../styles/colors";
import { Flex } from "../styles/flex";
import spacing from "../styles/spacing";
import "../styles/style.css";
import styled from "styled-components";

const UL = styled.ul`
  display: flex;

  justify-content: space-between;
  align-items: center;
  background-color: ${colors.darkestBlue};

  li {
    list-style-type: none;
    padding: 24px;
  }
  .close {
    display: none;
  }
  @media (max-width: 767px) {
    display: {({open})} => setOpen=open;
    background-color: ${colors.blue400};
    flex-direction: column;
    z-index: 999;
    hieght: 100vh;
    width: 50vw;
    
    background-color: ${colors.darkestBlue};
    position: fixed;
    align-items: flex-start;
    right: 0;
    top: 0;
    .close {
      display: inline;

    }
    @media (min-width 767px) {
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <CTA
        variant="tertiary"
        buttonSize="sm"
        style={{ marginRight: "24px" }}
        onClick={() => {
          setOpen((old) => !old);
        }}
      >
        <Menu />
      </CTA>
    );
  }

  return (
    <UL>
      <li className="close">
        <CTA
          variant="tertiary"
          buttonSize="sm"
          onClick={() => {
            setOpen((old) => !old);
          }}
        >
          <Close />
        </CTA>
      </li>
      <li>
        <NavLink
          to={`home`}
          onClick={() => {
            setOpen((old) => !old);
          }}
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
          onClick={() => {
            setOpen((old) => !old);
          }}
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
  );
};
export default Burger;
