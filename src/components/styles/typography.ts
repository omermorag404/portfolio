import styled from "styled-components";
import textSize from "../sizes/textSize";
import colors from "./colors";

export type Title = {
  textSize?: string;
  color?: string;
  fontFamily?: string;
};
export const H1 = styled.h1`
  color: ${(props: any) => props.color || colors.text};
  font-size: ${(props: Title) => props.textSize || textSize.xxl};
  font-family: ${(props: Title) => props.fontFamily || "Source Code Pro"};
  text-align: center;
  font-weight: 600;
  margin: 0;
  }
  
}
`;
export const H2 = styled(H1)`
  font-size: ${(props: Title) => props.textSize || textSize.xl};
`;
export const H3 = styled(H1)`
  font-size: ${(props: Title) => props.textSize || textSize.lg};
`;
export const H4 = styled(H1)`
  font-size: ${(props: Title) => props.textSize || textSize.md};
`;
export const H5 = styled(H1)`
  font-size: ${(props: Title) => props.textSize || textSize.sm};
`;
export const H6 = styled(H1)`
  font-size: ${(props: Title) => props.textSize || textSize.xs};
`;
export const P = styled.p<Title | HTMLParagraphElement>`
  font-size: ${(props: Title) => props.textSize || textSize.sm};
  color: ${(props: Title) => props.color || colors.text};
  font-family: ${(props: Title) => props.fontFamily || "Source Code Pro"};
  margin: 0;
  word-break: "break-all";
`;
export const Pbold = styled(P)`
  font-weight: 600;
  color: ${(props: any) => props.color || colors.text};
`;
export const Crossed = styled(P)`
  font-weight: 300;
  color: ${(props: any) => props.color || colors.text};
  text-decoration: line-through;
`;
export const Label = styled(P)`
font-size=${textSize.xs};
color:${colors.text}
`;
