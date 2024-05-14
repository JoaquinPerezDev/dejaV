import { db } from "~/server/db";

export default async function HomePage() {
  const notes = await db.query.notes.findMany();

  return (
    <main className="flex flex-wrap">
      {notes.map((note) => (
        <div
          key={note.id}
          className="flex flex-grow flex-col justify-center gap-4"
        >
          <div className="flex flex-wrap justify-center">{note.name}</div>
          <div className="flex flex-wrap justify-center">{note.text}</div>
        </div>
      ))}
    </main>
  );
}
