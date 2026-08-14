"use client";

import { useEffect, useState } from "react";
import { Button } from "@sable/ui";

type Theme = "dark" | "light";
type Density = "comfortable" | "compact";

function apply(theme: Theme, density: Density) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.dataset.density = density;
  localStorage.setItem("sable-theme", theme);
  localStorage.setItem("sable-density", density);
}

export function ThemeControls() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [density, setDensity] = useState<Density>("comfortable");

  useEffect(() => {
    const t = (localStorage.getItem("sable-theme") as Theme | null) ?? "dark";
    const d =
      (localStorage.getItem("sable-density") as Density | null) ?? "comfortable";
    setTheme(t);
    setDensity(d);
    apply(t, d);
  }, []);

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="ghost"
        size="sm"
        aria-pressed={theme === "dark"}
        onClick={() => {
          const next = theme === "dark" ? "light" : "dark";
          setTheme(next);
          apply(next, density);
        }}
      >
        {theme === "dark" ? "Light" : "Dark"}
      </Button>
      <Button
        variant="ghost"
        size="sm"
        aria-pressed={density === "compact"}
        onClick={() => {
          const next = density === "comfortable" ? "compact" : "comfortable";
          setDensity(next);
          apply(theme, next);
        }}
      >
        {density === "comfortable" ? "Compact" : "Comfortable"}
      </Button>
    </div>
  );
}
