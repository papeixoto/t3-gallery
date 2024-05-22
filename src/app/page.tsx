import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

// by default next will build the page just once and then serve it to the user
// this makes it so whe there's a change to the db it knows to rebuild the page
export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <div className="flex flex-wrap gap-4">
      {[...images, ...images, ...images].map((image, index) => (
        <div key={`${image.id}-${index}`} className="flex w-48 flex-col">
          <img src={image.url} alt="gallery" />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
