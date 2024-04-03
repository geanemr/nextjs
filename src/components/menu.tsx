import { cookies } from "next/headers";
import Link from "next/link";

type Conta = {
  autorizado: boolean,
  usuario: string
}

export default async function Menu() {
  let conta: Conta = {
    autorizado: false,
    usuario: ''
  }
  const token = cookies().get('token')?.value;

  const response = await fetch('https://api.origamid.online/conta/perfil', {
    headers: {
      Authorization: "Bearer " + token
    },
  });
  if(response.ok) {
    conta = (await response.json()) as Conta
  }

  console.log({response})
  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/sobre">Sobre</Link>
      </li>
      <li>
        <Link href="/imc">Cálculo de IMC</Link>
      </li>
      <li>
        <Link href="/produtos">Produtos</Link>
      </li>
      <li>
        <Link href="/cursos">Cursos</Link>
      </li>
      <li>
        <Link href="/acoes">Ações</Link>
      </li>
      <li>
        {conta.autorizado ? conta.usuario : <Link href="/login">Login</Link> }
      </li>
    </ul>
  );
}
