import React from "react";
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
export const Flex = (_a) => {
  var {
      flexDirection,
      alignItems,
      justifyContent,
      gap,
      height,
      maxHeight,
      overflowY,
      position,
      top,
      Bottom,
      right,
      borderRadius,
      padding,
      backgroundColor,
      marginLeft,
      marginRight,
      marginTop,
      flexWrap,
      flexPack,
      width,
      flexSrink,
      maxWidth,
    } = _a,
    // className,
    rest = __rest(_a, [
      "flexDirection",
      "alignItems",
      "justifyContent",
      "gap",
      "height",
      "maxHeight",
      "overflowY",
      "position",
      "top",
      "Bottom",
      "right",
      "borderRadius",
      "padding",
      "backgroundColor",
      "marginLeft",
      "marginRight",
      "marginTop",
      "flexWrap",
      "flexPack",
      "width",
      "flexSrink",
      "maxWidth",
    ]);
  return React.createElement(
    "div",
    Object.assign({}, rest, {
      style: Object.assign(
        {
          display: "flex",
          flexDirection,
          justifyContent,
          alignItems,
          gap,
          height,
          flexPack,
          maxHeight,
          overflowY,
          position,
          padding,
          top,
          Bottom,
          borderRadius,
          right,
          backgroundColor,
          marginLeft,
          marginRight,
          marginTop,
          flexWrap,
          width,
          flexSrink,
          maxWidth,
        },
        rest.style
      ),
    })
  );
};
