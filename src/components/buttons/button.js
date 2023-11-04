import styled, { css } from "styled-components";
import buttonSize from "../sizes/buttonSize";
import textSize from "../sizes/textSize";
import colors from "../styles/colors";
const buttonVariant = {
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
const CTA = styled.button `
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  border-radius: 8px;
  border: 1px solid;
  font-weight: 500;
  ${(props) => {
    var _a, _b, _c, _d, _e;
    return ((_a = buttonVariant[props === null || props === void 0 ? void 0 : props.variant]) === null || _a === void 0 ? void 0 : _a.hover) &&
        css `
      &:hover {
        background-color: ${(_c = (_b = buttonVariant[props === null || props === void 0 ? void 0 : props.variant]) === null || _b === void 0 ? void 0 : _b.hover) === null || _c === void 0 ? void 0 : _c.backgroundColor};
        color: ${(_e = (_d = buttonVariant[props === null || props === void 0 ? void 0 : props.variant]) === null || _d === void 0 ? void 0 : _d.hover) === null || _e === void 0 ? void 0 : _e.color};
      }
    `;
}}
  ${(props) => {
    var _a, _b, _c, _d, _e;
    return ((_a = buttonVariant[props === null || props === void 0 ? void 0 : props.variant]) === null || _a === void 0 ? void 0 : _a.disabled) &&
        css `
      &:disabled {
        background-color: ${(_c = (_b = buttonVariant[props === null || props === void 0 ? void 0 : props.variant]) === null || _b === void 0 ? void 0 : _b.disabled) === null || _c === void 0 ? void 0 : _c.backgroundColor};
        color: ${(_e = (_d = buttonVariant[props === null || props === void 0 ? void 0 : props.variant]) === null || _d === void 0 ? void 0 : _d.disabled) === null || _e === void 0 ? void 0 : _e.color};
      }
    `;
}}
  background-color: ${(props) => { var _a; return (_a = buttonVariant[props.variant || "primary"]) === null || _a === void 0 ? void 0 : _a.backgroundColor; }};
  color: ${(props) => { var _a; return (_a = buttonVariant[props.variant || "primary"]) === null || _a === void 0 ? void 0 : _a.color; }};
  border-color: ${(props) => { var _a; return (_a = buttonVariant[props.variant || "primary"]) === null || _a === void 0 ? void 0 : _a.borderColor; }};
  font-size: ${(props) => { var _a; return (_a = buttonVariant[props.variant || "primary"]) === null || _a === void 0 ? void 0 : _a.fontSize; }};
  padding: ${(props) => buttonSize[props.buttonSize || "lg"]};
`;
export { CTA };
