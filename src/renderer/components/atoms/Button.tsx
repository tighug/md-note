import React, { ReactNode, MouseEventHandler } from "react";
import classnames from "classnames";
import styled from "styled-components";
import { fontSize, boxShadow, color } from "../../utils/Converter";
import Ripples from "./Ripples";
import ITheme from "../../theme/ITheme";

export interface ButtonProps {
  /** コンポーネントの中身 */
  children: ReactNode;
  /** テーマ */
  theme?: ITheme;
  /** アクティブ状態のCSS */
  activeCss?: string;

  /** 大きさ */
  size?: Size;
  /** 色 */
  color?: string;

  /** 横いっぱいに広げる */
  block?: boolean;
  /** shadowを消去する */
  depressed?: boolean;
  /** クリックを無効にする */
  disabled?: boolean;
  /** 丸いfloating-action-buttonにする */
  fab?: boolean;
  /** 丸いフラットアイコンを適用する */
  icon?: boolean;
  /** 背景を透明にし、細いボーダーラインを適用する */
  outlined?: boolean;
  /** 波紋エフェクトを適用する */
  ripple?: boolean;
  /** ボーダーを丸める */
  rounded?: boolean;
  /** 背景を透明にする */
  text?: boolean;
  /** ボーダーを角張らせる */
  tile?: boolean;

  /** クリックイベント */
  onClick?: MouseEventHandler;
}

export default function Button({
  block = false,
  depressed = false,
  disabled = false,
  fab = false,
  icon = false,
  outlined = false,
  ripple = true,
  rounded = false,
  tile = false,
  text = false,
  ...props
}: ButtonProps) {
  const className = classnames({
    block,
    depressed,
    disabled,
    fab,
    icon,
    outlined,
    rounded,
    text,
    tile,
  });

  return (
    <Ripples ripple={ripple}>
      <Wrapper className={className} {...props}>
        {props.children}
      </Wrapper>
    </Ripples>
  );
}

const Wrapper = styled.button.attrs((props: ButtonProps) => ({
  size: props.size || "md",
  color: color(props.color, props.theme),
}))<ButtonProps>`
  position: relative;
  display: flex;
  justify-content: center;
  height: calc(4em - 20px);
  padding: 0 1.2em;
  overflow: hidden;
  font-size: ${(props) => fontSize(props.size)};
  color: ${(props) => props.theme.color.text.primary};
  text-transform: uppercase;
  letter-spacing: 0.09em;
  background-color: ${(props) => props.color || props.theme.color.normal};
  border: 1px none;
  border-radius: 4px;
  box-shadow: ${boxShadow(2)};

  &:focus {
    outline: none;
  }

  &:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.1s cubic-bezier(0.4, 0, 0.6, 1);
  }

  &:hover:before {
    opacity: 0.2;
  }

  &.block {
    width: 100%;
  }
  &.depressed {
    box-shadow: ${boxShadow(0)};
  }
  &.disabled {
    color: ${(props) => props.theme.color.text.disabled} !important;
    pointer-events: none !important;
    background-color: ${(props) => props.theme.color.bg.disabled} !important;
    box-shadow: ${boxShadow(0)} !important;
  }
  &.fab {
    width: 4em;
    height: 4em;
    padding: 0;
    border-radius: 50%;
  }
  &.icon {
    width: calc(4em - 20px);
    padding: 0;
    color: ${(props) => props.color};
    background-color: transparent;
    border-radius: 50%;
    box-shadow: ${boxShadow(0)};
  }
  &.outlined {
    color: ${(props) => props.color || props.theme.color.text.primary};
    background-color: transparent;
    border-color: currentColor;
    border-style: solid;
    box-shadow: ${boxShadow(0)};
  }
  &.rounded {
    border-radius: 28px;
  }
  &.text {
    color: ${(props) => props.color || props.theme.color.text.primary};
    background-color: transparent;
    box-shadow: ${boxShadow(0)};
  }
  &.tile {
    border-radius: 0;
  }

  ${(props) => props.activeCss}
`;
