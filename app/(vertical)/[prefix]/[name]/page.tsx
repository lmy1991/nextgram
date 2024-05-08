export default function Page({ params }: { params: { name: string } }) {
  return <div className="card">{params.name}</div>
}
