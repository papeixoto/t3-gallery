import { db } from "~/server/db";

// by default next will build the page just once and then serve it to the user
// this makes it so whe there's a change to the db it knows to rebuild the page
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  console.log(images);

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={`${image.id}-${index}`} className="flex w-48 flex-col">
            <img src={image.url} alt="gallery" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
