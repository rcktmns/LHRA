import type { Metadata } from "next"
import "./globals.css"
import Navigation from "@/components/navigation"
import ClientLayout from "@/components/ClientLayout"
import { papyrus, lexend } from "./fonts"
import { PawPrint, Heart, Leaf, Feather } from "lucide-react";

export const metadata: Metadata = {
  title: "LionHeart Riding Academy",
  description: "Experience the elegance of English riding with safety as our number one priority.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${papyrus.variable} ${lexend.variable}`}>
      <head>
      <link rel="icon" href="/images/logo.png" type="image/png" sizes="32x32" />

        
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ClientLayout>{children}</ClientLayout>
        <footer className="bg-lhra-blue text-white py-4">
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-papyrus text-lg font-bold mb-2">LionHeart Riding Academy</h3>
              </div>
              <div className="flex flex-col items-end">
                <h3 className="font-papyrus text-lg font-bold mb-2">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="https://instagram.com/LionHeartRidingAcademy/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-lhra-yellow transition-colors">
                    Instagram
                  </a>
                  <a href="https://facebook.com/LionHeartRidingAcademy/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-lhra-yellow transition-colors">
                    Facebook
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-lhra-yellow text-center font-lexend text-white/60">
              © {new Date().getFullYear()} LionHeart Riding Academy. All rights reserved.
            </div>
          </div>
          <div>
  
</div>
        </footer>
      </body>
    </html>
  );
}
