import React from "react";
import { Flex } from "../styles/flex";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import "../styles/style.css";
import { H2, H4, P } from "../styles/typography";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ProjectStyledCard = styled(Flex) `
  padding: 24px;
  max-width: 360px;
  min-width: 400px;
  box-shadow: 1px 2px 9px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  border: solid 1px ${colors.text};

  &:hover {
    transform: scale(1.02);
    border: solid 1px ${colors.green};
  }
`;
function ProjectCard({ projectData }) {
    return (React.createElement("div", { style: { flexShrink: 1 } },
        React.createElement(Link, { to: projectData.link, style: { textDecoration: "none" } },
            React.createElement(ProjectStyledCard, { gap: spacing.lg, style: { borderRadius: 16 } },
                React.createElement(H2, null, projectData.icon),
                React.createElement(Flex, { flexDirection: "column", gap: spacing.s, alignItems: "start" },
                    " ",
                    React.createElement(H4, { color: colors.purple }, projectData.name),
                    React.createElement(P, { style: { color: colors.text } }, projectData.date))))));
}
export default ProjectCard;
