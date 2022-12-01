import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import VideoItem from "../Videos/VideoItem";

describe("Video Info Component", () => {
  test("Should be visible on the screen", () => {
    const { getByTestId } = render(<VideoItem />);
    expect(getByTestId("video-item")).toBeInTheDocument();
  });
});
