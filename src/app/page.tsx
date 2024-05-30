import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/1e30b137-206f-44d8-8b74-a770c9d04551-qxapln.jpg",
  "https://utfs.io/f/d16bf3f5-93f0-4215-98f7-b73f282c2d47-9gkyn.jpg",
  "https://utfs.io/f/2831c11c-1bc2-4947-b40e-b81e6c9a0885-pb2va3.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
        [...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ) )
      }</div>
    </main>
  );
}
