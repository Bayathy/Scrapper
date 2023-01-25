import type { FC } from "react";

import { Header } from "../components/header";
import { Tabs } from "../components/tabs";

import type { TabItemProps } from "../components/tabs";

const tabProps: TabItemProps[] = [
  { tabLabel: "Tab1", href: "/", id: 1 },
  { tabLabel: "Tab2", href: "/login", id: 2 },
];

const App: FC = () => {
  return (
    <>
      <Header />
      <nav>
        <Tabs tabItems={tabProps} />
      </nav>
      <main>
        <p>hello world</p>
      </main>
    </>
  );
};

export default App;
