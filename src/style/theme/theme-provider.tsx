import { ThemeProvider } from "@emotion/react";
import type { FC, PropsWithChildren } from "react";

import { theme } from "./theme";

export const CustomProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
