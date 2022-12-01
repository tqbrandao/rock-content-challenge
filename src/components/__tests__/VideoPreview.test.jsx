import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import VideoPreview from "../Videos/VideoPreview";

describe("Video Info Component", () => {
  test("Should be visible on the screen", () => {
    const { getByTestId } = render(<VideoPreview />);
    expect(getByTestId("video-preview")).toBeInTheDocument();
  });
});
