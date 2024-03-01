"use client";
import { searchUserParam } from "@/interfaces";
import { getUsers } from "@/services";
import { Suspense } from "react";
import UserList from "./userList.component";
import CharacterListSkeleton from "@/components/CharacterListSkeleton";

export default function UsersPage({
  searchParams,
}: {
  searchParams?: searchUserParam;
}) {
  const fetchUsers = getUsers({
    search: searchParams?.search ?? "",
    page: 1,
  });

  const gridSettings = {
    xs: 6,
    md: 3,
    lg: 3,
  };

  return (
    <Suspense
      key={Math.random()}
      fallback={<CharacterListSkeleton gridSettings={gridSettings} />}
    >
      <UserList users={fetchUsers} gridSettings={gridSettings} />
    </Suspense>
  );
}
