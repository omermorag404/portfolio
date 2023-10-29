import React from "react";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
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
export var Flex = function (_a) {
  var flexDirection = _a.flexDirection,
    alignItems = _a.alignItems,
    justifyContent = _a.justifyContent,
    gap = _a.gap,
    height = _a.height,
    maxHeight = _a.maxHeight,
    overflowY = _a.overflowY,
    position = _a.position,
    top = _a.top,
    Bottom = _a.Bottom,
    right = _a.right,
    borderRadius = _a.borderRadius,
    padding = _a.padding,
    backgroundColor = _a.backgroundColor,
    marginLeft = _a.marginLeft,
    marginRight = _a.marginRight,
    marginTop = _a.marginTop,
    flexWrap = _a.flexWrap,
    flexPack = _a.flexPack,
    width = _a.width,
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
    ]);
  return React.createElement(
    "div",
    __assign({}, rest, {
      style: __assign(
        {
          display: "flex",
          flexDirection: flexDirection,
          justifyContent: justifyContent,
          alignItems: alignItems,
          gap: gap,
          height: height,
          flexPack: flexPack,
          maxHeight: maxHeight,
          overflowY: overflowY,
          position: position,
          padding: padding,
          top: top,
          Bottom: Bottom,
          borderRadius: borderRadius,
          right: right,
          backgroundColor: backgroundColor,
          marginLeft: marginLeft,
          marginRight: marginRight,
          marginTop: marginTop,
          flexWrap: flexWrap,
          width: width,
        },
        rest.style
      ),
    })
  );
};
