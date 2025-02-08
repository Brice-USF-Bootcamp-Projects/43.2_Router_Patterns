// src/app/layout.js

import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <nav className="bg-blue-500 p-4 text-white">
          <Link href="/dogs" className="text-lg font-bold">🐶 Dog Finder</Link>
        </nav>
        <main className="max-w-4xl mx-auto py-6">{children}</main>
      </body>
    </html>
  );
}
