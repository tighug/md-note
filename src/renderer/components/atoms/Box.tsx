import React, { ReactNode } from "react";
import styled from "styled-components";
import { Dp, boxShadow } from "../../utils/Converter";

type Display = "none" | "block" | "inline" | "inline-block" | "flex";
type Overflow = "visible" | "hidden" | "scroll" | "auto";
type TextOverflow = "clip" | "ellipsis";
type Visibility = "visible" | "hidden" | "collapse";
type WhiteSpace =
  | "normal"
  | "nowrap"
  | "pre"
  | "pre-wrap"
  | "pre-line"
  | "break-spaces";

// TODO: PropsのDescriptionを追加
interface DisplayProps {
  display?: Display;
  overflow?: Overflow;
  textOverflow?: TextOverflow;
  visibility?: Visibility;
  whiteSpace?: WhiteSpace;
}

interface SpacingProps {
  pa?: number;
  px?: number;
  py?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;

  ma?: number;
  mx?: number;
  my?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
}

interface BorderProps {
  border?: number;
  borderTop?: number;
  borderRight?: number;
  borderBottom?: number;
  borderLeft?: number;

  borderColor?: string;
  borderStyle?: string;
  borderRadius?: string;
}

interface SizingProps {
  width?: string | number;
  maxWidth?: string;
  minWidth?: string;
  height?: string;
  maxHeight?: string;
  minHeight?: string;
}

type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
type JustifyContent =
  | "start"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
type AlignItems = "stretch" | "center" | "start" | "end";
type AlignContent = "start" | "center" | "space-between" | "space-around";
type AlignSelf = "stretch" | "center" | "start" | "end";

interface FlexProps {
  flex?: number;
  flexDirection?: FlexDirection;
  flexGrow?: number;
  flexShrink?: number;
  flexWrap?: FlexWrap;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  alignContent?: AlignContent;
  alignSelf?: AlignSelf;
  order?: number;
}

interface PaletteProps {
  color?: string;
  bgColor?: string;
}

type Position = "static" | "relative" | "absolute" | "fixed" | "sticky";

interface PositionProps {
  position?: Position;
  zIndex?: number;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

interface ShadowProps {
  dp?: Dp;
}

type FontWeight = "normal" | "bold" | "bolder" | "lighter" | number;
type TextAlign = "left" | "right" | "center" | "justify";

interface TypographyProps {
  fontSize?: number;
  fontStyle?: string;
  fontWeight?: FontWeight;
  letterSpacing?: string;
  lineHeight?: string | number;
  textAlign?: TextAlign;
}

interface BoxProps
  extends FlexProps,
    PositionProps,
    SizingProps,
    SpacingProps,
    PaletteProps,
    DisplayProps,
    BorderProps,
    ShadowProps,
    TypographyProps {}

interface Props extends BoxProps {
  children?: ReactNode;
}

export default function Box(props: Props) {
  return <Wrapper {...props}>{props.children}</Wrapper>;
}

Box.defaultProps = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,

  border: 0,
  borderStyle: "solid",
};

const Wrapper = styled.div<BoxProps>`
  /* Position */
  position: ${(props) => props.position};
  top: ${(props) => props.top}px;
  right: ${(props) => props.right}px;
  bottom: ${(props) => props.bottom}px;
  left: ${(props) => props.left}px;
  z-index: ${(props) => props.zIndex};

  display: ${(props) => props.display};

  /* Flex */
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => props.flexDirection};
  flex-grow: ${(props) => props.flexGrow};
  flex-shrink: ${(props) => props.flexShrink};
  flex-wrap: ${(props) => props.flexWrap};
  align-content: ${(props) => props.alignContent};
  align-items: ${(props) => props.alignItems};
  align-self: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  order: ${(props) => props.order};

  /* Sizing */
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};

  /* Spacing */
  padding: ${(props) => props.pa}px;
  padding-top: ${(props) => props.pt}px;
  padding-right: ${(props) => props.pr}px;
  padding-bottom: ${(props) => props.pb}px;
  padding-left: ${(props) => props.pl}px;
  margin: ${(props) => props.ma}px;
  margin-top: ${(props) => props.mt || props.my}px;
  margin-right: ${(props) => props.mr || props.mx}px;
  margin-bottom: ${(props) => props.mb || props.my}px;
  margin-left: ${(props) => props.ml || props.mx}px;

  /* Display & Palette & Typography */
  overflow: ${(props) => props.overflow};
  font-size: ${(props) => props.fontSize};
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color || props.theme.color.text.primary};
  text-align: ${(props) => props.textAlign};
  text-overflow: ${(props) => props.textOverflow};
  letter-spacing: ${(props) => props.letterSpacing};
  white-space: ${(props) => props.whiteSpace};
  visibility: ${(props) => props.visibility};
  background-color: ${(props) => props.bgColor || "transparent"};

  /* Border */
  border-color: ${(props) =>
    props.borderColor || props.theme.color.bg.disabled};
  border-style: ${(props) => props.borderStyle};
  border-width: ${(props) => props.border}px;
  border-top-width: ${(props) => props.borderTop}px;
  border-right-width: ${(props) => props.borderRight}px;
  border-bottom-width: ${(props) => props.borderBottom}px;
  border-left-width: ${(props) => props.borderLeft}px;
  border-radius: ${(props) => props.borderRadius};

  /* Shadow */
  box-shadow: ${(props) => boxShadow(props.dp)};
`;
