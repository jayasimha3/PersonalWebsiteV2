import type { Metadata } from "next";
import { Navbar, Footer } from "./common/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rishee Jayasimha's Website",
  description: "Portfolio Website for Rishee Jayasimha",
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <div className="bg-dark d-flex flex-column h-100" data-bs-theme="dark">
            <Navbar></Navbar>
            <div id="root">{children}</div>
            {/* <div className="flex-grow-1"></div> */}
            <Footer></Footer>
          </div>
        </body>
      </html>      
    )
  }