import { css, Global } from "@emotion/react";
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import routes from "~react-pages";
console.log(routes);

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Global
        styles={css`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
          body {
            min-height: 100vh;
          }
        `}
      />
      {useRoutes(routes)}
    </Suspense>
  );
};

export default App;
