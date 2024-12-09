import localFont from "next/font/local";
import "./globals.css";

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
          {children}
        </main>
      </body>
    </html>
  );
}
