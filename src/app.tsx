import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import { GlobalStyles } from "./style/global-style";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import routes from "~react-pages";

console.log(routes);

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <GlobalStyles />
      {useRoutes(routes)}
    </Suspense>
  );
};

export default App;
