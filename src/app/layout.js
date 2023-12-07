import Head from "next/head";
import { Providers } from "./providers";

export const metadata = {
  title: "Bubble",
  description: "Generated by create next app",
  favicon: '/assets/icons/favicon.ico',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link rel="icon" href={metadata.favicon} />
    <title>{metadata.title}</title>
    </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
