import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "World's First Homestay Network",
  description: "Experience authentic local living with our global network of homestays",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
          <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl">
              World's First HOMESTAY.Network
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/properties" className="text-gray-600 hover:text-gray-900">
                Find Homestays
              </Link>
              <Link href="/list-property" className="text-gray-600 hover:text-gray-900">
                List Your Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/auth/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/auth/register">
                <Button>Sign Up</Button>
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="pt-16">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-white">
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-it-works" className="text-gray-400 hover:text-white">
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-gray-400 hover:text-white">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Travelers</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/properties" className="text-gray-400 hover:text-white">
                      Find Homestays
                    </Link>
                  </li>
                  <li>
                    <Link href="/universities" className="text-gray-400 hover:text-white">
                      Near Universities
                    </Link>
                  </li>
                  <li>
                    <Link href="/cities" className="text-gray-400 hover:text-white">
                      Popular Cities
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Hosts</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/list-property" className="text-gray-400 hover:text-white">
                      List Your Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/host-guidelines" className="text-gray-400 hover:text-white">
                      Hosting Guidelines
                    </Link>
                  </li>
                  <li>
                    <Link href="/host-support" className="text-gray-400 hover:text-white">
                      Host Support
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/help" className="text-gray-400 hover:text-white">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-white">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-gray-400 hover:text-white">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-gray-400 hover:text-white">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} World's First HOMESTAY.Network. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
