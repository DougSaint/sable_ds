import "@testing-library/jest-dom/vitest";
import "vitest-axe/extend-expect";
import { expect } from "vitest";
import * as matchers from "vitest-axe/matchers";

expect.extend(matchers);

if (!globalThis.ResizeObserver) {
  globalThis.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as typeof ResizeObserver;
}

Element.prototype.scrollIntoView ??= () => {};
