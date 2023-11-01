import { animated, easings, useSpring } from "@react-spring/web";
import React from "react";
import TypewriterComponent from "typewriter-effect";
import { projectData } from "../components/data/data";
import ProjectCard from "../components/projects/project";
import colors from "../components/styles/colors";
import { Flex } from "../components/styles/flex";
import spacing from "../components/styles/spacing";
import { H5 } from "../components/styles/typography";

export const Home = () => {
  const springs = useSpring({
    from: { y: 50, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config: {
      easing: easings.steps(24),
      duration: 3000,
    },
  });

  const [showProjects, setShowProjects] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setShowProjects(true);
    }, 1500);
  }, []);
  return (
    <Flex flexDirection={"column"} gap={spacing.xxxl} padding={40}>
      <Flex
        flexDirection={"column"}
        gap={spacing.xxl}
        alignItems={"center"}
        padding={"40px"}
      >
        <H5
          style={{
            fontSize: 40,
            fontFamily: "Source Code Pro",
            color: colors.text,
          }}
        >
          <TypewriterComponent
            options={{
              autoStart: true,
              loop: true,
              delay: 268,
              strings: ["I learn React.js", "It's crazy, right?"],
            }}
          />
        </H5>
      </Flex>
      {showProjects && (
        <animated.div
          style={{
            ...springs,
          }}
        >
          <Flex gap={spacing.lg} flexWrap={"wrap"} justifyContent={"center"}>
            {projectData.map((item, index) => {
              return <ProjectCard projectData={item} />;
            })}
          </Flex>
        </animated.div>
      )}
    </Flex>
  );
};
