import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import VideoInfo from "../Videos/VideoInfo";

describe("Video Info Component", () => {
  test("Should be visible on the screen", () => {
    const { getByTestId } = render(<VideoInfo />);
    expect(getByTestId("video-info")).toBeInTheDocument();
  });
});
