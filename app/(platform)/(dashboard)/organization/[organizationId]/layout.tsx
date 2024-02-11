import { ReactNode } from "react";
import { OrgControl } from "./_components/org-control";

export default function OrganizationIdLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
}
