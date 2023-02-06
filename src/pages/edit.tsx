import type { FC } from "react";

import { TextEditor } from "../components/editor";
import { Header } from "../components/header";

const Edit: FC = () => {
  return (
    <>
      <Header />
      <TextEditor />
    </>
  );
};

export default Edit;
