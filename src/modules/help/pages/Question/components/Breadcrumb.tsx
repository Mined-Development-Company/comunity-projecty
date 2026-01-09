import Link from "next/link";

export function Breadcrumb() {
  return (
    <nav aria-label="breadcrumb" className="mb-4 text-sm text-content-tertiary">
      <ol className="flex flex-wrap items-center gap-1">
        <Link href={'/help'}><span className="hover:underline">Lista de perguntas</span></Link>
        <li aria-hidden="true" className="px-1">&gt;</li>
        <li className="text-green-hard font-bold">Pergunta</li>
      </ol>
    </nav>
  )
}
