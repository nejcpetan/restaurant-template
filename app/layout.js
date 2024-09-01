import { Inter, WindSong } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navhero";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurant Template",
  description: "A template for static restaurant websites",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="black" lang="en">
      <head>
        <link rel="icon" href="app/favicon.ico" />
      </head>

      <body className="background-image {inter.className}">
        {children}
        <Footer />
        <script src="https://unpkg.com/taos@1.0.5/dist/taos.js"></script>
      </body>
    </html>
  );
}
