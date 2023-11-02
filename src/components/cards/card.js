/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { AutoAwesome, ThumbDown, ThumbUp } from "@mui/icons-material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareIcon from "@mui/icons-material/Share";
import Timer from "@mui/icons-material/TimerOutlined";
import { Avatar } from "@mui/material";
import styled from "styled-components";
import { CardButton } from "./cardButton";
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
import "../styles/style.css";
// Card color
const cardColor = {
    Project: {
        borderBottom: `8px solid ${colors.sky}`,
    },
    Position: {
        borderBottom: `8px solid ${colors.coral}`,
    },
};
//  Card cover
const imgs = [card1, card2, card3, card4, card5, card6];
function Card({ cardsData }) {
    var _a;
    const CardTitle = styled.h3 `
    font-family: "Roboto";
    font-size: ${textSize.lg};
    color: ${colors.darkGrey};
  `;
    const CardContent = styled.p `
    font-size: ${textSize.sm};
    color: ${colors.darkGrey};
  `;
    const CardLabel = styled.label `
    font-size: ${textSize.sm};
    color: ${colors.darkGrey};
  `;
    return (React.createElement("div", { className: "card", style: {
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
        } },
        React.createElement("div", { style: {
                borderBottom: (_a = cardColor[cardsData.label]) === null || _a === void 0 ? void 0 : _a.borderBottom,
                marginRight: "auto",
                maxWidth: 360,
                position: "relative",
                flex: 1,
                overflow: "hidden",
                height: 150,
            } },
            React.createElement("div", { style: {
                    backgroundColor: colors.white,
                    color: colors.darkGrey,
                    padding: "8px",
                    position: "absolute",
                    left: spacing.m,
                    top: spacing.m,
                    borderRadius: 4,
                } }, cardsData.label),
            React.createElement("img", { src: imgs[Math.floor(Math.random() * imgs.length)], width: "100%", style: {
                    borderRadius: "16px",
                    display: "block",
                } })),
        React.createElement("div", { style: { padding: spacing.s, flex: 2 } },
            React.createElement(Flex, { flexDirection: "column", alignItems: "flex-start", gap: spacing.m },
                React.createElement(CardTitle, { style: { fontFamily: "roboto" } }, cardsData.title),
                React.createElement(Flex, { gap: spacing.m, alignItems: "center" },
                    React.createElement(CardLabel, { style: { fontSize: 14 } }, cardsData.projectName),
                    React.createElement(Flex, { alignItems: "center", gap: spacing.xs },
                        React.createElement(Timer, null),
                        React.createElement(CardLabel, { style: { fontSize: 14, fontFamily: "roboto" } }, "X hours per week"))),
                React.createElement(Flex, { alignItems: "center", gap: spacing.m },
                    React.createElement(Avatar, null),
                    React.createElement(CardLabel, { color: colors.darkGrey }, "User name")),
                React.createElement(Flex, { alignItems: "center", gap: spacing.s },
                    React.createElement(AutoAwesome, { style: { color: colors.yellow } }),
                    React.createElement(CardContent, null,
                        "Gain skills important to your organization",
                        " ")))),
        React.createElement("div", { style: {
                padding: spacing.s,
                position: "absolute",
                bottom: 0,
                right: 0,
                flex: 1,
                width: "100%",
                borderTop: "1px solid #E0E0E0",
            } },
            React.createElement(Flex, { gap: spacing.s, justifyContent: "space-between" },
                React.createElement(Flex, { gap: spacing.s },
                    " ",
                    React.createElement(CardButton, { variant: "tertiary", buttonSize: "sBlg" },
                        React.createElement(ShareIcon, null),
                        " "),
                    React.createElement(CardButton, { variant: "tertiary", buttonSize: "sBlg" },
                        React.createElement(FavoriteBorderOutlinedIcon, null))),
                React.createElement(Flex, { gap: spacing.s },
                    " ",
                    React.createElement(CardButton, { variant: "tertiary", buttonSize: "sBlg" },
                        React.createElement(ThumbDown, null),
                        " "),
                    React.createElement(CardButton, { variant: "primary", buttonSize: "sBlg" },
                        React.createElement(ThumbUp, null)))))));
}
export default Card;
