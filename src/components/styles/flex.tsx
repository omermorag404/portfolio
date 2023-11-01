import React from "react";

export type FlexProps = {
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
  gap?: string | number;
  height?: string;
  maxHeight?: string;
  overflowY?: string;
  position?: string;
  top?: string;
  Bottom?: string;
  right?: string;
  borderRadius?: string;
  padding?: string;
  backgroundColor?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  flexWrap?: string | any;
  flexPack?: string | any;
  width?: string;
  style?: string | any;
  children?: string | any;
  className?: any;
  flexSrink?: string;

  // rest: any;
};

export const Flex = ({
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
  // className,

  ...rest
}: FlexProps) => (
  <div
    {...rest}
    style={{
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
      // className,

      ...rest.style,
    }}
  />
);
