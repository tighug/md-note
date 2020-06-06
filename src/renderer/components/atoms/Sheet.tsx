import React, { ReactNode } from "react";
import classnames from "classnames";
import styled from "styled-components";
import { color, Dp, boxShadow } from "../../utils/Converter";
import ITheme from "../../theme/ITheme";

export interface SheetProps {
  /** コンポーネントの中身 */
  children?: ReactNode;
  /** テーマ */
  theme?: ITheme;

  /** 色 */
  color?: string;
  /** 高度 */
  dp?: Dp;
  /** 幅 */
  width?: string;
  /** 幅の最大値 */
  maxWidth?: string;
  /** 幅の最小値 */
  minWidth?: string;
  /** 高さ */
  height?: string;
  /** 高さの最大値 */
  maxHeight?: string;
  /** 高さの最小値 */
  minHeight?: string;
  /** ボーダーを角張らせる */
  tile?: boolean;

  className?: string;
}

export default function Sheet({
  children,
  tile = false,
  ...props
}: SheetProps) {
  const className = classnames(props.className, { tile });

  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div.attrs((props: SheetProps) => ({
  boxShadow: boxShadow(props.dp),
  color: color(props.color || "primary", props.theme),
}))<SheetProps>`
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  min-height: ${(props) => props.maxHeight};
  color: ${(props) => props.theme.color.text.primary};
  background-color: ${(props) => props.color};
  border-radius: 4px;
  box-shadow: ${(props) => props.boxShadow};
`;
