import React from "react";
import { Flex } from "../styles/flex";
import { H5 } from "../styles/typography";
import { PackageChip } from "./chip";
import { login } from "./detailsData";

export const ProjectDetails = (props) => {
  const project = props;
  return (
    <Flex>
      <Flex>
        <H5>React hooks</H5>
        <Flex></Flex>
      </Flex>
      <Flex>
        <H5>npm packages used</H5>
        <Flex>
          {project.map((item, index) => {
            // eslint-disable-next-line react/jsx-key
            return <PackageChip props={item} />;
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};
