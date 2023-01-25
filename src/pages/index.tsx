import type { FC } from "react";

import { Tabs } from "../components/Tab";
import { Header } from "../components/header";

import type { TabItemProps } from "../components/Tab";

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
