import js from "../img/js.png";
import ts from "../img/ts.png";
import react from "../img/react.png";
import css from "../img/css.png";
import { Flex } from "../styles/flex";
import { H4, P } from "../styles/typography";
import "../styles/style.css";

export const LoginDetails = () => {
  return (
    <Flex style={{ margin: "40px" }} gap={"40px"} flexWrap={"wrap"}>
      <Flex flexDirection="column" gap={"16px"}>
        <H4>Programing languages</H4>
        <Flex gap={"16px"}>
          <img src={react} alt="React" width={"24px"} height={"24px"} />
          <img src={js} alt="JavaScript" width={"24px"} height={"24px"} />
          <img src={ts} alt="Typescript" width={"24px"} height={"24px"} />
          <img src={css} alt="CSS" width={"24px"} height={"24px"} />
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap={"16px"} alignItems="flex-start">
        <H4>Packages I used</H4>
        <Flex gap={"16px"}>
          <a href="http://www.google.com" target="blank">
            Formik
          </a>
          <a href="http://www.google.com" target="blank">
            Yup
          </a>
          <a href="http://www.google.com" target="blank">
            Styled-Component
          </a>
        </Flex>
      </Flex>
    </Flex>
  );
};

export const CardsDetails = () => {
  return (
    <Flex style={{ margin: "40px" }} gap={"40px"} flexWrap={"wrap"}>
      <Flex flexDirection="column" gap={"16px"}>
        <H4>Programing languages</H4>
        <Flex gap={"16px"}>
          <img src={react} alt="React" width={"24px"} height={"24px"} />
          <img src={js} alt="JavaScript" width={"24px"} height={"24px"} />
          <img src={ts} alt="Typescript" width={"24px"} height={"24px"} />
          <img src={css} alt="CSS" width={"24px"} height={"24px"} />
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap={"16px"} alignItems="flex-start">
        <H4>Packages I used</H4>
        <Flex gap={"16px"}>
          <a href="http://www.google.com" target="blank">
            Formik
          </a>
          <a href="http://www.google.com" target="blank">
            Yup
          </a>
          <a href="http://www.google.com" target="blank">
            Styled-Component
          </a>
        </Flex>
      </Flex>
    </Flex>
  );
};

export const DashboardDetails = () => {
  return (
    <Flex style={{ margin: "40px" }} gap={"40px"} flexWrap={"wrap"}>
      <Flex flexDirection="column" gap={"16px"}>
        <H4>Programing languages</H4>
        <Flex gap={"16px"}>
          <img src={react} alt="React" width={"24px"} height={"24px"} />
          <img src={js} alt="JavaScript" width={"24px"} height={"24px"} />
          <img src={ts} alt="Typescript" width={"24px"} height={"24px"} />
          <img src={css} alt="CSS" width={"24px"} height={"24px"} />
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap={"16px"} alignItems="flex-start">
        <H4>Packages I used</H4>
        <Flex gap={"16px"}>
          <a href="http://www.google.com" target="blank">
            Formik
          </a>
          <a href="http://www.google.com" target="blank">
            Yup
          </a>
          <a href="http://www.google.com" target="blank">
            Styled-Component
          </a>
        </Flex>
      </Flex>
    </Flex>
  );
};

export const ListDetails = () => {
  return (
    <Flex style={{ margin: "40px" }} gap={"40px"} flexWrap={"wrap"}>
      <Flex flexDirection="column" gap={"16px"}>
        <H4>Programing languages</H4>
        <Flex gap={"16px"}>
          <img src={react} alt="React" width={"24px"} height={"24px"} />
          <img src={js} alt="JavaScript" width={"24px"} height={"24px"} />
          <img src={ts} alt="Typescript" width={"24px"} height={"24px"} />
          <img src={css} alt="CSS" width={"24px"} height={"24px"} />
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap={"16px"} alignItems="flex-start">
        <H4>Packages I used</H4>
        <Flex gap={"16px"}>
          <a href="http://www.google.com" target="blank">
            Formik
          </a>
          <a href="http://www.google.com" target="blank">
            Yup
          </a>
          <a href="http://www.google.com" target="blank">
            Styled-Component
          </a>
        </Flex>
      </Flex>
    </Flex>
  );
};
