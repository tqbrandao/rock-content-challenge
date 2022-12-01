import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import VideoDetails from "../Videos/VideoDetails";

describe("Video Details Component", () => {
  test("Should be visible on the screen", () => {
    const { getByTestId } = render(<VideoDetails />);
    expect(getByTestId("video-details")).toBeInTheDocument();
  });
});
