const mockUrls = [
  "https://utfs.io/f/5170dc2e-aaa4-4435-81c3-c0069ab5edbe-1zbfv.png",
  "https://utfs.io/f/abc34344-ee5f-4229-abfa-4ed7ffb62241-4yuf94.15.50-transformed.png",
  "https://utfs.io/f/4c19f4e2-3b5a-46d1-b9ae-143d75e942e6-4yuf94.16.37-transformed.png",
  "https://utfs.io/f/415b3a93-45ad-4ffa-bee4-1b5518ca510a-4yuf94.16.58-transformed.png",
  "https://utfs.io/f/2c484b7d-7398-4493-bc0a-fae55d946d2d-4yuf94.16.14-transformed.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="gallery" />
          </div>
        ))}
      </div>
    </main>
  );
}
