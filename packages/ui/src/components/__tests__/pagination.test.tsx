import { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { getPaginationItems, Pagination } from "../pagination";

function Harness({ pageCount = 3 }: { pageCount?: number }) {
  const [page, setPage] = useState(1);
  return (
    <Pagination
      page={page}
      pageCount={pageCount}
      onPageChange={setPage}
      summary={`${page} de ${pageCount}`}
    />
  );
}

describe("getPaginationItems", () => {
  it("lists every page when count is small", () => {
    expect(getPaginationItems(1, 3)).toEqual([1, 2, 3]);
  });

  it("inserts ellipsis on long ranges", () => {
    expect(getPaginationItems(1, 12)).toEqual([
      1,
      2,
      3,
      "ellipsis",
      12,
    ]);
    expect(getPaginationItems(6, 12)).toContain("ellipsis");
  });
});

describe("Pagination", () => {
  it("moves forward and back", async () => {
    const user = userEvent.setup();
    render(<Harness />);

    expect(screen.getByRole("button", { name: "Página 1" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByRole("button", { name: "Página anterior" })).toBeDisabled();

    await user.click(screen.getByRole("button", { name: "Próxima página" }));
    expect(screen.getByRole("button", { name: "Página 2" })).toHaveAttribute(
      "aria-current",
      "page",
    );

    await user.click(screen.getByRole("button", { name: "Página anterior" }));
    expect(screen.getByRole("button", { name: "Página 1" })).toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  it("hides controls when there is a single page", () => {
    render(
      <Pagination page={1} pageCount={1} onPageChange={() => {}} summary="3 itens" />,
    );
    expect(screen.queryByRole("button", { name: "Próxima página" })).not.toBeInTheDocument();
    expect(screen.getByText("3 itens")).toBeInTheDocument();
  });
});
