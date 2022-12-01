import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Header from "../Layout/Header";

describe("Header Component", () => {
  test("Should be visible on the screen", () => {
    const { getByPlaceholderText } = render(<Header />);
    expect(getByPlaceholderText("Type an artist or band")).toBeInTheDocument();
  });
});
