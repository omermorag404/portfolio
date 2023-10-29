/* eslint-disable no-use-before-define */
import styled from "styled-components";
import textSize from "../sizes/textSize";
import colors from "./colors";
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
export var H1 = styled.h1(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  color: ",
        ";\n  text-align: center;\n  font-size: ",
        ";\n  font-weight: 600;\n  margin: 0;\n  }\n  \n}\n",
      ],
      [
        "\n  color: ",
        ";\n  text-align: center;\n  font-size: ",
        ";\n  font-weight: 600;\n  margin: 0;\n  }\n  \n}\n",
      ]
    )),
  function (props) {
    return props.color || colors.darkestGrey;
  },
  function (props) {
    return props.textSize || textSize.xxl;
  }
);
export var H2 = styled(H1)(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      ["\n  font-size: ", ";\n"],
      ["\n  font-size: ", ";\n"]
    )),
  function (props) {
    return props.textSize || textSize.xl;
  }
);
export var H3 = styled(H1)(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      ["\n  font-size: ", ";\n"],
      ["\n  font-size: ", ";\n"]
    )),
  function (props) {
    return props.textSize || textSize.lg;
  }
);
export var H4 = styled(H1)(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      ["\n  font-size: ", ";\n"],
      ["\n  font-size: ", ";\n"]
    )),
  function (props) {
    return props.textSize || textSize.md;
  }
);
export var H5 = styled(H1)(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      ["\n  font-size: ", ";\n"],
      ["\n  font-size: ", ";\n"]
    )),
  function (props) {
    return props.textSize || textSize.sm;
  }
);
export var H6 = styled(H1)(
  templateObject_6 ||
    (templateObject_6 = __makeTemplateObject(
      ["\n  font-size: ", ";\n"],
      ["\n  font-size: ", ";\n"]
    )),
  function (props) {
    return props.textSize || textSize.xs;
  }
);
export var P = styled.p(
  templateObject_7 ||
    (templateObject_7 = __makeTemplateObject(
      [
        "\n  font-size: ",
        ";\n  color: ",
        ";\n  margin: 0;\n  font-family: Source Code Pro;\n",
      ],
      [
        "\n  font-size: ",
        ";\n  color: ",
        ";\n  margin: 0;\n  font-family: Source Code Pro;\n",
      ]
    )),
  function (props) {
    return props.textSize || textSize.sm;
  },
  function (props) {
    return props.color || colors.white;
  }
);
export var Pbold = styled(P)(
  templateObject_8 ||
    (templateObject_8 = __makeTemplateObject(
      ["\n  font-weight: 600;\n  color: ", ";\n"],
      ["\n  font-weight: 600;\n  color: ", ";\n"]
    )),
  function (props) {
    return props.color || colors.white;
  }
);
export var Crossed = styled(P)(
  templateObject_9 ||
    (templateObject_9 = __makeTemplateObject(
      [
        "\n  font-weight: 300;\n  color: ",
        ";\n  text-decoration: line-through;\n",
      ],
      [
        "\n  font-weight: 300;\n  color: ",
        ";\n  text-decoration: line-through;\n",
      ]
    )),
  function (props) {
    return props.color || colors.white;
  }
);
export var Label = styled(P)(
  templateObject_10 ||
    (templateObject_10 = __makeTemplateObject(
      ["\nfont-size=", ";\ncolor:", "\n"],
      ["\nfont-size=", ";\ncolor:", "\n"]
    )),
  textSize.xs,
  colors.white
);
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6,
  templateObject_7,
  templateObject_8,
  templateObject_9,
  templateObject_10;
