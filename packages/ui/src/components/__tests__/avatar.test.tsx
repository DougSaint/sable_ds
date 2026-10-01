import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Avatar } from "../avatar";

describe("Avatar", () => {
  it("shows initials when there is no image", () => {
    render(<Avatar fallback="NL" aria-label="Norte Log" />);
    expect(screen.getByLabelText("Norte Log")).toHaveTextContent("NL");
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("renders an image when src is set", () => {
    render(
      <Avatar src="/face.png" alt="Ana" fallback="AN" />,
    );
    expect(screen.getByRole("img", { name: "Ana" })).toHaveAttribute(
      "src",
      "/face.png",
    );
  });
});
