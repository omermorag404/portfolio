import styled, { css } from "styled-components";
import buttonSize from "../sizes/buttonSize";
import textSize from "../sizes/textSize";
import colors from "../styles/colors";

type ButtonStyle = {
  backgroundColor: string;
  hover?: {
    backgroundColor?: string;
    color?: string;
  };
  disabled?: {
    backgroundColor: string;
    color: string;
  };
  color: string;
  borderColor: string;
  fontSize: string;
};
const buttonVariant: {
  [key in "primary" | "secondary" | "tertiary"]: ButtonStyle;
} = {
  primary: {
    backgroundColor: colors.blue100,
    hover: {
      backgroundColor: colors.blue200,
      color: colors.white,
    },
    disabled: {
      backgroundColor: colors.gray200,
      color: colors.gray300,
    },
    color: colors.white,
    borderColor: colors.blue100,
    fontSize: textSize.sm,
  },
  secondary: {
    backgroundColor: colors.blue300,
    color: colors.blue100,
    borderColor: colors.blue100,
    fontSize: textSize.sm,
    hover: {
      backgroundColor: colors.blue100,
      color: colors.white,
    },
  },
  tertiary: {
    backgroundColor: colors.blue400,
    hover: {
      backgroundColor: colors.blue400,
      color: colors.green100,
    },
    color: colors.blue100,
    borderColor: colors.blue400,
    fontSize: textSize.sm,
  },
};
const CTA = styled.button<{
  variant: keyof typeof buttonVariant;
  buttonSize: keyof typeof buttonSize;
}>`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  border-radius: 8px;
  border: 1px solid;
  font-weight: 500;
  ${(props: { variant: keyof typeof buttonVariant }) =>
    buttonVariant[props?.variant]?.hover &&
    css`
      &:hover {
        background-color: ${buttonVariant[props?.variant]?.hover
          ?.backgroundColor};
        color: ${buttonVariant[props?.variant]?.hover?.color};
      }
    `}
  ${(props) =>
    buttonVariant[props?.variant]?.disabled &&
    css`
      &:disabled {
        background-color: ${buttonVariant[props?.variant]?.disabled
          ?.backgroundColor};
        color: ${buttonVariant[props?.variant]?.disabled?.color};
      }
    `}
  background-color: ${(props) =>
    buttonVariant[props.variant || "primary"]?.backgroundColor};
  color: ${(props) => buttonVariant[props.variant || "primary"]?.color};
  border-color: ${(props) =>
    buttonVariant[props.variant || "primary"]?.borderColor};
  font-size: ${(props) => buttonVariant[props.variant || "primary"]?.fontSize};
  padding: ${(props) => buttonSize[props.buttonSize || "lg"]};
`;
export { CTA };
