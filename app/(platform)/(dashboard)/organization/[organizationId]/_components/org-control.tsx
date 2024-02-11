"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useOrganizationList } from "@clerk/nextjs";

export const OrgControl = () => {
  const params = useParams();
  const { setActive } = useOrganizationList();

  useEffect(() => {
    if (!setActive) return;

    if (typeof params.organizationId !== "string") return;

    setActive({ organization: params.organizationId });
  }, [params.organizationId, setActive]);
  return null;
};
