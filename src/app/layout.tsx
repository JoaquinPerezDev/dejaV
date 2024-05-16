import { ClerkProvider } from "@clerk/nextjs";
import TopNav from "./_components/topnav";
import { ThemeProvider } from "./_components/theme-provider";

export const metadata = {
  title: "Echo",
  description: "Created to help you remember important things!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TopNav />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
