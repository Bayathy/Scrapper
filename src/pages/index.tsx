import type { FC } from "react";
import { Header } from "../components/header";

const App: FC = () => {
  return (
    <>
      <Header />
      <main>
        <p>hello world</p>
      </main>
    </>
  );
};

export default App;
