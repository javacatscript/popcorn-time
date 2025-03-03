import "./globals.css";
import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("./components/Header", { ssr: false }));

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
