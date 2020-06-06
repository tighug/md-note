import React from "react";
import classnames from "classnames";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { color, fontSize } from "../../utils/Converter";
import ITheme from "../../theme/ITheme";

interface IconProps {
  icon: IconDefinition;
  iconSize?: Size;
  color?: string;
  /** テーマ */
  theme?: ITheme;
}

interface Props extends IconProps {
  left?: boolean;
  right?: boolean;
}

export default function Icon({
  icon,
  iconSize,
  color,
  left = false,
  right = false,
}: Props) {
  const className = classnames({ left, right });

  return (
    <Wrapper
      className={className}
      icon={icon}
      iconSize={iconSize}
      color={color}
    />
  );
}

const Wrapper = styled(FontAwesomeIcon).attrs((props: IconProps) => ({
  color: color(props.color, props.theme),
}))<IconProps>`
  font-size: ${(props) => fontSize(props.iconSize)};
  color: ${(props) => props.color};

  &.right {
    width: 1em;
    height: 1em;
    margin-right: -4px;
    margin-left: 8px;
  }

  &.left {
    width: 1em;
    height: 1em;
    margin-right: 8px;
    margin-left: -4px;
  }
`;
