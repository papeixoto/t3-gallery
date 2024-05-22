import FullPageImageView from "~/_components/full-image-page";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (isNaN(idAsNumber)) throw new Error("Invalid ID");

  return <FullPageImageView id={idAsNumber} />;
}
