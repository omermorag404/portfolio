import React from "react";
import { Flex } from "../styles/flex";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import "../styles/style.css";
import { H2, H4, P } from "../styles/typography";
import { Link } from "react-router-dom";
import styled from "styled-components";
import shadows from "../styles/shadows";
const ProjectStyledCard = styled(Flex) `
  flex-wrap: wrap;
  padding: 24px;
  min-width: 320px;
  max-with: 50%;
  box-shadow: 1px 2px 9px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  border: solid 1px ${colors.purple100};

  &:hover {
    transform: scale(1.02);
    border: solid 1px ${colors.green100};
    box-shadow: ${shadows.medium};
  }
`;
function ProjectCard({ projectData }) {
    return (React.createElement("div", null,
        React.createElement(Link, { to: projectData.link, style: { textDecoration: "none" } },
            React.createElement(ProjectStyledCard, { gap: spacing.lg, style: { borderRadius: 16 } },
                React.createElement(H2, null, projectData.icon),
                React.createElement(Flex, { flexDirection: "column", gap: spacing.s, alignItems: "start", flexWrap: "wrap" },
                    " ",
                    React.createElement(H4, { color: colors.purple300 }, projectData.name),
                    React.createElement(P, { style: { color: colors.purple100 } }, projectData.date))))));
}
export default ProjectCard;
