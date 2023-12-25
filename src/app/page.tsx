import Link from "next/link";

export default async function Home() {
  return (
    <>
      <h1>HOMEPAGE</h1>
      <Link href="/characters">Personajes</Link>
    </>
  );
}
