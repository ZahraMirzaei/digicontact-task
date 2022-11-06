import { rest } from "msw";
import { server } from "./mocks/server";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("fetch contacts list from server in App", () => {
  test("should render digiContact heading", async () => {
    render(<App />);
    const digiContactText = await screen.findByRole("heading", {
      name: "digiContact",
    });
    expect(digiContactText).toBeInTheDocument();
  });

  test("handler error for request fail", async () => {
    server.resetHandlers(
      rest.get("https://randomuser.me/api/", (req, res, ctx) =>
        res(ctx.status(404))
      )
    );
    render(<App />);
    const errorMessage = await screen.findByText("Sorry, something went wrong");
    expect(errorMessage).toBeInTheDocument();
  });
});
