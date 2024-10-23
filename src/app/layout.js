import "./globals.css";

export const metadata = {
  title: "Open Design Solutions",
  description: "Open Design Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/tep1yqt.css" />
      </head>

      <body className="bg-dark-green px-4 xl:px-28 scroll-smooth">
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
