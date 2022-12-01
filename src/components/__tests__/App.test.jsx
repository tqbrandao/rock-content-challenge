import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "../../App";

describe("App Component", () => {
  test("Should be visible on the screen", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("app")).toBeInTheDocument();
  });
});
