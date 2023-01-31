import type { FC } from "react";

import { css } from "@emotion/react";
import { useEditor, EditorContent } from "@tiptap/react";
// eslint-disable-next-line import/no-named-as-default
import StarterKit from "@tiptap/starter-kit";

export const TextEditor: FC = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World!</p>",
  });

  return (
    <div>
      <EditorContent
        editor={editor}
        css={css`
          ::focus {
            outline: none;
          }
        `}
      />
    </div>
  );
};
