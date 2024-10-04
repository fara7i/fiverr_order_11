import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import {NextUIProvider} from "@nextui-org/react";

import "./globals.scss";

export const metadata: Metadata = {
  title: "Meet Black",
  description: "a landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          // enableSystem
          // disableTransitionOnChange
        >
          <NextUIProvider>
            {children}
          </NextUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
