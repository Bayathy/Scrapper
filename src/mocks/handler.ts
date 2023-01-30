import { rest } from "msw";

export const handlers = [
  rest.get("/list", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: "title1",
        },
        {
          id: 2,
          title: "title2",
        },
        {
          id: 3,
          title: "title3",
        },
      ])
    );
  }),
];
