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
          Perfil, equipe e billing da mesma organização. Em Notificações, o
          digest tem hora na pista — não num select de 15 opções.
        </p>
      </Prose>
      <div className="mt-8">
        <SettingsPattern />
      </div>
    </div>
  );
}
