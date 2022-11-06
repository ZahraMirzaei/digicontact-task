import { DefaultBodyType, PathParams, rest } from "msw";
import { IServerResponse } from "../api/responseInterfaces";
import { response } from "./data";

export const handlers = [
  rest.get("https://randomuser.me/api/", (req, res, ctx) => {
    return res(ctx.json(response));
  }),
];
