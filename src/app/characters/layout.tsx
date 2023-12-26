"use client";
import AppHeader from "@/components/AppHeader";
import { Container, Grid } from "@mui/material";
import styles from "../page.module.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppHeader />
      <Container maxWidth="lg">
        <main className={styles.main} key={Math.random()}>
          <Grid container spacing={4}>
            {children}
          </Grid>
        </main>
      </Container>
    </>
  );
}
