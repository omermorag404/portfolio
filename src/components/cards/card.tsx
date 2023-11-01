/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { AutoAwesome, ThumbDown, ThumbUp } from "@mui/icons-material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareIcon from "@mui/icons-material/Share";
import Timer from "@mui/icons-material/TimerOutlined";
import { Avatar } from "@mui/material";
import styled from "styled-components";
import { CTA } from "../buttons/button";
import { CardData } from "../data/data";
import card1 from "../img/card1.jpeg";
import card2 from "../img/card2.jpeg";
import card3 from "../img/card3.jpeg";
import card4 from "../img/card4.jpeg";
import card5 from "../img/card5.jpeg";
import card6 from "../img/card6.jpeg";
import textSize from "../sizes/textSize";
import colors from "../styles/colors";
import { Flex } from "../styles/flex";
import spacing from "../styles/spacing";
import { Label } from "../styles/typography";

// Card color

const cardColor: { [key: string]: { borderBottom: string } } = {
  Project: {
    borderBottom: `8px solid ${colors.sky}`,
  },
  Position: {
    borderBottom: `8px solid ${colors.coral}`,
  },
};

//  Card cover
const imgs = [card1, card2, card3, card4, card5, card6];

function Card({ cardsData }: { cardsData: CardData }) {
  const H3 = styled.h3`
    font-family: "roboto";
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: ${textSize.lg};
    color: ${colors.darkGrey} p {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
      color: red;
    }
    h5 {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
      color: red;
    }
  `;
  return (
    <div
      style={{
        backgroundColor: colors.white,
        maxWidth: 360,
        minWidth: 360,
        maxHeight: 470,
        height: 508,
        borderRadius: 16,
        border: "1px solid #E0E0E0",
        overflow: "hidden",
        marginRight: 0,
        position: "relative",
      }}
    >
      <div
        style={{
          borderBottom: cardColor[cardsData.label]?.borderBottom,
          marginRight: "auto",
          maxWidth: 360,
          position: "relative",
          flex: 1,
          overflow: "hidden",
          height: 150,
        }}
      >
        <div
          style={{
            backgroundColor: colors.white,
            color: colors.darkGrey,
            padding: "8px",
            position: "absolute",
            left: spacing.m,
            top: spacing.m,
            borderRadius: 4,
          }}
        >
          {cardsData.label}
        </div>
        <img
          src={imgs[Math.floor(Math.random() * imgs.length)]}
          width="100%"
          style={{
            borderRadius: "16px",
            display: "block",
          }}
        />
      </div>
      <div style={{ padding: spacing.s, flex: 2 }}>
        <Flex flexDirection={"column"} alignItems="flex-start" gap={spacing.m}>
          <H3 style={{ fontFamily: "roboto" }}>{cardsData.title}</H3>
          <Flex gap={spacing.m} alignItems={"center"}>
            <Label style={{ fontSize: 14 }}>{cardsData.projectName}</Label>
            <Flex alignItems={"center"} gap={spacing.xs}>
              <Timer style={{ fontSize: 20, fontFamily: "roboto" }} />
              <Label style={{ fontSize: 14, fontFamily: "roboto" }}>
                X hours per week
              </Label>
            </Flex>
          </Flex>
          <Flex alignItems={"center"} gap={spacing.m}>
            <Avatar />
            <h5 color={colors.darkGrey}>User name</h5>
          </Flex>
          <Flex alignItems={"center"} gap={spacing.s}>
            <AutoAwesome style={{ color: colors.yellow }} />
            <p>Gain skills important to your organization </p>
          </Flex>
        </Flex>
      </div>
      <div
        style={{
          padding: spacing.s,
          position: "absolute",
          bottom: 0,
          right: 0,
          flex: 1,

          width: "100%",
          borderTop: "1px solid #E0E0E0",
        }}
      >
        <Flex gap={spacing.s} justifyContent={"space-between"}>
          <Flex gap={spacing.s}>
            {" "}
            <CTA variant="tertiary" buttonSize="sBlg">
              <ShareIcon />{" "}
            </CTA>
            <CTA variant="tertiary" buttonSize="sBlg">
              <FavoriteBorderOutlinedIcon />
            </CTA>
          </Flex>
          <Flex gap={spacing.s}>
            {" "}
            <CTA variant="tertiary" buttonSize="sBlg">
              <ThumbDown />{" "}
            </CTA>
            <CTA
              variant="primary"
              buttonSize="sBlg"
              style={{ backgroundColor: "red" }}
            >
              <ThumbUp />
            </CTA>
          </Flex>
        </Flex>
      </div>
    </div>
  );
}
export default Card;
