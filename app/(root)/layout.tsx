import { Toaster } from "@/components/ui/toaster";

import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />

      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
      <Toaster />
    </main>
  );
}
