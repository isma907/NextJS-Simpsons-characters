import dbConnect from "../lib/mongodb";
import Character from "../models/Character";
import CharacterCard from "./components/CharacterCard";
import Paginator from "./components/Paginator";

export const dynamic = "force-dynamic";

export default async function Home(props: {
  searchParams?: Promise<{ q?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const q = searchParams?.q || "";
  const page = parseInt(searchParams?.page || "1", 10);
  const limit = 20;

  await dbConnect();

  const query = q ? { name: { $regex: q, $options: "i" } } : {};

  const total = await Character.countDocuments(query);
  const totalPages = Math.ceil(total / limit);

  const characters = await Character.find(query)
    .skip((page - 1) * limit)
    .limit(limit)
    .lean();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 pb-4  flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Characters</h1>
        <div className="text-sm text-muted">
          Showing {characters.length} of {total} results
        </div>
      </div>

      {characters.length > 0 ? (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {characters.map((char: any) => (
              <CharacterCard key={char._id.toString()} character={char} />
            ))}
          </div>
          <Paginator totalPages={totalPages} />
        </>
      ) : (
        <div className="py-12 card text-center text-black">
          No characters found.
        </div>
      )}
    </div>
  );
}
