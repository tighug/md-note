import ITheme from "../theme/ITheme";

export function fontSize(size?: Size): string {
  switch (size) {
    case "xs":
      return "10px";
    case "sm":
      return "12px";
    case "md":
      return "14px";
    case "lg":
      return "16px";
    case "xl":
      return "18px";
    default:
      return "14px";
  }
}

export type Dp = 0 | 1 | 2 | 3 | 4 | 6 | 8 | 9 | 12 | 16 | 24;

/**
 * See https://gist.github.com/serglo/f9f0be9a66fd6755a0bda85f9c64e85f
 * @param dp
 */
export function boxShadow(dp?: Dp): string {
  switch (dp) {
    case 0:
      return "none";
    case 1:
      return "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)";
    case 2:
      return "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20)";
    case 3:
      return "0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.20)";
    case 4:
      return "0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20)";
    case 6:
      return "0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.20)";
    case 8:
      return "0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20)";
    case 9:
      return "0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12), 0 5px 6px -3px rgba(0,0,0,0.20)";
    case 12:
      return "0 12px 17px 2px rgba(0,0,0,0.14), 0 5px 22px 4px rgba(0,0,0,0.12), 0 7px 8px -4px rgba(0,0,0,0.20)";
    case 16:
      return "0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.20)";
    case 24:
      return "0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.20)";
    default:
      return "none";
  }
}

export function color(text?: string, theme?: ITheme): string | undefined {
  if (text === "primary") {
    return theme?.color.primary;
  } else if (text === "secondary") {
    return theme?.color.secondary;
  } else if (text === "normal") {
    return theme?.color.normal;
  } else {
    return text;
  }
}

export function bgColor(text?: string, theme?: ITheme): string | undefined {
  if (text === "primary") {
    return theme?.color.bg.primary;
  } else if (text === "secondary") {
    return theme?.color.bg.secondary;
  } else if (text === "disable") {
    return theme?.color.bg.disabled;
  } else {
    return text;
  }
}
