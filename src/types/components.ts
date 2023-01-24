import type { JSXElementConstructor } from "react";

import type { CSSInterpolation } from "@emotion/serialize";

export type Component<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>
> = {
  children?: React.ReactNode;
  cx?: CSSInterpolation;
} & React.ComponentProps<T>;
