import "./globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";

export const metadata = {
  title: "Popcorn Time",
  description: "Your weekly dose of movie magic!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
