import { UserNav } from "./user-nav";
import { LanguageToggle } from "./language-toggle";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="ml-16 flex-1 min-h-screen bg-zinc-950">
        <Navbar />
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
