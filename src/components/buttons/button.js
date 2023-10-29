import styled, { css } from "styled-components";
import buttonSize from "../sizes/buttonSize";
import textSize from "../sizes/textSize";
import colors from "../styles/colors";
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
var buttonVariant = {
  primary: {
    backgroundColor: colors.action,
    hover: {
      backgroundColor: colors.darkAction,
      color: colors.white,
    },
    disabled: {
      backgroundColor: colors.grey,
      color: colors.darkGrey,
    },
    color: colors.white,
    borderColor: colors.action,
    fontSize: textSize.sm,
  },
  secondary: {
    backgroundColor: colors.white,
    color: colors.action,
    borderColor: colors.action,
    fontSize: textSize.sm,
    hover: {
      backgroundColor: colors.action,
      color: colors.white,
    },
  },
  tertiary: {
    backgroundColor: colors.darkestBlue,
    hover: {
      backgroundColor: colors.darkestBlue,
      color: colors.green,
    },
    color: colors.navBlue,
    borderColor: colors.darkestBlue,
    fontSize: textSize.sm,
  },
};
var CTA = styled.button(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        '\n  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;\n  border-radius: 8px;\n  border: 1px solid;\n  font-weight: 500;\n  ',
        "\n  ",
        "\n  background-color: ",
        ";\n  color: ",
        ";\n  border-color: ",
        ";\n  font-size: ",
        ";\n  padding: ",
        ";\n",
      ],
      [
        '\n  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;\n  border-radius: 8px;\n  border: 1px solid;\n  font-weight: 500;\n  ',
        "\n  ",
        "\n  background-color: ",
        ";\n  color: ",
        ";\n  border-color: ",
        ";\n  font-size: ",
        ";\n  padding: ",
        ";\n",
      ]
    )),
  function (props) {
    var _a, _b, _c, _d, _e;
    return (
      ((_a =
        buttonVariant[
          props === null || props === void 0 ? void 0 : props.variant
        ]) === null || _a === void 0
        ? void 0
        : _a.hover) &&
      css(
        templateObject_1 ||
          (templateObject_1 = __makeTemplateObject(
            [
              "\n      &:hover {\n        background-color: ",
              ";\n        color: ",
              ";\n      }\n    ",
            ],
            [
              "\n      &:hover {\n        background-color: ",
              ";\n        color: ",
              ";\n      }\n    ",
            ]
          )),
        (_c =
          (_b =
            buttonVariant[
              props === null || props === void 0 ? void 0 : props.variant
            ]) === null || _b === void 0
            ? void 0
            : _b.hover) === null || _c === void 0
          ? void 0
          : _c.backgroundColor,
        (_e =
          (_d =
            buttonVariant[
              props === null || props === void 0 ? void 0 : props.variant
            ]) === null || _d === void 0
            ? void 0
            : _d.hover) === null || _e === void 0
          ? void 0
          : _e.color
      )
    );
  },
  function (props) {
    var _a, _b, _c, _d, _e;
    return (
      ((_a =
        buttonVariant[
          props === null || props === void 0 ? void 0 : props.variant
        ]) === null || _a === void 0
        ? void 0
        : _a.disabled) &&
      css(
        templateObject_2 ||
          (templateObject_2 = __makeTemplateObject(
            [
              "\n      &:disabled {\n        background-color: ",
              ";\n        color: ",
              ";\n      }\n    ",
            ],
            [
              "\n      &:disabled {\n        background-color: ",
              ";\n        color: ",
              ";\n      }\n    ",
            ]
          )),
        (_c =
          (_b =
            buttonVariant[
              props === null || props === void 0 ? void 0 : props.variant
            ]) === null || _b === void 0
            ? void 0
            : _b.disabled) === null || _c === void 0
          ? void 0
          : _c.backgroundColor,
        (_e =
          (_d =
            buttonVariant[
              props === null || props === void 0 ? void 0 : props.variant
            ]) === null || _d === void 0
            ? void 0
            : _d.disabled) === null || _e === void 0
          ? void 0
          : _e.color
      )
    );
  },
  function (props) {
    var _a;
    return (_a = buttonVariant[props.variant || "primary"]) === null ||
      _a === void 0
      ? void 0
      : _a.backgroundColor;
  },
  function (props) {
    var _a;
    return (_a = buttonVariant[props.variant || "primary"]) === null ||
      _a === void 0
      ? void 0
      : _a.color;
  },
  function (props) {
    var _a;
    return (_a = buttonVariant[props.variant || "primary"]) === null ||
      _a === void 0
      ? void 0
      : _a.borderColor;
  },
  function (props) {
    var _a;
    return (_a = buttonVariant[props.variant || "primary"]) === null ||
      _a === void 0
      ? void 0
      : _a.fontSize;
  },
  function (props) {
    return buttonSize[props.buttonSize || "lg"];
  }
);
export { CTA };
var templateObject_1, templateObject_2, templateObject_3;
