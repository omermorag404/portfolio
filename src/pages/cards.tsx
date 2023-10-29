import React from "react";
import Card from "../components/cards/card";
import { CardData, cardsData } from "../components/data/data";
import spacing from "../components/styles/spacing";
import { Flex } from "../components/styles/flex";

export const Cards = () => {
  return (
    <div>
      {" "}
      <Flex gap={spacing.lg} flexWrap={"wrap"} justifyContent={"center"}>
        {cardsData.map((item, index) => {
          // eslint-disable-next-line react/jsx-key
          return <Card cardsData={item} />;
        })}
      </Flex>
    </div>
  );
};
