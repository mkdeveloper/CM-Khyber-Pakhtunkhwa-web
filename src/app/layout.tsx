import "./globals.css";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "CM KP Initiative for Generative AI and Cloud Computing",
  description: "A Nation Building Program of Government of Khyber Pakhtunkhwa",
  icons: {
    icon: { url: "/kpk/kp_logo.png", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen antialiased", montserrat.className)}>
        <div className="print:hidden">
          <Header />
        </div>
        {children}
        <div className="print:hidden">
          <Footer />
        </div>
        <Toaster richColors />
      </body>
    </html>
  );
}
