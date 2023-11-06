import React from "react";
import Card from "../components/cards/card";
import { cardsData } from "../components/cards/dataCards";
import { Flex } from "../components/styles/flex";
import spacing from "../components/styles/spacing";
import { CardsDetails } from "../components/details/details";
import colors from "../components/styles/colors";

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
      <div
        style={{
          backgroundColor: colors.blue300,
          position: "fixed",
          bottom: "0px",
          zIndex: 10,
          width: "100%",
        }}
      >
        <hr />
        <CardsDetails />
      </div>
    </div>
  );
};
