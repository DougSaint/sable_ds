"use client";

import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@sable/ui";
import { Sidebar } from "./sidebar";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Abrir navegação"
        >
          <svg viewBox="0 0 16 16" className="size-4" aria-hidden>
            <path
              fill="currentColor"
              d="M2 3.5h12v1.25H2V3.5Zm0 4h12v1.25H2V7.5Zm0 4h12V12.75H2V11.5Z"
            />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="top-0 left-0 flex h-full max-h-none w-[min(100%,20rem)] max-w-none translate-x-0 translate-y-0 flex-col rounded-none border-y-0 border-l-0 p-4">
        <DialogTitle className="mb-4 text-sm">Navegação</DialogTitle>
        <div className="min-h-0 flex-1">
          <Sidebar onNavigate={() => setOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
