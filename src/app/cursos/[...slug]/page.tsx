type PageParams = {
  params: {
    slugs: string[];
  };
};

export default function CursosPage({ params }: PageParams) {
  console.log(params);
  return (
    <main>
      <h1>Cursos</h1>
    </main>
  );
}
