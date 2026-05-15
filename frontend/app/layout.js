import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/ui/themes";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Serving - AI Recipes Platform",
  description: "AI-powered recipe platform",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable}`}>
        <ClerkProvider appearance={{ theme: neobrutalism }}>
          <Header/>
          <main className="min-h-screen" >{children}</main>
          <footer className="py-8 px-4 border-t">
            <div className="max-w-6xl mx-auto flex justify-center items-center">
              <p className="text-shadow-stone-600 text-sm">
                Copyrights with
              </p>
            </div>
          </footer>
        </ClerkProvider>

      </body>

    </html>
  );
}
