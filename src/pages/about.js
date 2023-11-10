import React from "react";
import MediaQuery from "react-responsive";
import { Flex } from "../components/styles/flex";
import spacing from "../components/styles/spacing";
import { H1, H3, P } from "../components/styles/typography";
export const About = () => {
  return (
    <Flex style={{ margin: "0 5% 5% 5%", justifyContent: "center" }}>
      <Flex
        flexDirection="column"
        gap={spacing.lg}
        maxWidth="500px"
        justifyContent="flex-start"
        alignItems="flex-start"
        padding="10px "
        margin="40px"
      >
        <MediaQuery minWidth={768}>
          <H1>About this project</H1>
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <H3>About this project</H3>
        </MediaQuery>
        <P>
          Working as a Product Designer means working closely with the Front-end
          team. To improve our workflow, I decided to learn how to code so that
          I could better understand the way engineers build components, inspect
          designs, and be receptive to design suggestions.
        </P>
        <P>
          Initially, I started learning to code using different applications
          such as "Mimo" and "Grasshopper", and then continued with Udemy.
          However, learning without practical application seemed a bit futile.
          Therefore, I sought help from the Front-end team in my organization.
          With the invaluable assistance of{" "}
          <a
            href="https://www.linkedin.com/in/amit-kastel-3a54b3133/"
            target="blank"
          >
            Amit Kastel
          </a>{" "}
          and the other engineers, I embarked on my own React.js project. I
          began with a simple shopping list, learning how to create various
          React components that I could later use in composition.
        </P>
        <P>
          However, my curiosity grew, and I wanted to explore and learn more.
          Consequently, I started adding more projects and functionality to my
          React app.
        </P>
        <P>
          I acquired proficiency in using different hooks and styled-components.
          I also experimented with various React libraries and services, such as
          Formik, MUI, React Router, and Rechart. Once I built the main app in
          React.js, I decided to convert some parts of it into TypeScript (which
          was challenging but undoubtedly beneficial). This project and the
          knowledge gained from it helped me plan my designs more effectively.
        </P>
        <P>
          I learned how to base my design on existing code and reuse components.
          Now I understand why there are multiple variants of buttons or even
          texts.
        </P>
        <P>
          However, the most significant value is that I can now understand
          engineers better and determine when something is possible or expect a
          more detailed explanation, rather than accepting statements like "this
          will be difficult to build" or "that is impossible".
        </P>
        <P>
          {" "}
          From this point forward, all that remains is continuous practice and
          further learning.
        </P>
      </Flex>
    </Flex>
  );
};
