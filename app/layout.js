import localFont from "next/font/local";
import "./globals.css";
import Header from "@/fsd-2features/header/ui/header";
import Footer from "@/fsd-2features/footer/ui/footer";

const inter = localFont({
  src: "./fonts/Inter.ttf",
  weight: "100 900"
})

export const metadata = {
  title: "ANNONCE",
  description: "Test task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <main>
          <Header/>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
