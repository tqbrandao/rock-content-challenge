import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import VideoList from "../Videos/VideoList";

describe("Video Info Component", () => {
  test("Should be visible on the screen", () => {
    const { getByTestId } = render(<VideoList />);
    expect(getByTestId("video-list")).toBeInTheDocument();
  });
});
