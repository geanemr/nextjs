import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Origamid Next",
  description: "Criado para o curso de NextJS da Origamid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
