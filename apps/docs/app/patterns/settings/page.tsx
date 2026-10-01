import type { Metadata } from "next";
import { Prose } from "@/components/example";
import { SettingsPattern } from "@/components/patterns/settings";

export const metadata: Metadata = { title: "Settings" };

export default function Page() {
  return (
    <div className="max-w-3xl">
      <Prose>
        <h1>Settings</h1>
        <p>
          Perfil, equipe e billing da mesma organização. As abas trocam o
          mundo. Dentro de Geral, accordion agrupa o que é raro de mexer.
        </p>
      </Prose>
      <div className="mt-8">
        <SettingsPattern />
      </div>
    </div>
  );
}
