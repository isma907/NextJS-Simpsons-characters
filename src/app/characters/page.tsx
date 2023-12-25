"use client";
import styles from "../page.module.css";
import { Grid } from "@mui/material";
import { searchUserParam } from "@/interfaces";
import { getUsers } from "@/services";
import CharacterListSkeleton from "@/components/CharacterListSkeleton";
import UserList from "./userList.component";
import { Suspense } from "react";

export default function UsersPage({
  searchParams,
}: {
  searchParams?: searchUserParam;
}) {
  const fetchUsers = getUsers({
    search: searchParams?.search ?? "",
    page: 1,
  });

  return (
    <main className={styles.main} key={Math.random()}>
      <Grid container spacing={4}>
        <Suspense fallback={<CharacterListSkeleton />}>
          <UserList users={fetchUsers} />
        </Suspense>
      </Grid>
    </main>
  );
}
