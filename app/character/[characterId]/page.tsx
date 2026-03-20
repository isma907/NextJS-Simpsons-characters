import dbConnect from "../../../lib/mongodb";
import Character from "../../../models/Character";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function CharacterDetail(props: {
  params: Promise<{ characterId: string }>;
}) {
  const params = await props.params;
  const characterId = params.characterId;

  if (!characterId.match(/^[0-9a-fA-F]{24}$/)) {
    notFound();
  }

  await dbConnect();

  const character = await Character.findById(characterId).lean();

  if (!character) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Link
        href="/"
        className="text-blue-600 text-2xl hover:underline mb-6 inline-block"
      >
        &larr; Back to list
      </Link>

      <div className="card blured-bg flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3 p-4 flex justify-center rounded">
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-auto max-h-80 object-contain"
          />
        </div>

        <div className="flex-1  md:pl-8">
          <h1 className="text-2xl font-bold mb-1">{character.name}</h1>
          <p className="text-muted text-base mb-8">{character.occupation}</p>

          <table className="w-full text-left border-collapse text-sm">
            <tbody>
              <tr className="border-b ">
                <th className="py-3 text-gray-500 font-normal w-1/3">Status</th>
                <td className="py-3 font-medium">{character.status}</td>
              </tr>
              <tr className="border-b ">
                <th className="py-3 text-gray-500 font-normal w-1/3">Gender</th>
                <td className="py-3 font-medium">{character.gender}</td>
              </tr>
              <tr className="border-b ">
                <th className="py-3 text-gray-500 font-normal w-1/3">
                  Occupation
                </th>
                <td className="py-3 font-medium">
                  {character.occupation || "Unknown"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
