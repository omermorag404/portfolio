import { React, useState } from "react";
import styled from "styled-components";
import textSize from "../sizes/textSize";
import colors from "../styles/colors";
import { Flex } from "../styles/flex";
import spacing from "../styles/spacing";
import { H1, H3, P } from "../styles/typography";
import { SearchData } from "./dataSearch";

const SearchBarFilter = () => {
  const Fruit = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    border: 1px solid white;
    border-radius: 4px;
    padding: 8px 16px;
  `;

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(SearchData);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    filterData(value);
  };

  const filterData = (searchTerm) => {
    const filteredData = SearchData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  return (
    <Flex
      width="100%"
      flexDirection="column"
      alignItems="center"
      gap={spacing.xl}
      padding="24px"
    >
      <Flex flexDirection="column" alignItems="center">
        <H1>👨🏻‍🌾</H1>
        <H3>Welcome to the local fruit store</H3>
      </Flex>

      <input
        type="text"
        placeholder="Search fruit..."
        value={searchTerm}
        onChange={handleInputChange}
        style={{
          width: "320px",
          padding: "8px",
          borderRadius: "8px",
          color: colors.gray300,
          fontSize: textSize.sm,
        }}
      />
      <div style={{ height: "265px", overflowY: "auto" }}>
        <Flex
          alignItems="flexStart"
          flexDirection="row"
          flexWrap={"wrap"}
          gap={spacing.m}
          width="300px"
        >
          {searchTerm === "" ? (
            <P>What fruit are you looking for today?</P>
          ) : filteredData.length > 0 ? (
            filteredData.map((item) => (
              <Fruit key={item.id}>
                <P>{item.icon}</P>
                <P>{item.name}</P>
              </Fruit>
            ))
          ) : (
            <p>Sorry, we don't have this fruit</p>
          )}
        </Flex>
      </div>
    </Flex>
  );
};

export default SearchBarFilter;
