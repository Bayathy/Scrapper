import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CustomProvider } from "../src/style/theme/theme-provider";

const cache = createCache({ prepend: true, key: "twin" });

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <CacheProvider value={cache}>
      <CustomProvider>
        <Story />
      </CustomProvider>
    </CacheProvider>
  ),
];
