import type { FC } from "react";

import axios from "axios";
import useSWR from "swr";

import { MenuCardList } from "../components/card-list";
import { Header } from "../components/header";
import { Tabs } from "../components/tabs";

import type { TabItemProps } from "../components/tabs";

const tabProps: TabItemProps[] = [
  { tabLabel: "Tab1", href: "/", id: 1 },
  { tabLabel: "Tab2", href: "/login", id: 2 },
];
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const App: FC = () => {
  const { data, isLoading } = useSWR("/list", fetcher);
  return (
    <>
      <Header />
      <Tabs tabItems={tabProps} />
      <main>{!isLoading && <MenuCardList cardList={data} />}</main>
    </>
  );
};

export default App;
