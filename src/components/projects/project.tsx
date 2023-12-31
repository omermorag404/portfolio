import React from "react";
import { Flex } from "../styles/flex";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import "../styles/style.css";
import { H2, H4, P } from "../styles/typography";
import { Link } from "react-router-dom";
import styled from "styled-components";
import shadows from "../styles/shadows";
const ProjectStyledCard = styled(Flex)`
  flex-wrap: wrap;
  padding: 24px;
  min-width: 320px;
  max-with: 50%;
  box-shadow: 1px 2px 9px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  border: solid 1px ${colors.purple100};

  &:hover {
    transform: scale(1.02);
    border: solid 1px ${colors.purple300};
    box-shadow: ${shadows.medium};
  }
`;
function ProjectCard({ projectData }: any) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Link
        to={projectData.link}
        style={{ textDecoration: "none" }}
        onClick={scrollToTop}
      >
        <ProjectStyledCard gap={spacing.lg} style={{ borderRadius: 16 }}>
          <H2>{projectData.icon}</H2>
          <Flex
            flexDirection={"column"}
            gap={spacing.s}
            alignItems={"start"}
            flexWrap={"wrap"}
          >
            {" "}
            <H4 color={colors.purple300}>{projectData.name}</H4>
            <P style={{ color: colors.purple100 }}>{projectData.date}</P>
          </Flex>
        </ProjectStyledCard>
      </Link>
    </div>
  );
}
export default ProjectCard;
