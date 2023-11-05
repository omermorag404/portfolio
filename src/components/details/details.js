import React from "react";
import { Flex } from "../styles/flex";
import { H5 } from "../styles/typography";
import { PackageChip } from "./chip";
import { login } from "./detailsData";

export function ProjectDetails({ props }) {
  const { login, list } = props;
  return (
    <Flex>
      <Flex>
        <H5>React hooks</H5>
        <Flex></Flex>
      </Flex>
      <Flex>
        <H5>npm packages used</H5>
        <Flex>
          {this.props.map((item, index) => {
            return <PackageChip props={item} />;
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}
