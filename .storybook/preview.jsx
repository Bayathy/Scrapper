import createCache from "@emotion/cache";
import { CacheProvider, Global, css } from "@emotion/react";
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
  layout: "fullscreen"
};

export const decorators = [
  (Story) => (
    <CacheProvider value={cache}>
      <CustomProvider>
      <Global
        styles={css`
          * {
            padding: 0;
            margin: 0;
          }
        `}
      />
        <Story />
      </CustomProvider>
    </CacheProvider>
  ),
];
