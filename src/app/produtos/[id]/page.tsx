type Produto = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
};

type PageParams = {
  params: {
    id: string;
  };
};

export default async function ProdutoPage({ params }: PageParams) {
  const response = await fetch(
    `https://api.origamid.online/produtos/${params.id}`
  );
  const data = (await response.json()) as Produto;
  return (
    <main>
      <h1>Produto</h1>
      <h2>R$ {data.preco}</h2>
      <p>{data.descricao}</p>
    </main>
  );
}
