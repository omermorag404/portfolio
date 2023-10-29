import React from "react";
import Card from "../components/cards/card";
import { cardsData } from "../components/data/data";
import spacing from "../components/styles/spacing";
import { Flex } from "../components/styles/flex";
export const Cards = () => {
    return (React.createElement("div", null,
        " ",
        React.createElement(Flex, { gap: spacing.lg, flexWrap: "wrap", justifyContent: "center" }, cardsData.map((item, index) => {
            // eslint-disable-next-line react/jsx-key
            return React.createElement(Card, { cardsData: item });
        }))));
};
