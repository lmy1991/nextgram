import Link from "next/link";

export default function Page() {
  return (
    <section className="cards-container">
      <Link className="card" href={`/search/123`} >search</Link>
      <Link className="card" href={`/list`} >list</Link>
    </section>
  );
}
