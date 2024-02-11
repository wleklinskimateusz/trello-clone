import { ReactNode } from "react";
import { Navbar } from "./_components/navbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full ">
      <Navbar />
      {children}
    </div>
  );
}
