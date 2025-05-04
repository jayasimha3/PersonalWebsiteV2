import "../index.css"

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
          <div id="root">{children}</div>
        </body>
      </html>      
    )
  }