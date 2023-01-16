import type { CSSInterpolation } from "@emotion/serialize";
import type { JSXElementConstructor } from "react";

export type Component<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>
> = {
  children?: React.ReactNode;
  css?: CSSInterpolation;
} & React.ComponentProps<T>;
