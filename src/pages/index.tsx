import type { FC } from "react";

import { css } from "@emotion/react";
import { Icon } from "@iconify/react";
import axios from "axios";
import useSWR from "swr";

import { StyledButton } from "../components/button/button";
import { MenuCardList } from "../components/card-list";
import { Header } from "../components/header";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const App: FC = () => {
  const { data, isLoading } = useSWR("/list", fetcher);

  return (
    <>
      <Header />
      <main
        css={css`
          padding-inline: 1rem;
        `}
      >
        <h1
          css={css`
            margin-top: 1rem;
            margin-bottom: 1rem;
            color: gray;
          `}
        >
          スクラップ一覧
        </h1>
        {!isLoading && <MenuCardList cardList={data} />}
        <StyledButton
          css={css`
            padding: 0;
            height: 4rem;
            width: 4rem;
            border: black solid 3px;
            border-radius: 999px;
            position: fixed;
            right: 1rem;
            bottom: 2rem;
          `}
          aria-label="ページの追加"
        >
          <Icon width="inherit" icon="ri:add-fill" />
        </StyledButton>
      </main>
    </>
  );
};

export default App;
