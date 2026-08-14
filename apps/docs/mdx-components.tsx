import type { MDXComponents } from "mdx/types";
import { Example, Prose } from "@/components/example";
import { DoDont, Keyboard, Snippet } from "@/components/docs-blocks";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }) => <Prose>{children}</Prose>,
    Example,
    DoDont,
    Keyboard,
    Snippet,
    ...components,
  };
}
