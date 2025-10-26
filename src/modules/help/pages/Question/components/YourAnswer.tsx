export function YourAnswer() {
  return (
    <section aria-label="sua resposta" className="rounded-xl border border-content-shape-quaternary bg-content-shape-secondary p-4 sm:p-6">
      <h2 className="mb-3 text-base font-semibold">Sua resposta</h2>
      <div className="h-72 rounded-lg border border-content-shape-quaternary bg-content-shape-primary" />
      <div className="mt-4 flex justify-end">
        <button className="rounded-md bg-green-hard px-4 py-2 text-sm text-content-primary">Responder</button>
      </div>
    </section>
  )
}
