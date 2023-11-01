import styled from "styled-components";
import textSize from "../sizes/textSize";
import colors from "./colors";
export const H1 = styled.h1 `
  color: ${(props) => props.color || colors.text};
  text-align: center;
  font-size: ${(props) => props.textSize || textSize.xxl};
  font-weight: 600;
  margin: 0;
  }
  
}
`;
export const H2 = styled(H1) `
  font-size: ${(props) => props.textSize || textSize.xl};
`;
export const H3 = styled(H1) `
  font-size: ${(props) => props.textSize || textSize.lg};
`;
export const H4 = styled(H1) `
  font-size: ${(props) => props.textSize || textSize.md};
`;
export const H5 = styled(H1) `
  font-size: ${(props) => props.textSize || textSize.sm};
`;
export const H6 = styled(H1) `
  font-size: ${(props) => props.textSize || textSize.xs};
`;
export const P = styled.p `
  font-size: ${(props) => props.textSize || textSize.sm};
  color: ${(props) => props.color || colors.text};
  margin: 0;
  font-family: Source Code Pro;
  word-break: "break-all";
`;
export const Pbold = styled(P) `
  font-weight: 600;
  color: ${(props) => props.color || colors.text};
`;
export const Crossed = styled(P) `
  font-weight: 300;
  color: ${(props) => props.color || colors.text};
  text-decoration: line-through;
`;
export const Label = styled(P) `
font-size=${textSize.xs};
color:${colors.text}
`;
