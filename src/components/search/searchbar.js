import { React, useState } from "react";
import styled from "styled-components";
import fruits from "../img/fruitshop.png";
import { Flex } from "../styles/flex";
import spacing from "../styles/spacing";
import { P } from "../styles/typography";
import { SearchData } from "./dataSearch";

const SearchBarFilter = () => {
  const Fruit = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    border: 1px solid white;
    border-radius: 4px;
    padding: 8px;
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
    >
      <img src={fruits} alt="Fruits" width={"250px"} />
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        style={{ width: "320px", padding: "8px", borderRadius: "8px" }}
      />
      <Flex
        alignItems="flexStart"
        flexDirection="row"
        flexWrap={"wrap"}
        gap={spacing.lg}
        width="300px"
      >
        {filteredData.map((item) => (
          <Fruit key={item.id}>
            <P> {item.icon}</P>
            <P> {item.name}</P>
          </Fruit>
        ))}
      </Flex>
    </Flex>
  );
};

export default SearchBarFilter;
