import Link from "next/link";

export default function Page({ params }: { params: { keyword: string } }) {
  return (
    <section className="cards-container">
      <Link className="card" href="/">home</Link>
      <Link className="card" href="/list/1">details</Link>
      <div className="card">keyword：{params.keyword}</div>
    </section>
  )
}