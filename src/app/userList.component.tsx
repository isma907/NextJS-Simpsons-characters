"use client";
import CharacterCard from "@/components/CharacterCard";
import { SimpsonCharacter, Sizes } from "@/interfaces";
import { Grid } from "@mui/material";

export default async function UserList({
  users,
  gridSettings,
}: {
  users: Promise<SimpsonCharacter[]>;
  gridSettings?: Sizes;
}) {
  const data = await users;
  return (
    <>
      {data?.map((item) => (
        <Grid
          item
          key={item._id}
          xs={gridSettings?.xs}
          md={gridSettings?.md}
          lg={gridSettings?.lg}
        >
          <CharacterCard key={item._id} data={item} />
        </Grid>
      ))}
    </>
  );
}
