import SearchBarFilter from "../components/search/searchbar";
import colors from "../components/styles/colors";
import { SearchDetails } from "../components/details/details";
import { Flex } from "../components/styles/flex";
export const SearchBar = () => {
  return (
    <Flex flexDirection="column" gap={"24px"}>
      <SearchBarFilter />
      <div
        style={{
          backgroundColor: colors.blue300,
          width: "100%",
        }}
      >
        <hr />
        <SearchDetails />
      </div>
    </Flex>
  );
};
