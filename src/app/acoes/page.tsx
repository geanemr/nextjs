export default async function AcoesPage() {
  const response = await fetch("https://api.origamid.online/acoes/lua", {
    next: {
      revalidate: 5,
    },
  });
  const acao = (await response.json()) as {
    simbolo: string;
    atualizada: string;
  };
  return (
    <main>
      <h1>{acao.simbolo}</h1>
      <h2>{acao.atualizada}</h2>
    </main>
  );
}
