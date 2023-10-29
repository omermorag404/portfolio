import React from "react";
import { Flex } from "../styles/flex";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import "../styles/style.css";
import { H2, H4, P } from "../styles/typography";
import { Link } from "react-router-dom";
import styled from "styled-components";
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
var ProjectStyledCard = styled(Flex)(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  padding: 24px;\n  max-width: 360px;\n  min-width: 360px;\n  box-shadow: 1px 2px 9px rgba(0, 0, 0, 0.2);\n  transition: transform 0.2s;\n  border: solid 1px ",
        ";\n\n  &:hover {\n    transform: scale(1.02);\n    border: solid 1px ",
        ";\n  }\n",
      ],
      [
        "\n  padding: 24px;\n  max-width: 360px;\n  min-width: 360px;\n  box-shadow: 1px 2px 9px rgba(0, 0, 0, 0.2);\n  transition: transform 0.2s;\n  border: solid 1px ",
        ";\n\n  &:hover {\n    transform: scale(1.02);\n    border: solid 1px ",
        ";\n  }\n",
      ]
    )),
  colors.text,
  colors.green
);
function ProjectCard(_a) {
  var projectData = _a.projectData;
  return React.createElement(
    "div",
    null,
    React.createElement(
      Link,
      { to: projectData.link, style: { textDecoration: "none" } },
      React.createElement(
        ProjectStyledCard,
        { gap: spacing.lg, style: { borderRadius: 16 } },
        React.createElement(H2, null, projectData.icon),
        React.createElement(
          Flex,
          { flexDirection: "column", gap: spacing.s, alignItems: "start" },
          " ",
          React.createElement(H4, { color: colors.purple }, projectData.name),
          React.createElement(
            P,
            { style: { color: colors.text } },
            projectData.date
          )
        )
      )
    )
  );
}
export default ProjectCard;
var templateObject_1;
