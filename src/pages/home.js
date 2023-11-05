/* eslint-disable jsx-a11y/img-redundant-alt */
import { animated, easings, useSpring } from "@react-spring/web";
import React from "react";
import TypewriterComponent from "typewriter-effect";
import { projectData } from "../components/projects/dataProjects";
import ProjectCard from "../components/projects/project";
import colors from "../components/styles/colors";
import { Flex } from "../components/styles/flex";
import spacing from "../components/styles/spacing";
import { H5 } from "../components/styles/typography";
import styled from "styled-components";
import rocket from "../components/img/rocket.png";

export const Home = () => {
  const springs = useSpring({
    from: { y: 50, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config: {
      easing: easings.steps(24),
      duration: 2000,
    },
  });

  const Animation = styled.h5`
    font-size: 40px;
    color: ${colors.purple100};
    @media (max-width: 767px) {
      font-size: 24px;
    }
  `;

  const [showProjects, setShowProjects] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setShowProjects(true);
    }, 500);
  }, []);
  return (
    <Flex flexDirection={"column"} gap={spacing.xxxl}>
      <Flex flexDirection={"column"} gap={spacing.md} alignItems={"center"}>
        <img
          src={rocket}
          alt="React Image"
          style={{ height: "180px", margin: "24px" }}
        />
        <Animation>
          <TypewriterComponent
            options={{
              autoStart: true,
              loop: true,
              delay: 268,
              strings: ["I learn React.js", "It's crazy, right?"],
            }}
          />
        </Animation>
      </Flex>
      {showProjects && (
        <animated.div
          style={{
            ...springs,
          }}
        >
          <Flex
            gap={spacing.lg}
            flexWrap={"wrap"}
            justifyContent={"center"}
            padding="0 0  40px 0"
          >
            {projectData.map((item, index) => {
              return <ProjectCard projectData={item} />;
            })}
          </Flex>
        </animated.div>
      )}
    </Flex>
  );
};
