import Navigation from "./components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BIN",
  description: "Bimo Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body className="dark-mode">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
