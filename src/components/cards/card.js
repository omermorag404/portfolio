import React from "react";
import colors from "../styles/colors";
import { AutoAwesome, ThumbDown, ThumbUp } from "@mui/icons-material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareIcon from "@mui/icons-material/Share";
import Timer from "@mui/icons-material/TimerOutlined";
import { Avatar } from "@mui/material";
import { Flex } from "../styles/flex";
import { CTA } from "../buttons/button";
import card1 from "../img/card1.jpeg";
import card2 from "../img/card2.jpeg";
import card3 from "../img/card3.jpeg";
import card4 from "../img/card4.jpeg";
import card5 from "../img/card5.jpeg";
import card6 from "../img/card6.jpeg";
import spacing from "../styles/spacing";
import { H3, H5, Label, P } from "../styles/typography";
// Card color
var cardColor = {
    Project: {
        borderBottom: "8px solid ".concat(colors.sky),
    },
    Position: {
        borderBottom: "8px solid ".concat(colors.coral),
    },
};
//  Card cover
var imgs = [card1, card2, card3, card4, card5, card6];
function Card(_a) {
    var _b;
    var cardsData = _a.cardsData;
    return (React.createElement("div", { style: {
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
                borderBottom: (_b = cardColor[cardsData.label]) === null || _b === void 0 ? void 0 : _b.borderBottom,
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
                React.createElement(H3, null, cardsData.title),
                React.createElement(Flex, { gap: spacing.m, alignItems: "center" },
                    React.createElement(Label, { style: { fontSize: 14 } }, cardsData.projectName),
                    React.createElement(Flex, { alignItems: "center", gap: spacing.xs },
                        React.createElement(Timer, { style: { fontSize: 20 } }),
                        React.createElement(Label, { style: { fontSize: 14 } }, "X hours per week"))),
                React.createElement(Flex, { alignItems: "center", gap: spacing.m },
                    React.createElement(Avatar, null),
                    React.createElement(H5, { color: colors.darkGrey }, "User name")),
                React.createElement(Flex, { alignItems: "center", gap: spacing.s },
                    React.createElement(AutoAwesome, { style: { color: colors.yellow } }),
                    React.createElement(P, null, "Gain skills important to your organization ")))),
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
                    React.createElement(CTA, { variant: "tertiary", buttonSize: "sBlg" },
                        React.createElement(ShareIcon, null),
                        " "),
                    React.createElement(CTA, { variant: "tertiary", buttonSize: "sBlg" },
                        React.createElement(FavoriteBorderOutlinedIcon, null))),
                React.createElement(Flex, { gap: spacing.s },
                    " ",
                    React.createElement(CTA, { variant: "tertiary", buttonSize: "sBlg" },
                        React.createElement(ThumbDown, null),
                        " "),
                    React.createElement(CTA, { variant: "primary", buttonSize: "sBlg" },
                        React.createElement(ThumbUp, null)))))));
}
export default Card;
