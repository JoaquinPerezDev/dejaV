// import { db } from "~/server/db";

import { SignedIn, SignedOut } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <h1 className="h-full w-full text-center text-2xl">Welcome to Echo!</h1>
      </SignedOut>
      <SignedIn>
        <h1 className="h-full w-full text-center text-2xl">
          Notes / Reminders
        </h1>
      </SignedIn>
    </main>
  );
}
