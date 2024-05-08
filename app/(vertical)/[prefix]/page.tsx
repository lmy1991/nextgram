import Link from "next/link";

export default function Page({ params }: { params: { prefix: string } }) {
  let photos = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section className="cards-container">
      <Link className="card" href="/">home</Link>
      {photos.map((id) => (
        <Link className="card" key={id} href={`/${params.prefix}/${id}`} passHref>
          {id}
        </Link>
      ))}
    </section>
  );
}