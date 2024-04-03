import { getAula } from "@/app/api/cursos";
import Link from "next/link";

type PageParams = {
  params: {
    curso: string;
    aula: string;
  };
};

export default async function AulaPage({params}: PageParams) {
    const aula = await getAula(params.curso, params.aula)
  return (
    <main>
        <Link href={`/cursos/${params.curso}`}>{params.curso}</Link>
      <h1>{aula.nome}</h1>
      <p>{aula.descricao}</p>
      <p>Tempo: {aula.tempo}</p>
    </main>
  );
}
