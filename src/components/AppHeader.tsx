"use client";
import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { TextField } from "@mui/material";

export function AppHeader() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    term = term.trim();
    const newSearchParams = new URLSearchParams(searchParams);
    if (term) {
      newSearchParams.set("search", term);
      newSearchParams.set("page", "1");
    } else {
      newSearchParams.delete("search");
      newSearchParams.delete("page");
    }

    const newSearchString = newSearchParams.toString();
    const mainFilter = `${newSearchString}`;
    const newUrl = pathName.startsWith("/characters")
      ? `${pathName}?${mainFilter}`
      : `/characters?${mainFilter}`;

    replace(newUrl);
  }, 1000);

  return (
    <TextField
      id="filled-basic"
      label="Buscar"
      variant="filled"
      placeholder="Buscar"
      onChange={(event) => handleSearch(event?.target.value)}
      defaultValue={searchParams.get("search")?.toString() || ""}
      style={{ marginBottom: 30 }}
    />
  );
}
