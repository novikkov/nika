import type { Metadata } from "next";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nika",
  description: "Транспортная компания",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <NavBar />
        <div style={{ flex: 1, marginTop: "80px" }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
