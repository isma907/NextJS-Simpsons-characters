import Link from "next/link";

export default function CharacterCard({ character }: { character: any }) {
  const id = character._id ? character._id.toString() : "";

  return (
    <Link href={`/character/${id}`} className="block h-full">
      <div className="card card-hover flex flex-col h-full blured-bg">
        <div className="mb-4 flex items-center justify-center p-4">
          <img
            src={character.image}
            alt={character.name || "Character"}
            className="h-48 w-full object-contain"
            loading="lazy"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="card-title" title={character.name}>
              {character.name}
            </h3>
            <p
              className="text-sm text-gray-600 dark:text-gray-400 truncate"
              title={character.occupation}
            >
              {character.occupation || "Unknown"}
            </p>
          </div>
          <div className="flex items-center gap-2 mt-4 text-xs font-medium">
            <span
              className={
                character.status === "Vivo" || character.status === "Alive"
                  ? "text-green-600"
                  : "text-red-600"
              }
            >
              {character.status}
            </span>
            <span className="text-muted">|</span>
            <span className="text-gray-500">{character.gender}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
