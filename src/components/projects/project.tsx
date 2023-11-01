import React from "react";
import { Flex } from "../styles/flex";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import "../styles/style.css";
import { H2, H4, P } from "../styles/typography";

import { Link } from "react-router-dom";
import styled from "styled-components";
const ProjectStyledCard = styled(Flex)`
  flex-wrap: wrap;
  padding: 24px;
  min-width: 320px;
  max-with: 50%;
  box-shadow: 1px 2px 9px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  border: solid 1px ${colors.text};

  &:hover {
    transform: scale(1.02);
    border: solid 1px ${colors.green};
  }
`;
function ProjectCard({ projectData }: any) {
  return (
    <div>
      <Link to={projectData.link} style={{ textDecoration: "none" }}>
        <ProjectStyledCard gap={spacing.lg} style={{ borderRadius: 16 }}>
          <H2>{projectData.icon}</H2>
          <Flex
            flexDirection={"column"}
            gap={spacing.s}
            alignItems={"start"}
            flexWrap={"wrap"}
          >
            {" "}
            <H4 color={colors.purple}>{projectData.name}</H4>
            <P style={{ color: colors.text }}>{projectData.date}</P>
          </Flex>
        </ProjectStyledCard>
      </Link>
    </div>
  );
}
export default ProjectCard;
