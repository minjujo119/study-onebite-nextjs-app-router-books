import "./globals.css";
import Link from "next/link";
import style from "./layout.module.css";
import { BookData } from "@/types";

async function Footer() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`);
  if (!res.ok) {
    return <div>오류발생</div>;
  }
  const books: BookData[] = await res.json();
  const bookCount = books.length;
  return <footer>{`제작 @winterlood / 총 ${bookCount}권`}</footer>;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>📚 ONEBITE BOOKS</Link>
          </header>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
