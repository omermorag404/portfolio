import React from "react";
import spacing from "../components/styles/spacing";
import { H1, P, H4 } from "../components/styles/typography";
import { Flex } from "../components/styles/flex";
import colors from "../components/styles/colors";
export const About = () => {
  return (
    <div style={{ margin: "0 10% 10% 16%" }}>
      <Flex
        flexDirection="column"
        minWidth="360px"
        maxWidth="700px"
        gap={spacing.lg}
        justifyContent="flex-start"
        alignItems="flex-start"
        padding="10px ,40px ,40px ,40px "
        margin="40px"
      >
        <H1 color={colors.purple}>About this project</H1>
        <P>
          So, being a Product Designer means I'm tight with the Front-end team.
          To make things smoother, I thought, "Why not learn some code?" You
          know, get the lowdown on how those engineers whip up components, tweak
          designs, and drop design wisdom.
        </P>

        <div>
          {" "}
          <H4 style={{ textAlign: "left", color: colors.purple }}>
            Learning the Ropes: Apps to DIY
          </H4>
          <P>
            Projects Started my code journey using "Mimo" and "Grasshopper,"
            then hopped on the Udemy train. But real talk, just learning without
            doing felt kinda meh. So, I hit up the Front-end squad for help—big
            shoutout to{" "}
            <a
              style={{ color: colors.green }}
              href="https://www.linkedin.com/in/amit-kastel-3a54b3133/"
              target="blank"
            >
              Amit Kastel
            </a>{" "}
            and the gang. Launched into my own React.js gig, kicking off with a
            basic shopping list. Went on to cook up various React components
            like a coding chef.
          </P>{" "}
        </div>
        <div>
          <H4 style={{ textAlign: "left", color: colors.purple }}>
            Curiosity Strikes: More Projects, More Fun
          </H4>
          <P>
            Curiosity didn't stop there. Kept adding spice to my React app,
            trying out different hooks and styled-components. Played around with
            Formik, MUI, React Router, and Rechart. Even took the TypeScript
            plunge—challenging but totally worth it. Now, I'm a champ at
            planning designs.
          </P>
        </div>
        <div>
          <H4 style={{ textAlign: "left", color: colors.purple }}>
            Design Hack: Reusing Components and Getting Creative
          </H4>
          <P>
            Figured out how to build my designs on existing code and reuse
            components. Suddenly, all those different button versions made
            sense.{" "}
          </P>
        </div>
        <div>
          <H4 style={{ textAlign: "left", color: colors.purple }}>
            Cracking the Code Jargon: Speaking Engineer-ish
          </H4>
          <P>
            The real deal? Now I get what engineers are saying. No more nodding
            along to "this is hard" or "that's impossible." I ask questions,
            demand the deets.
          </P>
        </div>
        <div>
          <H4 style={{ textAlign: "left", color: colors.purple }}>
            Next Up: Keep on Keeping
          </H4>
          <P>
            On From here, it's all about practice and learning. The transition
            from designer to coder was a wild ride. Excited for the challenges
            and growth ahead. Let's do this!
          </P>
        </div>
      </Flex>
    </div>
  );
};
