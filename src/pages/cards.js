import React from "react";
import Card from "../components/cards/card";
import { cardsData } from "../components/cards/dataCards";
import { Flex } from "../components/styles/flex";
import spacing from "../components/styles/spacing";
import { CardsDetails } from "../components/details/details";
import colors from "../components/styles/colors";
export const Cards = () => {
    return (React.createElement("div", null,
        " ",
        React.createElement(Flex, { gap: spacing.lg, flexWrap: "wrap", justifyContent: "center" }, cardsData.map((item, index) => {
            // eslint-disable-next-line react/jsx-key
            return React.createElement(Card, { cardsData: item });
        })),
        React.createElement("div", { style: {
                backgroundColor: colors.blue300,
                marginTop: "16px",
                width: "100%",
            } },
            React.createElement("hr", null),
            React.createElement(CardsDetails, null))));
};
