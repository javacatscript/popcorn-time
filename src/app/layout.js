import "./globals.css";
import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("./components/Header", { ssr: false }));

export const metadata = {
  title: "Popcorn Time",
  description: "Discover trending movies and explore more!",
  icons: {
    icon: "🍿", // make it in .ico format
  },
};

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
