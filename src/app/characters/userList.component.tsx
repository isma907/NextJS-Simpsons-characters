'use client'
import CharacterCard from "@/components/CharacterCard";
import { SimpsonCharacter } from "@/interfaces";
import { Grid } from "@mui/material";
import styles from "../page.module.css";

export default async function UserList({
  users,
}: {
  users: Promise<SimpsonCharacter[]>;
}) {
  const data = await users;
  return (
    <>
      {data?.map((item) => (
        <Grid item key={item._id} xs={6} md={3} lg={2}>
          <CharacterCard data={item} className={styles.card_list_item} />
        </Grid>
      ))}
    </>
  );
}
