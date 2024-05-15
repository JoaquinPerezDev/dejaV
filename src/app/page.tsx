import { db } from "~/server/db";

export default async function HomePage() {
  return (
    <main className="flex flex-wrap">
      <h1 className="title align-items flex">Welcome to Echo!</h1>
    </main>
  );
}
